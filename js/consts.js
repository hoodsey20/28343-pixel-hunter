export const GameCondition = {
  QUESTIONS: 10,
  LIFES: 3,
};

export const AnswerStatus = {
  UNKNOWN: `UNKNOWN`,
  WRONG: `WRONG`,
  SLOW: `SLOW`,
  FAST: `FAST`,
  CORRECT: `CORRECT`
};

export const PointValue = new Map();
PointValue.set(`LIFE`, 50);
PointValue.set(AnswerStatus.WRONG, 0);
PointValue.set(AnswerStatus.SLOW, 50);
PointValue.set(AnswerStatus.CORRECT, 100);
PointValue.set(AnswerStatus.FAST, 150);

export const TimerCondition = {
  FAST: 10,
  SLOW: 20,
  MAX: 30,
};

export const QuestionType = {
  SINGLE: `single`,
  COUPLE: `couple`,
  TRIPLE: `triple`,
};
