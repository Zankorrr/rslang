import { openApp } from '../audio_call/modules/openApp';
import { addFog, removeFog } from '../authorization/modules/addFog';
import { textbookColors, textbookVariables } from '../textbook/index';
import './style.css';

export function addHeader() {
  const header = document.createElement('header');
  header.classList.add('header');
  const logo = document.createElement('h1');
  logo.innerText = 'RSLang';
  const navigation = document.createElement('nav');
  navigation.classList.add('navigation');
  const mainPageButton = document.createElement('button');
  mainPageButton.classList.add('main-page-button');
  mainPageButton.innerText = 'Main';
  const textbookButton = document.createElement('button');
  textbookButton.classList.add('textbook-button');
  textbookButton.innerText = 'Textbook';
  const audioCallButton = document.createElement('button');
  audioCallButton.classList.add('audio-call-button');
  audioCallButton.innerText = 'Audio call';
  const sprintButton = document.createElement('button');
  sprintButton.classList.add('sprint-button');
  sprintButton.innerText = 'Sprint';

  const statisticsButton = document.createElement('button');
  statisticsButton.classList.add('statistics-button');
  statisticsButton.innerText = 'Statistics';

  const signUpButton = document.createElement('button');
  signUpButton.classList.add('signup-button');
  signUpButton.innerText = 'Sign up';

  const signInButton = document.createElement('button');
  signInButton.classList.add('signin-button');
  if (localStorage.getItem('userToken')) {
    signInButton.innerText = 'Log out';
  } else {
    signInButton.innerText = 'Sign in';
  }

  navigation.append(
    mainPageButton,
    textbookButton,
    audioCallButton,
    sprintButton,
    statisticsButton,
    signUpButton,
    signInButton,
  );
  header.append(logo, navigation);
  document.body.appendChild(header);
}

export function addDescription() {
  const description = document.createElement('div');
  description.classList.add('description');
  description.innerHTML = 'Сегодня английский язык – второй ключевой навык для специалиста после профессиональных умений а иногда и первый. Знание английского упрощает изучение и прокачку навыков. <span>RSLang</span> - это бесплатная возможность повысить свой словарный запас в формате игры. Скучно не будет.';
  document.body.appendChild(description);
}

export function addAboutTeam() {
  const aboutTeam = document.createElement('div');
  aboutTeam.classList.add('about-team');
  const aboutAleksey = document.createElement('div');
  aboutAleksey.classList.add('about-member');
  aboutAleksey.classList.add('about-Aleksey');
  aboutAleksey.innerHTML = '<p><i>Team Lead, frontend developer</i></p><p>Backend, электронный учебник, список слов</p>';
  const aboutDmitry = document.createElement('div');
  aboutDmitry.classList.add('about-member');
  aboutDmitry.classList.add('about-Dmitry');
  aboutDmitry.innerHTML = '<p><i>Frontend developer</i></p><p>Авторизация, игра "Audio call"</p>';
  const aboutMaksim = document.createElement('div');
  aboutMaksim.classList.add('about-member');
  aboutMaksim.classList.add('about-Maksim');
  aboutMaksim.innerHTML = '<p><i>Frontend developer</i></p><p>Дизайн, игра "Sprint"</p>';
  aboutTeam.append(aboutAleksey, aboutDmitry, aboutMaksim);
  document.body.appendChild(aboutTeam);
}

export function addFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  const rss = document.createElement('a');
  rss.href = 'https://rs.school/js/';
  const rssLogo = document.createElement('img');
  rssLogo.classList.add('rss-logo');
  rssLogo.src = 'https://rs.school/images/rs_school_js.svg';
  rssLogo.alt = 'RSS';
  rss.appendChild(rssLogo);
  const authors = document.createElement('div');
  const aleksey = document.createElement('a');
  aleksey.href = 'https://github.com/Zankorrr';
  aleksey.innerText = 'Aleksey';
  const dmitry = document.createElement('a');
  dmitry.href = 'https://github.com/dimtim1992';
  dmitry.innerText = 'Dmitry';
  const maksim = document.createElement('a');
  maksim.href = 'https://github.com/MaxNikitenok';
  maksim.innerText = 'Maksim';
  authors.append(aleksey, ', ', dmitry, ', ', maksim, ' @2022');
  footer.append(rss, authors);
  document.body.appendChild(footer);
}

export function hideElements() {
  const audioCallGame = document.querySelector('.audio-call-game') as HTMLElement;
  const sprintGame = document.querySelector('.sprint-game') as HTMLElement;
  const statisticsPage = document.querySelector('.statistics-page') as HTMLElement;
  const textbookPage = document.querySelector('.textbook-page') as HTMLElement;
  const signUp = document.querySelector('.signup-container') as HTMLElement;
  const signIn = document.querySelector('.signin-container') as HTMLElement;
  const description = document.querySelector('.description') as HTMLElement;
  const aboutTeam = document.querySelector('.about-team') as HTMLElement;
  const footer = document.querySelector('.footer') as HTMLElement;

  const variableElements = [audioCallGame, sprintGame, statisticsPage,
    textbookPage, signUp, signIn, description, aboutTeam, footer];
    variableElements.forEach((el) => {
      el.style.display = 'none';
  });
}

export function updateNavigation() {
  const sprintGame = document.querySelector('.sprint-game') as HTMLElement;
  const statisticsPage = document.querySelector('.statistics-page') as HTMLElement;
  const textbookPage = document.querySelector('.textbook-page') as HTMLElement;
  const signUp = document.querySelector('.signup-container') as HTMLElement;
  const signIn = document.querySelector('.signin-container') as HTMLElement;
  const description = document.querySelector('.description') as HTMLElement;
  const aboutTeam = document.querySelector('.about-team') as HTMLElement;
  const footer = document.querySelector('.footer') as HTMLElement;

  const mainPageButton = document.querySelector('.main-page-button') as HTMLButtonElement;
  const textbookButton = document.querySelector('.textbook-button') as HTMLButtonElement;
  const audioCallButton = document.querySelector('.audio-call-button') as HTMLButtonElement;
  const sprintButton = document.querySelector('.sprint-button') as HTMLButtonElement;
  const statisticsButton = document.querySelector('.statistics-button') as HTMLButtonElement;
  const signUpButton = document.querySelector('.signup-button') as HTMLButtonElement;
  const closeSigninForm = document.querySelector('.close-signin-form') as HTMLElement;
  const closeSignupForm = document.querySelector('.close-signup-form') as HTMLElement;

  mainPageButton.addEventListener('click', () => {
    hideElements();
    description.style.display = 'block';
    aboutTeam.style.display = 'flex';
    footer.style.display = 'flex';
  });

  textbookButton.addEventListener('click', () => {
    const wavesTop = document.querySelector('.bgTop') as HTMLElement;
    const wavesMiddle = document.querySelector('.bgMiddle') as HTMLElement;
    const wavesBottom = document.querySelector('.bgBottom') as HTMLElement;
    const bodyApp = document.body;
    const colorId = textbookVariables.chapter;
    wavesTop.style.background = textbookColors[colorId];
    wavesMiddle.style.background = textbookColors[colorId];
    wavesBottom.style.background = textbookColors[colorId];
    bodyApp.style.background = textbookColors[colorId];
    hideElements();
    textbookPage.style.display = 'flex';
    footer.style.display = 'flex';
  });

  audioCallButton.addEventListener('click', () => {
    openApp('audiocall-from-menu');
  });

  sprintButton.addEventListener('click', () => {
    hideElements();
    sprintGame.style.display = 'block';
  });

  statisticsButton.addEventListener('click', () => {
    hideElements();
    statisticsPage.style.display = 'block';
    footer.style.display = 'flex';
  });

  signUpButton.addEventListener('click', () => {
    signIn.style.display = 'none';
    signUp.style.display = 'flex';
    addFog();
  });

  closeSigninForm.addEventListener('click', () => {
    signIn.style.display = 'none';
    removeFog();
  });

  closeSignupForm.addEventListener('click', () => {
    signUp.style.display = 'none';
    removeFog();
  });
}


