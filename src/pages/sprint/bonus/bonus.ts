import randomWord from '../sprint';

export const pushButtons = (difficult: number | null) => {
  const rightButton = document.getElementById('right');
  const wrongButton = document.getElementById('wrong');
  const counter = document.getElementById('pointCounter');
  const wordAsk = document.getElementById('word-ask');
  const wordTranslate = document.getElementById('word-translate');
  const correctness = document.querySelector('.correctness');

  const addActive = () => {
    const factorsArr = Array.from((correctness as HTMLElement).querySelectorAll('.factor'));
    if (factorsArr.every((item) => item.classList.contains('active'))) {
      // eslint-disable-next-line no-console
      console.log(1);
    } else {
      (((correctness as HTMLElement).firstChild as HTMLElement)
        .nextSibling as HTMLElement).classList.add('active');
    }
  };
  addActive();

  const wordId = (wordAsk as HTMLElement).getAttribute('wordId');
  const answerId = (wordTranslate as HTMLElement).getAttribute('wordId');
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

export default pushButtons;
