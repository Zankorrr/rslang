import { randomWord, arrForStatistics } from '../sprint';

let points = 10;

export const pushButtons = (difficult: number | null) => {
  const rightButton = document.getElementById('right') as HTMLElement;
  const wrongButton = document.getElementById('wrong') as HTMLElement;
  const counter = document.getElementById('pointCounter') as HTMLElement;
  const wordAsk = document.getElementById('word-ask') as HTMLElement;
  const wordTranslate = document.getElementById('word-translate') as HTMLElement;
  const correctness = document.querySelector('.correctness') as HTMLElement;
  const multiplier = document.getElementById('multiplier') as HTMLElement;
  const factorsArr = Array.from(correctness.querySelectorAll('.factor'));

  const removeActive = () => {
    factorsArr.forEach((item) => {
      item.classList.remove('active');
    });
  };

  const removeBonus = () => {
    points = 10;
    multiplier.innerText = `+${points}`;
  };

  const addActive = () => {
    if (factorsArr.every((item) => item.classList.contains('active'))) {
      removeActive();
    } else if (factorsArr[1].classList.contains('active')) {
      factorsArr[2].classList.add('active');
      points += 10;
      multiplier.innerText = `+${points}`;
    } else if (factorsArr[0].classList.contains('active')) {
      factorsArr[1].classList.add('active');
    } else {
      factorsArr[0].classList.add('active');
    }
  };

  const wordId = wordAsk.getAttribute('wordId');
  const answerId = wordTranslate.getAttribute('wordId');

  const addBooleanForStatistics = (bool: boolean) => {
    arrForStatistics.forEach((item) => {
      if (item.id === wordId) {
        item.boolean = bool;
      }
    });
  };

  rightButton.onclick = () => {
    if (wordId === answerId) {
      counter.innerText = String(+(counter
        .innerText) + points);
      randomWord(difficult);
      addActive();
      addBooleanForStatistics(true);
    } else {
      randomWord(difficult);
      removeActive();
      removeBonus();
      addBooleanForStatistics(false);
    }
  };

  wrongButton.onclick = () => {
    if (wordId !== answerId) {
      counter.innerText = String(+(counter
        .innerText) + points);
      randomWord(difficult);
      addActive();
      addBooleanForStatistics(true);
    } else {
      randomWord(difficult);
      removeActive();
      removeBonus();
      addBooleanForStatistics(false);
    }
  };
};

export default pushButtons;
