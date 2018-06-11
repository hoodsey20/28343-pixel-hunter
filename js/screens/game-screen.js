import {gameQuestions} from './../data/game-data';
import {getElementFromTemplate, renderScreen} from './../util';
import {headerTemplate} from './../chunks/header';
import {statsTemplate} from './../chunks/stats';
import {footerTemplate} from './../chunks/footer';
import gameForm from './../chunks/game-form';
import {changeGameState} from './../change-game-state';
import {checkAnswer} from './../check-answer';
import statsScreen from './stats-screen';


const gameScreen = (data) => {
  const currentData = data;
  const question = gameQuestions[data.currentQuestion - 1];

  const content = `${headerTemplate(currentData)}
    <div class="game">
      <p class="game__task">${question.title}</p>
      ${gameForm(question.type).form(question)}
      <div class="stats">
        ${statsTemplate(currentData.answers)}
      </div>
    </div>${footerTemplate}`;

  const gameElement = getElementFromTemplate(content);

  const handleChangeScreen = (currentAnswer) => {
    const answerResult = checkAnswer(question, currentAnswer);
    const nextState = changeGameState(currentData, answerResult);

    if (nextState.lifes < 0) {
      renderScreen(statsScreen(nextState, false));
    } else if (nextState.currentQuestion > 10) {
      renderScreen(statsScreen(nextState, true));
    } else {
      renderScreen(gameScreen(nextState));
    }
  };

  gameForm(question.type).handler(gameElement, {number: data.currentQuestion}, handleChangeScreen);

  return gameElement;
};

export default gameScreen;
