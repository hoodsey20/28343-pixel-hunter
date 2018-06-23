import AbstractView from './abstract';
import {getInitialState} from './../data/game-data';

export default class HeaderView extends AbstractView {
  constructor(lifes, time) {
    super();
    this._lifes = lifes;
    this._time = time;
  }

  get getHeaderBack() {
    return `<div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>`;
  }

  getLives() {
    if (this._lifes || this._lifes === 0) {

      const currentLifes = this._lifes > 0 ? this._lifes : 0;
      const lostLifes = getInitialState().lifes - currentLifes;
      const activeLifes = currentLifes;

      return `<div class="game__lives">
        ${new Array(lostLifes)
            .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
            .join(``)}
        ${new Array(activeLifes)
          .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
          .join(``)}
      </div>`;
    }
    return ``;
  }

  getTimer() {
    if (this._time) {
      return `<h1 class="game__timer">${this._time}</h1>`;
    }
    return ``;
  }

  get template() {
    return `<header class="header">
      ${this.getHeaderBack}
      ${this.getTimer(this._gameState)}
      ${this.getLives(this._gameState)}
    </header>`;
  }

  onBack() {
  }

  bind(element) {
    element.querySelector(`button.back`).addEventListener(`click`, () => {
      this.onBack();
    });
  }
}
