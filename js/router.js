import IntroPresenter from './presenter/intro-presenter';
import GreetingPresenter from './presenter/greeting-presenter';
import RulesPresenter from './presenter/rules-presenter';
import GamePresenter from './presenter/game-presenter';
import StatisticsPresenter from './presenter/statistics-presenter';

import GameModel from './game-model';

const rootNode = document.querySelector(`.central`);

const changeView = (element) => {
  rootNode.innerHTML = ``;
  rootNode.appendChild(element);
};

export default class Router {
  static showIntro() {
    const introScreen = new IntroPresenter();
    changeView(introScreen.content.element);
  }

  static showGreeting() {
    const greetingScreen = new GreetingPresenter();
    changeView(greetingScreen.content.element);
  }

  static showRules() {
    const rulesScreen = new RulesPresenter();
    changeView(rulesScreen.content.element);
  }

  static showGame(playerName) {
    rootNode.innerHTML = ``;
    const gameModel = new GameModel(playerName);
    gameModel.questionNumber = 1;
    const gameScreen = new GamePresenter(gameModel);
    gameScreen.startGame();
  }

  static showStatistics(state, status, playerName) {
    const statScreen = new StatisticsPresenter(state, status, playerName);
    changeView(statScreen.content.element);
  }
}
