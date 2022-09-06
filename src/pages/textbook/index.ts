import {
  createUserWordFull,
  getUserWordFull,
  getUserWords,
  getWord,
  getWords,
  updateUserWordFull,
} from '../../core/api';
import { authorizedUser, baseUrl } from '../../core/globalVariables';
import { IUserWordFull, IWord } from '../../core/types';
import openApp from '../audio_call/modules/openApp';
import './style.css';

export const textbookVariables = {
  chapter: 0,
  page: 0,
  chaptersAmount: 7,
  pagesAmount: 30,
};

export const textbookColors = ['#fa7b7b', '#fa9c77', '#f9f978', '#7ffb7f', '#8ff3fa', '#77c8fa', '#c07ef9'];

async function getUserWordsIDs(userWords: IUserWordFull[]) {
  const userWordsIDs = userWords.map((el) => el.optional.wordID);
  return userWordsIDs;
}

async function getTrickyIDs(userWords: IUserWordFull[]) {
  const trickyWords = userWords.filter((el) => el.difficulty === 'yes');
  const trickyIDs = trickyWords.map((el) => el.optional.wordID);
  return trickyIDs;
}

async function getLearnedIDs(userWords: IUserWordFull[]) {
  const learnedWords = userWords.filter((el) => el.optional.learnedWord.learned === true);
  const learnedIDs = learnedWords.map((el) => el.optional.wordID);
  return learnedIDs;
}

export async function updateTextbook() {
  const chapterContainer = document.querySelector('.textbook-chapter-container');
  if (chapterContainer) {
    chapterContainer.textContent = '';

    let userWordsIDs: string[] = [];
    let trickyIDs: string[] = [];
    let learnedIDs: string[] = [];
    const trickyChapter = document.querySelector('.tricky') as HTMLButtonElement;
    if (authorizedUser.flag === true) {
      const userWords = await getUserWords();
      userWordsIDs = await getUserWordsIDs(userWords);
      trickyIDs = await getTrickyIDs(userWords);
      learnedIDs = await getLearnedIDs(userWords);
      trickyChapter.style.display = 'inline-block';
    } else {
      trickyChapter.style.display = 'none';
    }

    let data: IWord[] = [];
    const pagination = document.querySelector('.textbook-pagination-container') as HTMLElement;
    if (textbookVariables.chapter === 6) {
      data = await Promise.all(trickyIDs.map((id) => getWord(id)));
      pagination.style.display = 'none';
    } else {
      data = await getWords(textbookVariables.chapter, textbookVariables.page);
      pagination.style.display = 'flex';
    }
    data.forEach(async (word) => {
      const wordContainer = document.createElement('div');
      wordContainer.classList.add('textbook-word-container');

      const wordDescriptionContainer = document.createElement('div');
      wordDescriptionContainer.classList.add('textbook-word-description');

      const wordTextContainer = document.createElement('div');
      wordTextContainer.innerHTML = `${word.word} - ${word.transcription} - ${word.wordTranslate}
      <br><br>${word.textMeaning}<br>${word.textMeaningTranslate}.<br><br>${word.textExample}
      <br>${word.textExampleTranslate}.`;

      const wordButtonsContainer = document.createElement('div');
      wordButtonsContainer.classList.add('textbook-word-buttons');

      const audio1 = document.createElement('audio');
      audio1.src = `${baseUrl}/${word.audio}`;
      const audio2 = document.createElement('audio');
      audio2.src = `${baseUrl}/${word.audioMeaning}`;
      const audio3 = document.createElement('audio');
      audio3.src = `${baseUrl}/${word.audioExample}`;
      const wordPlayButton = document.createElement('button');
      wordPlayButton.innerText = 'Play';
      wordPlayButton.addEventListener('click', () => audio1.play());
      audio1.addEventListener('ended', () => audio2.play());
      audio2.addEventListener('ended', () => audio3.play());

      const wordToTrickyButton = document.createElement('button');
      wordToTrickyButton.innerText = 'Tricky';

      const wordToLearnedButton = document.createElement('button');
      wordToLearnedButton.innerText = 'Learned';

      const body: IUserWordFull = {
        difficulty: '',
        optional: {
          wordID: word.id,
          newWord: true,
          progress: {
            right: 0,
            wrong: 0,
          },
          learnedWord: {
            learned: false,
            counter: 0,
          },
        },
      };

      wordToTrickyButton.addEventListener('click', async () => {
        if (userWordsIDs.includes(word.id)) {
          const oldBody = await getUserWordFull(
            authorizedUser.userId,
            word.id,
            authorizedUser.userToken,
            );
          if (trickyIDs.includes(word.id)) {
            body.difficulty = 'no';
            body.optional = oldBody.optional;
          } else {
            body.difficulty = 'yes';
            body.optional = oldBody.optional;
            body.optional.learnedWord.learned = false;
          }
          await updateUserWordFull(
            authorizedUser.userId,
            word.id,
            authorizedUser.userToken,
            body,
            );
        } else {
          body.difficulty = 'yes';
          await createUserWordFull(
            authorizedUser.userId,
            word.id,
            authorizedUser.userToken,
            body,
            );
        }
        wordContainer.classList.toggle('textbook-tricky-word');
        wordToTrickyButton.classList.toggle('textbook-tricky-word');
      });

      wordToLearnedButton.addEventListener('click', async () => {
        if (userWordsIDs.includes(word.id)) {
          const oldBody = await getUserWordFull(
            authorizedUser.userId,
            word.id,
            authorizedUser.userToken,
            );
          if (learnedIDs.includes(word.id)) {
            body.difficulty = oldBody.difficulty;
            body.optional = oldBody.optional;
            body.optional.learnedWord.learned = false;
          } else {
            body.difficulty = 'no';
            body.optional = oldBody.optional;
            body.optional.learnedWord.learned = true;
          }
          await updateUserWordFull(
            authorizedUser.userId,
            word.id,
            authorizedUser.userToken,
            body,
            );
            if (textbookVariables.chapter === textbookVariables.chaptersAmount - 1) {
              updateTextbook();
            }
        } else {
          body.optional.learnedWord.learned = true;
          await createUserWordFull(
            authorizedUser.userId,
            word.id,
            authorizedUser.userToken,
            body,
            );
        }
        wordContainer.classList.toggle('textbook-learned-word');
        wordToLearnedButton.classList.toggle('textbook-learned-word');
      });

      const mistakesCounter = document.createElement('button');
      mistakesCounter.innerText = 'NEW';
      if (userWordsIDs.includes(word.id)) {
        const progressBody = await getUserWordFull(
          authorizedUser.userId,
          word.id,
          authorizedUser.userToken,
          );
        if (!progressBody.optional.newWord) {
          mistakesCounter.style.borderLeftColor = '#29ce29';
          mistakesCounter.style.borderRightColor = 'red';
          mistakesCounter.innerText = `${progressBody.optional.progress.right} / ${progressBody.optional.progress.wrong}`;
        }
      }

      if (localStorage.getItem('userId')) {
        wordToTrickyButton.style.display = 'block';
        wordToLearnedButton.style.display = 'block';
        mistakesCounter.style.display = 'block';
      } else {
        wordToTrickyButton.style.display = 'none';
        wordToLearnedButton.style.display = 'none';
        mistakesCounter.style.display = 'none';
      }

      if (textbookVariables.chapter !== textbookVariables.chaptersAmount - 1
        && trickyIDs.includes(word.id)) {
        wordContainer.classList.add('textbook-tricky-word');
        wordToTrickyButton.classList.add('textbook-tricky-word');
      }

      if (textbookVariables.chapter !== textbookVariables.chaptersAmount - 1
        && learnedIDs.includes(word.id)) {
        wordContainer.classList.add('textbook-learned-word');
        wordToLearnedButton.classList.add('textbook-learned-word');
      }

      wordButtonsContainer.append(
        wordPlayButton,
        wordToTrickyButton,
        wordToLearnedButton,
        mistakesCounter,
        );
      wordDescriptionContainer.append(wordTextContainer, wordButtonsContainer);

      const wordImageContainer = document.createElement('img');
      wordImageContainer.classList.add('textbook-word-image');
      wordImageContainer.src = `${baseUrl}/${word.image}`;
      wordImageContainer.alt = word.word;
      wordContainer.append(wordDescriptionContainer, wordImageContainer);
      chapterContainer.appendChild(wordContainer);
    });
    const pageNumber = document.querySelector('.page-number') as HTMLElement;
    pageNumber.innerText = (textbookVariables.page + 1).toString();
  }
}

function addTextbookPage() {
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('textbookChapter', textbookVariables.chapter.toString());
    localStorage.setItem('textbookPage', textbookVariables.page.toString());
  });
  const localStorageChapter = localStorage.getItem('textbookChapter');
  if (localStorageChapter) {
    textbookVariables.chapter = +localStorageChapter;
  }
  const localStoragePage = localStorage.getItem('textbookPage');
  if (localStoragePage) {
    textbookVariables.page = +localStoragePage;
  }
  if (localStorage.getItem('userId')) {
    authorizedUser.flag = true;
    authorizedUser.userId = localStorage.getItem('userId') || '';
    authorizedUser.userToken = localStorage.getItem('userToken') || '';
  }

  const textbookPage = document.createElement('div');
  textbookPage.classList.add('textbook-page');

  const navigationContainer = document.createElement('div');
  navigationContainer.classList.add('textbook-navigation-container');

  const exerciseContainer = document.createElement('div');
  exerciseContainer.classList.add('textbook-exercise-container');
  const audioCallLink = document.createElement('button');
  audioCallLink.classList.add('audiocall-from-textbook');
  audioCallLink.innerText = 'Audio call';
  audioCallLink.addEventListener('click', () => {
    openApp('audiocall-from-textbook');
  });
  const sprintLink = document.createElement('button');
  sprintLink.innerText = 'Sprint';
  sprintLink.addEventListener('click', () => (document.querySelector('.sprint-button') as HTMLButtonElement)?.click());
  exerciseContainer.innerText = 'You need more practice: ';
  exerciseContainer.append(audioCallLink, sprintLink);

  const chapterContainer = document.createElement('div');
  chapterContainer.classList.add('textbook-chapter-container');

  for (let i = 0; i < textbookVariables.chaptersAmount; i += 1) {
    const chapterButton = document.createElement('button');
    chapterButton.classList.add('textbook-chapter-button');
    chapterButton.style.backgroundColor = textbookColors[i];
    if (i < textbookVariables.chaptersAmount - 1) {
      chapterButton.innerText = `Chapter ${i + 1}`;
    } else {
      chapterButton.innerText = 'Tricky';
      chapterButton.classList.add('tricky');
      if (localStorage.getItem('userId')) {
        chapterButton.style.display = 'inline-block';
      } else {
        chapterButton.style.display = 'none';
      }
    }
    chapterButton.addEventListener('click', () => {
      const wavesTop = document.querySelector('.bgTop') as HTMLElement;
      const wavesMiddle = document.querySelector('.bgMiddle') as HTMLElement;
      const wavesBottom = document.querySelector('.bgBottom') as HTMLElement;
      const bodyApp = document.body;
      wavesTop.style.transition = 'all 1s linear';
      wavesTop.style.background = textbookColors[i];
      wavesMiddle.style.transition = 'all 1s linear';
      wavesMiddle.style.background = textbookColors[i];
      wavesBottom.style.transition = 'all 1s linear';
      wavesBottom.style.background = textbookColors[i];
      bodyApp.style.transition = 'all 1s linear';
      bodyApp.style.background = textbookColors[i];
      textbookVariables.chapter = i;
      textbookVariables.page = 0;
      updateTextbook();
    });
    navigationContainer.appendChild(chapterButton);
  }

  const pageNumber = document.createElement('div');
  pageNumber.classList.add('page-number');

  const paginationContainer = document.createElement('div');
  paginationContainer.classList.add('textbook-pagination-container');

  const pagePrevious = document.createElement('button');
  pagePrevious.innerText = '<';
  pagePrevious.addEventListener('click', () => {
    if (textbookVariables.page > 0) {
      textbookVariables.page -= 1;
      updateTextbook();
    }
  });
  const pageNext = document.createElement('button');
  pageNext.innerText = '>';
  pageNext.addEventListener('click', () => {
    if (textbookVariables.page < (textbookVariables.pagesAmount - 1)) {
      textbookVariables.page += 1;
      updateTextbook();
    }
  });
  paginationContainer.append(pagePrevious, pageNumber, pageNext);
  textbookPage.append(
    navigationContainer,
    exerciseContainer,
    chapterContainer,
    paginationContainer,
  );
  document.body.appendChild(textbookPage);
  updateTextbook();
}
export default addTextbookPage;
