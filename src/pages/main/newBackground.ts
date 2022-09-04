export const bodyBack = document.body;

export const newBackground = () => {
  const backgroundBody = document.createElement('div');
  backgroundBody.classList.add('waveWrapper');
  backgroundBody.classList.add('waveAnimation');
  const backgroundHtml = `
    <div class="empty-space"></div>
    <div class="waveWrapperInner bgTop" style="transition: all 1s linear;">
      <div class="wave waveTop" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-top.png')"></div>
    </div>
    <div class="waveWrapperInner bgMiddle" style="transition: all 1s linear;">
      <div class="wave waveMiddle" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-mid.png')"></div>
    </div>
    <div class="waveWrapperInner bgBottom" style="transition: all 1s linear;">
      <div class="wave waveBottom" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-bot.png')"></div>
    </div>
`;

  backgroundBody.innerHTML = backgroundHtml;
  bodyBack.append(backgroundBody);

  const textbookPage = document.querySelector('.textbook-page') as HTMLElement;
  const wavesTop = document.querySelector('.bgTop') as HTMLElement;
  const wavesMiddle = document.querySelector('.bgMiddle') as HTMLElement;
  const wavesBottom = document.querySelector('.bgBottom') as HTMLElement;
  const nav = document.querySelector('.navigation') as HTMLElement;
  const statisticsButton = document.querySelector('.statistics-button') as HTMLElement;
  const audioCallButton = document.querySelector('.audio-call-button') as HTMLElement;
  const sprintButton = document.querySelector('.sprint-button') as HTMLElement;
  const mainPageButton = document.querySelector('.main-page-button') as HTMLButtonElement;

  nav.addEventListener('click', (e) => {
    if (textbookPage.style.display === 'none') {
      if (e.target === statisticsButton) {
        wavesTop.style.background = 'lightpink';
        wavesMiddle.style.background = 'lightpink';
        wavesBottom.style.background = 'lightpink';
      } else if (e.target === audioCallButton) {
        wavesTop.style.background = '#029e91';
        wavesMiddle.style.background = '#029e91';
        wavesBottom.style.background = '#029e91';
      } else if (e.target === sprintButton) {
        wavesTop.style.background = '#5ca0cb';
        wavesMiddle.style.background = '#5ca0cb';
        wavesBottom.style.background = '#5ca0cb';
      } else if (e.target === mainPageButton) {
        wavesTop.style.background = 'linear-gradient(to top, #489cbd 20%, #029e91 80%)';
        wavesMiddle.style.background = 'linear-gradient(to top, #489cbd 20%, #029e91 80%)';
        wavesBottom.style.background = 'linear-gradient(to top, #489cbd 20%, #029e91 80%)';
      }
    }
  });
};

export default newBackground;
