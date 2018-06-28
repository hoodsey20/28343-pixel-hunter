import {PointValue, GameCondition} from './consts';
import {getAnswerStatus} from './get-answer-status';

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

  for (const answer of answers) {
    const currentStatus = getAnswerStatus(answer);
    result += PointValue.get(currentStatus);
  }

  result += lives * PointValue.get(`LIFE`);

  return result;
};
