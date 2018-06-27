import {assert} from 'chai';
import {dataAdapter} from './data-adapter';
import {serverDataExample, localDataExample} from './data-adapter.data';


describe(`Adapt server data`, () => {
  it(`Adapt server data`, () => {
    assert.deepEqual(dataAdapter(serverDataExample), localDataExample);
  });
});
