import {getInitialState, tick} from './data/game-data';
import {checkAnswer} from './check-answer';
import {changeGameState} from './change-game-state';

import {TimerCondition} from './consts';

class GameModel {
  constructor(name = `Unnamed`, questions, state = getInitialState()) {
    this._state = state;
    this._questions = questions;
    this._playerName = name;
  }

  get state() {
    return Object.freeze(this._state);
  }

  get currentQuestionNumber() {
    return this._state.currentQuestion;
  }

  get currentQuestionData() {
    return this._questions[this.currentQuestionNumber - 1];
  }

  get lifes() {
    return this._state.lifes;
  }

  get answers() {
    return this._state.answers;
  }

  get timer() {
    return this._state.timer;
  }

  set questionNumber(value) {
    this._state.currentQuestion = value;
  }

  refreshTimer() {
    this._state.timer = TimerCondition.MAX;
  }

  isDead() {
    return this._state.lifes < 0;
  }

  isEndReached() {
    return this.currentQuestionNumber > this._questions.length;
  }

  tick() {
    this._state = tick(this._state);
  }

  updateStateByAnswer(answer) {
    const answerResult = checkAnswer(this.currentQuestionData, answer, TimerCondition.MAX - this._state.timer);
    this._state = changeGameState(this._state, answerResult);
  }

  updateStateByLateness() {
    this._state = changeGameState(this._state,
        {status: false, time: 0}
    );
  }
}

export default GameModel;
