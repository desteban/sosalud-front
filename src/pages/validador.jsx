import * as React from "react";
import { validarCredenciales, Layout, Seo } from "../components";

export default class Validador extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      denegar: false,
      tipoUsuario: "",
      tipoContrato: "",
      archivo: "",
      errorTipoUsuario: "",
      errorTipoContrato: "",
    };
  }

  /**
   *
   * @param {Event} event
   */
  change = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  /**
   *
   * @param {Event} event
   */
  submit = async (event) => {
    event.preventDefault();

    let archivo = document.querySelector("#archivo");

    const formData = new FormData();
    formData.append("tipoContrato", this.state.tipoContrato);
    formData.append("tipoUsuario", this.state.tipoUsuario);
    formData.append("archivo", archivo.files[0]);

    console.log(formData);

    const header = new Headers();
    header.append("token", `${localStorage.getItem("token")}`);

    let respuesta = await fetch(`${process.env.API_URL}comprimidos`, {
      method: "POST",
      headers: header,
      body: formData,
    });
    respuesta = await respuesta.json();
    console.log(respuesta);
  };

  componentDidMount() {
    validarCredenciales(true);
  }

  render() {
    return (
      <Layout>
        <Seo title="Validador" />

        <h1>Validador</h1>

        <section>
          <form className="caja" onSubmit={this.submit}>
            <div className="input">
              <label htmlFor="tipoUsuario">Tipo de usuario</label>
              <select
                name="tipoUsuario"
                id="tipoUsuario"
                className="classic"
                value={this.state.tipoUsuario}
                onChange={this.change}
              >
                <option value="" disabled defaultChecked>
                  Seleccionar
                </option>
                <option value="Contributivo">Contributivo</option>
                <option value="Subsidiado">Subsidiado</option>
              </select>
              {this.state.errorTipoUsuario !== "" ? (
                <p className="error">{this.state.errorTipoUsuario}</p>
              ) : null}
            </div>

            <div className="input">
              <label htmlFor="tipoContrato">Tipo de contrato</label>
              <select
                name="tipoContrato"
                id="tipoContrato"
                className="classic"
                value={this.state.tipoContrato}
                onChange={this.change}
              >
                <option value="" disabled defaultChecked>
                  Seleccionar
                </option>
                <option value="Evento">Evento</option>
                <option value="Capitacion">Capitacion</option>
              </select>
              {this.state.errorTipoContrato !== "" ? (
                <p className="error">{this.state.errorTipoUsuario}</p>
              ) : null}
            </div>

            <div className="input ">
              <label htmlFor="archivo">Archivo</label>
              <input
                type={"file"}
                id="archivo"
                name="archivo"
                className="upload-button__input"
                accept=".rar,.zip,.7z"
                value={this.state.archivo}
                onChange={this.change}
              />
            </div>

            <button className={`full ${this.state.denegar ? "disable" : ""}`}>
              Enviar
            </button>
          </form>
        </section>
      </Layout>
    );
  }
}
