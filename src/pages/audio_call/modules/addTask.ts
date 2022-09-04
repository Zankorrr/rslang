import { baseUrl } from '../../../core/globalVariables';
import { IWord } from './types';

export function addTask(arr: IWord[], num: number) {
  const wordAudio: HTMLMediaElement | null = document.querySelector('.word-audio');
  const wordText: HTMLElement | null = document.querySelector('.word-text');
  const wordsVariables: NodeListOf<HTMLElement> = document.querySelectorAll('.word-variables');
  const resArr: string[] | undefined = arr[num].variables;

  wordsVariables?.forEach((button, index) => {
    if (resArr) {
      button.innerText = resArr[index];
    }
  });

  if (wordAudio) {
    wordAudio.src = `${baseUrl}/${arr[num].audio}`;
  }

  if (wordText) {
    wordText.innerText = `${arr[num].word}`;
  }
}
