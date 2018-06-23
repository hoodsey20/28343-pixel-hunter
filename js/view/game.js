import {questionTypes} from './../consts';
import AbstractView from './abstract';

import {statsTemplate} from './../chunks/stats';
import {gameFormTypeSingle, gameFormTypeSingleHandler} from './../chunks/game-form-single';
import {gameFormTypeCouple, gameFormTypeCoupleHandler} from './../chunks/game-form-couple';
import {gameFormTypeTriple, gameFormTypeTripleHandler} from './../chunks/game-form-triple';

const getQuestionFormAndHandler = (type) => {
  const gameInterface = {};

  let formElement = null;
  let formHandler = null;

  switch (type) {
    case questionTypes.SIGNLE:
      formElement = gameFormTypeSingle;
      formHandler = gameFormTypeSingleHandler;
      break;
    case questionTypes.COUPLE:
      formElement = gameFormTypeCouple;
      formHandler = gameFormTypeCoupleHandler;
      break;
    case questionTypes.TRIPLE:
      formElement = gameFormTypeTriple;
      formHandler = gameFormTypeTripleHandler;
      break;
    default:
      throw new Error(`Odd type of question: ${type}`);
  }

  gameInterface.form = formElement;
  gameInterface.handler = formHandler;

  return gameInterface;
};

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
        ${getQuestionFormAndHandler(this._question.type).form(this._question)}
        <div class="stats">
          ${statsTemplate(this._gameData.answers)}
        </div>
      </div>`;
  }

  onAnswer() {
  }

  bind(element) {

    getQuestionFormAndHandler(this._question.type).handler(
        element,
        {number: this._gameData.currentQuestion},
        this.onAnswer(this._gameData)
    );

  }
}
