export const renderScreen = (screenContent) => {
  const mainScreen = document.querySelector(`.central`);
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(screenContent);
};

export const updateView = (container, view) => {
  container.innerHTML = ``;
  container.appendChild(view);
};

export const render = (html) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = html.trim();
  return wrapper;
};
