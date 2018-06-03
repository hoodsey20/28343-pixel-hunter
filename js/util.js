export const getElementFromTemplate = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template.trim();
  return wrapper;
};

export const renderScreen = (screenContent) => {
  const mainScreen = document.querySelector(`.central`);
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(screenContent);
};
