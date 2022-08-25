export function renderWordTask() {
  const iterationContainer = document.querySelector('.iteration-container');
  const html = `<div class="word-container">
                  <img src="../assets/img/icon-sound.png" alt="word-image" class="word-image">
                  <audio src="/" class="word-audio" autoplay>
                  </audio>
                  <div class="word-text no-displayed"></div>
                </div>
                <div class="word-variables-container">
                  <button class="word-variables"></button>
                  <button class="word-variables"></button>
                  <button class="word-variables"></button>
                  <button class="word-variables"></button>
                  <button class="word-variables"></button>
                </div>
                <button class="word-button">I don't know</button>`;
  iterationContainer?.insertAdjacentHTML('beforeend', html);
}

export default renderWordTask;
