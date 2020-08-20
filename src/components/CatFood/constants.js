const productStyles = {
  disabled: "disabled",
  accentColor1: "accent-1",
  accentColor2: "accent-2",
};

const commentStyles = {
  link: "link",
  text: "text",
  warningText: "warning",
};

export const products = [
  {
    id: 1,
    styles: productStyles.accentColor1,
    title: "Сказочное заморское яство",
    name: "Нямушка",
    description: "с фуа-гра",
    additionalInfo: ["10 порций", "мышь в подарок"],
    weight: "0,5",
    comments: [
      { text: "Чего сидишь? Порадуй котэ,", styles: commentStyles.text },
      { text: "купи.", styles: commentStyles.link },
    ],
  },
  {
    id: 2,
    styles: productStyles.accentColor2,
    title: "Сказочное заморское яство",
    name: "Нямушка",
    description: "с рыбой",
    additionalInfo: ["40 порций", "2 мыши в подарок"],
    weight: "2",
    comments: [
      { text: "Головы щучьи с чесноком да свежайшая сёмгушка.", styles: commentStyles.text },
    ],
  },
  {
    id: 3,
    styles: productStyles.disabled,
    title: "Сказочное заморское яство",
    name: "Нямушка",
    description: "с курой",
    additionalInfo: ["100 порций", "5 мышь в подарок"],
    weight: "0,5",
    comments: [
      { text: "Чего сидишь? Порадуй котэ,", styles: commentStyles.text },
      { text: "купи.", styles: commentStyles.link },
    ],
  },
];
