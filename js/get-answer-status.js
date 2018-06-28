import {AnswerStatus, TimerCondition} from './consts';

export const getAnswerStatus = (answer) => {

  if (typeof answer !== `object` || answer === null) {
    throw new Error(`Answer should be of type object and not null`);
  }

  if (answer.time < 0) {
    throw new Error(`Answer time should have not negative meaning`);
  }

  let status;

  if (answer.status === false || answer.time > TimerCondition.MAX) {
    return AnswerStatus.WRONG;
  }

  if (answer.time < TimerCondition.FAST) {
    status = AnswerStatus.FAST;
  } else if (answer.time > TimerCondition.SLOW) {
    status = AnswerStatus.SLOW;
  } else {
    status = AnswerStatus.CORRECT;
  }

  return status;
};
