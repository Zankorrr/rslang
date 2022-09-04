/* eslint-disable no-param-reassign */
import { openApp } from '../audio_call/modules/openApp';
import { addFog, removeFog } from '../authorization/modules/addFog';
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
  // const wordListButton = document.createElement('button');
  // wordListButton.classList.add('word-list-button');
  // wordListButton.innerText = 'Word list';
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
  signInButton.innerText = 'Sign in';

  navigation.append(
    mainPageButton,
    textbookButton,
    // wordListButton,
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
  description.innerText = 'RSLang - это бесплатная возможность повысить свой словарный запас в формате игры. Скучно не будет.';
  document.body.appendChild(description);
}

export function addAboutTeam() {
  const aboutTeam = document.createElement('div');
  aboutTeam.classList.add('about-team');
  aboutTeam.innerText = 'About team:';
  const aboutAleksey = document.createElement('div');
  aboutAleksey.classList.add('about-member');
  aboutAleksey.innerText = 'github.com/Zankorrr';
  const aboutDmitry = document.createElement('div');
  aboutDmitry.classList.add('about-member');
  aboutDmitry.innerText = 'github.com/dimtim1992';
  const aboutMaksim = document.createElement('div');
  aboutMaksim.classList.add('about-member');
  aboutMaksim.innerText = 'github.com/MaxNikitenok';
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
  // const wordListPage = document.querySelector('.word-list-page') as HTMLElement;
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
  // const audioCallGame = document.querySelector('.audio-call-game') as HTMLElement;
  const sprintGame = document.querySelector('.sprint-game') as HTMLElement;
  const statisticsPage = document.querySelector('.statistics-page') as HTMLElement;
  const textbookPage = document.querySelector('.textbook-page') as HTMLElement;
  // const wordListPage = document.querySelector('.word-list-page') as HTMLElement;
  const signUp = document.querySelector('.signup-container') as HTMLElement;
  const signIn = document.querySelector('.signin-container') as HTMLElement;
  const description = document.querySelector('.description') as HTMLElement;
  const aboutTeam = document.querySelector('.about-team') as HTMLElement;
  const footer = document.querySelector('.footer') as HTMLElement;

  const mainPageButton = document.querySelector('.main-page-button') as HTMLButtonElement;
  const textbookButton = document.querySelector('.textbook-button') as HTMLButtonElement;
  // const wordListButton = document.querySelector('.word-list-button') as HTMLButtonElement;
  const audioCallButton = document.querySelector('.audio-call-button') as HTMLButtonElement;
  const sprintButton = document.querySelector('.sprint-button') as HTMLButtonElement;
  const statisticsButton = document.querySelector('.statistics-button') as HTMLButtonElement;
  const signUpButton = document.querySelector('.signup-button') as HTMLButtonElement;
  const signInButton = document.querySelector('.signin-button') as HTMLButtonElement;
  const closeSigninForm = document.querySelector('.close-signin-form') as HTMLElement;
  const closeSignupForm = document.querySelector('.close-signup-form') as HTMLElement;
  // const signInButton = document.querySelector('.signin-button') as HTMLButtonElement;

  mainPageButton.addEventListener('click', () => {
    hideElements();
    description.style.display = 'block';
    aboutTeam.style.display = 'block';
    footer.style.display = 'flex';
  });

  textbookButton.addEventListener('click', () => {
    hideElements();
    textbookPage.style.display = 'flex';
    footer.style.display = 'flex';
  });

  // wordListButton.addEventListener('click', () => {
  //   hideElements();
  //   wordListPage.style.display = 'block';
  //   footer.style.display = 'flex';
  // });

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

  signInButton.addEventListener('click', () => {
    signIn.style.display = 'flex';
    signUp.style.display = 'none';
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

  // signInButton.addEventListener('click', () => {
  //   if (signInButton.innerText === 'Log out') {
  //     signInButton.innerText = 'Sign in';
  //   } else {
  //     signUp.style.display = 'none';
  //     signIn.style.display = 'flex';
  //   }
  // });
}


