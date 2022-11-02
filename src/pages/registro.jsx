import * as React from 'react';
import { Link } from 'gatsby';
import { Layout, Seo, validarCredenciales } from '../components';

export default class Registro extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			nombre: '',
			nombreUsuario: '',
			email: '',
			denegar: true,
			errorNombre: '',
			errorUsuario: '',
			errorEmail: '',
			enviado: false,
			usuarioCrear: false,
		};
	}

	/**
	 *
	 * @param {Event} event
	 */
	change = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
			denegar: this.activarBoton(),
		});
	};

	/**
	 *
	 * @param {Event} event
	 */
	submit = async (event) => {
		event.preventDefault();

		this.setState({
			enviado: true,
			denegar: true,
			usuarioCrear: false,
		});

		const body = {
			nombre: this.state.nombre,
			nombreUsuario: this.state.nombreUsuario,
			email: this.state.email,
		};

		const headers = new Headers();
		headers.append('Content-Type', 'application/json');

		let respuesta = await fetch(`${process.env.API_URL}registrar`, {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(body),
		});
		let respuestaJson = await respuesta.json();

		let estado = {};

		if (respuestaJson.codigoHttp !== 201) {
			estado = {
				errorNombre: this.toString(respuestaJson.data.nombre),
				errorUsuario: this.toString(respuestaJson.data.nombreUsuario),
				errorEmail: this.toString(respuestaJson.data.email),
				denegar: false,
				enviado: false,
			};
		}

		if (respuestaJson.codigoHttp === 201) {
			estado = {
				nombre: '',
				nombreUsuario: '',
				email: '',
				denegar: false,
				enviado: false,
				usuarioCrear: true,
				errorNombre: '',
				errorUsuario: '',
				errorEmail: '',
			};
		}

		this.setState(estado);
	};

	activarBoton = () => {
		return !(
			(document.getElementById('nombre').value.length !== 0) &
			(document.getElementById('nombreUsuario').value.length !== 0) &
			(document.getElementById('email').value.length !== 0)
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
			<Layout>
				<Seo title="Registro" />
				<section className="contenedor">
					<form className="caja" onSubmit={this.submit}>
						<div className="titulo">
							<h1 className="title">Registro</h1>
						</div>

						{this.state.usuarioCrear ? (
							<div className="card succes">
								<p>Usuario creado exitosa mente</p>
							</div>
						) : null}

						<div>
							<div className="input">
								<label htmlFor="name" className="label">
									* Nombre
								</label>
								<input
									type="text"
									name="nombre"
									id="nombre"
									autoComplete="OFF"
									placeholder="Nombre"
									value={this.state.nombre}
									onChange={this.change}
								/>
								{this.state.errorNombre !== '' ? (
									<p className="error">{this.state.errorNombre}</p>
								) : null}
							</div>

							<div className="input">
								<label htmlFor="nombreUsuario" className="label">
									* Nombre Usuario
								</label>
								<input
									type="text"
									name="nombreUsuario"
									id="nombreUsuario"
									autoComplete="OFF"
									placeholder="Nombre"
									value={this.state.nombreUsuario}
									onChange={this.change}
								/>
								{this.state.errorUsuario.length > 0 ? (
									<p className="error">{this.state.errorUsuario}</p>
								) : null}
							</div>

							<div className="input">
								<label className="label" htmlFor="email">
									* Correo
								</label>
								<input
									type="text"
									name="email"
									id="email"
									autoComplete="ON"
									placeholder="Correo"
									value={this.state.email}
									onChange={this.change}
								/>
								{this.state.errorEmail.length !== 0 ? (
									<p className="error">{this.state.errorEmail}</p>
								) : null}
							</div>

							{this.state.enviado ? (
								<div className="center">
									<span className="loader"></span>
								</div>
							) : null}

							<div>
								<button
									className={`full ${this.state.denegar ? 'disable' : ''}`}
									disabled={this.state.denegar}
								>
									Registrar
								</button>
								<p className="espacio">
									<Link to="/">Iniciar sesión</Link>
								</p>
							</div>
						</div>
					</form>
					<div>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore dolore magnam,
							voluptatibus temporibus esse voluptatum rem ea expedita, deserunt earum ab minus
							repudiandae ullam obcaecati beatae explicabo provident. Dignissimos, illum.
						</p>
					</div>
				</section>
			</Layout>
		);
	}
}
