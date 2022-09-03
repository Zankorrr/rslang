import { baseUrl, authorizedUser } from '../../../core/globalVariables';

export async function getUserWords(userId: string) {
  const rawResponse = await fetch(`${baseUrl}/users/${userId}/words`, {
    method: 'GET',
    // withCredentials: true,
    headers: {
      Authorization: `Bearer ${authorizedUser.userToken}`,
      Accept: 'application/json',
    },
  });
  const content = await rawResponse.json();

  console.log(content);
}
