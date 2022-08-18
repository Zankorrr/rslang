import html from './html';
import './style.css';

function addSprintGame() {
  const sprintGame = document.createElement('div');
  sprintGame.classList.add('sprint-game');
  sprintGame.innerHTML = html;
  document.body.appendChild(sprintGame);
}

export default addSprintGame;
