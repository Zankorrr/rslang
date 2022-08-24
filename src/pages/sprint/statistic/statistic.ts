import './style.css';
import { arrForStatistics } from '../sprint';
import closeApp from './closeAgainApp';

export const showStatisticsWindow = () => {
  const statisticsWindow = document.getElementById('statistics-wrapper');
  const right = document.getElementById('stat-right');
  const wrong = document.getElementById('stat-wrong');

  let statTrueHtml = '';
  let statFalseHtml = '';
  arrForStatistics.forEach((item) => {
    if (item.boolean === true) {
      statTrueHtml += `<div><p>${item.word}</p> <p>${item.transcription}</p> <p>${item.wordTranslate}</p></div>`;
    } else if (item.boolean === false) {
      statFalseHtml += `<div><p>${item.word}</p> <p>${item.transcription}</p> <p>${item.wordTranslate}</p></div>`;
    }
  });
  (statisticsWindow as HTMLElement).style.display = 'flex';
  (right as HTMLElement).innerHTML = `
    ${statTrueHtml}
  `;
  (wrong as HTMLElement).innerHTML = `
    ${statFalseHtml}
  `;
  closeApp();
};

export default showStatisticsWindow;
