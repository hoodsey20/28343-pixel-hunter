import {assert} from 'chai';
import {createTimer} from './timer.js';

describe(`Timer`, () => {

  it(`should not allow set non number value of time`, () => {
    assert.throws(() => createTimer(`2`), /Time should be of type number/);
  });

  it(`should not allow set negative values of time or 0`, () => {
    assert.throws(() => createTimer(0), /Time should not be 0 or negative value/);
    assert.throws(() => createTimer(-1), /Time should not be 0 or negative value/);
    assert.throws(() => createTimer(-10), /Time should not be 0 or negative value/);
  });

  it(`should return integer passed number of time`, () => {
    assert.equal(createTimer(1.1).time, 1);
    assert.equal(createTimer(30).time, 30);
    assert.equal(createTimer(30.349234).time, 30);
    assert.equal(createTimer(9999.99).time, 9999);
  });

  it(`should subtract one when tick() was fired`, () => {
    assert.equal(createTimer(2).tick().time, 1);
    assert.equal(createTimer(10).tick().time, 9);
    assert.equal(createTimer(100).tick().time, 99);
  });

  it(`should subtract two when tick() was double-fired`, () => {
    assert.equal(createTimer(10).tick().tick().time, 8);
    assert.equal(createTimer(3).tick().tick().time, 1);
    assert.equal(createTimer(99).tick().tick().time, 97);
  });
});
