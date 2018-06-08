export const createTimer = (time) => {
  if (typeof time !== `number`) {
    throw new Error(`Time should be of type number`);
  }

  if (time < 1) {
    throw new Error(`Time should not be 0 or negative value`);
  }

  const currentTime = parseInt(time, 10);

  return Object.freeze({
    time: currentTime,
    tick() {
      return createTimer(currentTime - 1);
    },
  });
};
