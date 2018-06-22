import IntroView from './screens/intro';
import GreetingView from './screens/greeting';
import RulesView from './screens/rules';
import GameView from './screens/game';
import StatisticsView from './screens/statistics';

import {headerTemplate} from './chunks/header';
import {footerTemplate} from './chunks/footer';

import {renderScreen, updateView, render} from './util';
import {getInitialState, gameQuestions} from './data/game-data';
import {checkAnswer} from './check-answer';
import {changeGameState} from './change-game-state';

const mainScreen = document.querySelector(`.central`);
const introScreen = new IntroView();
const greetingScreen = new GreetingView();
const rulesScreen = new RulesView(getInitialState());

introScreen.onClick = () => renderScreen(greetingScreen.element);
greetingScreen.onClick = () => renderScreen(rulesScreen.element);
rulesScreen.onBack = () => renderScreen(greetingScreen.element);

const handleChangeGameScreen = (actualState) => {
  return (answer) => {
    const currentQuestion = gameQuestions[actualState.currentQuestion - 1];
    const answerResult = checkAnswer(currentQuestion, answer);
    const nextState = changeGameState(actualState, answerResult);

    if (nextState.lifes < 0 || nextState.currentQuestion > 10) {
      const gameEndStatus = nextState.lifes < 0 ? false : true;
      const statisticsScreen = new StatisticsView(nextState, gameEndStatus);
      renderScreen(statisticsScreen.element);
    } else {
      const nextQuestion = gameQuestions[nextState.currentQuestion - 1];

      const gameScreen = new GameView(nextState, nextQuestion);
      gameScreen.onAnswer = handleChangeGameScreen;

      const headerContainer = mainScreen.querySelector(`.header`).parentNode;
      const gameContainer = mainScreen.querySelector(`.game`).parentNode;

      updateView(headerContainer, render(headerTemplate(nextState)));
      updateView(gameContainer, gameScreen.element);
    }
  };
};

rulesScreen.onSubmit = (initState) => {
  const initQuestion = gameQuestions[initState.currentQuestion - 1];
  const gameScreen = new GameView(initState, initQuestion);

  gameScreen.onAnswer = handleChangeGameScreen;

  const headerContainer = render(headerTemplate(initState));
  const footerContainer = render(footerTemplate);

  mainScreen.innerHTML = ``;
  mainScreen.appendChild(headerContainer);
  mainScreen.appendChild(gameScreen.element);
  mainScreen.appendChild(footerContainer);
};

renderScreen(introScreen.element);
