export const gameFormTypeTriple = (questionData) => {
  const content = `<form class="game__content game__content--triple">
    ${questionData.photos.map((photo, index) => `<div class="game__option ${index === 1 ? `game__option--selected` : ``}" data-number="${index + 1}">
        <img src="${photo.src}" alt="Option 1" width="304" height="455" style="object-fit: cover;">
      </div>`).join(``)}
  </form>`;

  return content;
};

export const gameFormTypeTripleHandler = (node, answer, callback) => {
  const form = node.querySelector(`.game__content`);

  form.querySelectorAll(`.game__option`).forEach((option) => {
    option.addEventListener(`click`, function (evt) {
      answer.question1 = Number(evt.target.dataset.number);
      callback(answer);
    });
  });
};
