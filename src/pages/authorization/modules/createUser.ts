import { ISignUp } from '../types/types';
import { removeFog } from './addFog';
import { signUpAPI } from './signUpAPI';

export function createUser() {
  const signUpNameInput: HTMLInputElement | null = document.querySelector('.signup-name');
  const signUpEmailInput: HTMLInputElement | null = document.querySelector('.signup-email');
  const signUpPasswordInput: HTMLInputElement | null = document.querySelector('.signup-password');
  const signUpButton: HTMLButtonElement | null = document.querySelector('.signup-button-form');

  signUpButton?.addEventListener('click', async (event) => {
    event.preventDefault();

    if (signUpEmailInput && signUpPasswordInput && signUpNameInput) {
      const user: ISignUp = {
        name: signUpNameInput?.value,
        email: signUpEmailInput?.value,
        password: signUpPasswordInput?.value,
      };

      await signUpAPI(user);

      const signUp = document.querySelector('.signup-container') as HTMLElement;
      signUp.style.display = 'none';

      removeFog();
    }
  });
}
