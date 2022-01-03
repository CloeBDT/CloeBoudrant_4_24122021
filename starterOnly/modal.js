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
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll(".close");

//************************************************************************

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeModalBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//*************************************************************************

// Variables du formulaire
const prenom = document.querySelector("#first");
const last = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const location1 = document.querySelector("#location1");
const location2 = document.querySelector("#location2");
const location3 = document.querySelector("#location3");
const location4 = document.querySelector("#location4");
const location5 = document.querySelector("#location5");
const location6 = document.querySelector("#location6");
const checkbox1 = document.querySelector("#checkbox1");
const checkbox2 = document.querySelector("#checkbox2");





document.getElementById("inscription").addEventListener("submit", function(e)
{
  if (!prenom.value)
  {
    erreur = "Veuillez saisir votre prénom";
  }
  if (erreur)
  {
    e.preventDefault();
    document.getElementById("erreur").innerHTML = erreur;
    return false;
  }
  else
  {
    alert('Formulaire envoyé !');
  }
});


