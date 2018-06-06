export const mainConditions = {
  QUESTIONS: 10,
  LIFES: 3,
};

const points = {
  LIFE: 50,
  NORMAL: 100,
  QUICK: 150,
  SLOW: 50,
};

export const timerConditions = {
  QUICK: 10,
  SLOW: 20,
  MAX: 30,
};

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
    if (answer.status === true) {
      if (answer.time < timerConditions.QUICK) {
        result += points.QUICK;
      } else if (answer.time > timerConditions.SLOW) {
        result += points.SLOW;
      } else {
        result += points.NORMAL;
      }
    }
  });

  result += lives * points.LIFE;

  return result;
};
