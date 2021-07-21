import { navPag } from "./funciones.js";
import { Footer } from "./funciones.js";
navPag();
Footer();
const form = document.querySelector("#formulario");
const inputEmail = document.querySelector("#email");
const inputCometarios = document.querySelector("#textarea");
const btn_enviar = document.querySelector("#enviar");
const comentariosDOM = document.querySelector("#help_coments");
btn_enviar.disabled = true;
let ayuda = [];

const crearCometario = (comentario, email) => {
  const item = {
    comentario,
    email,
    id: Date.now(),
    date: new Date(),
  };
  ayuda.push(item);
  return item;
};

const showDOM = () => {
  cleanDom();
  ayuda = JSON.parse(localStorage.getItem("comentarios"));
  if (ayuda === null) {
    ayuda = [];
  } else {
    ayuda.forEach((element) => {
      const coment = document.createElement("div");
      coment.innerHTML += `
   <div class="input-group input-group-lg  ">
  <div class="input-group"id="${element.id}">
    <span class="input-group-text" style="margin-left:50px"><i class="fas fa-user-astronaut"> ${element.email}</i></span>
    <span class="input-group-text" style="margin-left:5px"><i class=" borrar fas fa-trash "></i></span>
    
    </div>
    <textarea class= "form-control" style="margin-right:80px ; margin-left:50px ; height: 100px">${element.comentario}</textarea>
    </div> 
    <p class="mt-0 ml-5">${element.date}</p>
`;
      comentariosDOM.append(coment);
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  showDOM();
});

const validaciones = (e) => {
  if (e.target.value.length > 0) {
    e.target.classList.add("border-primary");
    e.target.classList.remove("border-danger");
    const error = document.querySelector("p.error");
    if (error) {
      error.remove();
    }
  } else {
    e.target.classList.add("border-danger");
    e.target.classList.remove("border-primary");
    showError("Todos los campos son obligatorios");
  }

  if (
    inputEmail.value !== "" &&
    inputCometarios.value !== "" &&
    inputCometarios.value.length <= 50 &&
    inputEmail.value.length < 15
  ) {
    btn_enviar.disabled = false;
    setTimeout(() => {
      btn_enviar.disabled = true;
      inputEmail.classList.remove("border-primary");
      inputCometarios.classList.remove("border-primary");
    }, 1500);
  }
};

inputCometarios.addEventListener("keyup", () => {
  let max = 50;
  const respuesta = document.querySelector("#resultado");
  let cont = inputCometarios.value.length;
  let cantidad = max - cont;
  respuesta.innerHTML = cantidad;
  if (cantidad < 0) {
    respuesta.classList.add("text-danger");
    respuesta.classList.remove("text-dark");
  } else {
    respuesta.classList.add("text-dark");
    respuesta.classList.remove("text-danger");
  }
});

const showError = (msg) => {
  const errorMsg = document.createElement("p");
  errorMsg.classList.add("text-center", "error", "bg-danger", "text-white");
  errorMsg.innerText = msg;
  const errors = document.querySelectorAll(".error");
  if (errors.length === 0) {
    form.append(errorMsg);
  }
};

inputEmail.addEventListener("blur", validaciones);
inputCometarios.addEventListener("blur", validaciones);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const comentario = inputCometarios.value;
  const email = inputEmail.value;
  crearCometario(comentario, email);
  LScomentarios();
  form.reset();
});

const LScomentarios = () => {
  localStorage.setItem("comentarios", JSON.stringify(ayuda));
  showDOM();
};

const cleanDom = () => {
  while (comentariosDOM.firstChild) {
    comentariosDOM.removeChild(comentariosDOM.firstChild);
  }
};

const deleteLS = (id) => {
  ayuda = ayuda.filter((element) => element.id != id);
  LScomentarios();
};

comentariosDOM.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("borrar")) {
    const elementId = e.target.parentElement.parentElement.id;
    console.log(e.target.parentElement.parentElement);
    deleteLS(elementId);
  }
});
