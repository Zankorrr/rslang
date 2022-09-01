import { authorizedUser } from '../../../core/globalVariables';
import { ISignIn } from '../types/types';
import { signInAPI } from './signInAPI';

export function enterUser() {
  const signInEmailInput: HTMLInputElement | null = document.querySelector('.signin-email');
  const signInPasswordInput: HTMLInputElement | null = document.querySelector('.signin-password');
  const signInButton: HTMLButtonElement | null = document.querySelector('.signin-button-form');

  signInButton?.addEventListener('click', async (event) => {
    event.preventDefault();

    if (signInButton.innerText === 'Log out') {
      signInButton.innerText = 'Sign in';
      localStorage.removeItem('userToken');
      localStorage.removeItem('userId');
      authorizedUser.flag = false;
      authorizedUser.userToken = '';
      authorizedUser.userId = '';
    }

    if (signInEmailInput && signInPasswordInput) {
      const user: ISignIn = {
        email: signInEmailInput?.value,
        password: signInPasswordInput?.value,
      };
      await signInAPI(user);
    }
  });
}
