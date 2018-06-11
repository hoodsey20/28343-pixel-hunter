import {answerStatus, timerConditions} from './consts';

export const getAnswerStatus = (answer) => {

  if (typeof answer !== `object` || answer === null) {
    throw new Error(`Answer should be of type object and not null`);
  }

  if (answer.time < 0) {
    throw new Error(`Answer time should have not negative meaning`);
  }

  let status;

  if (answer.status === false || answer.time > timerConditions.MAX) {
    return answerStatus.WRONG;
  }

  if (answer.time < timerConditions.FAST) {
    status = answerStatus.FAST;
  } else if (answer.time > timerConditions.SLOW) {
    status = answerStatus.SLOW;
  } else {
    status = answerStatus.CORRECT;
  }

  return status;
};
