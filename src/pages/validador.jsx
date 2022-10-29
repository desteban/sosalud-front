import * as React from 'react';
import { validarCredenciales, Layout, Seo } from '../components';
import Descarga from '../images/svg/download.svg';

export default class Validador extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			denegar: true,
			tipoUsuario: '',
			tipoContrato: '',
			archivo: '',
			errorTipoUsuario: '',
			errorTipoContrato: '',
			errorArchivo: '',
			file: null,
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

		this.toogleLoader();

		let archivo = document.querySelector('#archivo');

		const formData = new FormData();
		formData.append('tipoContrato', this.state.tipoContrato);
		formData.append('tipoUsuario', this.state.tipoUsuario);
		formData.append('archivo', archivo.files[0]);

		const header = new Headers();
		header.append('token', `${localStorage.getItem('token')}`);

		let respuesta = await fetch(`${process.env.API_URL}comprimidos`, {
			method: 'POST',
			headers: header,
			body: formData,
		});

		this.toogleLoader();
		this.limpiarFormulario();
		if (respuesta.status !== 200) {
			respuesta = await respuesta.json();

			if (respuesta.codigoHttp !== 200) {
				console.log(respuesta);
				this.setState({
					errorTipoContrato: this.toString(respuesta.data.tipoContrato),
					errorTipoUsuario: this.toString(respuesta.data.tipoUsuario),
					errorArchivo: this.toString(respuesta.data.archivo),
				});
			}
		}

		if (respuesta.status === 200) {
			let blob = await respuesta.blob();

			if (blob.type === 'application/json') {
				alert('RIPS subido exitosamente');
			}

			if (blob.type !== 'application/json') {
				let file = window.URL.createObjectURL(blob);
				this.setState({ file });
			}
		}
	};

	/**
	 *
	 * @param {Array} arreglo
	 * @returns {string}
	 */
	toString = (arreglo = []) => {
		if (arreglo) {
			return arreglo.length > 0 ? arreglo.toString() : '';
		}

		return '';
	};

	toogleLoader = () => {
		let loader = document.getElementById('loader');
		loader.classList.toggle('loader');
	};

	activarBoton = () => {
		return !(
			(document.getElementById('tipoUsuario').value.length !== 0) &
			(document.getElementById('tipoContrato').value.length !== 0) &
			(document.getElementById('archivo').value.length !== 0)
		);
	};

	descargarLog = () => {
		window.location.assign(this.state.file);
		this.setState({ file: null });
	};

	limpiarFormulario = () => {
		this.setState({
			tipoContrato: '',
			tipoUsuario: '',
			archivo: '',
			denegar: true,
		});
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
					<form id="formularioValidador" className="caja" onSubmit={this.submit}>
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
							{this.state.errorTipoUsuario !== '' ? (
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
							{this.state.errorTipoContrato !== '' ? (
								<p className="error">{this.state.errorTipoContrato}</p>
							) : null}
						</div>

						<div className="input ">
							<label htmlFor="archivo">Archivo</label>
							<input
								type={'file'}
								id="archivo"
								name="archivo"
								className="upload-button__input"
								accept=".rar,.zip,.7z"
								value={this.state.archivo}
								onChange={this.change}
							/>
							{this.state.errorArchivo !== '' ? (
								<p className="error">{this.state.errorArchivo}</p>
							) : null}
						</div>

						<div className="center">
							<span id="loader"></span>
						</div>

						<button
							className={`full ${this.state.denegar ? 'disable' : ''}`}
							disabled={this.state.denegar}
						>
							Enviar
						</button>

						{this.state.file !== null ? (
							<div className="center pointer card error" onClick={this.descargarLog}>
								<Descarga height={30} />
								<p>Descargar log de errores</p>
							</div>
						) : null}
					</form>
				</section>
			</Layout>
		);
	}
}
