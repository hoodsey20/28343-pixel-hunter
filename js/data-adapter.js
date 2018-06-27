import {questionTypes} from './data/game-data';

const Server2ResultMapper = {
  'tinder-like': questionTypes.SINGLE,
  'two-of-two': questionTypes.COUPLE,
  'one-of-three': questionTypes.TRIPLE,
};

export const dataAdapter = (data, numbering) => {
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
