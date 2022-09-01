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
};

export default newBackground;
