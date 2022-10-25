import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Layout } from "../components";

export default class index extends React.Component {
  render() {
    return (
      <div className="login-contaier">
        <form className="caja login">
          <div className="titulo">
            <h1>Iniciar secion</h1>
          </div>

          <div className="input">
            <label htmlFor="nombreUsuario">
              Correo electronico o nombre de usuario
            </label>
            <input
              type="text"
              name="nombreUsuario"
              id="nombreUsuario"
              placeholder="Correo electronico o nombre de usuario"
            />
          </div>

          <div className="input">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Contraseña"
            />
          </div>

          <div>
            <button className="full">Ingresar</button>

            <p>
              <Link to="/registro">Registro</Link>
            </p>
          </div>

          <div className="separador"></div>

          <div className="imagen">
            <StaticImage src="../images/Sosalud.png" alt="Logo Sosalud" />
          </div>
        </form>
      </div>
    );
  }
}
