import { Word } from '../../../core/types';

const baseUrl = 'https://rslang-zankorrr-db.herokuapp.com';
const wordsUrl = `${baseUrl}/words`;

// export async function getWords() {
//   const response = await fetch(wordsUrl);
//   const words = await response.json();
//   return words;
// }

export const getWordsFromPage = async (group: number, page: number): Promise<Word[]> => (await fetch(`${wordsUrl}?group=${group}&page=${page}`)).json();
