import {sleep} from '../utils';

let animationsCompleted = false;
export default () => {
  const svgsMap = [
    {
      url: `img/primary-award.svg`,
      duration: 3500,
      elementId: `journeys`,
    },
    {
      url: `img/secondary-award.svg`,
      duration: 3000,
      elementId: `cases`,
    },
    {
      url: `img/additional-award.svg`,
      duration: 3000,
      elementId: `codes`,
    }
  ];

  document.body.addEventListener(`screenChanged`, async (e) => {
    const {detail} = e;
    const {screenName, screenElement} = detail;

    if (screenName === `prizes` && !animationsCompleted) {
      screenElement.classList.add(`screen--animations-not-completed`);
      animationsCompleted = true;

      await sleep(350);

      for (const {url, duration, elementId} of svgsMap) {
        const element = document.getElementById(elementId);
        if (element) {
          element.querySelector(`img`).src = url;
        }

        await sleep(duration);
      }
      screenElement.classList.remove(`screen--animations-not-completed`);
      screenElement.classList.add(`screen--animations-completed`);
    }
  }, false);
};
