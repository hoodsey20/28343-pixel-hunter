import {renderScreen} from './util.js';
import introScreen from './intro-screen.js';

renderScreen(introScreen);

document.addEventListener(`click`, (evt) => {
  const backButton = document.querySelector(`.header__back .back`);
  if (evt.target === backButton || evt.target.parentNode === backButton) {
    renderScreen(introScreen);
  }
});
