import * as React from 'react';
import Footer from './Footer';
import Header from './Header';

import '../sass/index.scss';

export default function Layout(props) {
	return (
		<>
			<Header />
			<main>{props.children}</main>
			<Footer />
		</>
	);
}
