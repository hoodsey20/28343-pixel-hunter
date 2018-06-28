import {assert} from 'chai';
import {getAnswerStatus} from './../get-answer-status';
import {AnswerStatus} from './../consts';

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
    assert.equal(getAnswerStatus({status: false, time: 1}), AnswerStatus.WRONG);
    assert.equal(getAnswerStatus({status: false, time: 99}), AnswerStatus.WRONG);
    assert.equal(getAnswerStatus({status: false, time: 20}), AnswerStatus.WRONG);
  });

  it(`should return 'WRONG' in result with answer time > MAX`, () => {
    assert.equal(getAnswerStatus({status: true, time: 30.5}), AnswerStatus.WRONG);
    assert.equal(getAnswerStatus({status: true, time: 99}), AnswerStatus.WRONG);
    assert.equal(getAnswerStatus({status: true, time: 31}), AnswerStatus.WRONG);
  });

  it(`should return 'SLOW' in result with 20 < time <= 30`, () => {
    assert.equal(getAnswerStatus({status: true, time: 21}), AnswerStatus.SLOW);
    assert.equal(getAnswerStatus({status: true, time: 22}), AnswerStatus.SLOW);
    assert.equal(getAnswerStatus({status: true, time: 30}), AnswerStatus.SLOW);
  });

  it(`should return 'CORRECT' in result with 10 <= time <= 20`, () => {
    assert.equal(getAnswerStatus({status: true, time: 10}), AnswerStatus.CORRECT);
    assert.equal(getAnswerStatus({status: true, time: 15}), AnswerStatus.CORRECT);
    assert.equal(getAnswerStatus({status: true, time: 20}), AnswerStatus.CORRECT);
  });

  it(`should return 'FAST' in result with time < 10`, () => {
    assert.equal(getAnswerStatus({status: true, time: 0}), AnswerStatus.FAST);
    assert.equal(getAnswerStatus({status: true, time: 9}), AnswerStatus.FAST);
    assert.equal(getAnswerStatus({status: true, time: 2}), AnswerStatus.FAST);
  });

});
