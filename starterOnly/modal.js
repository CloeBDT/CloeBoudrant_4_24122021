// Responsive function
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeModalBtn = document.querySelectorAll(".close");
const submitbtn = document.querySelector(".btn-submit");
const modalContent = document.querySelector(".content");
const gotohead = document.getElementById("myTopnav");
const modalConfirm = document.querySelector(".modal-body-confirm");
const modalBody = document.querySelector(".modal-body");
const champDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkbox = document.getElementById("checkbox1");
const radio = document.querySelectorAll("input[name=location]");
const prenom = document.getElementById("first");
const nom = document.getElementById("last");
const email = document.getElementById("email");
const formData = document.querySelectorAll(".formData");

// Launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// Functions
function launchModal() 
{
  gotohead.scrollIntoView({behavior: "auto", block:"center", inline:"nearest"});
  modalbg.style.display = "block";
  closeModalBtn.forEach((btn) => btn.addEventListener("click", closeModal));
  submitbtn.addEventListener("click", validate);
  prenom.addEventListener("input", prenomValid);
  nom.addEventListener("input", nomValid);
  email.addEventListener("input", emailValid);
  champDate.addEventListener("input", dateValid);
  quantity.addEventListener("input", quantityValid);
  radio.forEach((input) => input.addEventListener("input", radioValid));
  checkbox.addEventListener("change", checkboxValid);
}

function closeModal()
 {
  modalbg.style.display = "none";
  closeModalBtn.forEach((btn) => btn.removeEventListener("click", closeModal));
  modalbg.removeEventListener("click", closeModal);
  submitbtn.removeEventListener("click", validate);  
  prenom.removeEventListener("input", prenomValid);
  nom.removeEventListener("input", nomValid);
  email.removeEventListener("input", emailValid);
  champDate.removeEventListener("input", dateValid);
  quantity.removeEventListener("input", quantityValid);
  radio.forEach((input) => input.removeEventListener("input", radioValid));
  checkbox.removeEventListener("change", checkboxValid);
  modalBody.style.display = "block";
  modalConfirm.style.display = "none";
  reinit();
}

function reinit() {
  prenom.value = "";
  nom.value = "";
  email.value = "";
  champDate.value = "";
  quantity.value = "";
  radio.forEach((input) => input.checked = false);
  checkbox.checked = false;
  formData.forEach((formData) => formData.dataset.errorVisible = false);
}

// Form validation Functions
function prenomValid() {
  if (prenom.checkValidity() !== true) {
    prenom.parentElement.dataset.errorVisible = true;
    return false;
  } else {
    prenom.parentElement.dataset.errorVisible = false;
    return true;
  }
}

function nomValid() {
  if (nom.checkValidity() !== true) {
    nom.parentElement.dataset.errorVisible = true;
    return false;
  } else {
    nom.parentElement.dataset.errorVisible = false;
    return true;
  }
}

function emailValid() {
  if (email.checkValidity() !== true) {
    email.parentElement.dataset.errorVisible = true;
    return false;
  } else {
    email.parentElement.dataset.errorVisible = false;
    return true;
  }
}

function dateValid() {
  if (champDate.value.length !== 10) {
    champDate.parentElement.dataset.errorVisible = true;
     return false;
  } else {
    champDate.parentElement.dataset.errorVisible = false;
    return true;
  }
}

function quantityValid() {
  if (quantity.value.length == 0 || 
      isNaN(quantity.value) || 
      quantity.value < 0 || quantity.value > 99) {
        quantity.parentElement.dataset.errorVisible = true;
        return false;
  }
  quantity.parentElement.dataset.errorVisible = false;
  return true;
}

function radioValid() {
  const radioChecked = document.querySelectorAll('input[name="location"]:checked');
  if(radioChecked.length == 0) {
    radio[0].parentElement.dataset.errorVisible = true;
    return false;
  }
  radio[0].parentElement.dataset.errorVisible = false;
  return true;
}

function checkboxValid() {
  if (checkbox.checked == false) {
    checkbox.parentElement.dataset.errorVisible = true;
    return false;
  } 
  checkbox.parentElement.dataset.errorVisible = false;
  return true;
}

// Final validation function 

function elementsNotValidated() {
  prenomValid()
  nomValid()
  emailValid()
  dateValid()
  quantityValid()
  radioValid()
  checkboxValid()
}

function validForm() {
  if (prenomValid() == true && 
      nomValid() == true && 
      emailValid() == true && 
      dateValid() == true && 
      quantityValid() == true && 
      radioValid() == true && 
      checkboxValid() == true) {
        return true;
      }
  return false;
}

function validate(e) {
  e.preventDefault();

  if (validForm() == true) {
    modalBody.style.display = "none";
    modalConfirm.style.display = "flex";
    return true;
  } else {
    elementsNotValidated();
    return false;
  }
}