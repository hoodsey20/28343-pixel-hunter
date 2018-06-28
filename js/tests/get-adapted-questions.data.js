export const serverDataExample = [];
serverDataExample.push({
  "type": `tinder-like`,
  "question": `Угадай, фото или рисунок?`,
  "answers":
    [
      {
        "image": {
          "url": `https://i.imgur.com/NXlVX48.png`,
          "width": 705,
          "height": 455
        },
        "type": `photo`
      }
    ]
});

serverDataExample.push({
  "type": `two-of-two`,
  "question": `Угадайте для каждого изображения фото или рисунок?`,
  "answers":
    [
      {
        "image": {
          "url": `https://k38.kn3.net/AD92BA712.jpg`,
          "width": 468,
          "height": 458
        },
        "type": `painting`
      },
      {
        "image": {
          "url": `http://i.imgur.com/eSlWjE7.jpg`,
          "width": 468,
          "height": 458
        },
        "type": `photo`
      }
    ]
});

serverDataExample.push({
  "type": `one-of-three`,
  "question": `Найдите рисунок среди изображений`,
  "answers": [
    {
      "image": {
        "url": `http://i.imgur.com/UIHVp0P.jpg`,
        "width": 304,
        "height": 455
      },
      "type": `photo`
    },
    {
      "image": {
        "url": `http://i.imgur.com/Gvq3jc2.jpg`,
        "width": 304,
        "height": 455
      },
      "type": `photo`
    },
    {
      "image": {
        "url": `https://k32.kn3.net/42C83EF0A.jpg`,
        "width": 304,
        "height": 455
      },
      "type": `painting`
    }
  ]
});

export const localDataExample = [];

localDataExample.push({
  type: `single`,
  title: `Угадай, фото или рисунок?`,
  photos: [
    {
      source: `photo`,
      src: `https://i.imgur.com/NXlVX48.png`
    },
  ]
});

localDataExample.push({
  type: `couple`,
  title: `Угадайте для каждого изображения фото или рисунок?`,
  photos: [
    {
      source: `paint`,
      src: `https://k38.kn3.net/AD92BA712.jpg`
    },
    {
      source: `photo`,
      src: `http://i.imgur.com/eSlWjE7.jpg`
    },
  ]
});

localDataExample.push({
  type: `triple`,
  title: `Найдите рисунок среди изображений`,
  photos: [
    {
      source: `photo`,
      src: `http://i.imgur.com/UIHVp0P.jpg`
    },
    {
      source: `photo`,
      src: `http://i.imgur.com/Gvq3jc2.jpg`
    },
    {
      source: `paint`,
      src: `https://k32.kn3.net/42C83EF0A.jpg`
    },
  ]
});
