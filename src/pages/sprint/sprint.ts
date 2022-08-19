const randomInteger = (min: number, max: number) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const randomWord = async (difficult: number | null) => {
  const word = document.getElementById('word');
  const translation = document.getElementById('translation');
  const url = 'https://rslang-zankorrr-db.herokuapp.com/';
  const rightButton = document.getElementById('right');
  const wrongButton = document.getElementById('wrong');
  const counter = document.getElementById('pointCounter');
  const randomPage = randomInteger(0, 29);

  const response = await fetch(`${url}words/?group=${difficult}&page=${randomPage}`, {
    method: 'GET',
  });

  const items = await response.json();

  const randomIntWord = randomInteger(0, 19);
  const randomIntForAnswer = randomInteger(0, 19);

  const answerArr = [];

  answerArr.push(
    { translateWord: items[randomIntWord].wordTranslate, id: items[randomIntWord].id },
    { translateWord: items[randomIntForAnswer].wordTranslate, id: items[randomIntForAnswer].id },
  );

  const randomIntAnswer = randomInteger(0, 1);

  (word as HTMLElement).innerText = items[randomIntWord].word;
  (word as HTMLElement).setAttribute('wordId', `${items[randomIntWord].id}`);
  (translation as HTMLElement).innerText = answerArr[randomIntAnswer].translateWord;
  (translation as HTMLElement).setAttribute('wordId', `${answerArr[randomIntAnswer].id}`);

  const pushButtons = () => {
    const wordId = (word as HTMLElement).getAttribute('wordId');
    const answerId = (translation as HTMLElement).getAttribute('wordId');
    (rightButton as HTMLElement).onclick = () => {
      if (wordId === answerId) {
        (counter as HTMLElement).innerText = String(+((counter as HTMLElement)
          .innerText) + 10);
        randomWord(difficult);
      } else {
        randomWord(difficult);
      }
    };

    (wrongButton as HTMLElement).onclick = () => {
      if (wordId !== answerId) {
        (counter as HTMLElement).innerText = String(+((counter as HTMLElement)
          .innerText) + 10);
        randomWord(difficult);
      } else {
        randomWord(difficult);
      }
    };
  };

  pushButtons();
};

export default randomWord;
