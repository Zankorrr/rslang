import { baseUrl } from './globalVariables';
import { IUserWordFull, IUserWordsStatistic, IWord } from './types';
// import {
//   IUserWord, IUserWordFull, IUserWordsStatistic, IWord,
// } from './types';

export const getWords = async (group: number, page: number): Promise<IWord[]> => (await fetch(`${baseUrl}/words?group=${group}&page=${page}`)).json();

export const getWord = async (wordId: string): Promise<IWord> => (await fetch(`${baseUrl}/words/${wordId}`)).json();

export const createUserWord = async (
  userId: string,
  wordId: string,
  token: string,
  wordBody: IUserWordFull,
  ): Promise<void> => {
  await fetch(`${baseUrl}/users/${userId}/words/${wordId}`, {
// export const createUserWord = async (wordId: string, difficulty: string): Promise<void> => {
//   const user = localStorage.getItem('userId');
//   const token = localStorage.getItem('userToken');
// await fetch(`${baseUrl}/users/${user}/words/${wordId}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(wordBody),
  });
};

export const getUserWords = async (): Promise<IUserWordFull[]> => {
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

export async function getUserWordFull(
  userId: string | null,
  wordId: string,
  token: string | null,
) {
  const response = await fetch(`${baseUrl}/users/${userId}/words/${wordId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const result = await response.json();
  return result;
}

export async function createUserWordFull(
  userId: string | null,
  wordId: string,
  token: string | null,
  wordBody: IUserWordFull,
 ): Promise<void> {
//   await fetch(`${baseUrl}/users/${userId}/words/${wordId}`, {
//     method: 'PUT',
  const response = await fetch(`${baseUrl}/users/${userId}/words/${wordId}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(wordBody),
  });
}

export async function updateUserWordFull(
  userId: string | null,
  wordId: string,
  token: string | null,
  wordBody: IUserWordFull,
 ): Promise<void> {
  await fetch(`${baseUrl}/users/${userId}/words/${wordId}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(wordBody),
  });
}

export async function getUserStatistics(
  userId: string | null,
  token: string | null,
): Promise<IUserWordsStatistic> {
  const response = await fetch(`${baseUrl}/users/${userId}/statistics`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const result = await response.json();
  return result;
}

export async function updateUserStatistics(
  userId: string | null,
  token: string | null,
  statisticBody: IUserWordsStatistic,
 ): Promise<void> {
  await fetch(`${baseUrl}/users/${userId}/statistics`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(statisticBody),
  });
}
