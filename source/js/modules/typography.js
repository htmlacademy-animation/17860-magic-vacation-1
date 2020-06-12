export default class TypographyBuild {
  constructor(
      selector,
      timer,
      classForActivate,
      property,
      timingFn = `ease`,
      delay,
  ) {
    this._TIME_SPACE = 40;

    this._selector = selector;
    this._timer = timer;
    this._classForActivate = classForActivate;
    this._property = property;
    this._timingFn = timingFn;

    this._element = document.querySelector(this._selector);
    this._timeOffset = delay || 0;
    this.prepareText();
  }

  createElement(letter, idx) {
    const span = document.createElement(`span`);
    span.textContent = letter;
    span.style.transitionProperty = this._property;
    span.style.transitionDuration = `${this._timer}ms`;
    span.style.transitionTimingFunction = this._timingFn;
    span.style.webkitTransitionDelay = `${this._timeOffset}ms`;

    if ((idx + 1) % 3 === 0 || (idx + 1) % 3 === 1) {
      this._timeOffset += this._TIME_SPACE * 2;
    } else {
      this._timeOffset -= this._TIME_SPACE;
    }

    return span;
  }

  prepareText() {
    if (!this._element) {
      return;
    }

    const text = this._element.textContent.trim().split(` `).filter((letter) => letter !== ``);

    const content = text.reduce((fragmentParent, word) => {
      const wordElement = Array.from(word).reduce((fragment, letter, idx) => {
        fragment.appendChild(this.createElement(letter, idx));
        return fragment;
      }, document.createDocumentFragment());
      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(`text-word`);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);
      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(content);
  }

  runAnimation() {
    if (!this._element) {
      return;
    }
    this._element.classList.add(this._classForActivate);
  }

  destroyAnimation() {
    this._element.classList.remove(this._classForActivate);
  }
}
