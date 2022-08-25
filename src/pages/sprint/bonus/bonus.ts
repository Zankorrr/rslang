import { randomWord, arrForStatistics } from '../sprint';

let points = 10;

export const pushButtons = (difficult: number | null) => {
  const rightButton = document.getElementById('right');
  const wrongButton = document.getElementById('wrong');
  const counter = document.getElementById('pointCounter');
  const wordAsk = document.getElementById('word-ask');
  const wordTranslate = document.getElementById('word-translate');
  const correctness = document.querySelector('.correctness');
  const multiplier = document.getElementById('multiplier');
  const factorsArr = Array.from((correctness as HTMLElement).querySelectorAll('.factor'));

  const removeActive = () => {
    factorsArr.forEach((item) => {
      item.classList.remove('active');
    });
  };

  const removeBonus = () => {
    points = 10;
    (multiplier as HTMLElement).innerText = `+${points}`;
  };

  const addActive = () => {
    if (factorsArr.every((item) => item.classList.contains('active'))) {
      removeActive();
    } else if (factorsArr[1].classList.contains('active')) {
      factorsArr[2].classList.add('active');
      points += 10;
      (multiplier as HTMLElement).innerText = `+${points}`;
    } else if (factorsArr[0].classList.contains('active')) {
      factorsArr[1].classList.add('active');
    } else {
      factorsArr[0].classList.add('active');
    }
  };

  const wordId = (wordAsk as HTMLElement).getAttribute('wordId');
  const answerId = (wordTranslate as HTMLElement).getAttribute('wordId');

  const addBooleanForStatistics = (bool: boolean) => {
    arrForStatistics.forEach((item) => {
      if (item.id === wordId) {
        item.boolean = bool;
      }
    });
  };

  (rightButton as HTMLElement).onclick = () => {
    if (wordId === answerId) {
      (counter as HTMLElement).innerText = String(+((counter as HTMLElement)
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

  (wrongButton as HTMLElement).onclick = () => {
    if (wordId !== answerId) {
      (counter as HTMLElement).innerText = String(+((counter as HTMLElement)
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
