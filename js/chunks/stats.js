import {answerStatus} from './../consts';
import {getAnswerStatus} from './../get-answer-status';

export const statsTemplate = (answers) => {

  const modificators = new Map();
  modificators.set(answerStatus.UNKNOWN, `unknown`);
  modificators.set(answerStatus.WRONG, `wrong`);
  modificators.set(answerStatus.SLOW, `slow`);
  modificators.set(answerStatus.FAST, `fast`);
  modificators.set(answerStatus.CORRECT, `correct`);

  const answersWithStatus = answers.map((item) => getAnswerStatus(item));

  const currentAnswers = answersWithStatus.concat(new Array(10 - answers.length).fill(answerStatus.UNKNOWN));

  let content = `<ul class="stats">`;

  for (let item of currentAnswers) {
    content += `<li class="stats__result  stats__result--${ modificators.get(item) }"></li>`;
  }

  content += `</ul>`;

  return content;
};
