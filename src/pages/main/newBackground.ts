export const bodyBack = document.body;

export const newBackground = () => {
  const backgroundBody = document.createElement('div');
  backgroundBody.classList.add('waveWrapper');
  backgroundBody.classList.add('waveAnimation');
  const backgroundHtml = `
    <div class="empty-space"></div>
    <div class="waveWrapperInner bgTop">
      <div class="wave waveTop" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-top.png')"></div>
    </div>
    <div class="waveWrapperInner bgMiddle">
      <div class="wave waveMiddle" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-mid.png')"></div>
    </div>
    <div class="waveWrapperInner bgBottom">
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

  nav.addEventListener('click', () => {
    if (textbookPage.style.display === 'none') {
      wavesTop.style.background = 'linear-gradient(to top, #489cbd 20%, #029e91 80%)';
      wavesMiddle.style.background = 'linear-gradient(to top, #489cbd 20%, #029e91 80%)';
      wavesBottom.style.background = 'linear-gradient(to top, #489cbd 20%, #029e91 80%)';
  }
  });
};

export default newBackground;
