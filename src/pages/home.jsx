import * as React from 'react';
import AnyChart from 'anychart-react/dist/anychart-react.min.js';
import { Layout, Seo, validarCredenciales } from '../components';

const complexSettings = {
	width: 800,
	height: 600,
	type: 'column',
	data: 'P1,5\nP2,3\nP3,6\nP4,4',
	title: 'Column chart',
	yAxis: [
		1,
		{
			orientation: 'right',
			enabled: true,
			labels: {
				format: '{%Value}{decimalPoint:\\,}',
				fontColor: 'red',
			},
		},
	],
	legend: {
		background: 'lightgreen 0.4',
		padding: 0,
	},
	lineMarker: {
		value: 4.5,
	},
};

export default class home extends React.Component {
	componentDidMount() {
		validarCredenciales();
	}

	render() {
		return (
			<Layout>
				<Seo title="Home" />
				<h1>Home</h1>
				<AnyChart {...complexSettings} />
			</Layout>
		);
	}
}
