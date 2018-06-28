import {AnswerStatus, GameCondition} from './consts';
import {getAnswerStatus} from './get-answer-status';


const points = new Map();
points.set(`LIFE`, 50);
points.set(AnswerStatus.WRONG, 0);
points.set(AnswerStatus.SLOW, 50);
points.set(AnswerStatus.CORRECT, 100);
points.set(AnswerStatus.FAST, 150);


export const getFinalPoints = (answers, lives) => {
  if (answers.length < GameCondition.QUESTIONS) {
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
