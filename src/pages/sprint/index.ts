import html from './html';
import randomWord from './sprint';
import './style.css';
import timer from './timer';

function addSprintGame() {
  const sprintGame = document.createElement('div');
  sprintGame.classList.add('sprint-game');
  sprintGame.innerHTML = html;
  document.body.appendChild(sprintGame);
  randomWord();
  timer();
}

export default addSprintGame;
