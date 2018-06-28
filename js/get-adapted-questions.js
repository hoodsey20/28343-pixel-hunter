import {QuestionType} from './consts';


const Server2ResultMapper = {
  'tinder-like': QuestionType.SINGLE,
  'two-of-two': QuestionType.COUPLE,
  'one-of-three': QuestionType.TRIPLE,
};

export const getAdaptedQuestions = (data, numbering) => {
  const preprocessed = data.map((serverQuestion, index) => {
    const preprocessedQuestion = {
      title: serverQuestion.question,
      type: Server2ResultMapper[serverQuestion.type],
      photos: serverQuestion.answers.map((answer) => {
        const type = answer.type;
        return {
          source: type === `painting` ? `paint` : type,
          src: answer.image.url,
        };
      })
    };

    if (numbering) {
      preprocessedQuestion.number = index + 1;
    }

    return preprocessedQuestion;
  });

  return preprocessed;
};
