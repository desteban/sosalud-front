import { navigate } from 'gatsby';

/**
 *
 * @param {boolean} home
 * @param {boolean} proteger
 */
export default function validarCredenciales(home = false, proteger = true) {
	let token = localStorage.getItem('token');

	if ((token === null || token === undefined) && proteger) {
		navigate('/');
	}

	if (home && token && !proteger) {
		navigate('/home');
	}
}
