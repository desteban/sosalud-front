import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Seo, validarCredenciales, Password, Input } from '../components';

export default class index extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			nombreUsuario: '',
			password: '',
			errorUsuario: '',
			errorPassword: '',
			denegar: true,
			usuarioCreado: false,
			errorFormulario: false,
		};
	}

	/**
	 *
	 * @param {Event} event
	 */
	submint = async (event) => {
		event.preventDefault();
		const headers = new Headers();
		headers.append('Accept', 'application/json');
		headers.append('Content-Type', 'application/json');

		const body = {
			nombreUsuario: this.state.nombreUsuario,
			password: this.state.password,
		};

		let respuesta = await fetch(`${process.env.API_URL}login`, {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(body),
		});
		respuesta = await respuesta.json();

		if (respuesta.codigoHttp !== 201) {
			this.setState({
				errorFormulario: true,
				errorUsuario: this.toString(respuesta.data.nombreUsuario),
				errorPassword: this.toString(respuesta.data.password),
			});
		}

		if (respuesta.codigoHttp === 201) {
			localStorage.setItem('token', `${respuesta.data.token}`);
			validarCredenciales(true, false);
		}
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
			(document.getElementById('nombreUsuario').value.length !== 0) &
			(document.getElementById('password').value.length !== 0)
		);
	};

	/**
	 *
	 * @param {Array} arreglo
	 */
	toString = (arreglo) => {
		if (arreglo) {
			return arreglo.length > 0 ? arreglo.toString() : '';
		}

		return '';
	};

	componentDidMount() {
		validarCredenciales(true, false);
	}

	render() {
		return (
			<main>
				<Seo
					title="Login"
					description={'Inicia sesión para poder acceder a nuestros servicios'}
				/>
				<div className="login-contaier">
					<form className="caja login" onSubmit={this.submint}>
						<div className="titulo">
							<h1>Iniciar sesión</h1>
						</div>

						{this.state.errorFormulario ? (
							<div className="card error">
								<p>Credenciales invalidas </p>
							</div>
						) : null}

						<Input
							id="nombreUsuario"
							placeholder="Correo"
							autoComplete="OFF"
							value={this.state.nombreUsuario}
							onChange={this.change}
						>
							{this.state.errorUsuario !== '' ? (
								<p className="error">{this.state.errorUsuario}</p>
							) : null}
						</Input>

						<Password id="password" value={this.state.password} onChange={this.change}>
							{this.state.errorPassword !== '' ? (
								<p className="error">{this.state.errorPassword}</p>
							) : null}
						</Password>

						<div className="botones-opcion">
							<button
								className={`full ${this.state.denegar ? 'disable' : ''}`}
								disabled={this.state.denegar}
							>
								Ingresar
							</button>

							<p>
								<Link to="/registro">Registro</Link>
							</p>
							{/* <p>
								<Link to="/cuenta/recuperar">Recuperar contraseña </Link>
							</p> */}
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
