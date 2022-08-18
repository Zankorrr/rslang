import './style.css';

function addAudioCallGame() {
  const audioCallGame = document.createElement('div');
  audioCallGame.classList.add('audio-call-game');
  audioCallGame.innerText = `The Audio Call game:
  Development in progress`;
  //
  // Game code here
  //
  document.body.appendChild(audioCallGame);
}

export default addAudioCallGame;
