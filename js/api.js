import {dataAdapter} from './data-adapter';

const URL = `https://es.dump.academy/pixel-hunter/`;

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

const toJSON = (res) => res.json();

export default class Api {
  static loadData() {
    return fetch(`${URL}/questions`)
    .then(checkStatus)
    .then(toJSON)
    .then((data) => {
      return dataAdapter(data, true);
    });
  }
}
