import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

export default function Footer() {
	return (
		<footer>
			<div className="contacto">
				<div>
					<StaticImage src="../images/Sosalud.png" alt="Logo sosalud" />
				</div>

				<div>
					<p>
						Somos una sociedad que está comprometida con la gestión y operación integral en los
						procesos de facturación y auditoria.
					</p>
				</div>
			</div>
		</footer>
	);
}
