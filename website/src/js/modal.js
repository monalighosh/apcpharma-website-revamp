"use strict";
// Get privacy modal element
const modalPrivacy = document.querySelector(".privacy-modal");
const privacyBtn = document.querySelector("#privacy");
const privacyCloseBtn = document.querySelector(".privacy-modal__close-btn");

// Get dealer modal element
const modalDealer = document.querySelector(".dealer-modal");
const dealerBtn = document.querySelector("#dealer");
const dealerCloseBtn = document.querySelector(".dealer-modal__close-btn");

// Button click event listeners
privacyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  openModal(modalPrivacy);
});

dealerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  openModal(modalDealer);
});

// Close button event listeners
privacyCloseBtn.addEventListener("click", closeModal);
dealerCloseBtn.addEventListener("click", closeModal);

// Window click event listener to close modal when clicked outside
window.addEventListener("click", (e) => {
  if(e.target === modalPrivacy) {
    closeModalOnOutsideClick(modalPrivacy);
  } else if(e.target === modalDealer) {
    closeModalOnOutsideClick(modalDealer);
  }  
});

// Function to open modal
function openModal(modalToOpen) {
  modalToOpen.style.display = "block";
}

// Function to close modal
function closeModal() {
  let parentModal = this.parentElement.parentElement;
  parentModal.style.display = "none";
}

// Function to close modal when clicked outside
function closeModalOnOutsideClick(modalToClose) {
  modalToClose.style.display = "none";
}

