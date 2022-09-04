import './style.css';
import { arrForStatistics } from '../sprint';
import { closeApp } from './closeAgainApp';

const baseUrl = 'https://rslang-zankorrr-db.herokuapp.com';

export const showStatisticsWindow = () => {
  const statisticsWindow = document.getElementById('statistics-wrapper') as HTMLElement;
  const right = document.getElementById('stat-right') as HTMLElement;
  const wrong = document.getElementById('stat-wrong') as HTMLElement;
  const result = document.getElementById('total-result') as HTMLElement;
  const counter = document.getElementById('pointCounter') as HTMLElement;

  result.innerText = `Your score is ${counter.innerText} points`;

  let statTrueHtml = '';
  let statFalseHtml = '';
  arrForStatistics.forEach((item) => {
    if (item.boolean === true) {
      statTrueHtml += `
        <div class="right-answer">
          <button class="word-audio-button">
            <img src="../assets/img/icon-sound.png" alt="word-result-image" class="word-result-image">
          </button>
          <audio src="${baseUrl}/${item.audio}" class="word-audio"></audio>
          <span>${item.word}</span> <span>${item.transcription}</span> <span>${item.wordTranslate}</span>
          </div>
        `;
    } else if (item.boolean === false) {
      statFalseHtml += `
        <div class="wrong-answer">
          <button class="word-audio-button">
            <img src="../assets/img/icon-sound.png" alt="word-result-image" class="word-result-image">
          </button><audio src="${baseUrl}/${item.audio}" class="word-audio">
          </audio>
          <span>${item.word}</span> <span>${item.transcription}</span> <span>${item.wordTranslate}</span>
          </div>
        `;
    }
  });

  statisticsWindow.style.display = 'flex';
  right.innerHTML = `
    ${statTrueHtml}
  `;
  wrong.innerHTML = `
    ${statFalseHtml}
  `;

  const wordAudios: NodeListOf<HTMLMediaElement> = document.querySelectorAll('.word-audio');
  const audioButtons = document.querySelectorAll('.word-audio-button');

  audioButtons.forEach((button, index) => {
    button?.addEventListener('click', () => {
      console.log(index);
      wordAudios[index].play();
    });
  });

  closeApp();
};

export default showStatisticsWindow;
