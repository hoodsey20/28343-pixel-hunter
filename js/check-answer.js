export const checkAnswer = (question, answer) => {

  if (typeof question !== `object` || question === null) {
    throw new Error(`Question should be of type object and not null`);
  }

  if (typeof answer !== `object` || answer === null) {
    throw new Error(`Answer should be of type object and not null`);
  }

  if (question.number !== answer.number) {
    throw new Error(`Numbers of question and answer should be equal`);
  }

  // пока нет реализации таймера, делаем имитацию
  const defaultTime = Math.random() * (30 - 1) + 1;

  let answerCheckResult = {status: false, time: defaultTime};

  switch (question.type) {
    case `single`:
      if (question.photos[0].source === answer.question1) {
        answerCheckResult = {status: true, time: defaultTime};
      }
      break;

    case `couple`:
      if (question.photos[0].source === answer.question1 &&
        question.photos[1].source === answer.question2) {
        answerCheckResult = {status: true, time: defaultTime};
      }
      break;

    case `triple`:
      if (question.photos[answer.question1 - 1].source === `paint`) {
        answerCheckResult = {status: true, time: defaultTime};
      }
      break;
  }

  return Object.assign({}, answerCheckResult);
};
