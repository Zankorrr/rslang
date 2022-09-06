import { IUserWordsStatistic } from '../../../core/types';

export function renderStatistics(arr: IUserWordsStatistic) {
  const statisticsContainer = document.querySelector('.statistics-page');
  const html = `<div class="statistics-audiocall-container">
                  <h2 class="statistics-audiocall-title">Audiocall</h2>
                  <ul class="statistics-audiocall">
                    <li class="statistics-audiocall-item">New words: ${arr.optional.audiocall.newWords}</li>
                    <li class="statistics-audiocall-item">Right answers percent: ${arr.optional.audiocall.rightWords / arr.optional.audiocall.allWords * 100}%</li>
                    <li class="statistics-audiocall-item">The longest set of right answers: ${arr.optional.audiocall.set}</li>
                  </ul>
                </div>
                <div class="statistics-sprint-container">
                  <h2 class="statistics-sprint-title">Sprint</h2>
                  <ul class="statistics-sprint">
                    <li class="statistics-sprint-item">New words: ${arr.optional.sprint.newWords}</li>
                    <li class="statistics-sprint-item">Right answers percent: ${arr.optional.sprint.rightWords / arr.optional.sprint.allWords * 100}%</li>
                    <li class="statistics-sprint-item">The longest set of right answers: ${arr.optional.sprint.set}</li>
                  </ul>
                </div>
                <div class="statistics-textbook-container">
                  <h2 class="statistics-textbook-title">Words</h2>
                  <ul class="statistics-textbook">
                    <li class="statistics-textbook-item">New words: ${arr.optional.audiocall.newWords + arr.optional.sprint.newWords}</li>
                    <li class="statistics-textbook-item">Learned words: ${arr.learnedWords}</li>
                    <li class="statistics-textbook-item">Right answers percent: ${((arr.optional.audiocall.rightWords + arr.optional.sprint.rightWords) / 2) / ((arr.optional.audiocall.allWords + arr.optional.sprint.allWords) / 2) * 100}%</li>
                  </ul>
                </div>`;
  statisticsContainer?.insertAdjacentHTML('beforeend', html);
}
