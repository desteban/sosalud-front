import * as React from 'react';
import { navigate } from 'gatsby';
import { Password, Seo, NotFound } from '../../components';

export default class Activar extends React.Component {
	constructor(porps) {
		super(porps);

		this.state = {
			rememberToken: this.props.params.usuario,
			password: '',
			confirmPassword: '',
			denegar: true,
			errorToken: '',
			errorPassword: '',
			errorConformPassword: '',
			tokenValido: false,
		};
	}

	/**
	 *
	 * @param {Event} event
	 */
	submit = async (event) => {
		event.preventDefault();

		const headers = new Headers();
		headers.append('Content-Type', 'application/json');

		let respuesta = await fetch(`${process.env.API_URL}usuario`, {
			method: 'PUT',
			headers: headers,
			body: JSON.stringify(this.state),
		});
		let respuestaJson = await respuesta.json();

		let estado = {};
		if (respuestaJson.codigoHttp === 400) {
			console.log(respuesta.data);
			estado.errorToken = this.toString(respuestaJson.data.rememberToken);
			estado.errorPassword = this.toString(respuestaJson.data.password);
			estado.errorConformPassword = this.toString(respuestaJson.data.confirmPassword);
		}

		if (respuestaJson.codigoHttp === 404) {
			navigate('/');
		}

		this.setState(estado);
	};

	/**
	 *
	 * @param {Event} event
	 */
	change = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
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

	formulario = () => {
		return (
			<form onSubmit={this.submit} className="caja">
				<h1>Activar cuenta</h1>
				<p>La contraseña debe contar con mínimo 6 caracteres</p>

				{this.state.errorToken !== '' ? (
					<div className="card error">
						<p>{this.state.errorToken}</p>
					</div>
				) : null}

				<Password id="password" value={this.state.password} onChange={this.change}>
					{this.state.errorPassword !== '' ? (
						<p className="error">{this.state.errorPassword}</p>
					) : null}
				</Password>

				<Password
					id={'confirmPassword'}
					value={this.state.confirmPassword}
					onChange={this.change}
				>
					{this.state.errorConformPassword !== '' ? (
						<p className="error">{this.state.errorConformPassword}</p>
					) : null}
				</Password>

				<div className="botones-opcion">
					<button
						className={`full ${this.state.denegar ? 'disable' : ''}`}
						disabled={this.state.denegar}
					>
						Cambiar
					</button>
				</div>
			</form>
		);
	};

	componentWillMount() {
		console.log(this.state.rememberToken);
		let data = {
			token: this.state.rememberToken,
			auth: false,
		};

		fetch(`${process.env.API_URL}usuario/token`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((respuesta) => respuesta.json())
			.then((json) => {
				console.log(json);
				if (json.codigoHttp === 200) {
					this.setState({ tokenValido: true });
				}
			});
	}

	componentWillUpdate(nextProps, nextState) {
		nextState.denegar = !((nextState.confirmPassword !== '') & (nextState.password !== ''));
	}

	render() {
		return (
			<main className="contenedor">
				<Seo title="Recuperacion" />
				{this.state.tokenValido ? this.formulario() : <NotFound />}
			</main>
		);
	}
}
