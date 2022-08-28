import './style.css';
import randomWord from '../sprint';
import loadScreen from '../loadScreen/loadScreen';
import noStart from '../noStart/noStart';

export const difficultLevel: string[] | null[] = [];
export const start = () => {
  const sprintGameWrapper = document.querySelector('.game-wrapper') as HTMLElement;
  const difficultySelectionPlate = document.querySelector('.difficultySelectionPlate') as HTMLElement;
  const loadScreenMask = document.querySelector('.load-screen') as HTMLElement;
  const startButton = document.getElementById('button-start') as HTMLElement;
  const checkInputs = Array.from(document.getElementsByName('difficultLevel'));
  const difficultArr: number[] | null[] = [];
  const difficultInputs = document.querySelector('.difficult-inputs') as HTMLElement;
  const difficultInputsArr = Array.from(document.querySelectorAll('.label-diff'));

  difficultInputs.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).classList.contains('label-diff')) {
      difficultInputsArr.forEach((item) => {
        item.classList.remove('label-active');
        item.classList.add('label-diff');
      });
      (e.target as HTMLElement).classList.remove('label-diff');
      (e.target as HTMLElement).classList.add('label-active');
    }
  });

  startButton.addEventListener('click', () => {
    checkInputs.forEach((item) => {
      if ((item as HTMLInputElement).checked === true) {
        difficultArr[0] = Number(item.dataset.difficult);
      }
    });
    if (checkInputs.some((item) => (item as HTMLInputElement).checked === true)) {
      loadScreenMask.style.display = 'block';
      sprintGameWrapper.style.display = 'flex';
      difficultySelectionPlate.style.display = 'none';

      randomWord(difficultArr[0]);
      loadScreen();
    } else {
      noStart();
    }
  });
};
