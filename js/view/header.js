import AbstractView from './abstract';

export default class HeaderView extends AbstractView {
  constructor(state) {
    super();
    this._gameState = state;
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
    if (this._gameState) {
      const lifesToShow = this._gameState.lifes > -1 ? this._gameState.lifes : 0;

      return `<div class="game__lives">
        ${new Array(3 - lifesToShow)
            .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
            .join(``)}
        ${new Array(lifesToShow)
          .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
          .join(``)}
      </div>`;
    }
    return ``;
  }

  getTimer() {
    if (this._gameState) {
      return `<h1 class="game__timer">${this._gameState.timer}</h1>`;
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
