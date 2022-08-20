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
        
    </div>`;

export default html;
