import { getWords } from '../../core/api';
import './style.css';

const baseUrl = 'https://rslang-zankorrr-db.herokuapp.com';

function addTextbookPage() {
  const textbookVariables = {
    chapter: 0,
    page: 0,
  };
  const textbookPage = document.createElement('div');
  textbookPage.classList.add('textbook-page');
  //   -   -   -   -   -   -   -   -   -   -
  const navigationContainer = document.createElement('div');
  navigationContainer.classList.add('textbook-navigation-container');
  const chapter1Button = document.createElement('button');
  chapter1Button.innerText = 'Chapter 1';
  const chapter2Button = document.createElement('button');
  chapter2Button.innerText = 'Chapter 2';
  const chapter3Button = document.createElement('button');
  chapter3Button.innerText = 'Chapter 3';
  const chapter4Button = document.createElement('button');
  chapter4Button.innerText = 'Chapter 4';
  const chapter5Button = document.createElement('button');
  chapter5Button.innerText = 'Chapter 5';
  const chapter6Button = document.createElement('button');
  chapter6Button.innerText = 'Chapter 6';
  const trickyWordsButton = document.createElement('button');
  trickyWordsButton.innerText = 'Tricky';
  navigationContainer.append(
    chapter1Button,
    chapter2Button,
    chapter3Button,
    chapter4Button,
    chapter5Button,
    chapter6Button,
    trickyWordsButton,
  );
  //   -   -   -   -   -   -   -   -   -   -
  const chapterContainer = document.createElement('div');
  chapterContainer.classList.add('textbook-chapter-container');
  async function updateTextbook() {
    chapterContainer.innerHTML = '';
    const data = await getWords(textbookVariables.chapter, textbookVariables.page);
    data.forEach((word) => {
      const wordContainer = document.createElement('div');
      wordContainer.classList.add('textbook-word-container');
      const wordTextContainer = document.createElement('div');
      wordTextContainer.classList.add('textbook-word-text');
      wordTextContainer.innerText = `${word.word} - ${word.transcription} - ${word.wordTranslate}\n\n${word.textMeaning}\n${word.textMeaningTranslate}\n\n${word.textExample}\n${word.textExampleTranslate}`;
      const wordImageContainer = document.createElement('img');
      wordImageContainer.classList.add('textbook-word-image');
      wordImageContainer.src = `${baseUrl}/${word.image}`;
      wordImageContainer.alt = word.word;
      wordContainer.append(wordTextContainer, wordImageContainer);
      chapterContainer.appendChild(wordContainer);
    });
  }
  updateTextbook();
  chapter1Button.addEventListener('click', () => {
    textbookVariables.chapter = 0;
    updateTextbook();
  });
  chapter2Button.addEventListener('click', () => {
    textbookVariables.chapter = 1;
    updateTextbook();
  });
  chapter3Button.addEventListener('click', () => {
    textbookVariables.chapter = 2;
    updateTextbook();
  });
  chapter4Button.addEventListener('click', () => {
    textbookVariables.chapter = 3;
    updateTextbook();
  });
  chapter5Button.addEventListener('click', () => {
    textbookVariables.chapter = 4;
    updateTextbook();
  });
  chapter6Button.addEventListener('click', () => {
    textbookVariables.chapter = 5;
    updateTextbook();
  });
  trickyWordsButton.addEventListener('click', () => {
    textbookVariables.chapter = 6;
    updateTextbook();
  });
  //   -   -   -   -   -   -   -   -   -   -
  const paginationContainer = document.createElement('div');
  paginationContainer.classList.add('textbook-pagination-container');
  const pageOne = document.createElement('button');
  pageOne.innerText = 'page 1';
  paginationContainer.append(pageOne);
  //   -   -   -   -   -   -   -   -   -   -
  textbookPage.append(navigationContainer, chapterContainer, paginationContainer);
  //   -   -   -   -   -   -   -   -   -   -
  document.body.appendChild(textbookPage);
}

export default addTextbookPage;
