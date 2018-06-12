import AbstractView from './../view/abstract';
import StatisticsView from './statistics';
import GreetingView from './greeting';

import {renderScreen} from './../util';

import {statsTemplate} from './../chunks/stats';
import {headerTemplate} from './../chunks/header';
import {footerTemplate} from './../chunks/footer';
import gameForm from './../chunks/game-form';

import {gameQuestions} from './../data/game-data';
import {changeGameState} from './../change-game-state';
import {checkAnswer} from './../check-answer';


export default class GameView extends AbstractView {
  constructor(data) {
    super();
    this._gameData = data;
    this._question = gameQuestions[data.currentQuestion - 1];
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

  bind(element) {
    const handleChangeScreen = (answer) => {
      const answerResult = checkAnswer(this._question, answer);
      const nextState = changeGameState(this._gameData, answerResult);
      let nextScreen;

      if (nextState.lifes < 0) {
        nextScreen = new StatisticsView(nextState, false).element;
      } else if (nextState.currentQuestion > 10) {
        nextScreen = new StatisticsView(nextState, true).element;
      } else {
        nextScreen = new GameView(nextState).element;
      }
      renderScreen(nextScreen);
    };

    gameForm(this._question.type).handler(
        element,
        {number: this._gameData.currentQuestion},
        handleChangeScreen
    );

    element.querySelector(`button.back`).addEventListener(`click`, () => {
      renderScreen(new GreetingView().element);
    });
  }
}
