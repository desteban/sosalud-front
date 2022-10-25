import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

export default class Registro extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <section className="contenedor">
          <form className="caja">
            <div className="titulo">
              <h1 className="title">Registro</h1>
            </div>
            <div>
              <div className="input">
                <label htmlFor="name" className="label">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="OFF"
                  placeholder="Nombre"
                />
              </div>

              <div className="input">
                <label htmlFor="nombreUsuario" className="label">
                  Nombre Usuario
                </label>
                <input
                  type="text"
                  name="nombreUsuario"
                  id="nombreUsuario"
                  autoComplete="OFF"
                  placeholder="Nombre"
                />
              </div>

              <div className="input">
                <label className="label" htmlFor="email">
                  Correo
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="ON"
                  placeholder="Correo"
                />
              </div>

              <div>
                <button className="full">Registrar</button>
                <p className="espacio">
                  <Link to="/">Iniciar sesión</Link>
                </p>
              </div>
            </div>
          </form>
          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
              dolore magnam, voluptatibus temporibus esse voluptatum rem ea
              expedita, deserunt earum ab minus repudiandae ullam obcaecati
              beatae explicabo provident. Dignissimos, illum.
            </p>
          </div>
        </section>
      </Layout>
    );
  }
}
