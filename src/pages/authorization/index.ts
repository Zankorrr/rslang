import { renderSignUpForm } from './modules/renderSignUpForm';
import { renderSignInForm } from './modules/renderSignInForm';
import './style.css';
import { createUser } from './modules/createUser';
import { enterUser } from './modules/enterUser';

export function addSignUp() {
  const signUpContainer = document.createElement('div');
  signUpContainer.classList.add('signup-container');
  document.body.appendChild(signUpContainer);
  renderSignUpForm();
  createUser();
}

export function addSignIn() {
  const signInContainer = document.createElement('div');
  signInContainer.classList.add('signin-container');
  document.body.appendChild(signInContainer);
  renderSignInForm();
  enterUser();
}
