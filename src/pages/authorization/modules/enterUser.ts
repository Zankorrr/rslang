import { authorizedUser } from '../../../core/globalVariables';
import { ISignIn } from '../types/types';
import { addFog, removeFog } from './addFog';
import { signInAPI } from './signInAPI';

export function enterUser() {
  const signInEmailInput: HTMLInputElement | null = document.querySelector('.signin-email');
  const signInPasswordInput: HTMLInputElement | null = document.querySelector('.signin-password');
  const signInButton: HTMLButtonElement | null = document.querySelector('.signin-button');
  const signInButtonForm: HTMLButtonElement | null = document.querySelector('.signin-button-form');
  const signIn = document.querySelector('.signin-container') as HTMLElement;
  const fog = document.querySelector('.fog') as HTMLElement;

  signInButton?.addEventListener('click', (event) => {
    event.preventDefault();

    if (signInButton.innerText === 'Log out' && signInButton) {
      signIn.style.display = 'none';
      console.log('check2');
      signInButton.innerText = 'Sign in';

      localStorage.removeItem('userToken');
      localStorage.removeItem('userId');

      authorizedUser.flag = false;
      authorizedUser.userToken = '';
      authorizedUser.userId = '';
    } else {
      console.log('check3');
      signIn.style.display = 'flex';
      addFog();
    }

    if (fog) removeFog();
  });

  signInButtonForm?.addEventListener('click', async (event) => {
    event.preventDefault();

    if (signInEmailInput && signInPasswordInput) {
      const user: ISignIn = {
        email: signInEmailInput?.value,
        password: signInPasswordInput?.value,
      };
      await signInAPI(user);
    }

    removeFog();
  });
}
