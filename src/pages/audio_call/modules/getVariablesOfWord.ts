import { IWord } from '../../../core/types';
import { getRandomNumber } from './getRandomNumber';

export function getVariablesOfWord(word: IWord, data: IWord[]) {
  const result: string[] = [];

  for (let i = 0; i < 5; i += 1) {
    let index = getRandomNumber(0, data.length - 1);
    while (result.includes(data[index].word)) {
      index = getRandomNumber(0, data.length - 1);
    }
    result.push(data[index].word);
  }

  if (!result.includes(word.word)) {
    const swap = getRandomNumber(0, 4);
    result[swap] = word.word;
  }

  return result;
}
