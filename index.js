document.addEventListener('DOMContentLoaded', function() {
  const heroButton = document.querySelector('.hero-button');
  const modalWindow = document.querySelector('.modal-window');
  const modalButton = document.querySelector('.modal-button');
  
  function openModal() {
    modalWindow.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';
  }
  
  function closeModal() {
    modalWindow.classList.add('is-hidden');
    document.body.style.overflow = '';
  }
  
  heroButton.addEventListener('click', openModal);
  modalButton.addEventListener('click', closeModal);
  
 
  const modalForm = document.querySelector('.modal-form');
  modalForm.addEventListener('submit', function(event) {
    event.preventDefault();
    closeModal();
  });
}); 