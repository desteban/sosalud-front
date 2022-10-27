import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Seo } from "../components";

export default class index extends React.Component {
  constructor(props) {
    super(props);

    console.log(`env: ${process.env.API_URL}`);

    this.state = {
      nombreUsuario: "",
      password: "",
    };
  }

  /**
   *
   * @param {Event} event
   */
  submint = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  /**
   *
   * @param {Event} event
   */
  change = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <main>
        <Seo
          title="Login"
          description={"Inicia sesión para poder acceder a nuestros servicios"}
        />
        <div className="login-contaier">
          <form className="caja login" onSubmit={this.submint}>
            <div className="titulo">
              <h1>Iniciar sesión</h1>
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
                value={this.state.nombreUsuario}
                onChange={this.change}
              />
            </div>

            <div className="input">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Contraseña"
                value={this.state.password}
                onChange={this.change}
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
      </main>
    );
  }
}
