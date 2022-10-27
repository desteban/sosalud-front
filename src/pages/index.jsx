import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Seo } from "../components";

export default class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nombreUsuario: "",
      password: "",
      mensajeError: "",
      errorUsuario: false,
      errorPassword: false,
      denegar: true,
      usuarioCreado: false,
    };
  }

  /**
   *
   * @param {Event} event
   */
  submint = async (event) => {
    event.preventDefault();

    const body = {
      nombreUsuario: this.state.nombreUsuario,
      password: this.state.password,
    };

    let respuesta = await fetch(`${process.env.API_URL}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    respuesta = await respuesta.json();

    console.log(respuesta);
    this.setState({
      errorFormulario: respuesta.codigoHttp !== 200,
      mensajeError: respuesta.mensaje,
      errorUsuario: respuesta.data["nombreUsuario"],
      errorPassword: respuesta.data["password"],
    });
  };

  /**
   *
   * @param {Event} event
   */
  change = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      denegar: this.formularioCompleto(),
    });
  };

  formularioCompleto = () => {
    return !(
      (document.getElementById("nombreUsuario").value.length !== 0) &
      (document.getElementById("password").value.length !== 0)
    );
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

            {this.state.mensajeError.length !== 0 ? (
              <div className="card error">
                <p>{this.state.mensajeError}</p>
              </div>
            ) : null}

            <div className="input">
              <label
                htmlFor="nombreUsuario"
                className={this.state.errorUsuario ? "error" : ""}
              >
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
              <label
                htmlFor="password"
                className={this.state.errorPassword ? "error" : ""}
              >
                Contraseña
              </label>
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
              <button
                className={`full ${this.state.denegar ? "disable" : ""}`}
                disabled={this.state.denegar}
              >
                Ingresar
              </button>

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
