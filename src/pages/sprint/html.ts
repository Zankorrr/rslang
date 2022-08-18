export const html = `<div class="game-wrapper">
        <div class="game">
            <div class="pointsCounter" id="pointCounter">0</div>
            <div class="multiplier">x1</div>
            <div class="correctness">
                <div class="factor active" id="factor-one"></div>
                <div class="factor" id="factor-two"></div>
                <div class="factor" id="factor-three"></div>
            </div>
            <div class="actions">
                <div class="word" id="word"></div>
                <div class="translation" id="translation"></div>
                <div class="answer-buttons">
                    <a class="button right" id="right">right</a>
                    <a class="button wrong" id="wrong">wrong</a>
                </div>
            </div>    
            <div class="timer" id="timer">30</div>
        </div>
        
    </div>`;

export default html;
