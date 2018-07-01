export const getInitialState = () => ({
  currentQuestion: 0,
  lifes: 3,
  answers: [],
  timer: 30,
});

export const tick = (state) => {
  return Object.assign({}, state, {
    timer: state.timer - 1
  });
};
