import { baseUrl } from './globalVariables';
import { IUserWord, IWord } from './types';

export const getWords = async (group: number, page: number): Promise<IWord[]> => (await fetch(`${baseUrl}/words?group=${group}&page=${page}`)).json();

export const getWord = async (wordId: string): Promise<IWord> => (await fetch(`${baseUrl}/words/${wordId}`)).json();

export const createUserWord = async (wordId: string, difficulty: string): Promise<void> => {
  const user = localStorage.getItem('userId');
  const token = localStorage.getItem('userToken');
await fetch(`${baseUrl}/users/${user}/words/${wordId}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ difficulty }),
  });
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
