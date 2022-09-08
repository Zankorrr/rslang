import './style.css';

export const noStart = () => {
  const difficultLevelChange = document.getElementById('difficultLevelChange') as HTMLElement;
  const difficultLevelChangeColor = () => {
    difficultLevelChange.style.color = '#fff';
  };
  difficultLevelChange.style.color = 'red';
  setTimeout(difficultLevelChangeColor, 1000);
};

export default noStart;
