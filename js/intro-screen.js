import {getElementFromTemplate, renderScreen} from './util.js';
import {footerTemplate} from './footer.js';
import greetingScreen from './greeting-screen.js';

const introScreen = getElementFromTemplate(`<div id="main" class="central__content">
  <div id="intro" class="intro">
    <h1 class="intro__asterisk">*</h1>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </div>
</div>${footerTemplate}`);

export default introScreen;

introScreen.querySelector(`.intro__asterisk`).addEventListener(`click`, () => renderScreen(greetingScreen));
