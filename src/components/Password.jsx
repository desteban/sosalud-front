import * as React from 'react';

export default function Password({ id, onChange, value, children }) {
	return (
		<div className="espacio-input">
			<div className="input input-password">
				<input
					className="flotante-label_input"
					type={'password'}
					id={id}
					name={id}
					value={value}
					placeholder="Contaseña"
					onChange={onChange}
				/>
				<label htmlFor="password" className="flotante-label_label">
					Contraseña
				</label>
				<div className="icono" onClick={() => toogle(id)}>
					<i className="gg-eye-alt"></i>
				</div>
			</div>
			{children}
		</div>
	);
}

/**
 *
 * @param {string} idElemento
 */
const toogle = (idElemento) => {
	let input = document.getElementById(idElemento);
	const type = input?.getAttribute('type');

	//cambiar el tipo del input para mostrar la contraseña
	input.setAttribute('type', type === 'text' ? 'password' : 'text');
};
