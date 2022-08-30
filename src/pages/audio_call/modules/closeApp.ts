export function closeApp() {
    const closeButton = document.querySelector('.close-button');
    const gameContainer: HTMLElement | null = document.querySelector('.audio-call-game');
    closeButton?.addEventListener('click', () => {
      if (gameContainer?.style !== undefined && gameContainer.style !== null) {
        gameContainer.innerHTML = '';
        gameContainer.style.display = 'none';
      }
    });
}
