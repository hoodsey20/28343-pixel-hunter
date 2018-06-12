import AbstractView from './../view/abstract';
import GreetingView from './greeting';

import {renderScreen} from './../util';

import {headerTemplate} from './../chunks/header';
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

    return `${headerTemplate(this._gameData)}
    <div class="result">
      <h1>${title}</h1>
      ${resultTemplate(1, this._gameData.answers, this._gameData.lifes)}
    </div>${footerTemplate}`;
  }

  bind(element) {
    element.querySelector(`button.back`).addEventListener(`click`, () => {
      renderScreen(new GreetingView().element);
    });
  }
}
