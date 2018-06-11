import {statsTemplate} from './stats';

export const failResultTemplate = (number, answers) => {

  const content = `<table class="result__table">
    <tr>
      <td class="result__number">${number}.</td>
      <td>
        ${statsTemplate(answers)}
      </td>
      <td class="result__total"></td>
      <td class="result__total  result__total--final">fail</td>
    </tr>
  </table>`;

  return content;
};
