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

export interface ItextbookVariables {
  chapter: number,
  page: number
}

export interface IAuthorizedUser {
	flag: boolean,
  userToken: string,
  userId: string,
}
