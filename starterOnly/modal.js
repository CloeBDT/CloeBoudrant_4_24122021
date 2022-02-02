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
const formData = document.querySelectorAll(".formData input[required]");
const closeModalBtn = document.querySelectorAll(".close");
const submitbtn = document.querySelector(".btn-submit");
const modalContent = document.querySelector(".content");
const gotohead = document.getElementById("myTopnav");
const modalConfirm = document.querySelector(".modal-body-confirm");
const modalBody = document.querySelector(".modal-body");
const champDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkbox = document.getElementById("checkbox1");
const radio = document.querySelectorAll('input[name="location"]');
const prenom = document.getElementById("first");
const nom = document.getElementById("last");
const email = document.getElementById("email");
const test = document.querySelectorAll(".formData");

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
  radio.forEach((input) => input.addEventListener("change", radioValid));
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
  radio.forEach((input) => input.removeEventListener("change", radioValid));
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
  test.forEach((formData) => formData.dataset.errorVisible = false);
}

let prenomFinal = "false";

function prenomValid(e) {
  let prenomTest = e.currentTarget.checkValidity();
  if (prenomTest == false) {
    e.currentTarget.parentElement.dataset.errorVisible = true;
    prenomFinal = false;
  } else {
    e.currentTarget.parentElement.dataset.errorVisible = false;
    prenomFinal = true;
  }
}

let nomFinal = "false";

function nomValid(e) {
  let nomTest = e.currentTarget.checkValidity();
  if (nomTest == false) {
    e.currentTarget.parentElement.dataset.errorVisible = true;
    nomFinal = false;
  } else {
    e.currentTarget.parentElement.dataset.errorVisible = false;
    nomFinal = true;
  }
}

let emailFinal = "false";

function emailValid(e) {
  let emailTest = e.currentTarget.checkValidity();
  if (emailTest == false) {
    e.currentTarget.parentElement.dataset.errorVisible = true;
    emailFinal = false;
  } else {
    e.currentTarget.parentElement.dataset.errorVisible = false;
    emailFinal = true;
  }
}

let dateFinal = "false";

function dateValid(e) {
let dateFormat = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;
if (e.target.value.match(dateFormat)) {
  e.currentTarget.parentElement.dataset.errorVisible = false;
  dateFinal = true;
} else {
  e.currentTarget.parentElement.dataset.errorVisible = true;
  dateFinal = false;
  }
}

let radioFinal = "false";

function radioValid() {
    radioFinal = true;
}

quantityFinal = "false";
checkboxFinal = "false";

function validate(e) {
  e.preventDefault();
  quantityFinal = quantity.checkValidity();
  checkboxFinal = checkbox.checkValidity();
  if (prenomFinal == true && nomFinal == true && emailFinal == true && dateFinal == true && quantityFinal == true && radioFinal == true && checkboxFinal == true) {
    modalBody.style.display = "none";
    modalConfirm.style.display = "flex";
    return true;
  } else {
    console.log("Nunuche");
  }
}