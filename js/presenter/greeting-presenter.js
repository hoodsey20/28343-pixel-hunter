import GreetingView from './../view/greeting';

class GreetingPresenter {
  constructor() {
    this.content = new GreetingView();

    this.root = document.querySelector(`.central`);
  }

  set clickHandler(handler) {
    this.content.onClick = handler;
  }

}

export default GreetingPresenter;
