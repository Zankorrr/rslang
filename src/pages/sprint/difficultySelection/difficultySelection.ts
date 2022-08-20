import './style.css';
import html from '../html';
import randomWord from '../sprint';
import timer from '../timer/timer';

export const difficultySelectionHtml = `
  <form class="difficultySelectionPlate" id="difficultForm">
  <p>Выберите уровень сложности</p>
  <div>
    <input type="radio" id="difficult1"
     name="difficultLevel" difficultId="0">
    <label for="difficult1" difficultId="0">A1</label>

    <input type="radio" id="difficult2"
     name="difficultLevel" difficultId="1">
    <label for="difficult2" difficultId="1">A2</label>

    <input type="radio" id="difficult3"
     name="difficultLevel" difficultId="2">
    <label for="difficult3" difficultId="2">B1</label>

    <input type="radio" id="difficult4"
     name="difficultLevel" difficultId="3">
    <label for="difficult4" difficultId="3">B2</label>

    <input type="radio" id="difficult5"
     name="difficultLevel" difficultId="4">
    <label for="difficult5" difficultId="4">C1</label>

    <input type="radio" id="difficult6"
     name="difficultLevel" difficultId="5">
    <label for="difficult6" difficultId="5">C2</label>
  </div>
  <div>
    <button type="submit" id="button-start">Старт</button>
  </div>
</form>  
`;
export const difficultLevel: string[] | null[] = [];
export const start = () => {
  const sprintGame = document.querySelector('.sprint-game');
  const startButton = document.getElementById('button-start');
  const checkInputs = Array.from(document.getElementsByName('difficultLevel'));
  const q: number[] | null[] = [];

  (startButton as HTMLElement).onclick = () => {
    checkInputs.forEach((item) => {
      if ((item as HTMLInputElement).checked === true) {
        q[0] = Number(item.getAttribute('difficultId'));
      }
    });
    // eslint-disable-next-line no-console
    console.log(q);
    (sprintGame as HTMLElement).innerHTML = html;

    randomWord(q[0]);
    timer();
  };
};

export default difficultySelectionHtml;
