import AbstractView from './../view/abstract';

import {statsTemplate} from './../chunks/stats';
import gameForm from './../chunks/game-form';


export default class GameView extends AbstractView {
  constructor(data, question) {
    super();
    this._gameData = data;
    this._question = question;
  }

  get template() {
    return `
      <div class="game">
        <p class="game__task">${this._question.title}</p>
        ${gameForm(this._question.type).form(this._question)}
        <div class="stats">
          ${statsTemplate(this._gameData.answers)}
        </div>
      </div>`;
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
