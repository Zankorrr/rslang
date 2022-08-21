import './style.css';
import randomWord from '../sprint';
import loadScreen from '../loadScreen/loadScreen';

export const difficultLevel: string[] | null[] = [];
export const start = () => {
  const sprintGame = document.querySelector('.game-wrapper');
  const difficultySelectionPlate = document.querySelector('.difficultySelectionPlate');
  const loadScreenMask = document.querySelector('.load-screen');
  const startButton = document.getElementById('button-start');
  const checkInputs = Array.from(document.getElementsByName('difficultLevel'));
  const difficultArr: number[] | null[] = [];

  (startButton as HTMLElement).onclick = () => {
    checkInputs.forEach((item) => {
      if ((item as HTMLInputElement).checked === true) {
        difficultArr[0] = Number(item.getAttribute('difficultId'));
      }
    });

    (loadScreenMask as HTMLElement).style.display = 'block';
    (sprintGame as HTMLElement).style.display = 'flex';
    (difficultySelectionPlate as HTMLElement).style.display = 'none';

    randomWord(difficultArr[0]);
    loadScreen();
  };
};
