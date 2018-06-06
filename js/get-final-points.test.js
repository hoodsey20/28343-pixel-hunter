import {assert} from 'chai';
import {getFinalPoints, mainConditions, timerConditions} from './get-final-points.js';
import {mockAnswersOne} from './get-final-points.data.js';

const defaultAnswers = Array.from(Array(mainConditions.QUESTIONS)).map(() => (
  {status: true, time: timerConditions.QUICK}
));


describe(`getFinalPoints`, () => {

  it(`should return -1 when the answers array length < 10`, () => {
    assert.equal(getFinalPoints(defaultAnswers.slice(0, 0)), -1);
    assert.equal(getFinalPoints(defaultAnswers.slice(0, 1)), -1);
    assert.equal(getFinalPoints(defaultAnswers.slice(0, 8)), -1);
  });

  it(`should return 1150 when the all answers correct with normal time and all lives saved`, () => {
    assert.equal(getFinalPoints(defaultAnswers, mainConditions.LIFES), 1150);
  });

  it(`should return 1100 when the all answers correct with normal time and 2 lives saved`, () => {
    assert.equal(getFinalPoints(defaultAnswers, 2), 1100);
  });

  it(`should return 1050 when the all answers correct with normal time and 1 live saved`, () => {
    assert.equal(getFinalPoints(defaultAnswers, 1), 1050);
  });

  it(`should return 1000 when the all answers correct with normal time and 0 lives saved`, () => {
    assert.equal(getFinalPoints(defaultAnswers, 0), 1000);
  });

  it(`should return 650 when the all answers correct with slow time and all lives saved`, () => {
    assert.equal(getFinalPoints(
        defaultAnswers.map(() => ({status: true, time: timerConditions.SLOW + 1})),
        mainConditions.LIFES
    ), 650);
  });

  it(`should return 1650 when the all answers correct with quick time and all lives saved`, () => {
    assert.equal(getFinalPoints(
        defaultAnswers.map(() => ({status: true, time: timerConditions.QUICK - 1})),
        mainConditions.LIFES
    ), 1650);
  });

  it(`should not allow set non number value of lives`, () => {
    assert.throws(() => getFinalPoints(defaultAnswers, `3`), /Lives should be of type number/);
  });

  it(`should not allow set negative values of lives`, () => {
    assert.throws(() => getFinalPoints(defaultAnswers, -1), /Lives should not be negative value/);
  });

  it(`should return 650 when the 5 answers correct with normal time and all lives saved`, () => {
    assert.equal(getFinalPoints(
        defaultAnswers.map((item, index) =>
          ({status: index > 4, time: timerConditions.QUICK})),
        mainConditions.LIFES
    ), 650);
  });

  it(`should return 500 when the 5 answers correct with normal time and 0 lives saved`, () => {
    assert.equal(getFinalPoints(
        defaultAnswers.map((item, index) =>
          ({status: index < 5, time: timerConditions.QUICK})),
        0
    ), 500);
  });

  it(`should return 300 when the 3 answers correct with normal time and 0 lives saved`, () => {
    assert.equal(getFinalPoints(
        defaultAnswers.map((item, index) =>
          ({status: index < 3, time: timerConditions.QUICK})),
        0
    ), 300);
  });

  it(`should return 200 when the 2 answers correct with normal time and 0 lives saved`, () => {
    assert.equal(getFinalPoints(
        defaultAnswers.map((item, index) =>
          ({status: index < 2, time: timerConditions.QUICK})),
        0
    ), 200);
  });

  it(`should return 400 when the 2 answers correct with qick time and 2 lives saved`, () => {
    assert.equal(getFinalPoints(
        defaultAnswers.map((item, index) =>
          ({status: index < 2, time: timerConditions.QUICK - 1})),
        2
    ), 400);
  });

  it(`should return 500 in mockAnswersOne-case data and 0 lives saved`, () => {
    assert.equal(getFinalPoints(mockAnswersOne, 0), 500);
  });

  it(`should return 450 in opposite mockAnswersOne-case data and 0 lives saved`, () => {
    assert.equal(getFinalPoints(
        mockAnswersOne.map((item) =>
          ({status: !item.status, time: item.time})),
        0
    ), 450);
  });

});
