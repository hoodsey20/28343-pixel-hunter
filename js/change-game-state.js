export const changeGameState = (state, answer) => {

  if (typeof state !== `object` || state === null) {
    throw new Error(`State should be of type object and not null`);
  }

  if (typeof answer !== `object` || answer === null) {
    throw new Error(`Answer should be of type object and not null`);
  }

  if (state.currentQuestion > 10) {
    throw new Error(`should not allow set currentQuestion more then 10`);
  }

  const currentState = Object.assign({}, state);

  currentState.answers.push(answer);

  if (answer.status === false) {
    currentState.lifes--;
  }

  currentState.currentQuestion++;

  return currentState;
};
