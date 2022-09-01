import { IResult, IWord } from './types';
import { addResultWord } from './addResultWord';

const baseUrl = 'https://rslang-zankorrr-db.herokuapp.com';
let pushedButton = false;

export function changeVariable(arr: IWord[], arrR: IResult[], num: number) {
  const wordsVariables: NodeListOf<HTMLElement> = document.querySelectorAll('.word-variables');
  const wordAudio: HTMLMediaElement | null = document.querySelector('.word-audio');
  const wordText: HTMLElement | null = document.querySelector('.word-text');
  const wordImage: HTMLImageElement | null = document.querySelector('.word-image');
  const wordButton: HTMLButtonElement | null = document.querySelector('.word-button');


  wordsVariables?.forEach((button) => {
    button.addEventListener('click', () => {

			if (!pushedButton) {
				pushedButton = true;
				wordsVariables.forEach((item) => {
					item.setAttribute('disabled', 'disabled');
				});
			}

      if (button.innerText === wordText?.innerText) {
        button.classList.add('true-answer');
        addResultWord(true, arrR, arr, num);
      } else {
        button.classList.add('false-answer');
        addResultWord(false, arrR, arr, num);
      }

      if (wordImage) {
        wordImage.src = `${baseUrl}/${arr[num].image}`;
      }

      wordText?.classList.remove('no-displayed');

      if (wordButton?.innerText) {
        wordButton.innerText = 'Next';
      }

      wordAudio?.play();
    });
	});
}