import {assert} from 'chai';
import {getAdaptedQuestions} from './../get-adapted-questions';
import {serverDataExample, localDataExample} from './get-adapted-questions.data';


describe(`Adapt server data`, () => {
  it(`Adapt server data`, () => {
    assert.deepEqual(getAdaptedQuestions(serverDataExample), localDataExample);
  });
});
