import * as React from "react";
import { validarCredenciales, Layout, Seo } from "../components";

export default class Validador extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      denegar: false,
    };
  }

  componentDidMount() {
    validarCredenciales(true, false);
  }

  render() {
    return (
      <Layout>
        <Seo title="Validador" />

        <h1>Validador</h1>

        <section>
          <form className="caja">
            <div className="input">
              <label htmlFor="tipoUsuario">Tipo de usuario</label>
              <select name="tipoUsuario" id="tipoUsuario" className="classic">
                <option value="Contributivo">Contributivo</option>
                <option value="Subsidiado">Subsidiado</option>
              </select>
            </div>

            <div className="input">
              <label htmlFor="tipoContrato">Tipo de contrato</label>
              <select name="tipoContrato" id="tipoContrato" className="classic">
                <option value="Evento">Evento</option>
                <option value="Capitacion">Capitacion</option>
              </select>
            </div>

            <div className="input ">
              <label htmlFor="archivo">Archivo</label>
              <input
                type={"file"}
                id="archivo"
                name="archivo"
                className="upload-button__input"
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
