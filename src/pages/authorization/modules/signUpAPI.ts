import { ISignUp } from '../types/types';

const baseUrl = 'https://rslang-zankorrr-db.herokuapp.com';

export async function signUpAPI(user: ISignUp) {
  const response = await fetch(`${baseUrl}/users`, {
       method: 'POST',
       headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(user),
     });
     const content = await response.json();

     console.log(content);
}
