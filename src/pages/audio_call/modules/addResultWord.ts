import {
  createUserWordFull,
  getUserStatistics,
  getUserWordFull,
  updateUserStatistics,
  updateUserWordFull,
} from '../../../core/api';
import {
  IResult,
  IUserWordFull,
  IUserWordsStatistic,
  IWord,
} from '../../../core/types';

export async function addResultWord(
  flag: boolean,
  arrRes: IResult[],
  arrWords: IWord[],
  num: number,
  ) {
  const resultWord: IResult = {
    word: arrWords[num].word,
    result: flag,
    wordTranslate: arrWords[num].wordTranslate,
    audio: arrWords[num].audio,
  };

  if (localStorage.getItem('userToken') && localStorage.getItem('userId')) {
    const updateWordBody: IUserWordFull = {
      difficulty: 'No',
      optional: {
        wordID: '',
        newWord: false,
        progress: {
          right: 0,
          wrong: 0,
        },
        learnedWord: {
          learned: false,
          counter: 0,
        },
      },
    };

    const updateUserStatisticBody: IUserWordsStatistic = {
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

    try {
      const responseWord = await getUserWordFull(localStorage.getItem('userId'), arrWords[num].id, localStorage.getItem('userToken'));

      if (responseWord) {
        const r = await getUserWordFull(localStorage.getItem('userId'), arrWords[num].id, localStorage.getItem('userToken'));
        const s = await getUserStatistics(localStorage.getItem('userId'), localStorage.getItem('userToken'));
        updateWordBody.optional = r.optional;
        updateWordBody.optional.wordID = arrWords[num].id;
        updateUserStatisticBody.optional = s.optional;

      if (flag) {
        updateWordBody.optional.progress.right += 1;
        updateWordBody.optional.learnedWord.counter += 1;

        if (updateWordBody.optional.learnedWord.counter === 3) {
          updateWordBody.optional.learnedWord.learned = true;
          updateWordBody.optional.learnedWord.counter = 0;
        }

        if (updateWordBody.optional.learnedWord.learned) {
          updateUserStatisticBody.learnedWords += 1;
        }

        updateUserStatisticBody.optional.audiocall.allWords += 1;
        updateUserStatisticBody.optional.audiocall.rightWords += 1;
        updateUserStatisticBody.optional.audiocall.set += 1;
      } else {
        updateWordBody.optional.progress.wrong += 1;
        updateWordBody.optional.wordID = arrWords[num].id;

        if (updateWordBody.optional.learnedWord.learned) {
          updateUserStatisticBody.learnedWords -= 1;
          updateWordBody.optional.learnedWord.learned = false;
        }

        updateWordBody.optional.learnedWord.learned = false;
        updateWordBody.optional.learnedWord.counter = 0;
        updateUserStatisticBody.optional.audiocall.allWords += 1;
      }


      await updateUserWordFull(localStorage.getItem('userId'), arrWords[num].id, localStorage.getItem('userToken'), updateWordBody);
      await updateUserStatistics(localStorage.getItem('userId'), localStorage.getItem('userToken'), updateUserStatisticBody);
      }
    } catch (err) {
      if (String(err) === 'Error: Not Found') {
        try {
          const res = await getUserStatistics(localStorage.getItem('userId'), localStorage.getItem('userToken'));
          if (res) {
            updateUserStatisticBody.optional = res.optional;
          }
        } catch (e) {
            console.log(e);
        }

        updateWordBody.optional.newWord = false;
        updateWordBody.optional.wordID = arrWords[num].id;
        updateUserStatisticBody.optional.audiocall.newWords += 1;

        if (flag) {
          updateWordBody.optional.progress.right += 1;
          updateWordBody.optional.learnedWord.counter += 1;

          if (updateWordBody.optional.learnedWord.counter === 3) {
            updateWordBody.optional.learnedWord.learned = true;
            updateWordBody.optional.learnedWord.counter = 0;
          }

          if (updateWordBody.optional.learnedWord.learned) {
            updateUserStatisticBody.learnedWords += 1;
          }

          updateUserStatisticBody.optional.audiocall.allWords += 1;
          updateUserStatisticBody.optional.audiocall.rightWords += 1;
          updateUserStatisticBody.optional.audiocall.set += 1;
        } else {
          updateWordBody.optional.progress.wrong += 1;

          if (updateWordBody.optional.learnedWord.learned) {
            updateUserStatisticBody.learnedWords -= 1;
            updateWordBody.optional.learnedWord.learned = false;
          }

          updateWordBody.optional.learnedWord.learned = false;
          updateWordBody.optional.learnedWord.counter = 0;
          updateUserStatisticBody.optional.audiocall.allWords += 1;
        }

        await createUserWordFull(localStorage.getItem('userId'), arrWords[num].id, localStorage.getItem('userToken'), updateWordBody);
        await updateUserStatistics(localStorage.getItem('userId'), localStorage.getItem('userToken'), updateUserStatisticBody);
      }
    }
  }

  arrRes.push(resultWord);
}


