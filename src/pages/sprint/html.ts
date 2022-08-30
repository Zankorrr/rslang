export const html = `
<div class="sprint-container" id="sprint-container">
    <div class="difficultySelectionPlate" id="difficultForm">
        <p>СПРИНТ</p>
        <div id="difficultLevelChange">Выберите уровень сложности</div>
        <div class="difficult-inputs">
            <input type="radio" id="difficult1"
                name="difficultLevel" data-difficult="0">
            <label for="difficult1" class="label-diff">A1</label>

            <input type="radio" id="difficult2"
                name="difficultLevel" data-difficult="1">
            <label for="difficult2" class="label-diff">A2</label>

            <input type="radio" id="difficult3"
                name="difficultLevel" data-difficult="2">
            <label for="difficult3" class="label-diff">B1</label>

            <input type="radio" id="difficult4"
                name="difficultLevel" data-difficult="3">
            <label for="difficult4" class="label-diff">B2</label>

            <input type="radio" id="difficult5"
                name="difficultLevel" data-difficult="4">
            <label for="difficult5" class="label-diff">C1</label>

            <input type="radio" id="difficult6"
                name="difficultLevel" data-difficult="5">
            <label for="difficult6" class="label-diff">C2</label>
        </div>
        <div class="difficultButton">
            <div class="button-start" id="button-start">СТАРТ</div>
        </div>
    </div> 
    <div class="load-screen">
        <div class="timer2" id="timer2">
            <div class="timer2__line" id="timer2Line"></div>
            <div class="timer2__body">
            <div class="timer2__counter">
                <span>3</span>
                <span>2</span>
                <span>1</span>
                <span>0</span>
            </div>
        </div>
    </div>
    </div>
    <div class="game-wrapper">
        <div class="game">
            <div class="game-header">
                <div class="points">
                    <p class="points-text">Счёт: </p>
                    <div class="pointsCounter" id="pointCounter">0</div>
                </div>
                <div class="correctness">
                    <div class="factor" id="factor-one">✓</div>
                    <div class="factor" id="factor-two">✓</div>
                    <div class="factor" id="factor-three">✓</div>
                </div>
                <div class="multiplier" id="multiplier">+10</div>
            </div>
            <div class="actions">
                <div class="word-ask" id="word-ask"></div>
                <div class="word-translate" id="word-translate"></div>
                <div class="answer-buttons">
                    <a class="button right" id="right">right</a>
                    <a class="button wrong" id="wrong">wrong</a>
                </div>
            </div>    
            <div class="timer" id="timer">
                <div class="timer__line" id="timerLine"></div>
                <div class="timer__body">
                    <div class="timer__counter">
                        <span>30</span>
                        <span>29</span>
                        <span>28</span>
                        <span>27</span>
                        <span>26</span>
                        <span>25</span>
                        <span>24</span>
                        <span>23</span>
                        <span>22</span>
                        <span>21</span>
                        <span>20</span>
                        <span>19</span>
                        <span>18</span>
                        <span>17</span>
                        <span>16</span>
                        <span>15</span>
                        <span>14</span>
                        <span>13</span>
                        <span>12</span>
                        <span>11</span>
                        <span>10</span>
                        <span>9</span>
                        <span>8</span>
                        <span>7</span>
                        <span>6</span>
                        <span>5</span>
                        <span>4</span>
                        <span>3</span>
                        <span>2</span>
                        <span>1</span>
                        <span>0</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="statistics-wrapper" id="statistics-wrapper">
        <div class="statistics">
            <div class="result-header">
                <p class="result-title">Ваш результат:</p>
                <div class="stat-btns">
                    <div class="again" id="again">Ещё раз</div>
                    <div class="close-app" id="close-app">Выход</div>
                </div>
            </div>
            <div class="right-results">
                <div class="right-text">Правильно</div>
                <div class="right" id="stat-right"></div>
            </div>
            <div class="wrong-results">
                <div class="wrong-text">Не правильно</div>
                <div class="wrong" id="stat-wrong"></div>
            </div>
        </div>
    </div>
</div>
`;

export default html;
