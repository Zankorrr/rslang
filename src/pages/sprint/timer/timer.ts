import './style.css';

export const timer = () => {
  setTimeout(() => {
    // eslint-disable-next-line no-alert
    alert('показываем статистику за последнюю игру');
  }, 30000);
};

export default timer;
