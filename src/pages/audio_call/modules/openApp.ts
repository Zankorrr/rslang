import { getWordsFromPage } from './getWords';
import { IWord } from './types';
import { hideElements } from '../../main/index';
import { textbookVariables } from '../../textbook/index';
import { getWordsFromChapter } from './getWordsFromChapter';
import { renderChooseTab } from './renderChooseTab';
import { createApp } from './createApp';
// import { getUserWords } from './getUserWord';
// import { authorizedUser } from '../../../core/globalVariables';

export async function openApp(context: string) {
  let words: IWord[] = [];
  const gameContainer: HTMLElement | null = document.querySelector('.audio-call-game');

  hideElements();

  if (gameContainer) {
    gameContainer.style.display = 'flex';
    gameContainer.innerHTML = '';
  }

  if (context === 'audiocall-from-textbook') {
    words = await getWordsFromPage(textbookVariables.chapter, textbookVariables.page);
    if (words) {
      createApp(words);
    }
  } else {
    renderChooseTab();
    const chapterButtons: NodeListOf<HTMLElement> = document.querySelectorAll('.chapter-button');

    chapterButtons.forEach((item: HTMLElement, index: number) => {
      item.addEventListener('click', async () => {
        const res = await getWordsFromChapter(index);
        words = res.flat();

        if (gameContainer) {
          gameContainer.innerHTML = '';
        }

        if (res) {
          createApp(words);
        }
      });
    });
  }
  // getUserWords(authorizedUser.userId);
}

export default openApp;
