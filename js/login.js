import { navPag, Footer } from "./funciones.js";
import { loginHTML } from "./login.funciones.js";

navPag();
loginHTML();
Footer();

const form = document.querySelector("#form");
const inputs = document.querySelectorAll("#form input");
const modal = document.getElementById("miModal");
const flex = document.getElementById("flex");
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("close");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const correo = document.querySelector("#grupocorreo").value;
  const contraseña = document.querySelector("#grupopassword").value;
  console.log(correo, contraseña);
  validarUsuario(correo, contraseña);
  window.location.href = "../index.html";
  const terminos = document.getElementById("terminos");
  if (campos.password && campos.correo && terminos.checked) {
    document
      .getElementById("formmensajexito")
      .classList.add("formmensajexitoactivo");
    setTimeout(() => {
      document
        .getElementById("formmensajexito")
        .classList.remove("formmensajexitoactivo");
    }, 5000);

    document.querySelectorAll(".formgrupocorrecto").forEach((icono) => {
      icono.classList.remove("formgrupocorrecto");
    });
  } else {
    document
      .getElementById("formmensajerror")
      .classList.add("formmensajeactivo");
  }
  form.reset();
});

const validarUsuario = (correo, contraseña) => {
  const usuarios = JSON.parse(localStorage.getItem("usuarios"));
  usuarios.forEach((usuario) => {
    if (usuarios.email === correo && usuarios.password === contraseña) {
      localStorage.setItem("log", true);
      localStorage.setItem("userLogged", JSON.stringify(usuario));
      console.log(usuario);
    } else {
    }
  });
};

const expresiones = {
  password: /^.{8,30}$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};
const validarFormulario = (e) => {
  switch (e.target.name) {
    case "password":
      validarCampo(expresiones.password, e.target, "password");
      break;
    case "correo":
      validarCampo(expresiones.correo, e.target, "correo");
      break;
  }
};

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document
      .getElementById(`grupo${campo}`)
      .classList.remove("formgrupoincorrecto");
    document.getElementById(`grupo${campo}`).classList.add("formgrupocorrecto");
    document.querySelector(`#grupo${campo} i`).classList.add("fa-check-circle");
    document
      .querySelector(`#grupo${campo} i`)
      .classList.remove("fa-times-circle");
    document
      .querySelector(`#grupo${campo} .forminputerror`)
      .classList.remove("forminputerroractivo");
    campos[campo] = true;
  } else {
    document
      .getElementById(`grupo${campo}`)
      .classList.add("formgrupoincorrecto");
    document
      .getElementById(`grupo${campo}`)
      .classList.remove("formgrupocorrecto");
    document.querySelector(`#grupo${campo} i`).classList.add("fa-times-circle");
    document
      .querySelector(`#grupo${campo} i`)
      .classList.remove("fa-check-circle");
    document
      .querySelector(`#grupo${campo} .forminputerror`)
      .classList.add("forminputerroractivo");
    campos[campo] = false;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

abrir.addEventListener("click", function () {
  modal.style.display = "block";
});
cerrar.addEventListener("click", function () {
  modal.style.display = "none";
});
window.addEventListener("click", function (e) {
  if (e.target === flex) {
    modal.style.display = "none";
  }
});
