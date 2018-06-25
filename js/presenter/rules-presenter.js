import RulesView from './../view/rules';

class RulesPresenter {
  constructor() {
    this.content = new RulesView();

    this.root = document.querySelector(`.central`);
  }

  set submitHandler(handler) {
    this.content.onSubmit = handler;
  }

  set backButtonHandler(handler) {
    this.content.onBack = handler;
  }

}

export default RulesPresenter;
