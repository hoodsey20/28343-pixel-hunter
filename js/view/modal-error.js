import AbstractView from './abstract';

export default class ModalErrorView extends AbstractView {
  constructor(errorText) {
    super();
    this._errorText = errorText;
  }

  get template() {
    return `<section class="modal-error modal-error__wrap">
    <div class="modal-error__inner">
      <h2 class="modal-error__title">Произошла ошибка!</h2>
      <p class="modal-error__text">${this._errorText}. Пожалуйста, перезагрузите страницу.</p>
    </div>
  </section>`;
  }
}
