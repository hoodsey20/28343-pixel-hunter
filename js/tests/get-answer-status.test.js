import {assert} from 'chai';
import {getAnswerStatus} from './../get-answer-status';
import {answerStatus} from './../consts';

describe(`get answer status`, () => {

  it(`should not allow set non object value of answer and not be null`, () => {
    assert.throws(() => getAnswerStatus(1), /Answer should be of type object and not null/);
    assert.throws(() => getAnswerStatus(`asdasf`), /Answer should be of type object and not null/);
    assert.throws(() => getAnswerStatus(null), /Answer should be of type object and not null/);
    assert.throws(() => getAnswerStatus(NaN), /Answer should be of type object and not null/);
    assert.throws(() => getAnswerStatus(true), /Answer should be of type object and not null/);
    assert.throws(() => getAnswerStatus(undefined), /Answer should be of type object and not null/);
  });

  it(`Answer time should have not negative meaning`, () => {
    assert.throws(() => getAnswerStatus({status: true, time: -1}), /Answer time should have not negative meaning/);
    assert.throws(() => getAnswerStatus({status: true, time: -99}), /Answer time should have not negative meaning/);
  });

  it(`should return 'WRONG' in result with answer false status`, () => {
    assert.equal(getAnswerStatus({status: false, time: 1}), answerStatus.WRONG);
    assert.equal(getAnswerStatus({status: false, time: 99}), answerStatus.WRONG);
    assert.equal(getAnswerStatus({status: false, time: 20}), answerStatus.WRONG);
  });

  it(`should return 'WRONG' in result with answer time > MAX`, () => {
    assert.equal(getAnswerStatus({status: true, time: 30.5}), answerStatus.WRONG);
    assert.equal(getAnswerStatus({status: true, time: 99}), answerStatus.WRONG);
    assert.equal(getAnswerStatus({status: true, time: 31}), answerStatus.WRONG);
  });

  it(`should return 'SLOW' in result with 20 < time <= 30`, () => {
    assert.equal(getAnswerStatus({status: true, time: 21}), answerStatus.SLOW);
    assert.equal(getAnswerStatus({status: true, time: 22}), answerStatus.SLOW);
    assert.equal(getAnswerStatus({status: true, time: 30}), answerStatus.SLOW);
  });

  it(`should return 'CORRECT' in result with 10 <= time <= 20`, () => {
    assert.equal(getAnswerStatus({status: true, time: 10}), answerStatus.CORRECT);
    assert.equal(getAnswerStatus({status: true, time: 15}), answerStatus.CORRECT);
    assert.equal(getAnswerStatus({status: true, time: 20}), answerStatus.CORRECT);
  });

  it(`should return 'FAST' in result with time < 10`, () => {
    assert.equal(getAnswerStatus({status: true, time: 0}), answerStatus.FAST);
    assert.equal(getAnswerStatus({status: true, time: 9}), answerStatus.FAST);
    assert.equal(getAnswerStatus({status: true, time: 2}), answerStatus.FAST);
  });

});
