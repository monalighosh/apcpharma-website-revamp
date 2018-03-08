"use strict";
const forms = [...document.forms];
forms.forEach((form) => form.addEventListener("submit", submitForm));
let recaptchaSubmit = false;

function capchaFilled() {
  recaptchaSubmit = true;
}

function capchaExpired() {
  recaptchaSubmit = false;
}

function submitForm(e) {
  const formData = {
    name: this.querySelector("[name='name']").value,
    tel: this.querySelector("[name='phone']").value,
    email: this.querySelector("[name='email']").value,
    company: this.querySelector("[name='company-name']").value,
    message: this.querySelector("[name='message']").value
  };
  let messageDiv = this.querySelector(".form-submit-message");
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "php/form.php");
  xhr.onload = function() {
    if(xhr.status === 200) {
      if(recaptchaSubmit) {
        messageDiv.style.opacity = "1";
        messageDiv.innerHTML = `Thank you for getting in touch ${formData.name}! We will get back to you as soon as possible.`;
        e.target.reset();
        grecaptcha.reset();
      } else {
        messageDiv.style.opacity = "1";
        messageDiv.innerHTML = `Form submission failed. Please validate captcha!`;
      }
    }
  };
  xhr.onerror = function() {
    console.error(`Request failed: ${xhr.responseText}`);
  };
  xhr.send(JSON.stringify(formData));
  e.preventDefault();
}
