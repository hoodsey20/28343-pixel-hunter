export const gameFormTypeSingle = (questionData) => {
  const content = `<form class="game__content game__content--wide">
    <div class="game__option">
        <img src="${questionData.photos[0].src}" alt="Option 1" width="705" height="455" style="object-fit: cover;">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>`;

  return content;
};

export const gameFormTypeSingleHandler = (node, answer, callback) => {
  const form = node.querySelector(`.game__content`);
  form.querySelectorAll(`[type="radio"]`).forEach((radio) => {
    radio.addEventListener(`change`, () => {
      answer.question1 = form.querySelector(`[name="question1"]:checked`).value;
      callback(answer);
    });
  });
};
