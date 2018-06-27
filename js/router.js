import IntroPresenter from './presenter/intro-presenter';
import GreetingPresenter from './presenter/greeting-presenter';
import RulesPresenter from './presenter/rules-presenter';
import GamePresenter from './presenter/game-presenter';
import StatisticsPresenter from './presenter/statistics-presenter';
import ModalErrorView from './view/modal-error';
import ModalConfirmView from './view/modal-confirm';

import GameModel from './game-model';

import Api from './api';

const rootNode = document.querySelector(`.central`);

const changeView = (element) => {
  rootNode.innerHTML = ``;
  rootNode.appendChild(element);
};

let gameQuestionsData = null;

export default class Router {
  static showIntro() {
    const introScreen = new IntroPresenter();
    changeView(introScreen.content.element);
    Api.loadData()
      .then((data) => {
        gameQuestionsData = data;
        return gameQuestionsData;
      })
      .then(() => this.showGreeting())
      .catch((err) => this.showError(err));
  }

  static showError(error) {
    rootNode.appendChild(new ModalErrorView(error).element);
  }

  static showGreeting() {
    const greetingScreen = new GreetingPresenter();
    changeView(greetingScreen.content.element);
  }

  static showDialog(onSubmitHandler) {
    const confirmScreen = new ModalConfirmView();
    const modalNode = confirmScreen.element;
    confirmScreen.onClose = confirmScreen.onCancel = () => {
      rootNode.removeChild(modalNode);
    };
    confirmScreen.onSubmit = onSubmitHandler;
    rootNode.appendChild(modalNode);
  }

  static showRules() {
    const rulesScreen = new RulesPresenter();
    changeView(rulesScreen.content.element);
  }

  static showGame(playerName) {
    rootNode.innerHTML = ``;
    const gameModel = new GameModel(playerName, gameQuestionsData);
    gameModel.questionNumber = 1;
    const gameScreen = new GamePresenter(gameModel);
    gameScreen.startGame();
  }

  static showStatistics(state, status, playerName) {
    const statScreen = new StatisticsPresenter(state, status, playerName);
    changeView(statScreen.content.element);
  }
}
