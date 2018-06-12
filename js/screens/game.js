import AbstractView from './../view/abstract';

import {statsTemplate} from './../chunks/stats';
import {headerTemplate} from './../chunks/header';
import {footerTemplate} from './../chunks/footer';
import gameForm from './../chunks/game-form';


export default class GameView extends AbstractView {
  constructor(data, question) {
    super();
    this._gameData = data;
    this._question = question;
  }

  get template() {
    return `${headerTemplate(this._gameData)}
      <div class="game">
        <p class="game__task">${this._question.title}</p>
        ${gameForm(this._question.type).form(this._question)}
        <div class="stats">
          ${statsTemplate(this._gameData.answers)}
        </div>
      </div>${footerTemplate}`;
  }

  get gameState() {
    return this._gameData;
  }

  onAnswer() {
  }

  bind(element) {

    gameForm(this._question.type).handler(
        element,
        {number: this._gameData.currentQuestion},
        this.onAnswer(this._gameData)
    );

  }
}
