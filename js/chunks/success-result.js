import {AnswerStatus} from './../consts';
import {getAnswerStatus} from './../get-answer-status';
import {statsTemplate} from './stats';
import {getFinalPoints} from './../get-final-points';

export const successResultTemplate = (number, answers, lifes) => {

  const result = getFinalPoints(answers, lifes);

  const points = {
    ANSWER: 100,
    FAST: 50,
    LIFE: 50,
    SLOW: 50,
  };

  const fastBonus = (length) => `<tr>
    <td></td>
    <td class="result__extra">Бонус за скорость:</td>
    <td class="result__extra">${length}&nbsp;<span class="stats__result stats__result--fast"></span></td>
    <td class="result__points">×&nbsp;${points.FAST}</td>
    <td class="result__total">${length * points.FAST}</td>
  </tr>`;

  const lifeBonus = (length) => `<tr>
    <td></td>
    <td class="result__extra">Бонус за жизни:</td>
    <td class="result__extra">${length}&nbsp;<span class="stats__result stats__result--alive"></span></td>
    <td class="result__points">×&nbsp;${points.LIFE}</td>
    <td class="result__total">${length * points.LIFE}</td>
  </tr>`;

  const slowPenalty = (length) => `<tr>
    <td></td>
    <td class="result__extra">Штраф за медлительность:</td>
    <td class="result__extra">${length}&nbsp;<span class="stats__result stats__result--slow"></span></td>
    <td class="result__points">×&nbsp;${points.SLOW}</td>
    <td class="result__total">-${length * points.SLOW}</td>
  </tr>`;

  let rightAnswersLength = 0;
  let fastAnswersLength = 0;
  let slowAnswersLength = 0;

  for (let item of answers) {
    const status = getAnswerStatus(item);

    if (status !== AnswerStatus.WRONG) {
      rightAnswersLength++;
    }

    if (status === AnswerStatus.FAST) {
      fastAnswersLength++;
    }

    if (status === AnswerStatus.SLOW) {
      slowAnswersLength++;
    }
  }

  let content = `<table class="result__table">
    <tr>
      <td class="result__number">${number}.</td>
      <td colspan="2">
        ${statsTemplate(answers)}
      </td>
      <td class="result__points">×&nbsp;${points.ANSWER}</td>
      <td class="result__total">${rightAnswersLength * points.ANSWER}</td>`;

  if (fastAnswersLength) {
    content += fastBonus(fastAnswersLength);
  }

  if (lifes) {
    content += lifeBonus(lifes);
  }

  if (slowAnswersLength) {
    content += slowPenalty(slowAnswersLength);
  }

  content += `<tr>
    <td colspan="5" class="result__total  result__total--final">${result}</td>
  </tr>`;

  content += `</table>`;

  return content;
};
