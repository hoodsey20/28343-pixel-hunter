import GamePresenter from './presenter/game-presenter';
import GameModel from './game-model';

import IntroView from './view/intro';
import GreetingView from './view/greeting';
import RulesView from './view/rules';
import GameView from './view/game';
import StatisticsView from './view/statistics';

import HeaderView from './view/header';

import {footerTemplate} from './chunks/footer';

import {renderScreen, updateView, render} from './util';
import {getInitialState, gameQuestions} from './data/game-data';
import {checkAnswer} from './check-answer';
import {changeGameState} from './change-game-state';
import {createTimer} from './timer';
import {timerConditions} from './consts';

const ONE_SECOND = 1000;

let appTimer = createTimer(timerConditions.MAX);

const tick = () => {
  appTimer = appTimer.tick();
  console.log(appTimer.time);
  return !!appTimer;
};

let timer;

const startTimer = () => {
  timer = setTimeout(() => {
    if (tick()) {
      startTimer();
    } else {
      console.log('таймер кончился');
      stopTimer();
    }
  }, ONE_SECOND);
};

const stopTimer = () => {
  clearTimeout(timer);
};


const mainScreen = document.querySelector(`.central`);
const introScreen = new IntroView();
const greetingScreen = new GreetingView();

const rulesSubmitHandler = () => {
  mainScreen.innerHTML = ``;
  const gameModel = new GameModel();
  gameModel.questionNumber = 1;
  const gameScreen = new GamePresenter(gameModel);
  gameScreen.startGame();

  /*
  const initState = getInitialState();
  initState.currentQuestion++;
  const initQuestion = gameQuestions[initState.currentQuestion - 1];
  const gameScreen = new GameView(initState, initQuestion);

  gameScreen.onAnswer = handleChangeGameScreen;

  const headerView = new HeaderView(initState.lifes, initState.timer);
  headerView.onBack = () => renderScreen(getRulesTemplate());

  const footerContainer = render(footerTemplate);

  mainScreen.innerHTML = ``;
  mainScreen.appendChild(headerView.element);
  mainScreen.appendChild(gameScreen.element);
  mainScreen.appendChild(footerContainer);
  */
};

const getRulesTemplate = () => {
  const rulesScreen = new RulesView();
  rulesScreen.onSubmit = rulesSubmitHandler;
  rulesScreen.onBack = () => renderScreen(greetingScreen.element);
  return rulesScreen.element;
};

introScreen.onClick = () => renderScreen(greetingScreen.element);
greetingScreen.onClick = () => renderScreen(getRulesTemplate());

const handleChangeGameScreen = (actualState) => {
  return (answer) => {
    const currentQuestion = gameQuestions[actualState.currentQuestion - 1];
    const answerResult = checkAnswer(currentQuestion, answer);
    const nextState = changeGameState(actualState, answerResult);

    if (nextState.lifes < 0 || nextState.currentQuestion > 10) {
      const gameEndStatus = nextState.lifes < 0 ? false : true;
      const statisticsScreen = new StatisticsView(nextState, gameEndStatus);
      statisticsScreen.onBack = () => renderScreen(getRulesTemplate());
      renderScreen(statisticsScreen.element);
    } else {
      const nextQuestion = gameQuestions[nextState.currentQuestion - 1];

      const gameScreen = new GameView(nextState, nextQuestion);
      gameScreen.onAnswer = handleChangeGameScreen;

      const headerContainer = mainScreen.querySelector(`.header`).parentNode;
      const gameContainer = mainScreen.querySelector(`.game`).parentNode;
      const headerView = new HeaderView(nextState.lifes, nextState.timer);

      headerView.onBack = () => renderScreen(getRulesTemplate());
      updateView(headerContainer, headerView.element);
      updateView(gameContainer, gameScreen.element);
    }
  };
};

renderScreen(introScreen.element);
