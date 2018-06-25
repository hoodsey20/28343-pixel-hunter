import StatisticsView from './../view/statistics';
import Router from './../router';


class StatisticsPresenter {
  constructor(state, status, playerName) {
    this._state = state;
    this._status = status;
    this._playerName = playerName;

    this.content = new StatisticsView(this._state, this._status);

    this.content.onBack = () => {
      return Router.showGame(this._playerName);
    };
  }
}

export default StatisticsPresenter;
