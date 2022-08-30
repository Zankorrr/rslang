import { addTask } from './addTask';
import { generateResults } from './generateResults';
import { IResult, IWord } from './types';

export function changeTask(count: number, arr: IWord[], arrR: IResult[]) {
  const gameContainer: HTMLElement | null = document.querySelector('.audio-call-game');
  const wordsVariables: NodeListOf<HTMLElement> = document.querySelectorAll('.word-variables');
  const wordImage: HTMLImageElement | null = document.querySelector('.word-image');
  const wordText: HTMLElement | null = document.querySelector('.word-text');

  wordText?.classList.add('no-displayed');

  if (wordImage) {
    wordImage.src = '../assets/img/icon-sound.png';
  }

  wordsVariables.forEach((button) => {
    button.classList.remove('true-answer');
    button.classList.remove('false-answer');
  });

  if (count < 10) {
    return addTask(arr, count);
  }

  if (gameContainer) {
    gameContainer.innerHTML = '';
  }

  return generateResults(arrR);
}
