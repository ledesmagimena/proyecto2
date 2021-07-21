import { navPag } from "./funciones.js";
import { Footer } from "./funciones.js";
navPag();
Footer();
const descrip = document.querySelector("#root");
const comentarioCounteiner = document.querySelector("#coment");
const id = window.location.hash.slice(1);
const games = JSON.parse(localStorage.getItem("categoriasgames"));
const game = games.find((game) => game.id == id);
descrip.innerHTML = `
    <div class="text-center  mt-3">
      <h2 class="my-4">${game.title}</h2>
      <img src="${game.thumbnailUrl}" class="mx-1" alt="">
      <div class="  text-center my-2 iconos1">
        <a><i class="fas fa-download  "></i>${game.peso}GB</a>
        <a><i class="fas fa-eye  ml-2"></i>${game.vistas}</a>
        <a><i class="fas fa-star  ml-2"></i>${game.calificacion}</a>
     </div>
     <a href="#" class="btn btn-success my-4">DESCRAGAR</a>
      <h3>Descripcion</h3>
      <p class="mx-3">${game.descripcion}</p>
      <h3>Requisitos Minimos</h3>
      <p class="mx-3">${game.requisitos_min}</p>
      <h3>Requisitos Recomendados</h3>
      <p class="mx-3">${game.requisitos_recomen}</p>
    </div>
    `;
//traer los comentarios
const url = "https://jsonplaceholder.typicode.com/comments";
const getComentarios = async () => {
  const request = await fetch(url);
  const comentarios = await request.json();
  createComentarios(comentarios);
  return comentarios;
};

getComentarios();

//crear los numeros aleatorios para los comentarios
function crearId() {
  const array = [];
  for (let i = 0; i < 4; i++) {
    const cont = Math.floor(Math.random() * 100);
    array.push(cont);
  }
  return array;
}

function createComentarios(comentarios) {
  const numbers = crearId();
  numbers.forEach((number) => {
    const div = document.createElement("div");
    div.innerHTML = `
   <div class="input-group input-group-lg mb-3 ">
  <div class="input-group">
    <span class="input-group-text" style="margin-left:20px "><i class="fas fa-user-astronaut">${comentarios[number].email}:</i></span>
  </div>
   <textarea class= "form-control" style="margin-right:20px ; margin-left:20px ; height: 170px">${comentarios[number].body}</textarea>
</div>
   `;
    comentarioCounteiner.append(div);
  });
}
