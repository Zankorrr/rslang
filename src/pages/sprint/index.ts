import './style.css';

function addSprintGame() {
  const sprintGame = document.createElement('div');
  sprintGame.classList.add('sprint-game');
  sprintGame.innerText = `The Sprint game:
  Development in progress`;
  //
  // Game code here
  //
  document.body.appendChild(sprintGame);
}

export default addSprintGame;
