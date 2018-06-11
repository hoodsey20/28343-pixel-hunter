export const gameFormTypeCouple = (questionData) => {
  const content = `<form class="game__content">
    ${questionData.photos.map((photo, index) => `<div class="game__option">
        <img src="${photo.src}" alt="Option ${index + 1}" width="468" height="458" style="object-fit: cover;">
        <label class="game__answer game__answer--photo">
          <input name="question${index + 1}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question${index + 1}" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>`).join(``)}
  </form>`;

  return content;
};

export const gameFormTypeCoupleHandler = (node, answer, callback) => {
  const form = node.querySelector(`.game__content`);

  const radioChangeHandler = () => {
    if (form.querySelector(`[name="question1"]:checked`) && form.querySelector(`[name="question2"]:checked`)) {
      answer.question1 = form.querySelector(`[name="question1"]:checked`).value;
      answer.question2 = form.querySelector(`[name="question2"]:checked`).value;
      callback(answer);
    }
  };

  form.querySelectorAll(`[type="radio"]`).forEach((radio) => {
    radio.addEventListener(`change`, radioChangeHandler);
  });
};
