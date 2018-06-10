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
      ${gameForm(question)}
      <div class="stats">
        ${statsTemplate(currentData.answers)}
      </div>
    </div>${footerTemplate}`;

  const gameElement = getElementFromTemplate(content);

  const form = gameElement.querySelector(`.game__content`);
  const answer = {
    number: data.currentQuestion,
  };

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

  switch (question.type) {
    case `single`:

      form.querySelectorAll(`[type="radio"]`).forEach((radio) => {
        radio.addEventListener(`change`, () => {
          answer.question1 = form.querySelector(`[name="question1"]:checked`).value;
          handleChangeScreen(answer);
        });
      });
      break;

    case `couple`:

      const radioChangeHandler = () => {
        if (form.querySelector(`[name="question1"]:checked`) && form.querySelector(`[name="question2"]:checked`)) {
          answer.question1 = form.querySelector(`[name="question1"]:checked`).value;
          answer.question2 = form.querySelector(`[name="question2"]:checked`).value;
          handleChangeScreen(answer);
        }
      };

      form.querySelectorAll(`[type="radio"]`).forEach((radio) => {
        radio.addEventListener(`change`, radioChangeHandler);
      });

      break;

    case `triple`:

      form.querySelectorAll(`.game__option`).forEach((option) => {
        option.addEventListener(`click`, function (evt) {
          answer.question1 = Number(evt.target.dataset.number);
          handleChangeScreen(answer);
        });
      });

      break;
  }

  return gameElement;
};

export default gameScreen;
