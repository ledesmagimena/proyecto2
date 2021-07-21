export function loginHTML() {
  const main = document.querySelector(".main");
  const contenidoForm = document.createElement("div");
  contenidoForm.innerHTML = `
  <div>
      <form class="form" id="form">
        <!-- Grupo: Correo Electronico -->
        <div class="formgrupo" id="grupocorreo">
          <label for="correo" class="formlabel"
            >Correo Electrónico</label
          >
          <div class="formgrupoinput">
            <input
              type="email"
              class="forminput"
              name="correo"
              id="correo"
              placeholder="correo@correo.com"
            />
            <i class="formvalidacionestado fas fatimescircle"></i>
          </div>
          <p class="forminputerror">
            El email tiene que ser de 8 a 30 dígitos y solo puede contener
            letras, numeros, puntos,guiones y guion bajo.
          </p>
        </div>
        <!-- Grupo: Contraseña -->
        <div class="formgrupo" id="grupopassword">
          <label for="password" class="formlabel">Contraseña</label>
          <div class="formgrupoinput">
            <input
              type="password"
              class="forminput"
              name="password"
              id="password"
            />
            <i class="formvalidacionestado fas fatimescircle"></i>
          </div>
          <p class="forminputerror">
            La contraseña tiene que ser de 8 a 30 dígitos.
          </p>
        </div>
        <! Grupo: Terminos y Condiciones >
        <div class="formgrupo" id="grupoterminos">
          <label class="formlabel">
            <input
              class="formcheckbox"
              type="checkbox"
              name="terminos"
              id="terminos"
            />
            Acepto los Terminos y Condiciones
          </label>
        </div>
        <div class="formmensajerror" id="formmensajerror">
          <p class="Error">
            <i class="fas faexclamationtriangle"></i> <b>Error:</b> Por favor
            rellena el formulario correctamente.
          </p>
        </div>

        <div class="formgrupo formgrupobtnenviar">
          <button type="submit" class="formbtn" id="boton">
            Enviar
          </button>
          <p class="formmensajexito" id="formmensajexito">
            Formulario enviado exitosamente!
          </p>
        </div>
      </form>
        <div class="texto">
          <a class="a" href="#" id="abrir">Olvidaste tu contraseña?</a>
        </div>
      </form>
      <div id="miModal" class="modal">
        <div class="flex" id="flex">
          <div class="contenidoModal">
            <div class="modal-header flex">
              <h2>Recuperar contraseña</h2>
              <span class="close" id="close">&times;</span>
            </div>
            <div class="modal-body">
              <p class="p">
                La contraseña se enviará al correo que registró al inicio de
                crear la cuenta, por favor digitelo
              </p>
              <input
                class="inputcontra"
                type="email"
                name="correo"
                placeholder="correo@correo.com"
              />
            </div>
          </div>
        </div>
      </div>
      </form>
      </div>
  `;
  main.append(contenidoForm);
}
