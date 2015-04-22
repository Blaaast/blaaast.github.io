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

  currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop) {
      return document.documentElement.scrollTop;
    }
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;

    return 0;
  }

  elmYPosition(elId) {
    let elm = document.getElementById(elId);
    let y = elm.offsetTop;
    let node = elm;

    while (node.offsetParent && node.offsetParent !== document.body) {
      node = node.offsetParent;
      y += node.offsetTop;
    }
    return y;
  }

  smoothScroll(elId) {
    let startY = this.currentYPosition();
    let stopY = this.elmYPosition(elId);
    let distance = stopY > startY ? stopY - startY : startY - stopY;

    if (distance < 100) {
      scrollTo(0, stopY); return;
    }

    let speed = Math.round(distance / 100);

    if (speed >= 20) speed = 20;

    let step = Math.round(distance / 25);
    let leapY = stopY > startY ? startY + step : startY - step;
    let timer = 0;

    if (stopY > startY) {
      for ( let i = startY; i < stopY; i += step ) {

        setTimeout(function () {
          window.scrollTo(0, leapY);
        }, timer * speed);

        leapY += step;

        if (leapY > stopY) {
          leapY = stopY; timer++;
        }

      }
      return;
    }
    for ( let i = startY; i > stopY; i -= step ) {

      setTimeout(function () {
        window.scrollTo(0, leapY);
      }, timer * speed);

      leapY -= step;

      if (leapY < stopY) {
        leapY = stopY; timer++;
      }
    }
    return false;
  }

}
