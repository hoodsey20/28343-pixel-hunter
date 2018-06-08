import {getElementFromTemplate, renderScreen} from './util.js';
import {headerTemplate} from './header.js';
import {statsTemplate} from './stats.js';
import {footerTemplate} from './footer.js';
import secondGameScreen from './game-2-screen';

const firstGameScreen = getElementFromTemplate(`${headerTemplate}
<div class="game">
  <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
  <form class="game__content">
    <div class="game__option">
      <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
      <label class="game__answer game__answer--photo">
        <input name="question1" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input name="question1" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
    <div class="game__option">
      <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
      <label class="game__answer  game__answer--photo">
        <input name="question2" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--paint">
        <input name="question2" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
  </form>
  <div class="stats">
    ${statsTemplate}
  </div>
</div>${footerTemplate}`);

export default firstGameScreen;

const gameForm = firstGameScreen.querySelector(`.game__content`);

const radioChangeHandler = () => {
  if (gameForm.querySelector(`[name="question1"]:checked`) && gameForm.querySelector(`[name="question2"]:checked`)) {
    renderScreen(secondGameScreen);
  }
};

gameForm.querySelectorAll(`[type="radio"]`).forEach((radio) => {
  radio.addEventListener(`change`, radioChangeHandler);
});
