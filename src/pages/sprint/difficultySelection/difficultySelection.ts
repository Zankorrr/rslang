import './style.css';
import randomWord from '../sprint';
import loadScreen from '../loadScreen/loadScreen';
import noStart from '../noStart/noStart';

export const difficultLevel: string[] | null[] = [];
export const start = () => {
  const sprintGameWrapper = document.querySelector('.game-wrapper');
  const difficultySelectionPlate = document.querySelector('.difficultySelectionPlate');
  const loadScreenMask = document.querySelector('.load-screen');
  const startButton = document.getElementById('button-start') as HTMLElement;
  const checkInputs = Array.from(document.getElementsByName('difficultLevel'));
  const difficultArr: number[] | null[] = [];
  const difficultInputs = document.querySelector('.difficult-inputs');
  const difficultInputsArr = Array.from(document.querySelectorAll('.label-diff'));

  (difficultInputs as HTMLElement).onclick = (e) => {
    if ((e.target as HTMLElement).classList.contains('label-diff')) {
      difficultInputsArr.forEach((item) => {
        (item as HTMLElement).classList.remove('label-active');
        (item as HTMLElement).classList.add('label-diff');
      });
      (e.target as HTMLElement).classList.remove('label-diff');
      (e.target as HTMLElement).classList.add('label-active');
    }
  };

  startButton.onclick = (e) => {
    e.preventDefault();
    checkInputs.forEach((item) => {
      if ((item as HTMLInputElement).checked === true) {
        difficultArr[0] = Number(item.getAttribute('difficultId'));
      }
    });
    if (checkInputs.some((item) => (item as HTMLInputElement).checked === true)) {
      (loadScreenMask as HTMLElement).style.display = 'block';
      (sprintGameWrapper as HTMLElement).style.display = 'flex';
      (difficultySelectionPlate as HTMLElement).style.display = 'none';

      randomWord(difficultArr[0]);
      loadScreen();
    } else {
      noStart();
    }
  };
};
