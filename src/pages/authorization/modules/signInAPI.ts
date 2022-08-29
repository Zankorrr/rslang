import { ISignUp } from '../types/types';

const baseUrl = 'https://rslang-zankorrr-db.herokuapp.com';

export async function signInAPI(user: ISignUp) {
  const signInButton: HTMLButtonElement | null = document.querySelector('.signin-button');
  const response = await fetch(`${baseUrl}/signin`, {
       method: 'POST',
       headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(user),
     });
     const content = await response.json();

     console.log(content);

     if (response.status === 200 && signInButton) {
       console.log(signInButton.innerText);
       signInButton.innerText = 'Log out';
     }

     console.log(response.status);
}