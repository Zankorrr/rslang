export function closeApp() {
  const gameContainer: HTMLElement | null = document.querySelector('.audio-call-game');

  if (gameContainer?.style !== undefined && gameContainer.style !== null) {
    gameContainer.innerHTML = '';
    gameContainer.style.display = 'none';
  }
}
