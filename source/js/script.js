// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import prizes from './modules/prizes.js';
import FullPageScroll from './modules/full-page-scroll';
import rules from './modules/rules.js';
import TypographyAnimator from './modules/typography';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
rules();
prizes();

const fullPageScroll = new FullPageScroll();
const titleAnimator = new TypographyAnimator(`.intro__title`, 350, `active`, `transform`, `cubic-bezier(0.1, 0.53, 0.32, 0.98)`, 750);
const dateAnimator = new TypographyAnimator(`.intro__date`, 350, `active`, `transform`, `cubic-bezier(0.1, 0.53, 0.32, 0.98)`, 1150);
fullPageScroll.init();

window.addEventListener(`load`, () => {
  document.body.classList.add(`loaded`);
  titleAnimator.runAnimation();
  dateAnimator.runAnimation();
});
