import './style.css';

export const timer = () => {
  const loadScreenMask = document.querySelector('.load-screen');
  (loadScreenMask as HTMLElement).style.display = 'none';
  setTimeout(() => {
    // eslint-disable-next-line no-alert
    alert('показываем статистику за последнюю игру');
  }, 30000);
};

export default timer;
