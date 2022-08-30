export function renderPage() {
  const gameContainer: HTMLElement | null = document.querySelector('.audio-call-game');
  if (gameContainer !== undefined && gameContainer !== null) {
    const html = `<div class="iteration-container"></div>
                  <button class="button close-button">x</button>`;
    gameContainer.insertAdjacentHTML('beforeend', html);
  }
}
