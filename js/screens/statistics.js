import AbstractView from './../view/abstract';

import HeaderView from './../view/header';
import {footerTemplate} from './../chunks/footer';
import {successResultTemplate} from './../chunks/success-result';
import {failResultTemplate} from './../chunks/fail-result';


export default class StatisticsView extends AbstractView {
  constructor(data, status) {
    super();
    this._gameData = data;
    this._status = status;
  }

  get template() {
    const title = this._status ? `Победа!` : `Поражение :(`;
    const resultTemplate = this._status ? successResultTemplate : failResultTemplate;

    return `<header class="header">${new HeaderView().getHeaderBack}</header>
    <div class="result">
      <h1>${title}</h1>
      ${resultTemplate(1, this._gameData.answers, this._gameData.lifes)}
    </div>${footerTemplate}`;
  }

  onBack() {
  }

  bind(element) {
    element.querySelector(`button.back`).addEventListener(`click`, () => {
      this.onBack();
    });
  }
}
