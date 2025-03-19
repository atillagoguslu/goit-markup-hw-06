const heroButton = document.querySelector(".hero-button");
const modalWindow = document.querySelector(".modal-window");
const modalButton = document.querySelector(".modal-button");
const modalForm = document.querySelector(".modal-form");

function openModal() {
  modalWindow.classList.add("is-open");
}

function closeModal() {
  modalWindow.classList.remove("is-open");
}

heroButton.addEventListener("click", openModal);
modalButton.addEventListener("click", closeModal);

modalForm.addEventListener("submit", function (event) {
  event.preventDefault();
  closeModal();
});

// Menu Modal
const menuButton = document.querySelector(".header-menu-svg");
const menuModal = document.querySelector(".menu-modal");
const menuCloseButton = document.querySelector(".menu-modal-close-button");

function openMenuModal() {
  menuModal.classList.add("menu-is-open");
}

function closeMenuModal() {
  menuModal.classList.remove("menu-is-open");
}

menuButton.addEventListener("click", openMenuModal);
menuCloseButton.addEventListener("click", closeMenuModal);
