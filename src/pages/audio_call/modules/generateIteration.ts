import { baseUrl } from '../../../core/globalVariables';
import { getRandomNumber } from './getRandomNumber';
import { IResult, IWord } from '../../../core/types';

export function generateIteration(data: IWord[], arr: string[], res: IResult[]) {
  const iterationContainer = document.querySelector('.iteration-container');
  let wordIndex = getRandomNumber(0, data.length - 1);
  while (arr.includes(data[wordIndex].word)) {
    wordIndex = getRandomNumber(0, data.length - 1);
  }
  arr.push(data[wordIndex].word);
  const wordsVariables: string[] = [];
  for (let i = 0; i < 5; i += 1) {
    let index = getRandomNumber(0, data.length - 1);
    while (wordsVariables.includes(data[index].word)) {
      index = getRandomNumber(0, data.length - 1);
    }
    wordsVariables.push(data[index].word);
  }
  if (!wordsVariables.includes(data[wordIndex].word)) {
    const swap = getRandomNumber(0, 4);
    wordsVariables[swap] = data[wordIndex].word;
  }
  if (iterationContainer?.innerHTML !== undefined && iterationContainer.innerHTML !== null) {
    iterationContainer.innerHTML = `<div class="word-container">
                                     <audio src="${baseUrl}/${data[wordIndex].audio}" class="word-audio" autoplay>
                                      <img src="../assets/img/icon-sound.png" alt="word-image" class="word-image">
                                     </audio>
                                     <img src="../assets/img/icon-sound.png" alt="voice-image" class="voice-image no-displayed">
                                     <div class="word-text no-displayed">${data[wordIndex].word}</div>
                                   </div>
                                   <div class="word-variables-container">
                                    <button class="word-variables">${wordsVariables[0]}</button>
                                    <button class="word-variables">${wordsVariables[1]}</button>
                                    <button class="word-variables">${wordsVariables[2]}</button>
                                    <button class="word-variables">${wordsVariables[3]}</button>
                                    <button class="word-variables">${wordsVariables[4]}</button>
                                   </div>
                                   <button class="word-button">I don't know</button>`;
  }
  const wordsVariablesButtons: NodeListOf<HTMLElement> = document.querySelectorAll('.word-variables');
  const wordButton: HTMLButtonElement | null = document.querySelector('.word-button');
  const wordImage: HTMLImageElement | null = document.querySelector('.word-image');
  const wordAudio: HTMLMediaElement | null = document.querySelector('.word-audio');
  const voiceImage = document.querySelector('.voice-image');
  const wordText = document.querySelector('.word-text');
  wordsVariablesButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.innerHTML === arr[arr.length - 1]) {
        button.style.backgroundColor = 'grey';
          const resultWord: IResult = {
          word: data[wordIndex].word,
          result: true,
          wordTranslate: data[wordIndex].wordTranslate,
          audio: data[wordIndex].audio,
        };
        res.push(resultWord);
      }
      if (button.innerHTML !== arr[arr.length - 1]) {
        button.style.backgroundColor = 'brown';
        const resultWord: IResult = {
          word: data[wordIndex].word,
          result: false,
          wordTranslate: data[wordIndex].wordTranslate,
          audio: data[wordIndex].audio,
        };
        res.push(resultWord);
      }
      if (wordImage !== undefined && wordImage !== null) {
        wordImage.src = `${baseUrl}/${data[wordIndex].image}`;
      }
      voiceImage?.classList.remove('no-displayed');
      wordText?.classList.remove('no-displayed');
      if (wordButton?.innerText !== undefined && wordButton.innerText !== null) {
        wordButton.innerText = 'Next';
      }
      wordAudio?.play();
    });
  });
}
