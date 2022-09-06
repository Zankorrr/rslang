import { IUserWordFull, IUserWordsStatistic } from "../../../core/types";

export const updateWordBody: IUserWordFull = {
	difficulty: '',
	optional: {
    id: '',
		newWord: false,
		progress: {
			right: 0,
			wrong: 0,
		},
		learnedWord: {
			learned: false,
			counter: 0,
		}
	},
};

export const updateUserStatisticBody: IUserWordsStatistic = {
	learnedWords: 0,
	optional: {
		audiocall: {
      newWords: 0,
      allWords: 0,
      rightWords: 0,
      set: 0,
		},
		sprint: {
			newWords: 0,
      allWords: 0,
      rightWords: 0,
      set: 0,
		},
		textbook: {
      newWords: 0,
      allWords: 0,
      rightWords: 0,
		},
	},
};