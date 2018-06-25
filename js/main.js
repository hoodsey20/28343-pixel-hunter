import IntroPresenter from './presenter/intro-presenter';
import GreetingPresenter from './presenter/greeting-presenter';
import RulesPresenter from './presenter/rules-presenter';
import GamePresenter from './presenter/game-presenter';

import GameModel from './game-model';

import RulesView from './view/rules';


import HeaderView from './view/header';

import {renderScreen, updateView, render} from './util';
import {getInitialState, gameQuestions} from './data/game-data';
import {checkAnswer} from './check-answer';
import {changeGameState} from './change-game-state';


const mainScreen = document.querySelector(`.central`);
// const introScreen = new IntroView();
// const greetingScreen = new GreetingView();

const rulesSubmitHandler = () => {
  mainScreen.innerHTML = ``;
  const gameModel = new GameModel();
  gameModel.questionNumber = 1;
  const gameScreen = new GamePresenter(gameModel);
  gameScreen.startGame();
};

/*
const getRulesTemplate = () => {
  const rulesScreen = new RulesView();
  rulesScreen.onSubmit = rulesSubmitHandler;
  // rulesScreen.onBack = () => renderScreen(greetingScreen.element);
  return rulesScreen.element;
};
*/
// introScreen.onClick = () => renderScreen(greetingScreen.element);
// greetingScreen.onClick = () => renderScreen(getRulesTemplate());

const rootNode = document.querySelector(`.central`);
const changeView = (element) => {
  rootNode.innerHTML = ``;
  rootNode.appendChild(element);
};

// renderScreen(introScreen.element);
const introScreen = new IntroPresenter();
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

changeView(introScreen.content.element);
