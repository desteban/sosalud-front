import * as React from 'react';

export default function Input({
	id,
	onChange,
	value,
	children,
	placeholder,
	autoComplete = 'OFF',
}) {
	return (
		<div className="input ">
			<input
				className="flotante-label_input"
				type="text"
				name={id}
				id={id}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				autoComplete={autoComplete}
			/>
			<label htmlFor="nombreUsuario" className="flotante-label_label">
				{placeholder}
			</label>
			{children}
		</div>
	);
}
