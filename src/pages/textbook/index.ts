import { getWords } from '../../core/api';
import './style.css';

const textbookVariables = {
  chapter: 0,
  page: 0,
};

const textbookColors = ['#fa7b7b', '#fa9c77', '#f9f978', '#7ffb7f', '#8ff3fa', '#77c8fa', '#c07ef9'];

async function updateTextbook() {
  const chapterContainer = document.querySelector('.textbook-chapter-container');
  if (chapterContainer) {
    chapterContainer.innerHTML = '';
    const data = await getWords(textbookVariables.chapter, textbookVariables.page);
    data.forEach((word) => {
      const wordContainer = document.createElement('div');
      wordContainer.classList.add('textbook-word-container');
      wordContainer.innerText = word.word;
      wordContainer.title = `${word.transcription} - ${word.wordTranslate}`;
      chapterContainer.appendChild(wordContainer);
    });
  }
}

function updatePageNumber() {
  const pageNumber = document.querySelector('.page-number') as HTMLElement;
  if (pageNumber) {
    pageNumber.innerText = (textbookVariables.page + 1).toString();
  }
}

function addTextbookPage() {
  const textbookPage = document.createElement('div');
  textbookPage.classList.add('textbook-page');

  const navigationContainer = document.createElement('div');
  navigationContainer.classList.add('textbook-navigation-container');

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
      updatePageNumber();
    });
    navigationContainer.appendChild(chapterButton);
  }

  const pageNumber = document.createElement('button');
  pageNumber.classList.add('page-number');

  const paginationContainer = document.createElement('div');
  paginationContainer.classList.add('textbook-pagination-container');
  const pagePrevious = document.createElement('button');
  pagePrevious.innerText = '<';
  pagePrevious.addEventListener('click', () => {
    if (textbookVariables.page > 0) {
      textbookVariables.page -= 1;
      updateTextbook();
      updatePageNumber();
    }
  });

  const pageNext = document.createElement('button');
  pageNext.innerText = '>';
  pageNext.addEventListener('click', () => {
    if (textbookVariables.page < 29) {
      textbookVariables.page += 1;
      updateTextbook();
      updatePageNumber();
    }
  });
  paginationContainer.append(pagePrevious, pageNumber, pageNext);
  updatePageNumber();
  //   -   -   -   -   -   -   -   -   -   -
  textbookPage.append(navigationContainer, chapterContainer, paginationContainer);
  //   -   -   -   -   -   -   -   -   -   -
  document.body.appendChild(textbookPage);

  updateTextbook();
  updatePageNumber();
}

export default addTextbookPage;
