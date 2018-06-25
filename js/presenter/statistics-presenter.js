import StatisticsView from './../view/statistics';

class StatisticsPresenter {
  constructor(state, status) {
    this._state = state;
    this._status = status;
    this.content = new StatisticsView(this._state, this._status);

    this.root = document.querySelector(`.central`);
  }

  set backButtonHandler(handler) {
    this.content.onBack = handler;
  }

}

export default StatisticsPresenter;
