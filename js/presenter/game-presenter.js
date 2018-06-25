import Router from './../router';
import {render} from './../util';

import GameView from './../view/game';
import HeaderView from './../view/header';

import {footerTemplate} from './../chunks/footer';

const ONE_SECOND = 1000;

class GamePresenter {
  constructor(model) {
    this.model = model;
    this.header = new HeaderView(this.model.lifes, this.model.timer);
    this.content = new GameView(this.model.state, this.model.currentQuestionData);
    this.footer = render(footerTemplate);

    this.root = document.querySelector(`.central`);

    this.root.appendChild(this.header.element);
    this.content.onAnswer = this.answerHandler.bind(this);
    this.root.appendChild(this.content.element);
    this.root.appendChild(this.footer);

    this._interval = null;
  }

  answerHandler(answer) {
    answer.number = this.model.currentQuestionNumber;
    this.model.updateStateByAnswer(answer);
    this.updateGameScreen();
  }

  updateHeader() {
    const header = new HeaderView(this.model.lifes, this.model.timer);
    this.root.replaceChild(header.element, this.header.element);
    this.header = header;
  }

  updateGameForm() {
    const gameForm = new GameView(this.model.state, this.model.currentQuestionData);

    gameForm.onAnswer = this.answerHandler.bind(this);

    this.root.replaceChild(gameForm.element, this.content.element);
    this.content = gameForm;
  }

  updateGameScreen() {
    this.stopGame();
    if (this.model.isDead()) {
      Router.showStatistics(this.model.state, false, this.model._playerName);
    } else if (this.model.isEndReached()) {
      Router.showStatistics(this.model.state, true, this.model._playerName);
    } else {
      this.model.refreshTimer();
      this.updateHeader();
      this.updateGameForm();
      this.startGame();
    }
  }

  startGame() {
    this._interval = setInterval(() => {
      this.model.tick();
      if (this.model.timer > 0) {
        this.updateHeader();
      } else {
        this.model.updateStateByLateness();
        this.updateGameScreen();
      }
    }, ONE_SECOND);
  }

  stopGame() {
    clearInterval(this._interval);
  }
}

export default GamePresenter;
