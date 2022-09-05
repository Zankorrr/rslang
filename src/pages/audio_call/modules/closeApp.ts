import { hideElements } from '../../main/index';

export function closeApp() {
  const gameContainer: HTMLElement | null = document.querySelector('.audio-call-game');
  const description = document.querySelector('.description') as HTMLElement;
  const aboutTeam = document.querySelector('.about-team') as HTMLElement;
  const footer = document.querySelector('.footer') as HTMLElement;

  if (gameContainer?.style !== undefined && gameContainer.style !== null) {
    gameContainer.innerHTML = '';
    gameContainer.style.display = 'none';
    hideElements();
    description.style.display = 'block';
    aboutTeam.style.display = 'block';
    footer.style.display = 'flex';
  }
}
