const Timer = function (time) {
  this.time = time;
  this.tick = function () {
    if (this.time > 0) {
      this.time--;
    }

    return this;
  };
  this.isActive = function () {
    return !!this.time;
  };

  return this;
};

export const createTimer = (time) => {
  if (typeof time !== `number`) {
    throw new Error(`Time should be of type number`);
  }

  if (time < 1) {
    throw new Error(`Time should not be 0 or negative value`);
  }

  const timer = new Timer(parseInt(time, 10));
  const timerCopy = Object.assign({}, timer);
  return timerCopy;
};
