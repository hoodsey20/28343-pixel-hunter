import {assert} from 'chai';
import {checkAnswer} from './../check-answer';
import {
  gameQuestions,
  correctAnswer1,
  wrongAnswer1,
  correctAnswer2,
  wrongAnswer2,
  correctAnswer3,
  wrongAnswer3,
} from './check-answer.data';


describe(`checkAnswer`, () => {

  it(`should not allow set non object value of question and not be null`, () => {
    assert.throws(() => checkAnswer(1), /Question should be of type object and not null/);
    assert.throws(() => checkAnswer(`asdasf`), /Question should be of type object and not null/);
    assert.throws(() => checkAnswer(null), /Question should be of type object and not null/);
    assert.throws(() => checkAnswer(NaN), /Question should be of type object and not null/);
    assert.throws(() => checkAnswer(true), /Question should be of type object and not null/);
    assert.throws(() => checkAnswer(undefined), /Question should be of type object and not null/);
  });

  it(`should not allow set non object value of answer and not be null`, () => {
    assert.throws(() => checkAnswer(gameQuestions[0], 1), /Answer should be of type object and not null/);
    assert.throws(() => checkAnswer(gameQuestions[0], `asdasf`), /Answer should be of type object and not null/);
    assert.throws(() => checkAnswer(gameQuestions[0], null), /Answer should be of type object and not null/);
    assert.throws(() => checkAnswer(gameQuestions[0], NaN), /Answer should be of type object and not null/);
    assert.throws(() => checkAnswer(gameQuestions[0], true), /Answer should be of type object and not null/);
    assert.throws(() => checkAnswer(gameQuestions[0], undefined), /Answer should be of type object and not null/);
  });

  it(`numbers of question and answer should be equal`, () => {
    assert.throws(() => checkAnswer(gameQuestions[0], correctAnswer2), /Numbers of question and answer should be equal/);
    assert.throws(() => checkAnswer(gameQuestions[1], correctAnswer1), /Numbers of question and answer should be equal/);
    assert.throws(() => checkAnswer(gameQuestions[2], correctAnswer2), /Numbers of question and answer should be equal/);
  });

  it(`should return false status in result with wrong answer`, () => {
    assert.equal(checkAnswer(gameQuestions[0], wrongAnswer1).status, false);
    assert.equal(checkAnswer(gameQuestions[1], wrongAnswer2).status, false);
    assert.equal(checkAnswer(gameQuestions[2], wrongAnswer3).status, false);
  });

  it(`should return true status in result with correct answer`, () => {
    assert.equal(checkAnswer(gameQuestions[0], correctAnswer1).status, true);
    assert.equal(checkAnswer(gameQuestions[1], correctAnswer2).status, true);
    assert.equal(checkAnswer(gameQuestions[2], correctAnswer3).status, true);
  });
});
