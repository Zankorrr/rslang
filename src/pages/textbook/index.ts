import { getWords } from '../../core/api';
import './style.css';
import openApp from '../audio_call/modules/openApp';
import { ItextbookVariables } from '../../core/types';

export const textbookVariables: ItextbookVariables = {
  chapter: 0,
  page: 0,
};

const baseUrl = 'https://rslang-zankorrr-db.herokuapp.com';

const textbookColors = ['#fa7b7b', '#fa9c77', '#f9f978', '#7ffb7f', '#8ff3fa', '#77c8fa', '#c07ef9'];

async function updateTextbook() {
  const chapterContainer = document.querySelector('.textbook-chapter-container');
  if (chapterContainer) {
    chapterContainer.textContent = '';
    const data = await getWords(textbookVariables.chapter, textbookVariables.page);
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
      wordPlayButton.innerText = '▶️';
      wordPlayButton.addEventListener('click', () => audio1.play());
      audio1.addEventListener('ended', () => audio2.play());
      audio2.addEventListener('ended', () => audio3.play());

      const wordToTrickyButton = document.createElement('button');
      wordToTrickyButton.innerText = '🥲';
      wordToTrickyButton.addEventListener('click', () => {
        wordContainer.classList.toggle('textbook-tricky-word');
        wordToTrickyButton.classList.toggle('textbook-tricky-word');
      });

      const wordToLearnedButton = document.createElement('button');
      wordToLearnedButton.innerText = '😎';
      wordToLearnedButton.addEventListener('click', () => {
        wordContainer.classList.toggle('textbook-learned-word');
        wordToLearnedButton.classList.toggle('textbook-learned-word');
      });

      wordButtonsContainer.append(wordPlayButton, wordToTrickyButton, wordToLearnedButton);

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

  for (let i = 0; i < 7; i += 1) {
    const chapterButton = document.createElement('button');
    chapterButton.classList.add('textbook-chapter-button');
    chapterButton.style.backgroundColor = textbookColors[i];
    if (i < 6) {
      chapterButton.innerText = `Chapter ${i + 1}`;
    } else {
      chapterButton.innerText = 'Tricky';
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
    if (textbookVariables.page < 29) {
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
