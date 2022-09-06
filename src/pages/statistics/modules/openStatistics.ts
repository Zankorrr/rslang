import { getUserStatistics } from '../../../core/api';
import { renderStatistics } from './renderStatistics';

export async function openStatistics() {
  if (localStorage.getItem('userToken') && localStorage.getItem('userId')) {
    const statisticsContainer = document.querySelector('.statistics-page');
    if (statisticsContainer) {
      statisticsContainer.innerHTML = '';
    }

    const result = await getUserStatistics(localStorage.getItem('userId'), localStorage.getItem('userToken'));
    renderStatistics(result);
  }
}
