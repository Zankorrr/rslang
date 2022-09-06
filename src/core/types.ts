export interface IWord {
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
  textExampleTranslate: string,
  variables?: string[]
  boolean?: boolean,
}

export interface IUserWord {
  id: string,
  difficulty: string,
  wordId: string,
}

export interface IAuthorizedUser {
  flag: boolean,
  userToken: string,
  userId: string,
}

export interface IUserWordFull {
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
  wrong: number,
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
  audiocall: IUserWordsStatisticOptionalGames,
	sprint: IUserWordsStatisticOptionalGames,
	textbook: IUserWordsStatisticOptionalTextbook,
}

interface IUserWordsStatisticOptionalGames {
  newWords: number,
  allWords: number,
  rightWords: number,
  set: number,
}

interface IUserWordsStatisticOptionalTextbook {
  newWords: number,
  allWords: number,
  rightWords: number,
}

export interface IResult {
  word: string,
  result: boolean,
  wordTranslate: string,
  audio: string
}

export interface IAnswer {
  translateWord: string,
  id: string
}
