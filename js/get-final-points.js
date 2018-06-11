import {answerStatus} from './consts';
import {getAnswerStatus} from './get-answer-status';

export const mainConditions = {
  QUESTIONS: 10,
  LIFES: 3,
};

const points = new Map();
points.set(`LIFE`, 50);
points.set(answerStatus.WRONG, 0);
points.set(answerStatus.SLOW, 50);
points.set(answerStatus.CORRECT, 100);
points.set(answerStatus.FAST, 150);


export const getFinalPoints = (answers, lives) => {
  if (answers.length < mainConditions.QUESTIONS) {
    return -1;
  }

  if (typeof lives !== `number`) {
    throw new Error(`Lives should be of type number`);
  }

  if (lives < 0) {
    throw new Error(`Lives should not be negative value`);
  }

  let result = 0;

  answers.forEach((answer) => {
    const currentStatus = getAnswerStatus(answer);
    result += points.get(currentStatus);
  });

  result += lives * points.get(`LIFE`);

  return result;
};
