import { getWordsFromPage } from './getWords';

export async function getWordsFromChapter(chapter: number) {
  const result = await Promise.all([
    Promise.resolve(getWordsFromPage(chapter, 0)),
    Promise.resolve(getWordsFromPage(chapter, 1)),
    Promise.resolve(getWordsFromPage(chapter, 2)),
    Promise.resolve(getWordsFromPage(chapter, 3)),
    Promise.resolve(getWordsFromPage(chapter, 4)),
    Promise.resolve(getWordsFromPage(chapter, 5)),
    Promise.resolve(getWordsFromPage(chapter, 6)),
    Promise.resolve(getWordsFromPage(chapter, 7)),
    Promise.resolve(getWordsFromPage(chapter, 8)),
    Promise.resolve(getWordsFromPage(chapter, 9)),
    Promise.resolve(getWordsFromPage(chapter, 10)),
    Promise.resolve(getWordsFromPage(chapter, 11)),
    Promise.resolve(getWordsFromPage(chapter, 12)),
    Promise.resolve(getWordsFromPage(chapter, 13)),
    Promise.resolve(getWordsFromPage(chapter, 14)),
    Promise.resolve(getWordsFromPage(chapter, 15)),
    Promise.resolve(getWordsFromPage(chapter, 16)),
    Promise.resolve(getWordsFromPage(chapter, 17)),
    Promise.resolve(getWordsFromPage(chapter, 18)),
    Promise.resolve(getWordsFromPage(chapter, 19)),
    Promise.resolve(getWordsFromPage(chapter, 20)),
    Promise.resolve(getWordsFromPage(chapter, 21)),
    Promise.resolve(getWordsFromPage(chapter, 22)),
    Promise.resolve(getWordsFromPage(chapter, 23)),
    Promise.resolve(getWordsFromPage(chapter, 24)),
    Promise.resolve(getWordsFromPage(chapter, 25)),
    Promise.resolve(getWordsFromPage(chapter, 26)),
    Promise.resolve(getWordsFromPage(chapter, 27)),
    Promise.resolve(getWordsFromPage(chapter, 28)),
    Promise.resolve(getWordsFromPage(chapter, 29)),
  ]);
  return result;
}
