import {getElementFromTemplate, renderScreen} from './util.js';
import {headerTemplate} from './header.js';
import {statsTemplate} from './stats.js';
import {footerTemplate} from './footer.js';
import statsScreen from './stats-screen';

const thirdGameScreen = getElementFromTemplate(`${headerTemplate}
<div class="game">
  <p class="game__task">Найдите рисунок среди изображений</p>
  <form class="game__content  game__content--triple">
    <div class="game__option">
      <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option  game__option--selected">
      <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option">
      <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
    </div>
  </form>
  <div class="stats">
    ${statsTemplate}
  </div>
</div>${footerTemplate}`);

export default thirdGameScreen;

thirdGameScreen.querySelectorAll(`.game__option`).forEach((option) => {
  option.addEventListener(`click`, () => renderScreen(statsScreen));
});
