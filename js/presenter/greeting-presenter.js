import GreetingView from './../view/greeting';
import Router from './../router';

class GreetingPresenter {
  constructor() {
    this.content = new GreetingView();
    this.content.onClick = Router.showRules;
  }
}

export default GreetingPresenter;
