// Polyfills:
// - classList

export default class Modal {

  constructor() {
    this.body = document.getElementsByTagName('body')[0];
    this.modalButton = document.getElementById('modal-copyright-btn');
    this.modal = document.getElementById('modal-copyright');
    this.modalDialog = document.querySelector('.modal-dialog');
    if (this.modal !== null) {
      this.modalBackdrop = this.modal.querySelector('.modal-backdrop');
      this.modalClose = this.modal.querySelectorAll('.js-modal-legal-close');
      this.init();
    }
  }

  init() {
    // Toggle modal from footer button
    this.modalButton.addEventListener('click', this.toggleLegalModal.bind(this), false);

    // Toggle the modal on click on the backdrop
    this.modalBackdrop.addEventListener('click', this.toggleLegalModal.bind(this), false);

    // Toggle modal from modal's close buttons
    [].forEach.call(this.modalClose, (el) => {
      el.addEventListener('click', this.toggleLegalModal.bind(this), false);
    });
  }

  toggleLegalModal(e) {
    e && e.preventDefault();

    if (this.modal.classList.contains('in')) {

      // Remove 'modal-open' to restore body's scroll
      this.body.classList.remove('modal-open');

      // Manage the modal hiding
      this.modal.classList.remove('in');
      this.modalBackdrop.classList.remove('in');

      // Timeout needed to let the css animation finish
      setTimeout(() => {
        this.modal.style.display = 'none';
        this.modalBackdrop.style.display = 'none';
      }, 500);

    } else {
      // Add class to kill the body's scroll
      this.body.classList.add('modal-open');
      // Manage the modal showing
      this.modal.style.display = 'block';
      this.modalBackdrop.style.display = 'block';
      this.modalBackdrop.style.height = parseFloat(this.modalDialog.offsetHeight + 60) + 'px';
      this.modal.classList.add('in');
      this.modalBackdrop.classList.add('in');
    }
  }

}
