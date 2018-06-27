import StatisticsView from './../view/statistics';
import Router from './../router';


class StatisticsPresenter {
  constructor(state, status) {
    this._state = state;
    this._status = status;

    this.content = new StatisticsView(this._state, this._status);

    this.content.onBack = () => {
      return Router.showGreeting();
    };
  }
}

export default StatisticsPresenter;
