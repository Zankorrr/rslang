import { baseUrl } from '../../../core/globalVariables';
import { ISignUp } from '../types/types';

export async function signUpAPI(user: ISignUp) {
  await fetch(`${baseUrl}/users`, {
       method: 'POST',
       headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(user),
     });
}
