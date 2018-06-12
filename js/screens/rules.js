import AbstractView from './../view/abstract';
import GameView from './game';
import GreetingView from './greeting';

import {renderScreen} from './../util';

import {headerTemplate} from './../chunks/header';
import {footerTemplate} from './../chunks/footer';


export default class RulesView extends AbstractView {
  constructor(data) {
    super();
    this._gameData = data;
  }

  get template() {
    return `${headerTemplate(this._gameData)}
    <div class="rules">
      <h1 class="rules__title">Правила</h1>
      <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
        src="img/photo_icon.png" width="16" height="16"> или рисунок <img
        src="img/paint_icon.png" width="16" height="16" alt="">.<br>
        Фотографиями или рисунками могут быть оба изображения.<br>
        На каждую попытку отводится 30 секунд.<br>
        Ошибиться можно не более 3 раз.<br>
        <br>
        Готовы?
      </p>
      <form class="rules__form">
        <input class="rules__input" type="text" placeholder="Ваше Имя">
        <button class="rules__button  continue" type="submit" disabled>Go!</button>
      </form>
    </div>${footerTemplate}`;
  }

  bind(element) {
    const rulesForm = element.querySelector(`.rules__form`);
    const rulesInput = rulesForm.querySelector(`.rules__input`);
    const rulesButton = rulesForm.querySelector(`.rules__button`);

    rulesInput.addEventListener(`keyup`, (evt) => {
      rulesButton.disabled = !evt.target.value.trim();
    });

    rulesForm.addEventListener(`submit`, (evt) => {
      evt.preventDefault();
      this._gameData.currentQuestion = 1;
      renderScreen(new GameView(this._gameData).element);
    });

    element.querySelector(`button.back`).addEventListener(`click`, () => {
      renderScreen(new GreetingView().element);
    });

  }
}
