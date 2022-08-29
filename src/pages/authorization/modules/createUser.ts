import { ISignUp } from '../types/types';
import { signUpAPI } from './signUpAPI';

export function createUser() {
  const signUpEmailInput: HTMLInputElement | null = document.querySelector('.signup-email');
  const signUpPasswordInput: HTMLInputElement | null = document.querySelector('.signup-password');
  const signUpButton: HTMLButtonElement | null = document.querySelector('.signup-button-form');

  signUpButton?.addEventListener('click', async (event) => {
    event.preventDefault();

    if (signUpEmailInput && signUpPasswordInput) {
      const user: ISignUp = {
        email: signUpEmailInput?.value,
        password: signUpPasswordInput?.value,
      };

      await signUpAPI(user);
    }
  });
}