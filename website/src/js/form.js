"use strict";
const forms = [...document.forms];
forms.forEach((form) => form.addEventListener("submit", submitFormData));

function submitFormData(e) {
  e.preventDefault();
  const formAction = e.target.getAttribute("action");
  let formEles = [...e.target.elements];
  let formData = {};
  formEles.forEach((ele) => {
    if(ele.tagName !== "BUTTON") {
      let attr = ele.getAttribute("name");
      formData[attr] = ele.value;
    }
  });

  let messageDiv = this.querySelector(".form-submit-message");
  let formDataToSend = new FormData();
  for(let key in formData) {
    formDataToSend.append(key, formData[key]);
  }

  const xhr = new XMLHttpRequest();
  xhr.open("POST", formAction);
  xhr.onload = function() {
    if(xhr.status === 200) {
      if(xhr.responseText == "success") {
        messageDiv.style.opacity = "1";
        messageDiv.innerHTML = `Thank you for getting in touch ${formData.name}! We will get back to you as soon as possible.`;
        e.target.reset();
      } else {
        messageDiv.style.opacity = "1";
        messageDiv.innerHTML = `Form submission failed.`;
      }
    }
  };
  xhr.onerror = function() {
    console.error(`Request failed: ${xhr.responseText}`);
  };
  xhr.send(formDataToSend);
}
