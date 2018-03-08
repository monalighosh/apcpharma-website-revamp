"use strict";
const forms = [...document.forms];
forms.forEach((form) => form.addEventListener("submit", submitFormData));

function submitFormData(e) {
  let formEles = [...e.target.elements];
  let formData = {};
  formEles.forEach((ele) => {
    if(ele.tagName !== "BUTTON") {
      let attr = ele.getAttribute("name");
      formData[attr] = ele.value;
    }
  });
  console.log(formData);
  e.preventDefault();
}

// function submitForm(e) {
//   const formData = {
//     name: this.querySelector("[name='name']").value,
//     phone: this.querySelector("[name='phone']").value,
//     email: this.querySelector("[name='email']").value,
//     company: this.querySelector("[name='company']").value,
//     message: this.querySelector("[name='message']").value
//   };
//   let messageDiv = this.querySelector(".form-submit-message");
//   let formDataToSend = new FormData();
//   formDataToSend.append("name", formData.name);
//   formDataToSend.append("phone", formData.phone);
//   formDataToSend.append("email", formData.email);
//   formDataToSend.append("company", formData.company);
//   formDataToSend.append("message", formData.message);

//   // for(let key in formData) {
//   //   formDataToSend.append(`"${key}", ${formData[key]}`);
//   // }

//   const xhr = new XMLHttpRequest();
//   xhr.open("POST", "php/form.php");
//   xhr.onload = function() {
//     if(xhr.status === 200) {
//       if(xhr.responseText == "success") {
//         messageDiv.style.opacity = "1";
//         messageDiv.innerHTML = `Thank you for getting in touch ${formData.name}! We will get back to you as soon as possible.`;
//         e.target.reset();
//       } else {
//         messageDiv.style.opacity = "1";
//         messageDiv.innerHTML = `Form submission failed. Please validate captcha!`;
//       }
//     }
//   };
//   xhr.onerror = function() {
//     console.error(`Request failed: ${xhr.responseText}`);
//   };
//   xhr.send(formDataToSend);
//   e.preventDefault();
// }
