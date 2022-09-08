import { IWord } from '../../../core/types';
import { getRandomNumber } from './getRandomNumber';
import { getVariablesOfWord } from './getVariablesOfWord';

export function getWordsInSession(arr: IWord[], data: IWord[]) {
  for (let i = 0; i < 10; i += 1) {
    let wordIndex = getRandomNumber(0, data.length - 1);
    while (arr.includes(data[wordIndex])) {
      wordIndex = getRandomNumber(0, data.length - 1);
    }
    data[wordIndex].variables = getVariablesOfWord(data[wordIndex], data);
    arr.push(data[wordIndex]);
  }
}
