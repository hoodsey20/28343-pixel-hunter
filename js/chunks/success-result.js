import {AnswerStatus, PointValue} from './../consts';
import {getAnswerStatus} from './../get-answer-status';
import {statsTemplate} from './stats';
import {getFinalPoints} from './../get-final-points';

export const successResultTemplate = (number, answers, lifes) => {

  const result = getFinalPoints(answers, lifes);

  const correctAnswerPoints = PointValue.get(AnswerStatus.CORRECT);
  const lifePoints = PointValue.get(`LIFE`);
  const fastAnswerImpact = PointValue.get(AnswerStatus.FAST) - correctAnswerPoints;
  const slowAnswerImpact = Math.abs(PointValue.get(AnswerStatus.SLOW) - correctAnswerPoints);

  const getFastBonusTemplate = (length) => `<tr>
    <td></td>
    <td class="result__extra">Бонус за скорость:</td>
    <td class="result__extra">${length}&nbsp;<span class="stats__result stats__result--fast"></span></td>
    <td class="result__points">×&nbsp;${fastAnswerImpact}</td>
    <td class="result__total">${length * fastAnswerImpact}</td>
  </tr>`;

  const getLifeBonusTemplate = (length) => `<tr>
    <td></td>
    <td class="result__extra">Бонус за жизни:</td>
    <td class="result__extra">${length}&nbsp;<span class="stats__result stats__result--alive"></span></td>
    <td class="result__points">×&nbsp;${lifePoints}</td>
    <td class="result__total">${length * lifePoints}</td>
  </tr>`;

  const getSlowPenaltyTemplate = (length) => `<tr>
    <td></td>
    <td class="result__extra">Штраф за медлительность:</td>
    <td class="result__extra">${length}&nbsp;<span class="stats__result stats__result--slow"></span></td>
    <td class="result__points">×&nbsp;${slowAnswerImpact}</td>
    <td class="result__total">-${length * slowAnswerImpact}</td>
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
      <td class="result__points">×&nbsp;${correctAnswerPoints}</td>
      <td class="result__total">${rightAnswersLength * correctAnswerPoints}</td>`;

  if (fastAnswersLength) {
    content += getFastBonusTemplate(fastAnswersLength);
  }

  if (lifes) {
    content += getLifeBonusTemplate(lifes);
  }

  if (slowAnswersLength) {
    content += getSlowPenaltyTemplate(slowAnswersLength);
  }

  content += `<tr>
    <td colspan="5" class="result__total  result__total--final">${result}</td>
  </tr>`;

  content += `</table>`;

  return content;
};
