import {questionTypes} from './../consts';

import {gameFormTypeSingle, gameFormTypeSingleHandler} from './game-form-single';
import {gameFormTypeCouple, gameFormTypeCoupleHandler} from './game-form-couple';
import {gameFormTypeTriple, gameFormTypeTripleHandler} from './game-form-triple';

const gameForm = (type) => {
  const gameInterface = {};

  let formElement = null;
  let formHandler = null;

  switch (type) {
    case questionTypes.SIGNLE:
      formElement = gameFormTypeSingle;
      formHandler = gameFormTypeSingleHandler;
      break;
    case questionTypes.COUPLE:
      formElement = gameFormTypeCouple;
      formHandler = gameFormTypeCoupleHandler;
      break;
    case questionTypes.TRIPLE:
      formElement = gameFormTypeTriple;
      formHandler = gameFormTypeTripleHandler;
      break;
    default:
      throw new Error(`Odd type of question: ${type}`);
  }

  gameInterface.form = formElement;
  gameInterface.handler = formHandler;

  return gameInterface;
};

export default gameForm;
