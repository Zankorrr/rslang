import {
  createUserWord,
  getUserWords,
  getWord,
  getWords,
  removeUserWord,
} from '../../core/api';
import { IUserWord, Word } from '../../core/types';
import openApp from '../audio_call/modules/openApp';
import './style.css';
import openApp from '../audio_call/modules/openApp';
import { ItextbookVariables } from '../../core/types';

export const textbookVariables: ItextbookVariables = {
  chapter: 0,
  page: 0,
  chaptersAmount: 7,
  pagesAmount: 30,
};

const baseUrl = 'https://rslang-zankorrr-db.herokuapp.com';

const textbookColors = ['#fa7b7b', '#fa9c77', '#f9f978', '#7ffb7f', '#8ff3fa', '#77c8fa', '#c07ef9'];

async function getFilteredIDs(userWords: IUserWord[], difficulty: string) {
  const filteredWords = userWords.filter((el) => el.difficulty === difficulty);
  const filteredIDs = filteredWords.map((el: IUserWord) => el.wordId);
  return filteredIDs;
}

async function updateTextbook() {
  const chapterContainer = document.querySelector('.textbook-chapter-container');
  if (chapterContainer) {
    chapterContainer.textContent = '';

    const userWords = await getUserWords();
    const trickyIDs = await getFilteredIDs(userWords, 'tricky');
    const learnedIDs = await getFilteredIDs(userWords, 'learned');

    let data: Word[] = [];
    if (textbookVariables.chapter === 6) {
      data = await Promise.all(trickyIDs.map((id) => getWord(id)));
    } else {
      data = await getWords(textbookVariables.chapter, textbookVariables.page);
    }
    data.forEach((word) => {
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

      wordToTrickyButton.addEventListener('click', async () => {
        if (trickyIDs.includes(word.id)) {
          await removeUserWord(word.id);
          if (textbookVariables.chapter === 6) {
            updateTextbook();
          }
        } else {
          if (learnedIDs.includes(word.id)) {
            await removeUserWord(word.id);
            wordContainer.classList.toggle('textbook-learned-word');
            wordToLearnedButton.classList.toggle('textbook-learned-word');
          }
          createUserWord(word.id, 'tricky');
        }
        wordContainer.classList.toggle('textbook-tricky-word');
        wordToTrickyButton.classList.toggle('textbook-tricky-word');
      });

      wordToLearnedButton.addEventListener('click', async () => {
        if (learnedIDs.includes(word.id)) {
          removeUserWord(word.id);
        } else {
          if (trickyIDs.includes(word.id)) {
            await removeUserWord(word.id);
            wordContainer.classList.toggle('textbook-tricky-word');
            wordToTrickyButton.classList.toggle('textbook-tricky-word');
            if (textbookVariables.chapter === 6) {
              updateTextbook();
            }
          }
          createUserWord(word.id, 'learned');
        }
        wordContainer.classList.toggle('textbook-learned-word');
        wordToLearnedButton.classList.toggle('textbook-learned-word');
      });

      const mistakesCounter = document.createElement('button');
      mistakesCounter.innerText = '0/0';

      if (localStorage.getItem('userId')) {
        wordToTrickyButton.style.display = 'block';
        wordToLearnedButton.style.display = 'block';
        mistakesCounter.style.display = 'block';
      } else {
        wordToTrickyButton.style.display = 'none';
        wordToLearnedButton.style.display = 'none';
        mistakesCounter.style.display = 'none';
      }

      if (textbookVariables.chapter !== 6 && trickyIDs.includes(word.id)) {
        wordContainer.classList.add('textbook-tricky-word');
        wordToTrickyButton.classList.add('textbook-tricky-word');
      }

      if (textbookVariables.chapter !== 6 && learnedIDs.includes(word.id)) {
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
  const textbookPage = document.createElement('div');
  textbookPage.classList.add('textbook-page');
  textbookPage.style.backgroundColor = textbookColors[textbookVariables.chapter];

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
    if (i < 6) {
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
      textbookPage.style.backgroundColor = textbookColors[i];
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
