export const renderScreen = (screenContent) => {
  const mainScreen = document.querySelector(`.central`);
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(screenContent);
};
