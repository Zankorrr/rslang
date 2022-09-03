import { IWord, IResult } from './types';
import { renderPage } from './renderPage';
import { closeApp } from './closeApp';
import { renderWordTask } from './renderWordTask';
import { getWordsInSession } from './getWordsInSession';
import { addTask } from './addTask';
import { addResultWord } from './addResultWord';
import { baseUrl } from '../../../core/globalVariables';
import { changeTask } from './changeTask';
// import { pushWordButton } from './pushWordButton';

let pushedButton = false;

export function createApp(words: IWord[]) {
  const gameContainer: HTMLElement | null = document.querySelector('.audio-call-game');
  const wordsInSession: IWord[] = [];
  const results: IResult[] = [];
  let counterIteration = 0;

  if (document.querySelector('.iteration-container') && gameContainer) {
    gameContainer.innerHTML = '';
  }

  renderPage();

  const closeButton = document.querySelector('.close-button');

  closeButton?.addEventListener('click', closeApp);
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      closeApp();
    }
  });

  renderWordTask();

  const wordButton: HTMLButtonElement | null = document.querySelector('.word-button');
  const wordsVariables: NodeListOf<HTMLElement> = document.querySelectorAll('.word-variables');

  getWordsInSession(wordsInSession, words);
  addTask(wordsInSession, counterIteration);

  wordButton?.addEventListener('click', () => {
    counterIteration += 1;
    // pushWordButton(pushedButton, counterIteration, wordsInSession, results);

    wordsVariables?.forEach((button) => {
      button.removeAttribute('disabled');
      pushedButton = false;
    });

    changeTask(counterIteration, wordsInSession, results);
  });


  const wordAudio: HTMLMediaElement | null = document.querySelector('.word-audio');
  const wordText: HTMLElement | null = document.querySelector('.word-text');
  const wordImage: HTMLImageElement | null = document.querySelector('.word-image');


  wordsVariables?.forEach((button) => {
    button.addEventListener('click', () => {
      if (!pushedButton) {
        pushedButton = true;
        wordsVariables?.forEach((item) => {
          item.setAttribute('disabled', 'disabled');
        });
      }

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
