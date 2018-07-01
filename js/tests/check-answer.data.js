import {QuestionType} from './../consts';

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

export const correctAnswer1 = {
  number: 1,
  question1: `paint`,
  question2: `photo`
};

export const wrongAnswer1 = {
  number: 1,
  question1: `paint`,
  question2: `paint`
};

export const correctAnswer2 = {
  number: 2,
  question1: `paint`,
};

export const wrongAnswer2 = {
  number: 2,
  question1: `photo`,
};

export const correctAnswer3 = {
  number: 3,
  question1: 1,
};

export const wrongAnswer3 = {
  number: 3,
  question1: 2,
};
