import pushButtons from './bonus/bonus';
import { IAnswer } from './intefaces';

const randomInteger = (min: number, max: number) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const randomWord = async (difficult: number | null) => {
  const wordAsk = document.getElementById('word-ask');
  const wordTranslate = document.getElementById('word-translate');
  const url = 'https://rslang-zankorrr-db.herokuapp.com/';
  const randomPage = randomInteger(0, 29);

  const response = await fetch(`${url}words/?group=${difficult}&page=${randomPage}`, {
    method: 'GET',
  });

  const items = await response.json();

  const randomIntWord = randomInteger(0, 19);
  const randomIntForAnswer = randomInteger(0, 19);

  const answerArr: IAnswer[] = [];

  answerArr.push(
    { translateWord: items[randomIntWord].wordTranslate, id: items[randomIntWord].id },
    { translateWord: items[randomIntForAnswer].wordTranslate, id: items[randomIntForAnswer].id },
  );

  const randomIntAnswer = randomInteger(0, 1);

  (wordAsk as HTMLElement).innerText = items[randomIntWord].word;
  (wordAsk as HTMLElement).setAttribute('wordId', `${items[randomIntWord].id}`);
  (wordTranslate as HTMLElement).innerText = answerArr[randomIntAnswer].translateWord;
  (wordTranslate as HTMLElement).setAttribute('wordId', `${answerArr[randomIntAnswer].id}`);

  pushButtons(difficult);
};

export default randomWord;
