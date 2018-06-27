import AbstractView from './abstract';
import HeaderView from './header';

import {footerTemplate} from './../chunks/footer';
import {successResultTemplate} from './../chunks/success-result';
import {failResultTemplate} from './../chunks/fail-result';


export default class StatisticsView extends AbstractView {
  constructor(data) {
    super();
    this._gameData = data;
  }

  getResultsTemplate(data) {
    return data.reverse().map((dataItem, index) => {
      const title = dataItem.status ? `Победа!` : `Поражение :(`;
      const templateToUse = dataItem.status ? successResultTemplate : failResultTemplate;
      const {answers, lifes} = dataItem.history;
      const titleTemplate = index === 0 ? `<h1>${title}</h1>` : ``;

      return `<div class="result">
        ${titleTemplate}
        ${templateToUse(index + 1, answers, lifes)}
      </div>`;
    }).join(``);
  }

  get template() {
    return `<header class="header">${new HeaderView().getHeaderBack}</header>
    ${this.getResultsTemplate(this._gameData)}
    ${footerTemplate}`;
  }

  onBack() {
  }

  bind(element) {
    element.querySelector(`button.back`).addEventListener(`click`, () => {
      this.onBack();
    });
  }
}
