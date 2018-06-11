import {gameFormTypeSingle, gameFormTypeSingleHandler} from './game-form-single';
import {gameFormTypeCouple, gameFormTypeCoupleHandler} from './game-form-couple';
import {gameFormTypeTriple, gameFormTypeTripleHandler} from './game-form-triple';

const gameForm = (type) => {
  const gameInterface = {};

  let formElement = null;
  let formHandler = null;

  switch (type) {
    case `single`:
      formElement = gameFormTypeSingle;
      formHandler = gameFormTypeSingleHandler;
      break;
    case `couple`:
      formElement = gameFormTypeCouple;
      formHandler = gameFormTypeCoupleHandler;
      break;
    case `triple`:
      formElement = gameFormTypeTriple;
      formHandler = gameFormTypeTripleHandler;
      break;
  }

  gameInterface.form = formElement;
  gameInterface.handler = formHandler;

  return gameInterface;
};

export default gameForm;
