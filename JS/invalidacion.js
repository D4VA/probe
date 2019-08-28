var email = document.getElementById('formulario__submit');

email.addEventListener("keyup", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Correo invalido");
  } else {
    email.setCustomValidity("");
  }
}); 