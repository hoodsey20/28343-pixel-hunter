import {QuestionType} from './../consts';

export const getInitialState = () => ({
  currentQuestion: 0,
  lifes: 3,
  answers: [],
  timer: 30,
});

export const tick = (state) => {
  return Object.assign({}, state, {
    timer: state.timer - 1
  });
};

export const gameQuestions = [
  {
    number: 1,
    type: QuestionType.COUPLE,
    title: `Угадайте для каждого изображения фото или рисунок?`,
    photos: [
      {
        source: `paint`,
        src: `https://k42.kn3.net/CF42609C8.jpg`
      },
      {
        source: `photo`,
        src: `http://i.imgur.com/1KegWPz.jpg`
      },
    ]
  },
  {
    number: 2,
    type: QuestionType.SINGLE,
    title: `Угадай, фото или рисунок?`,
    photos: [
      {
        source: `paint`,
        src: `https://k42.kn3.net/D2F0370D6.jpg`
      },
    ]
  },
  {
    number: 3,
    type: QuestionType.TRIPLE,
    title: `Найдите рисунок среди изображений`,
    photos: [
      {
        source: `paint`,
        src: `https://k32.kn3.net/5C7060EC5.jpg`
      },
      {
        source: `photo`,
        src: `http://i.imgur.com/DKR1HtB.jpg`
      },
      {
        source: `photo`,
        src: `https://i.imgur.com/DiHM5Zb.jpg`
      },
    ]
  },
  {
    number: 4,
    type: QuestionType.COUPLE,
    title: `Угадайте для каждого изображения фото или рисунок?`,
    photos: [
      {
        source: `paint`,
        src: `https://k42.kn3.net/CF42609C8.jpg`
      },
      {
        source: `photo`,
        src: `http://i.imgur.com/1KegWPz.jpg`
      },
    ]
  },
  {
    number: 5,
    type: QuestionType.SINGLE,
    title: `Угадай, фото или рисунок?`,
    photos: [
      {
        source: `paint`,
        src: `https://k42.kn3.net/D2F0370D6.jpg`
      },
    ]
  },
  {
    number: 6,
    type: QuestionType.TRIPLE,
    title: `Найдите рисунок среди изображений`,
    photos: [
      {
        source: `paint`,
        src: `https://k32.kn3.net/5C7060EC5.jpg`
      },
      {
        source: `photo`,
        src: `http://i.imgur.com/DKR1HtB.jpg`
      },
      {
        source: `photo`,
        src: `https://i.imgur.com/DiHM5Zb.jpg`
      },
    ]
  },
  {
    number: 7,
    type: QuestionType.COUPLE,
    title: `Угадайте для каждого изображения фото или рисунок?`,
    photos: [
      {
        source: `paint`,
        src: `https://k42.kn3.net/CF42609C8.jpg`
      },
      {
        source: `photo`,
        src: `http://i.imgur.com/1KegWPz.jpg`
      },
    ]
  },
  {
    number: 8,
    type: QuestionType.SINGLE,
    title: `Угадай, фото или рисунок?`,
    photos: [
      {
        source: `paint`,
        src: `https://k42.kn3.net/D2F0370D6.jpg`
      },
    ]
  },
  {
    number: 9,
    type: QuestionType.TRIPLE,
    title: `Найдите рисунок среди изображений`,
    photos: [
      {
        source: `paint`,
        src: `https://k32.kn3.net/5C7060EC5.jpg`
      },
      {
        source: `photo`,
        src: `http://i.imgur.com/DKR1HtB.jpg`
      },
      {
        source: `photo`,
        src: `https://i.imgur.com/DiHM5Zb.jpg`
      },
    ]
  },
  {
    number: 10,
    type: QuestionType.COUPLE,
    title: `Угадайте для каждого изображения фото или рисунок?`,
    photos: [
      {
        source: `paint`,
        src: `https://k42.kn3.net/CF42609C8.jpg`
      },
      {
        source: `photo`,
        src: `http://i.imgur.com/1KegWPz.jpg`
      },
    ]
  }
];
