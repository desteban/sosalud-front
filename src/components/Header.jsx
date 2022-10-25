import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  toogleSideNav() {
    let sideNav = document.getElementById("sidenav");
    sideNav?.classList.toggle("activar");
  }

  render() {
    return (
      <header>
        <nav>
          <div className="menu-btn" onClick={this.toogleSideNav}>
            <StaticImage
              src="../images/menu.svg"
              alt="Menu"
              width={20}
              height={20}
            />
          </div>
          <div id="sidenav" className="sidenav" onClick={this.toogleSideNav}>
            <div className="sidenav-opciones">
              <div className="seccion">
                <div className="titulo">
                  <p>
                    <strong>PROCESO RIPS</strong>
                  </p>
                </div>
                <div className="contenido">
                  <div className="opcion">
                    <StaticImage
                      src="../images/svg/files.svg"
                      alt="File"
                      width={60}
                      height={60}
                    />
                    <p>Validador RIPS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
