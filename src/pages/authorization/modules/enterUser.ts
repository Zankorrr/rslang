import { ISignUp } from '../types/types';
import { signInAPI } from './signInAPI';

export function enterUser() {
  const signInEmailInput: HTMLInputElement | null = document.querySelector('.signin-email');
  const signInPasswordInput: HTMLInputElement | null = document.querySelector('.signin-password');
  const signInButton: HTMLButtonElement | null = document.querySelector('.signin-button-form');

  signInButton?.addEventListener('click', async (event) => {
    event.preventDefault();

    if (signInEmailInput && signInPasswordInput) {
      const user: ISignUp = {
        email: signInEmailInput?.value,
        password: signInPasswordInput?.value,
      };
      console.log('sign in');
      await signInAPI(user);
    }
  });
}