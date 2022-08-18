import { Word } from './types';

const baseUrl = 'https://rslang-zankorrr-db.herokuapp.com';
const wordsUrl = `${baseUrl}/words`;

export const getWords = async (group: number, page: number): Promise<Word[]> => (await fetch(`${wordsUrl}?group=${group}&page=${page}`)).json();
// const example = async () => {
//   const item = await getWords(2, 1);
//   const p = document.createElement('p');
//   p.innerText = `Answer is ${item[0].word}`;
//   document.body.appendChild(p);
// };

export const getWord = async (wordId: string): Promise<Word> => (await fetch(`${wordsUrl}/${wordId}`)).json();
// const example = async () => {
//   const item = await getWord('5e9f5ee35eb9e72bc21af4a0');
//   const p = document.createElement('p');
//   p.innerText = `Answer is ${item.word}`;
//   document.body.appendChild(p);
// };
