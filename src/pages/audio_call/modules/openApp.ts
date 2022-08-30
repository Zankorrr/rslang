import { getWords } from './getWords';
import { IResult, IWord } from './types';
import { renderPage } from './renderPage';
import { renderWordTask } from './renderWordTask';
import { getWordsInSession } from './getWordsInSession';
import { closeApp } from './closeApp';
import { addTask } from './addTask';
import { changeTask } from './changeTask';
import { addResultWord } from './addResultWord';

const baseUrl = 'https://rslang-zankorrr-db.herokuapp.com';

export async function openApp() {
  const words = await getWords();
  if (words) {
    const wordsInSession: IWord[] = [];
    const results: IResult[] = [];
    let counterIteration = 0;

    renderPage();
    closeApp();
    renderWordTask();
    getWordsInSession(wordsInSession, words);
    addTask(wordsInSession, counterIteration);

    const changeButton = document.querySelector('.word-button');
    changeButton?.addEventListener('click', () => {
      counterIteration += 1;
      changeTask(counterIteration, wordsInSession, results);
    });

    const wordsVariables: NodeListOf<HTMLElement> = document.querySelectorAll('.word-variables');
    const wordAudio: HTMLMediaElement | null = document.querySelector('.word-audio');
    const wordText: HTMLElement | null = document.querySelector('.word-text');
    const wordImage: HTMLImageElement | null = document.querySelector('.word-image');
    const wordButton: HTMLButtonElement | null = document.querySelector('.word-button');

    wordsVariables?.forEach((button) => {
      button.addEventListener('click', () => {
        if (button.innerText === wordText?.innerText) {
          button.classList.add('true-answer');
          addResultWord(true, results, wordsInSession, counterIteration);
        } else {
          button.classList.add('false-answer');
          addResultWord(false, results, wordsInSession, counterIteration);
        }

        if (wordImage) {
          wordImage.src = `${baseUrl}/${wordsInSession[counterIteration].image}`;
        }

        wordText?.classList.remove('no-displayed');

        if (wordButton?.innerText) {
          wordButton.innerText = 'Next';
        }
        wordAudio?.play();
      });
    });
  }
}

export default openApp;
