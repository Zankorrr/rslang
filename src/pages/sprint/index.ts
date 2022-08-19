import difficultySelectionHtml, { start } from './difficultySelection/difficultySelection';
import './style.css';

function addSprintGame() {
  const sprintGame = document.createElement('div');
  sprintGame.classList.add('sprint-game');
  sprintGame.innerHTML = difficultySelectionHtml;
  document.body.appendChild(sprintGame);
  start();
}

export default addSprintGame;
