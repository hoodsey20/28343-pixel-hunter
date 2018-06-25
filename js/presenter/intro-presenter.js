import IntroView from './../view/intro';

class IntroPresenter {
  constructor() {
    this.content = new IntroView();
  }

  set clickHandler(handler) {
    this.content.onClick = handler;
  }
}

export default IntroPresenter;
