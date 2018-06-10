const gameFormTypeSingle = (questionData) => {
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

const gameFormTypeCouple = (questionData) => {
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

const gameFormTypeTriple = (questionData) => {
  const content = `<form class="game__content game__content--triple">
    ${questionData.photos.map((photo, index) => `<div class="game__option ${index === 1 ? `game__option--selected` : ``}" data-number="${index + 1}">
        <img src="${photo.src}" alt="Option 1" width="304" height="455" style="object-fit: cover;">
      </div>`).join(``)}
  </form>`;

  return content;
};

const gameForm = (question) => {
  let suitForm = null;

  switch (question.type) {
    case `single`:
      suitForm = gameFormTypeSingle;
      break;
    case `couple`:
      suitForm = gameFormTypeCouple;
      break;
    case `triple`:
      suitForm = gameFormTypeTriple;
      break;
  }

  return suitForm(question);
};

export default gameForm;
