import { arrForStatistics } from '../sprint';
import html from '../html';
import { start } from '../difficultySelection/difficultySelection';

export const closeApp = () => {
  const closeButton = document.getElementById('close-app') as HTMLElement;
  const againGame = document.getElementById('again') as HTMLElement;
  const audioCallGame = document.querySelector('.audio-call-game') as HTMLElement;
  const sprintGame = document.querySelector('.sprint-game') as HTMLElement;
  const statisticsPage = document.querySelector('.statistics-page') as HTMLElement;
  const textbookPage = document.querySelector('.textbook-page') as HTMLElement;
  const wordListPage = document.querySelector('.word-list-page') as HTMLElement;
  const description = document.querySelector('.description') as HTMLElement;
  const aboutTeam = document.querySelector('.about-team') as HTMLElement;
  const footer = document.querySelector('.footer') as HTMLElement;
  const sprintButton = document.querySelector('.sprint-button') as HTMLButtonElement;

  function hideElements() {
    const variableElements = [audioCallGame, sprintGame, statisticsPage,
      textbookPage, wordListPage, description, aboutTeam, footer];
    variableElements.forEach((el) => {
      el.style.display = 'none';
    });
  }

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

  againGame.onclick = () => {
    arrForStatistics.length = 0;
    sprintGame.innerHTML = html;
    start();
  };
};

export default closeApp;
