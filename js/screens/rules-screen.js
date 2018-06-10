import {getElementFromTemplate, renderScreen} from './../util';
import {headerTemplate} from './../chunks/header';
import {footerTemplate} from './../chunks/footer';
import gameScreen from './game-screen';

const rulesScreen = (data) => {
  const currentData = data;
  const content = `${headerTemplate(currentData)}
  <div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>${footerTemplate}`;

  const rulesElement = getElementFromTemplate(content);

  const rulesForm = rulesElement.querySelector(`.rules__form`);
  const rulesInput = rulesForm.querySelector(`.rules__input`);
  const rulesButton = rulesForm.querySelector(`.rules__button`);

  rulesInput.addEventListener(`keyup`, (evt) => {
    rulesButton.disabled = !evt.target.value.trim();
  });

  rulesForm.addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    currentData.currentQuestion = 1;
    renderScreen(gameScreen(currentData));
  });

  return rulesElement;
};

export default rulesScreen;
