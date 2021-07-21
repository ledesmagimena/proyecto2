const navUsuario = (usuario) =>
  `<div class="bg-dark border border-danger ">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="font-weight-bold">
  <img class="logo rounded-circle" src="./assets/logo2.jpg" alt="logo">
</div>
            <form class="form-inline ml-5">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder=""
                aria-label="Search"
              />
              <button class="btn btn-outline-danger mr-sm-4 my-2 my-sm-0" type="submit">
                Buscar
              </button>
            </form>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navg navbar-nav w-100 justify-content-end">
                
                <a class="nav-link text-white" href="../ayuda.html">ayuda</a>
                <a class="nav-link text-white" href="#">about us</a>
                <a class="nav-link text-white" href="#">Bienvenido ${usuario.name}</a>
                <button class= "btn btn-danger btn-cerrarsesion">cerrar sesion</button>
              </div>
            </div>
          </nav>
        </div>
      </div>
`;

const usuariosSinR = (usuario) =>
  `<div class="bg border border-danger ">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="font-weight-bold">
  <img class="logo rounded-circle" src="./assets/logo2.jpg" alt="logo">
</div>
            <form class="form-inline ml-5">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder=""
                aria-label="Search"
              />
              <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">
                Buscar
              </button>
            </form>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navg navbar-nav w-100 justify-content-end">
                <a href="../login.html" class="nav-link text-white active">iniciar sesion</a>
                <a class="nav-link text-white" href="../ayuda.html">ayuda</a>
                <a class="nav-link text-white" href="#">about us</a>
                <a href="../registro.html" class="nav-link text-white">registrarse</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
`;
const navAdm = (usuario) =>
  `<div class="bg-dark border border-danger ">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="font-weight-bold">
  <img class="logo rounded-circle" src="./assets/logo2.jpg" alt="logo">
</div>
            <form class="form-inline ml-5">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder=""
                aria-label="Search"
              />
              <button class="btn btn-outline-danger mr-sm-4 my-2 my-sm-0" type="submit">
                Buscar
              </button>
            </form>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navg navbar-nav w-100 justify-content-end">
                
                <a class="nav-link text-white" href="../ayuda.html">ayuda</a>
                <a class="nav-link text-white" href="#">about us</a>
                <a class="nav-link text-white" href="../admin.html">Bienvenido ${usuario.name}</a>
                <button class= "btn btn-danger btn-cerrarsesion">cerrar sesion</button>
              </div>
            </div>
          </nav>
        </div>
      </div>
`;
export function navPag() {
  const header = document.querySelector(".header");
  header.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-cerrarsesion")) {
      e.preventDefault();
      localStorage.setItem("log", false);
      window.location.href = "../index.html";
    }
  });
  const navbar = document.createElement("div");
  let log = localStorage.getItem("log");
  let usuario = JSON.parse(localStorage.getItem("userLogged"));
  if (log === "true") {
    if (usuario.rol === "usuario") {
      navbar.innerHTML = navUsuario(usuario);
      header.append(navbar);
      return;
    } else {
      navbar.innerHTML = navAdm("usuario");
      header.append(navbar);
      return;
    }
  } else {
    navbar.innerHTML = usuariosSinR(usuario);
    header.append(navbar);
    return;
  }
}
// footer
export function Footer() {
  const footer = document.querySelector("#footer");
  footer.className = "page-footer";
  const contenidoFooter = document.createElement("div");
  contenidoFooter.innerHTML = `
<div class="iconos">
        <div class="container">
          <div class="row py-4 d-flex align-items-center">
            <div class="col-md-12 text-center">
              <a href="#"><i class="fab fa-youtube mr-4"></i></a>
              <a href="#"><i class="fab fa-facebook-f mr-4"></i></a>
              <a href="#"><i class="fab fa-instagram mr-4"></i></a>
              <a href="#"><i class="fab fa-twitter mr-4"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div class="container2">
        <div class="row py-4 d-flex ml-0 mr-0 align-items-center">
          <div class="col-md-3 mx-auto mb-4 text-white">
            <img class="img rounded-circle" src="./assets/logo2.jpg" alt="logo" />
            <p class="mt-2 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              quos numquam tempore nulla consectetur nihil provident qui velit
              neque officia sed dignissimos deleniti, molestias aspernatur
              necessitatibus esse nobis, omnis vitae?
            </p>
          </div>
          <div class="col-md-3 mx-auto mb-4 text-white">
            <h5>Contacto</h5>
            <ul class="list-unstyled">
              <li>
                <i class="fas fa-phone-alt text-white mr-1"></i>+5490303456
              </li>
              <li>
                <i class="fas fa-map-marker-alt mr-1"></i>Salta 78, piso 11°-San
                Miguel de Tucumán
              </li>
              <li>
                <i class="far fa-envelope text-white mr-1"></i>Dejanos tu
                mensaje
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="copyright text-center text-dark py-3">
        <p>&copy; Copyright
          <a href="#">videojuegos.com</a>
          <p>Diseñado por videojuegos</p>
        </p>
      </div>
`;
  footer.append(contenidoFooter);
}
/*const cerrarsesion = document.querySelector(".btn-cerrarsesion");
cerrarsesion.addEventListener("click", (e) => {
  localStorage.getItem("log", "false");
  window.location.href = "../index.html";
});*/
