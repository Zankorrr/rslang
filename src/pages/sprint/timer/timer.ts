import { showStatisticsWindow } from '../statistic/statistic';
import './style.css';

export const timer = () => {
  const loadScreenMask = document.querySelector('.load-screen');
  const closeSprint = document.querySelector('.close-sprint') as HTMLElement;

  (loadScreenMask as HTMLElement).style.display = 'none';
  const timerId = setTimeout(() => {
    showStatisticsWindow();
  }, 30000);

  closeSprint.addEventListener('click', () => {
    clearTimeout(timerId);
  });
};

export default timer;
