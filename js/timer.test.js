import {assert} from 'chai';
import {createTimer} from './timer.js';

describe(`Timer`, () => {

  it(`should not allow set non number value of time`, () => {
    assert.throws(() => createTimer(`2`), /Time should be of type number/);
  });

  it(`should not allow set negative values of time`, () => {
    assert.throws(() => createTimer(0), /Time should not be 0 or negative value/);
    assert.throws(() => createTimer(-1), /Time should not be 0 or negative value/);
    assert.throws(() => createTimer(-10), /Time should not be 0 or negative value/);
  });

  it(`should return integer passed number of time`, () => {
    assert.equal(createTimer(1).time, 1);
    assert.equal(createTimer(30).time, 30);
    assert.equal(createTimer(30.349234).time, 30);
    assert.equal(createTimer(9999).time, 9999);
  });

  it(`should subtract one when tick() was fired`, () => {
    assert.equal(createTimer(2).tick().time, 1);
    assert.equal(createTimer(10).tick().time, 9);
  });

  it(`should subtract two when tick() was double-fired`, () => {
    assert.equal(createTimer(10).tick().tick().time, 8);
  });

  it(`should return true active status when time is not up`, () => {
    assert.equal(createTimer(1).isActive(), true);
    assert.equal(createTimer(2).tick().isActive(), true);
    assert.equal(createTimer(10).isActive(), true);
  });

  it(`should return false active status when time is up`, () => {
    assert.equal(createTimer(1).tick().isActive(), false);
    assert.equal(createTimer(2).tick().tick().isActive(), false);
  });
});
