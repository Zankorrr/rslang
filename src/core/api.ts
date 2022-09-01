import { IUserWord, Word } from './types';

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

export const createUserWord = async (wordId: string): Promise<void> => {
  const word = { difficulty: 'hard', optional: {} };
  const user = localStorage.getItem('userId');
  const token = localStorage.getItem('userToken');
  const response = await fetch(`${baseUrl}/users/${user}/words/${wordId}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(word),
  });
  console.log(word);
  console.log(user);
  console.log(token);
  const result = await response.json();
  console.log(result);
};

export const getUserWords = async (): Promise<IUserWord[]> => {
  const token = localStorage.getItem('userToken');
  const response = await fetch(`${baseUrl}/users/${localStorage.getItem('userId')}/words`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const result = await response.json();
  console.log(result);
  return result;
};

export const removeUserWord = async (wordId: string): Promise<void> => {
  const token = localStorage.getItem('userToken');
  await fetch(`${baseUrl}/users/${localStorage.getItem('userId')}/words/${wordId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
