import { changeTask } from './changeTask';
import { IWord, IResult } from './types';

export function pushWordButton(
pushedButton: boolean,
counterIteration: number,
wordsInSession: IWord[],
results: IResult[],
) {
  const wordsVariables: NodeListOf<HTMLElement> = document.querySelectorAll('.word-variables');

  wordsVariables?.forEach((button) => {
    button.removeAttribute('disabled');
    pushedButton = false;
  });
  changeTask(counterIteration, wordsInSession, results);
}
