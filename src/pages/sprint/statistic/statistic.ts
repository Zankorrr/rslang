import './style.css';
import { arrForStatistics } from '../sprint';
import closeApp from './closeAgainApp';

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
      statTrueHtml += `<div><p>${item.word}</p> <p>${item.transcription}</p> <p>${item.wordTranslate}</p></div>`;
    } else if (item.boolean === false) {
      statFalseHtml += `<div><p>${item.word}</p> <p>${item.transcription}</p> <p>${item.wordTranslate}</p></div>`;
    }
  });
  statisticsWindow.style.display = 'flex';
  right.innerHTML = `
    ${statTrueHtml}
  `;
  wrong.innerHTML = `
    ${statFalseHtml}
  `;
  closeApp();
};

export default showStatisticsWindow;
