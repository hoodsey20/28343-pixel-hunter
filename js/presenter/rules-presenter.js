import RulesView from './../view/rules';
import Router from './../router';

class RulesPresenter {
  constructor() {
    this.content = new RulesView();

    this.content.onSubmit = Router.showGame;
    this.content.onBack = Router.showGreeting;
  }
}

export default RulesPresenter;
