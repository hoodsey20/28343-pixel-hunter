import AbstractView from './../view/abstract';
import GreetingView from './greeting';
import {renderScreen} from './../util';
import {footerTemplate} from './../chunks/footer';


export default class IntroView extends AbstractView {
  get template() {
    return `<div id="main" class="central__content">
      <div id="intro" class="intro">
        <h1 class="intro__asterisk">*</h1>
        <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
      </div>
    </div>${footerTemplate}`;
  }

  bind(element) {
    element.querySelector(`.intro__asterisk`).addEventListener(`click`, () => {
      renderScreen(new GreetingView().element);
    });
  }
}
