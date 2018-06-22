export const headerTemplate = (state) => {

  const getHeaderBack = () => `<div class="header__back">
    <button class="back">
      <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
      <img src="img/logo_small.svg" width="101" height="44">
    </button>
  </div>`;

  const getLives = (gameState) => {
    if (gameState) {
      const lifesToShow = state.lifes > -1 ? state.lifes : 0;

      return `<div class="game__lives">
        ${new Array(3 - lifesToShow)
            .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
            .join(``)}
        ${new Array(lifesToShow)
          .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
          .join(``)}
      </div>`;
    }
    return ``;
  };

  const getTimer = (gameState) => {
    if (gameState) {
      return `<h1 class="game__timer">${gameState.timer}</h1>`;
    }
    return ``;
  };

  return `<header class="header">
    ${getHeaderBack()}
    ${getTimer(state)}
    ${getLives(state)}
  </header>`;
};
