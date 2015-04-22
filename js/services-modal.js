import { closest } from './utils';

export default class Modal {

  constructor() {
    this.body = document.getElementsByTagName('body')[0];

    this.init();
  }

  init() {
    let servicesDetails = document.querySelector('.services');
    servicesDetails.addEventListener('click', this.showServiceDetails.bind(this), false);
  }

  showServiceDetails(e) {
    e && e.preventDefault();

    // Find the modal supposed to be shown
    let serviceSelected = this.selectModal(closest(e.target, 'li'));
    let modal = document.querySelector(serviceSelected);
    let modalBackdrop = modal.querySelector('.modal-backdrop');
    let modalClose = modal.querySelector('.js-modal-close');

    // Toggle the modal on click on the backdrop
    modalBackdrop.addEventListener('click', () => {
      this.closeModal(modal, modalBackdrop);
      modalBackdrop.removeEventListener('click');
    }, false);

    // Toggle the modal on click the cross
    modalClose.addEventListener('click', () => {
      this.closeModal(modal, modalBackdrop);
      modalClose.removeEventListener('click');
    }, false);

    this.openModal(modal, modalBackdrop);
  }

  openModal(modal, modalBackdrop) {
    let modalDialog = modal.querySelector('.modal-dialog');

    // Add class to kill the body's scroll
    this.body.classList.add('modal-open');
    // Manage the modal showing
    modal.style.display = 'block';
    modalBackdrop.style.display = 'block';
    modalBackdrop.style.height = parseFloat(modalDialog.offsetHeight + 60) + 'px';
    modal.classList.add('in');
    modalBackdrop.classList.add('in');
  }

  closeModal(modal, modalBackdrop) {
    // Remove 'modal-open' to restore body's scroll
    this.body.classList.remove('modal-open');

    // Manage the modal hiding
    modal.classList.remove('in');
    modalBackdrop.classList.remove('in');

    // Timeout needed to let the css animation finish
    setTimeout(() => {
      modal.style.display = 'none';
      modalBackdrop.style.display = 'none';
    }, 500);
  }

  selectModal(el) {
    let modalName;
    if (el.classList.contains('services__tech')) {
      return '#tech-modal';
    }
    if (el.classList.contains('services__newmarket')) {
      return '#newmarket-modal';
    }
    if (el.classList.contains('services__training')) {
      return '#training-modal';
    }
    if (el.classList.contains('services__positive')) {
      return '#positive-modal';
    }
  }

}
