export const headerTemplate = (state) => {
  const currentState = Object.assign({}, state);
  if (currentState.lifes < 0) {
    currentState.lifes = 0;
  }

  return `<header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
    <h1 class="game__timer">${currentState.timer}</h1>
    <div class="game__lives">
      ${new Array(3 - currentState.lifes)
          .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
          .join(``)}
      ${new Array(currentState.lifes)
        .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
        .join(``)}
    </div>
  </header>`;
};
