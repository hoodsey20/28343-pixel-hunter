'use strict';

const keyCodes = {
  ARROW_RIGHT: 39,
  ARROW_LEFT: 37,
};
const mainScreen = document.querySelector(`.central`);
const screenTemplates = document.querySelectorAll(`template`);
const arrowsTemplate = `<div class="arrows__wrap">
  <style>
    .arrows__wrap {
      position: absolute;
      top: 95px;
      left: 50%;
      margin-left: -56px;
    }
    .arrows__btn {
      background: none;
      border: 2px solid black;
      padding: 5px 20px;
    }
  </style>
  <button class="arrows__btn"><-</button>
  <button class="arrows__btn">-></button>
</div>`;
const arrows = document.createRange().createContextualFragment(arrowsTemplate);
const arrowsButtons = arrows.querySelectorAll(`.arrows__btn`);

let currentScreen = 0;
