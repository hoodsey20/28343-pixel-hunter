import {assert} from 'chai';
import {changeGameState} from './../change-game-state';
import {getInitialState} from './../data/game-data';

const correctAnswerSample = {
  time: 15,
  status: true,
};

const wrongAnswerSample = {
  time: 15,
  status: false,
};


describe(`changeGameState`, () => {

  it(`should not allow set non object value of state and not be null`, () => {
    assert.throws(() => changeGameState(1), /State should be of type object and not null/);
    assert.throws(() => changeGameState(`asdasf`), /State should be of type object and not null/);
    assert.throws(() => changeGameState(null), /State should be of type object and not null/);
    assert.throws(() => changeGameState(NaN), /State should be of type object and not null/);
    assert.throws(() => changeGameState(true), /State should be of type object and not null/);
    assert.throws(() => changeGameState(undefined), /State should be of type object and not null/);
  });

  it(`should not allow set non object value of answer and not be null`, () => {
    assert.throws(() => changeGameState(getInitialState(), 1), /Answer should be of type object and not null/);
    assert.throws(() => changeGameState(getInitialState(), `asdasf`), /Answer should be of type object and not null/);
    assert.throws(() => changeGameState(getInitialState(), null), /Answer should be of type object and not null/);
    assert.throws(() => changeGameState(getInitialState(), NaN), /Answer should be of type object and not null/);
    assert.throws(() => changeGameState(getInitialState(), true), /Answer should be of type object and not null/);
    assert.throws(() => changeGameState(getInitialState(), undefined), /Answer should be of type object and not null/);
  });

  it(`should not allow set currentQuestion more then 10`, () => {
    const tenLevelState = getInitialState();
    tenLevelState.currentQuestion = 11;
    assert.throws(() => changeGameState(tenLevelState, correctAnswerSample), /should not allow set currentQuestion more then 10/);
  });


  it(`should increase by 1 answers in state when answer passed`, () => {
    assert.equal(changeGameState(getInitialState(), correctAnswerSample).answers.length, 1);
    assert.equal(changeGameState(getInitialState(), wrongAnswerSample).answers.length, 1);
  });

  it(`should subtract 1 life in case of wrong answer`, () => {
    assert.equal(changeGameState(getInitialState(), wrongAnswerSample).lifes, 2);
  });

  it(`should increase level by 1 when answer passed and level < 10`, () => {
    const nineLevelState = getInitialState();
    nineLevelState.currentQuestion = 9;
    assert.equal(changeGameState(getInitialState(), wrongAnswerSample).currentQuestion, 1);
    assert.equal(changeGameState(getInitialState(), correctAnswerSample).currentQuestion, 1);
    assert.equal(changeGameState(nineLevelState, correctAnswerSample).currentQuestion, 10);
  });

});
