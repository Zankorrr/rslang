import { arrForStatistics } from '../sprint';
import html from '../html';
import { start } from '../difficultySelection/difficultySelection';
import { hideElements } from '../../main/index';

export const closeApp = () => {
  const closeButton = document.getElementById('close-app') as HTMLElement;
  const againGame = document.getElementById('again') as HTMLElement;
  const sprintGame = document.querySelector('.sprint-game') as HTMLElement;
  const description = document.querySelector('.description') as HTMLElement;
  const aboutTeam = document.querySelector('.about-team') as HTMLElement;
  const footer = document.querySelector('.footer') as HTMLElement;
  const sprintButton = document.querySelector('.sprint-button') as HTMLButtonElement;
  const closeSprint = document.querySelector('.close-sprint') as HTMLElement;

   const newGame = () => {
    sprintButton.onclick = () => {
      sprintGame.innerHTML = html;
      start();
    };
  };

  closeButton.onclick = () => {
    arrForStatistics.length = 0;
    hideElements();
    description.style.display = 'block';
    aboutTeam.style.display = 'block';
    footer.style.display = 'flex';
    newGame();
  };

  closeSprint.onclick = () => {
    arrForStatistics.length = 0;
    hideElements();
    description.style.display = 'block';
    aboutTeam.style.display = 'block';
    footer.style.display = 'flex';
    newGame();
  };

  againGame.onclick = () => {
    arrForStatistics.length = 0;
    sprintGame.innerHTML = html;
    start();
  };
};

export default closeApp;
