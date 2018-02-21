"use strict";
// Get modal element
const modal = document.querySelector(".privacy-modal");
// Get open modal privacy button
const privacyBtn = document.querySelector("[title='Privacy Policy']");
// Get close modal button
const closeModalBtn = document.querySelector(".privacy-modal__close-btn");

// Add click event listeners
privacyBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
window.addEventListener("click", clickOutside);

// Function to open modal
function openModal(e) {
  e.preventDefault();
  modal.style.display = "block";
}

// Function to close modal
function closeModal() {
  modal.style.display = "none";
}

// Function to close modal when clicked outside
function clickOutside(e) {
  if(e.target === modal) {
    modal.style.display = "none";
  }
}

