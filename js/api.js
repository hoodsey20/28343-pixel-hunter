import {getAdaptedQuestions} from './get-adapted-questions';


const DATA_URL = `https://es.dump.academy/pixel-hunter/`;
const APP_ID = `28343`;
const SUCCESS_CODE = 200;

const checkStatus = (response) => {
  if (response.status === SUCCESS_CODE) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

const toJSON = (res) => res.json();

export default class Api {
  static loadData() {
    return fetch(`${DATA_URL}/questions`)
    .then(checkStatus)
    .then(toJSON)
    .then((data) => {
      return getAdaptedQuestions(data, true);
    });
  }

  static loadResults(name) {
    return fetch(`${DATA_URL}/stats/${APP_ID}-${name}`).then(checkStatus).then(toJSON);
  }

  static saveResults(name, data) {
    const dataToSave = Object.assign({}, data);
    const requestSettings = {
      body: JSON.stringify(dataToSave),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };
    return fetch(`${DATA_URL}/stats/${APP_ID}-${name}`, requestSettings).then(checkStatus);
  }
}
