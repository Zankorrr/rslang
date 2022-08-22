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
	textExampleTranslate: string,
	textMeaningTranslate: string,
	wordTranslate: string,
	variables?: string[]
}

export interface IResult {
	word: string,
	result: boolean,
	wordTranslate: string,
	audio: string
}