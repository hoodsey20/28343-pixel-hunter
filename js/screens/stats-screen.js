import {getElementFromTemplate} from './../util';
import {headerTemplate} from './../chunks/header';
import {footerTemplate} from './../chunks/footer';
import {successResultTemplate} from './../chunks/success-result';
import {failResultTemplate} from './../chunks/fail-result';

const statsScreen = (data, status) => {
  const currentData = data;
  const title = status ? `Победа!` : `Поражение :(`;
  const resultTemplate = status ? successResultTemplate : failResultTemplate;

  const content = `${headerTemplate(currentData)}
  <div class="result">
    <h1>${title}</h1>
    ${resultTemplate(1, currentData.answers, currentData.lifes)}
  </div>${footerTemplate}`;

  const element = getElementFromTemplate(content);

  return element;
};

export default statsScreen;
