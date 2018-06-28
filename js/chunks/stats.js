import {AnswerStatus} from './../consts';
import {getAnswerStatus} from './../get-answer-status';

export const statsTemplate = (answers) => {

  const modificators = new Map();
  modificators.set(AnswerStatus.UNKNOWN, `unknown`);
  modificators.set(AnswerStatus.WRONG, `wrong`);
  modificators.set(AnswerStatus.SLOW, `slow`);
  modificators.set(AnswerStatus.FAST, `fast`);
  modificators.set(AnswerStatus.CORRECT, `correct`);

  const answersWithStatus = answers.map((item) => getAnswerStatus(item));

  const currentAnswers = answersWithStatus.concat(new Array(10 - answers.length).fill(AnswerStatus.UNKNOWN));

  let content = `<ul class="stats">`;

  for (const item of currentAnswers) {
    content += `<li class="stats__result  stats__result--${ modificators.get(item) }"></li>`;
  }

  content += `</ul>`;

  return content;
};
