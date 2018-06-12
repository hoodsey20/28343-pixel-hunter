import IntroView from './screens/intro';
import GreetingView from './screens/greeting';
import RulesView from './screens/rules';
import GameView from './screens/game';
import StatisticsView from './screens/statistics';

import {renderScreen} from './util';
import {getInitialState, gameQuestions} from './data/game-data';
import {checkAnswer} from './check-answer';
import {changeGameState} from './change-game-state';

const introScreen = new IntroView();
const greetingScreen = new GreetingView();
const rulesScreen = new RulesView(getInitialState());

introScreen.onClick = () => renderScreen(greetingScreen.element);
greetingScreen.onClick = () => renderScreen(rulesScreen.element);
rulesScreen.onBack = () => renderScreen(greetingScreen.element);

rulesScreen.onSubmit = (initState) => {
  const initQuestion = gameQuestions[initState.currentQuestion - 1];
  const gameScreen = new GameView(initState, initQuestion);
  gameScreen.onBack = () => renderScreen(greetingScreen.element);

  const handleChangeGameScreen = (actualState) => {
    return (answer) => {
      const currentQuestion = gameQuestions[actualState.currentQuestion - 1];
      const answerResult = checkAnswer(currentQuestion, answer);
      const nextState = changeGameState(actualState, answerResult);
      let nextScreen;

      if (nextState.lifes < 0) {
        nextScreen = new StatisticsView(nextState, false);
      } else if (nextState.currentQuestion > 10) {
        nextScreen = new StatisticsView(nextState, true);
        nextScreen.onBack = () => renderScreen(greetingScreen.element);
      } else {
        nextScreen = new GameView(nextState, gameQuestions[nextState.currentQuestion - 1]);
        nextScreen.onAnswer = handleChangeGameScreen;
      }
      renderScreen(nextScreen.element);
    };
  };

  gameScreen.onAnswer = handleChangeGameScreen;

  renderScreen(gameScreen.element);
};

renderScreen(introScreen.element);
