import * as React from 'react';
import { Password } from '../../components';

export default class Activar extends React.Component {
	constructor(porps) {
		super(porps);

		this.state = {
			params: this.props.params.usuario,
			password: '',
			confirmPassword: '',
			denegar: false,
		};
	}

	/**
	 *
	 * @param {Event} event
	 */
	submit = (event) => {
		event.preventDefault();
		console.log(this.state);
	};

	/**
	 *
	 * @param {Event} event
	 */
	change = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="contenedor">
				<form onSubmit={this.submit} className="caja">
					<h1>Activar cuenta</h1>
					<Password id="password" value={this.state.password} onChange={this.change} />

					<Password
						id={'confirmPassword'}
						value={this.state.confirmPassword}
						onChange={this.change}
					/>

					<div className="botones-opcion">
						<button className="boton full">Activar</button>
					</div>
				</form>
			</div>
		);
	}
}
