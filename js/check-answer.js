import {QuestionType} from './consts';

export const checkAnswer = (question, answer, answerTime) => {
  if (typeof question !== `object` || question === null) {
    throw new Error(`Question should be of type object and not null`);
  }

  if (typeof answer !== `object` || answer === null) {
    throw new Error(`Answer should be of type object and not null`);
  }

  if (question.number !== answer.number) {
    throw new Error(`Numbers of question and answer should be equal`);
  }

  let answerCheckResult = {status: false, time: answerTime};

  switch (question.type) {
    case QuestionType.SINGLE:
      if (question.photos[0].source === answer.question1) {
        answerCheckResult.status = true;
      }
      break;

    case QuestionType.COUPLE:
      if (question.photos[0].source === answer.question1 &&
        question.photos[1].source === answer.question2) {
        answerCheckResult.status = true;
      }
      break;

    case QuestionType.TRIPLE:
      const photos = question.photos;
      const guessedUniqueType = question.photos[answer.question1 - 1].source;
      const picsWithSelectedType = photos.filter((photo) => photo.source === guessedUniqueType);

      if (picsWithSelectedType.length === 1) {
        answerCheckResult.status = true;
      }
      break;
  }

  return Object.assign({}, answerCheckResult);
};
