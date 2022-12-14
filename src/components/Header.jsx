import * as React from 'react';
import { navigate } from 'gatsby';
import { Link } from 'gatsby';
import Menu from '../images/menu.svg';
import Files from '../images/svg/files.svg';
import Login from '../images/svg/login.svg';
import Home from '../images/svg/home.svg';
import Salir from '../images/svg/salir.svg';

export default class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			token: null,
		};
	}

	toogleSideNav = () => {
		let sideNav = document.getElementById('sidenav');
		sideNav?.classList.toggle('activar');
	};

	componentDidMount() {
		let token = localStorage.getItem('token');
		this.setState({
			token,
		});
	}

	logout = () => {
		localStorage.removeItem('token');
		navigate('/');
	};

	render() {
		return (
			<header>
				<nav>
					<div className="menu-btn" onClick={this.toogleSideNav}>
						<Menu width={20} height={20} />
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
									{this.state.token === null ? (
										<Link to="/">
											<div className="opcion">
												<Login width={60} height={60} />
												<p>Inicio</p>
											</div>
										</Link>
									) : null}

									{this.state.token ? (
										<Link to="/home">
											<div className="opcion">
												<Home width={60} height={60} />
												<p>Inicio</p>
											</div>
										</Link>
									) : null}

									{this.state.token ? (
										<Link to="/validador">
											<div className="opcion">
												<Files width={60} height={60} />
												<p>Validador RIPS</p>
											</div>
										</Link>
									) : null}

									{this.state.token ? (
										<div className="opcion" onClick={this.logout}>
											<Salir width={60} height={60} />
											<p>Cerrar sesi??n</p>
										</div>
									) : null}
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
		);
	}
}
