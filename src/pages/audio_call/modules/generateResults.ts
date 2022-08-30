import { IResult } from './types';

const baseUrl = 'https://rslang-zankorrr-db.herokuapp.com';

export function generateResults(res: IResult[]) {
  const gameContainer = document.querySelector('.audio-call-game');
  let trueCounter = 0;
  let falseCounter = 0;

  if (gameContainer) {
    const html = `<div class ="result-container">
                                     <div class="result-container result-true-container">
                                       <h2 class="result-title">True <span class="true-span">${trueCounter}</span></h2>
                                       <div class="true-container">

                                       </div>
                                     </div>
                                     <hr>
                                     <div class="result-container result-false-container">
                                       <h2 class="result-title">False <span class="false-span">${falseCounter}</span></h2>
                                       <div class="false-container">

                                       </div>
                                     </div>
                                   </div>`;

    gameContainer.insertAdjacentHTML('beforeend', html);
  }

  const trueContainer = document.querySelector('.true-container');
  const falseContainer = document.querySelector('.false-container');
  const trueSpan = document.querySelector('.true-span');
  const falseSpan = document.querySelector('.false-span');

  res.forEach((result) => {
    const wordResult = document.createElement('div');

    const html = `<button class="word-result-button">
                    <img src="../assets/img/icon-sound.png" alt="word-result-image" class="word-result-image">
                  </button>
                  <audio src="${baseUrl}/${result.audio}" class="word-result-audio">
                  </audio>
                  <span class="word-result-text">${result.word}</span>
                  <span class="word-result-translate">${result.wordTranslate}</span>`;

    wordResult.insertAdjacentHTML('beforeend', html);

    if (result.result === true) {
      trueCounter += 1;
      trueContainer?.appendChild(wordResult);

      if (trueSpan) {
        trueSpan.innerHTML = String(trueCounter);
      }
    }

    if (result.result === false) {
      falseCounter += 1;
      falseContainer?.appendChild(wordResult);

      if (falseSpan) {
        falseSpan.innerHTML = String(falseCounter);
      }
    }
  });

  const wordAudios: NodeListOf<HTMLMediaElement> = document.querySelectorAll('.word-result-audio');
  const audioButtons = document.querySelectorAll('.word-result-button');

  audioButtons.forEach((button, index) => {
    button?.addEventListener('click', () => {
      wordAudios[index].play();
    });
  });
}
