import { IUserWordsStatistic } from '../../../core/types';

export function renderStatistics(arr: IUserWordsStatistic) {
  const statisticsContainer = document.querySelector('.statistics-page');
  const html = `<div class="statistics-audiocall-container">
                  <h2 class="statistics-audiocall-title">Audiocall</h2>
                  <ul class="statistics-audiocall">
                    <li class="statistics-audiocall-item">New words: ${arr.optional.audiocall.newWords}</li>
                    <li class="statistics-audiocall-item">Right answers percent: ${arr.optional.audiocall.rightWords / arr.optional.audiocall.allWords}%</li>
                    <li class="statistics-audiocall-item">The longest set of right answers: ${arr.optional.audiocall.set}</li>
                  </ul>
                </div>
                <div class="statistics-sprint-container">
                  <h2 class="statistics-sprint-title">Sprint</h2>
                  <ul class="statistics-sprint">
                    <li class="statistics-sprint-item">New words: ${arr.optional.sprint.newWords}</li>
                    <li class="statistics-sprint-item">Right answers percent: ${arr.optional.sprint.rightWords / arr.optional.sprint.allWords}%</li>
                    <li class="statistics-sprint-item">The longest set of right answers: ${arr.optional.sprint.set}</li>
                  </ul>
                </div>
                <div class="statistics-textbook-container">
                  <h2 class="statistics-textbook-title">Textbook</h2>
                  <ul class="statistics-textbook">
                    <li class="statistics-textbook-item">New words: ${arr.optional.textbook.newWords}</li>
                    <li class="statistics-textbook-item">Learned words: ${arr.learnedWords}</li>
                    <li class="statistics-textbook-item">Right answers percent: ${arr.optional.textbook.rightWords / arr.optional.textbook.allWords}%</li>
                  </ul>
                </div>`;
  statisticsContainer?.insertAdjacentHTML('beforeend', html);
}
