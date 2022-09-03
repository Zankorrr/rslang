export interface Word {
  id: string,
  group: number,
  page: number,
  word: string,
  image: string,
  audio: string,
  audioMeaning: string,
  audioExample: string,
  textMeaning: string,
  textExample: string,
  transcription: string,
  wordTranslate: string,
  textMeaningTranslate: string,
  textExampleTranslate: string
}

export interface IUserWord {
  id: string,
  difficulty: string,
  wordId: string
}

export interface ItextbookVariables {
  chapter: number,
  page: number,
  chaptersAmount: number,
  pagesAmount: number,
}

export interface IAuthorizedUser {
	flag: boolean,
  userToken: string,
  userId: string,
}

export interface IUserWord {
	difficulty: string,
	optional: IUserWordOptional,
}

interface IUserWordOptional {
  newWord: boolean,
	progress: IUserWordProgress,
  learnedWord: IUserLearnedWord,

}

interface IUserWordProgress {
  right: number,
	wrong: number
}

interface IUserLearnedWord {
  learned: boolean,
	counter: number,
}

export interface IUserWordsStatistic {
		learnedWords: number,
		optional: IUserWordsStatisticOptional,
}

interface IUserWordsStatisticOptional {
	newWords: number,
	percentRight: number,
	set?: number,
}

