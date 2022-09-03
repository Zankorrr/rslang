import { authorizedUser } from '../../../core/globalVariables';
import { updateTextbook } from '../../textbook/index';
import { ISignIn } from '../types/types';

const baseUrl = 'https://rslang-zankorrr-db.herokuapp.com';

export async function signInAPI(user: ISignIn) {
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

     if (response.status === 200 && signInButton) {
      updateTextbook();
      const signIn = document.querySelector('.signin-container') as HTMLElement;
      console.log('check4');
      localStorage.setItem('userToken', content.token);
      localStorage.setItem('userId', content.userId);

       authorizedUser.flag = true;
       authorizedUser.userToken = content.token;
       authorizedUser.userId = content.userId;

       signIn.style.display = 'none';
       signInButton.innerText = 'Log out';
     }
}
