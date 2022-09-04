import { baseUrl } from '../../../core/globalVariables';
import { IWord } from '../../../core/types';

const wordsUrl = `${baseUrl}/words`;

// export async function getWords() {
//   const response = await fetch(wordsUrl);
//   const words = await response.json();
//   return words;
// }

export const getWordsFromPage = async (group: number, page: number): Promise<IWord[]> => (await fetch(`${wordsUrl}?group=${group}&page=${page}`)).json();
