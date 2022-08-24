import { showStatisticsWindow } from '../statistic/statistic';
import './style.css';

export const timer = () => {
  const loadScreenMask = document.querySelector('.load-screen');
  (loadScreenMask as HTMLElement).style.display = 'none';
  setTimeout(() => {
    showStatisticsWindow();
  }, 3000);
};

export default timer;
