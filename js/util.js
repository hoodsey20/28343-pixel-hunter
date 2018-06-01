export const getElementFromTemplate = (template) => document.createRange().createContextualFragment(template);

export const renderScreen = (screenContent) => {
  const mainScreen = document.querySelector(`.central`);
  while (mainScreen.hasChildNodes()) {
    mainScreen.removeChild(mainScreen.lastChild);
  }
  mainScreen.appendChild(screenContent);
};
