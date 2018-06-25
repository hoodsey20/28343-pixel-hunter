import Router from './router';

Router.showIntro();

/*
import GameModel from './game-model';

const rootNode = document.querySelector(`.central`);

const changeView = (element) => {
  rootNode.innerHTML = ``;
  rootNode.appendChild(element);
};


const rulesSubmitHandler = () => {
  rootNode.innerHTML = ``;
  const gameModel = new GameModel();
  gameModel.questionNumber = 1;
  const gameScreen = new GamePresenter(gameModel);
  gameScreen.startGame();
};


const greetingScreen = new GreetingPresenter();
const rulesScreen = new RulesPresenter();

introScreen.clickHandler = () => {
  changeView(greetingScreen.content.element);
};

greetingScreen.clickHandler = () => {
  changeView(rulesScreen.content.element);
};

rulesScreen.backButtonHandler = () => {
  changeView(greetingScreen.content.element);
};

rulesScreen.submitHandler = rulesSubmitHandler;
*/
