const baseUrl = 'https://rslang-zankorrr-db.herokuapp.com';
const wordsUrl = `${baseUrl}/words`;

export async function getWords() {
  const response = await fetch(wordsUrl);
  const words = await response.json();
  return words;
}
