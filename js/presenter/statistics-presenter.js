import StatisticsView from './../view/statistics';
import Router from './../router';


class StatisticsPresenter {
  constructor(data) {
    this._data = data;

    this.content = new StatisticsView(this._data);

    this.content.onBack = () => {
      Router.showGreeting();
    };
  }
}

export default StatisticsPresenter;
