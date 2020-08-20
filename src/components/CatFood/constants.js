const productStyles = {
  disabled: "disabled",
  accentColor1: "accent-1",
  accentColor2: "accent-2",
};

const commentStyles = {
  link: "link",
  text: "text",
  warning: "warning",
};

export const products = [
  {
    id: 1,
    styles: productStyles.accentColor1,
    title: "Сказочное заморское яство",
    name: "Нямушка ",
    description: "с фуа-гра",
    additionalInfo: ["10 порций", "мышь в подарок"],
    weight: "0,5",
    isAvailable: true,
    comments: [
      { text: "Чего сидишь? Порадуй котэ, ", styles: commentStyles.text },
      { text: "купи.", styles: commentStyles.link },
    ],
  },
  {
    id: 2,
    styles: productStyles.accentColor2,
    title: "Сказочное заморское яство",
    name: "Нямушка ",
    description: "с рыбой",
    additionalInfo: ["40 порций", "2 мыши в подарок"],
    weight: "2",
    isAvailable: true,
    comments: [
      { text: "Головы щучьи с чесноком да свежайшая сёмгушка.", styles: commentStyles.text },
    ],
  },
  {
    id: 3,
    styles: productStyles.disabled,
    title: "Сказочное заморское яство",
    name: "Нямушка ",
    description: "с курой",
    additionalInfo: ["100 порций", "5 мышей в подарок"],
    weight: "5",
    isAvailable: false,
    comments: [
      { text: "Печалька, с курой закончился.", styles: commentStyles.warning },
    ],
  },
];
