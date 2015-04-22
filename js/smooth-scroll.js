// Polyfills:
// - classList

export default class Modal {

  constructor() {
    this.init();
  }

  init() {
    let navLinks = document.getElementsByClassName('js-smooth-link');

    [].forEach.call(navLinks, (el) => {
      el.addEventListener('click', (ev) => {
        ev.preventDefault();
        this.smoothScroll(ev.target.href.split('#')[1]);
      }, false);
    });
  }

  smoothScroll(el) {
    let element = document.querySelector(`#${el}`);
    Velocity(element, "scroll", { duration: 600, easing: "easeOutSine" });
  }

}
