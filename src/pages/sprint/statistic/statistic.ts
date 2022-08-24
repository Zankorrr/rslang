import './style.css';
import { arrForStatistics } from '../sprint';

export const showStatisticsWindow = () => {
  const statisticsWindow = document.getElementById('statistics-wrapper');
  const right = document.getElementById('stat-right');
  const wrong = document.getElementById('stat-wrong');
  const x = document.getElementById('x');
 
  (x as HTMLElement).onclick = () => {
    (statisticsWindow as HTMLElement).style.display = 'none';
    alert('закрываем статистику. добавить возможность играть еще')
  }

  let statTrueHtml = '';
  let statFalseHtml = '';
  arrForStatistics.forEach((item) => {
    if (item.boolean === true) {
        statTrueHtml += `<div><p>${item.word}</p> <p>${item.transcription}</p> <p>${item.wordTranslate}</p></div>`;
    } else if (item.boolean === false) {
        statFalseHtml += `<div><p>${item.word}</p> <p>${item.transcription}</p> <p>${item.wordTranslate}</p></div>`;
    }
  });
  // eslint-disable-next-line no-console
  (statisticsWindow as HTMLElement).style.display = 'flex';
  (right as HTMLElement).innerHTML = `
    ${statTrueHtml}
  `;
  (wrong as HTMLElement).innerHTML = `
    ${statFalseHtml}
  `;
};

export default showStatisticsWindow;
