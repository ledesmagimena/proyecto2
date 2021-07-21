import { navPag, Footer } from "./funciones.js";
navPag();
Footer();
const destacadosContainer = document.querySelector("#destContainer");
const accionContainer = document.querySelector("#actionContainer");
const deportesContainer = document.querySelector("#sportsContainer");
const estrategiaContainer = document.querySelector("#strategyContainer");
//const sliderContainer = document.querySelector("#container_slider");

let accion = [];
let estrategia = [];
let deportes = [];
let destacados = [];

document.addEventListener("DOMContentLoaded", () => {
  action();
  sports();
  strategy();
  favoritos();
});

/*******************************SLIDER*******************************************************/
const favoritos = () => {
  destacados = JSON.parse(localStorage.getItem("destacados"));
  destacados.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("col-md-4");
    div.innerHTML = `
            <div class="card border-dark mb-5">
              <img src="${element.thumbnailUrl}" class="card-img-top" alt="">
              <div class="card-body bg-dark">
                <h5 class="text-white">${element.title}</h5>
                <p class="text-white">${element.categoria}</p>
                <p class="text-white">${element.precio}</p>
                <div class="badges">
                  <span class="badge badge-primary">PS4</span>
                  <span class="badge badge-success">XBOX</span>
                  <span class="badge badge-warning">PC</span>
                </div>
                <a class="btn btn-success" href="descripcion.html#${element.id}">VER JUEGO</a>
              </div>
            </div>
    `;
    destacadosContainer.append(div);
  });
};
/**************************************************************************************/

const sports = () => {
  deportes = JSON.parse(localStorage.getItem("categoriasgames"));
  const categoria_deportes = deportes.filter(
    (game) => game.categoria === "Deportes"
  );
  categoria_deportes.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("col-md-4");
    div.innerHTML = `
            <div class="card border-dark mb-5">
              <img src="${element.thumbnailUrl}" class="card-img-top"  alt="">
              <div class="card-body bg-dark">
                <h5 class="text-white">${element.title}</h5>
                <p class="text-white">${element.categoria}</p>
                <p class="text-white">${element.precio}</p>
                <p class="text-white d-none">${element.descripcion}</p>
                <div class="badges">
                  <span class="badge badge-primary">PS4</span>
                  <span class="badge badge-success">XBOX</span>
                  <span class="badge badge-warning">PC</span>
                </div>
                <a class="btn btn-success" href="descripcion.html#${element.id}">VER JUEGO</a>
              </div>
            </div>
    `;
    deportesContainer.append(div);
  });
};

const strategy = () => {
  estrategia = JSON.parse(localStorage.getItem("categoriasgames"));
  const categoria_estrategia = estrategia.filter(
    (game) => game.categoria === "Estrategia"
  );
  categoria_estrategia.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("col-md-4");
    div.innerHTML = ` 
            <div class="card border-dark mb-5">
              <img src="${element.thumbnailUrl}" class="card-img-top" alt="">
              <div class="card-body bg-dark">
                <h5 class="text-white">${element.title}</h5>
                <p class="text-white">${element.categoria}</p>
                <p class="text-white">${element.precio}</p>
                <p class="text-white d-none">${element.descripcion}</p>
                <div class="badges">
                  <span class="badge badge-primary">PS4</span>
                  <span class="badge badge-success">XBOX</span>
                  <span class="badge badge-warning">PC</span>
                </div>
                <a class="btn btn-success" href="descripcion.html#${element.id}">VER JUEGO</a>
              </div>
            </div>

    `;
    estrategiaContainer.append(div);
  });
};
const action = () => {
  accion = JSON.parse(localStorage.getItem("categoriasgames"));
  const categoria_accion = accion.filter((game) => game.categoria === "Accion");
  categoria_accion.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("col-md-4");
    div.innerHTML = `
            <div class="card border-dark mb-5">
              <img src="${element.thumbnailUrl}" class="card-img-top" alt="">
              <div class="card-body bg-dark">
                <h5 class="text-white">${element.title}</h5>
                <p class="text-white">${element.categoria}</p>
                <p class="text-white">${element.precio}</p>
                <div class="badges">
                  <span class="badge badge-primary">PS4</span>
                  <span class="badge badge-success">XBOX</span>
                  <span class="badge badge-warning">PC</span>
                </div>
                <a class="btn btn-success" href="descripcion.html#${element.id}">VER JUEGO</a>
              </div>
            </div>
    `;
    accionContainer.append(div);
  });
};
//hoja admin//
