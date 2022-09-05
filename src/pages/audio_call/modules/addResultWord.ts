import { IResult, IWord } from '../../../core/types';

export function addResultWord(flag: boolean, arrRes: IResult[], arrWords: IWord[], num: number) {
  const resultWord: IResult = {
    word: arrWords[num].word,
    result: flag,
    wordTranslate: arrWords[num].wordTranslate,
    audio: arrWords[num].audio,
  };

  arrRes.push(resultWord);
}
