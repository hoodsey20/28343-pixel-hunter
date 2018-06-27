import AbstractView from './abstract';

export default class ModalConfirmView extends AbstractView {

  get template() {
    return `<section class="modal-confirm modal-confirm__wrap">
    <form class="modal-confirm__inner">
      <button class="modal-confirm__close" type="button">Закрыть</button>
      <h2 class="modal-confirm__title">Подтверждение</h2>
      <p class="modal-confirm__text">Вы уверены что хотите начать игру заново?</p>
      <div class="modal-confirm__btn-wrap">
        <button class="modal-confirm__btn js-submit">Ок</button>
        <button class="modal-confirm__btn js-cancel">Отмена</button>
      </div>
    </form>
  </section>`;
  }

  onClose() {
  }

  onSubmit() {
  }

  onCancel() {
  }

  bind(element) {
    element.querySelector(`.modal-confirm__close`).addEventListener(`click`, () => {
      this.onClose();
    });

    element.querySelector(`.js-submit`).addEventListener(`click`, () => {
      this.onSubmit();
    });

    element.querySelector(`.js-cancel`).addEventListener(`click`, () => {
      this.onCancel();
    });
  }
}
