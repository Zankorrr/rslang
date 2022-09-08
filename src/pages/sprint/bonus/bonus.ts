import { randomWord, arrForStatistics, arrForRes } from '../sprint';
import { addResultWord } from '../stat';

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

  const plusPoints = () => {
    const pointsPlus = document.createElement('div');
    pointsPlus.classList.add('plus-points');
    pointsPlus.innerText = `+${points}`;

    multiplier.after(pointsPlus);

    const removeAnimation = () => {
      pointsPlus.remove();
    };
    setTimeout(removeAnimation, 1000);
  };

  const minusPoints = () => {
    const pointsMinus = document.createElement('div');
    pointsMinus.classList.add('minus-points');
    pointsMinus.innerText = '-10';

    multiplier.after(pointsMinus);

    const removeAnimation = () => {
      pointsMinus.remove();
    };
    setTimeout(removeAnimation, 5000);
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
      plusPoints();
      counter.innerText = `${+counter.innerText + points}`;
      randomWord(difficult);
      addActive();
      addBooleanForStatistics(true);
      addResultWord(
        true,
        arrForRes,
        arrForStatistics,
        arrForStatistics.length - 1,
        );
    } else {
      if (+(counter.innerText) > 0) {
        minusPoints();
        counter.innerText = String(+(counter
          .innerText) - 10);
      }
      randomWord(difficult);
      removeActive();
      removeBonus();
      addBooleanForStatistics(false);
      addResultWord(
        false,
        arrForRes,
        arrForStatistics,
        arrForStatistics.length - 1,
        );
    }
  };

  wrongButton.onclick = () => {
    if (wordId !== answerId) {
      plusPoints();
      counter.innerText = String(+(counter
        .innerText) + points);
      randomWord(difficult);
      addActive();
      addBooleanForStatistics(true);
      addResultWord(
        true,
        arrForRes,
        arrForStatistics,
        arrForStatistics.length - 1,
        );
    } else {
      if (+(counter.innerText) > 0) {
        minusPoints();
        counter.innerText = String(+(counter
          .innerText) - 10);
      }
      randomWord(difficult);
      removeActive();
      removeBonus();
      addBooleanForStatistics(false);
      addResultWord(
        false,
        arrForRes,
        arrForStatistics,
        arrForStatistics.length - 1,
        );
    }
  };

  document.onkeydown = (event) => {
    if (event.code === 'ArrowLeft') {
      if (wordId === answerId) {
        plusPoints();
        counter.innerText = `${+counter.innerText + points}`;
        randomWord(difficult);
        addActive();
        addBooleanForStatistics(true);
      } else {
        if (+(counter.innerText) > 0) {
          minusPoints();
          counter.innerText = String(+(counter
            .innerText) - 10);
        }
        randomWord(difficult);
        removeActive();
        removeBonus();
        addBooleanForStatistics(false);
      }
    }
    if (event.code === 'ArrowRight') {
      if (wordId !== answerId) {
        plusPoints();
        counter.innerText = String(+(counter
          .innerText) + points);
        randomWord(difficult);
        addActive();
        addBooleanForStatistics(true);
      } else {
        if (+(counter.innerText) > 0) {
          minusPoints();
          counter.innerText = String(+(counter
            .innerText) - 10);
        }
        randomWord(difficult);
        removeActive();
        removeBonus();
        addBooleanForStatistics(false);
      }
    }
  };
};

export default pushButtons;
