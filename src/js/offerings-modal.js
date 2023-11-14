(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-offerings-modal]'),
    closeModalBtn: document.querySelector('[data-close-offerings-modal]'),
    backdrop: document.querySelector('[data-offerings-backdrop]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.backdrop.addEventListener('click', logBackdropClick);

  function toggleModal() {
    refs.backdrop.classList.toggle('offerings__is-hidden');
  }

  function logBackdropClick() {
    console.log('Це клік в бекдроп');
  }
})();
