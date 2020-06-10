export default () => {
  const rulesScreenBlock = document.querySelector(`.screen--rules`);
  const rulesItems = rulesScreenBlock.querySelectorAll(`.rules__item`);
  const rulesBtn = rulesScreenBlock.querySelector(`.rules__link`);

  const firstAnimatingEl = rulesItems[0];
  const lastAnimatingEl = rulesItems[rulesItems.length - 1].querySelector(`p`);


  lastAnimatingEl.addEventListener(`animationend`, () => {
    rulesBtn.classList.add(`active`);
  });

  firstAnimatingEl.addEventListener(`animationstart`, () => {
    rulesBtn.classList.remove(`active`);
  });
};
