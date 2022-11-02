import * as React from 'react';
import { Link } from 'gatsby';

export default function NotFound() {
	return (
		<div className="not-found">
			<div>
				<h1>Pagina no encontrada</h1>
				<p>
					No encontramos esta pagina, por favor verifica la dirección a la que deseas ingresar
				</p>
				<p>
					Ir al <Link to="/">Inicio</Link>
				</p>
			</div>
		</div>
	);
}
