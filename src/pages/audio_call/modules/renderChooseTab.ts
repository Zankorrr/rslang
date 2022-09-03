export function renderChooseTab() {
  const gameContainer: HTMLElement | null = document.querySelector('.audio-call-game');
  const html = `
  <div class = "chapter-container">
    <h2 class="chapter-title">Choose the chapter</h2>
    <div class="chapter-button-container">
      <button class="chapter-button">1</button>
      <button class="chapter-button">2</button>
      <button class="chapter-button">3</button>
      <button class="chapter-button">4</button>
      <button class="chapter-button">5</button>
      <button class="chapter-button">6</button>
    </div>
  </div>`;
  gameContainer?.insertAdjacentHTML('beforeend', html);
}
