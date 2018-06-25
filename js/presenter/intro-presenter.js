import IntroView from './../view/intro';
import Router from './../router';

class IntroPresenter {
  constructor() {
    this.content = new IntroView();
    this.content.onClick = Router.showGreeting;
  }
}

export default IntroPresenter;
