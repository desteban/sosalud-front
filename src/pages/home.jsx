import * as React from 'react';
import AnyChart from 'anychart-react/dist/anychart-react.min.js';
import { Layout, Seo, validarCredenciales } from '../components';

const DiagnosticosComunes = {
	id: 'diagnosticos-mas-comunes',
	height: 600,
	type: 'pie',
	data: [
		{ x: 'EXAMEN MEDICO GENERAL', value: '2929' },
		{ x: 'CARIES DE LA DENTINA', value: '1586' },
		{ x: 'EXAMEN ODONTOLOGICO', value: '1577' },
		{ x: 'HIPERTENSION ESENCIAL (PRIMARIA)', value: '1476' },
		{ x: 'RINOFARINGITIS AGUDA (RESFRIADO COMUN)', value: '1450' },
		{ x: 'CONTROL DE SALUD DE RUTINA DEL NIÑO', value: '1428' },
		{ x: 'CONSULTA PARA ATENCION Y SUPERVISION DE LA SALUD DEL NIÑO', value: '975' },
		{ x: 'CARIES LIMITADA AL ESMALTE', value: '925' },
		{ x: 'GINGIVITIS AGUDA', value: '922' },
		{ x: 'CEFALEA', value: '846' },
	],
	title: {
		text: 'Los diagnosticos mas comunes',
		fontWeight: 'bold',
		fontSize: 15,
	},
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
	legend: false,
};

const DiagnosticosComunesMovil = [
	{ x: 'A', value: 2929 },
	{ x: 'B', value: 1586 },
	{ x: 'C', value: 1577 },
	{ x: 'D', value: 1476 },
	{ x: 'E', value: 1450 },
	{ x: 'F', value: 1428 },
	{ x: 'G', value: 975 },
	{ x: 'H', value: 925 },
	{ x: 'I', value: 922 },
	{ x: 'J', value: 846 },
];

const ProcedimientosRealizados = {
	id: 'procedimientos-mas-realizados',
	height: 600,
	type: 'bar',
	data: [
		['A', '7379'],
		['B', '3468'],
		['C', '2900'],
		['D', '2651'],
		['E', '2520'],
		['F', '2376'],
		['G', '2189'],
		['H', '1684'],
		['I', '1577'],
		['J', '1536'],
	],
	title: {
		text: 'los 10 procedimientos mas realizados',
		fontWeight: 'bold',
		fontSize: 15,
	},
	yAxis: [
		1,
		{
			orientation: 'right',
			enabled: true,
			labels: {
				format: '{%Value}{decimalPoint:\\,}',
			},
		},
	],
	legend: null,
};

const PacientesAtendidos = {
	id: 'pacientes-mas-atendidos',
	height: 600,
	type: 'pie',
	data: [
		{ x: 'ROSA JOSEFA MEJIA PINTO', value: 41 },
		{ x: 'DIANA  EPINAYU', value: 34 },
		{ x: 'CARMEN REINELDA MENDOZA', value: 34 },
		{ x: 'ALFONSO ANTONIO RAMOS MERIÑO', value: 32 },
		{ x: 'LAURA PATRICIA EPIAYU', value: 27 },
		{ x: 'BERTHA  URIANA IPUANA', value: 27 },
		{ x: 'MARLEY YIRETH CARRERA GUERRERO', value: 27 },
		{ x: 'PAOLA ANDREA GIRALDO TASCON', value: 26 },
		{ x: 'LUIS CARLOS GOMEZ RAMIREZ', value: 26 },
		{ x: 'MATILDE HELENA MARTINEZ GUERRA', value: 26 },
	],
	title: 'Los 10 pacientes con más atenciones médicas',
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
		padding: 8,
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
				<div className="graficas">
					<div className="grafica pc col1 card">
						<AnyChart {...DiagnosticosComunes} />
					</div>

					<div className="grafica movil card">
						<AnyChart
							id="diagnosticos-mas-comunes-movil"
							type={'pie'}
							height={600}
							title={DiagnosticosComunes.title}
							data={DiagnosticosComunesMovil}
						/>
						<ul>
							<li>
								A: <span className="texto">EXAMEN MEDICO GENERAL</span>
							</li>
							<li>
								B: <span className="texto">CARIES DE LA DENTINA</span>
							</li>
							<li>
								C: <span className="texto">EXAMEN ODONTOLOGICO</span>
							</li>
							<li>
								D: <span className="texto">HIPERTENSION ESENCIAL (PRIMARIA)</span>
							</li>
							<li>
								E: <span className="texto">RINOFARINGITIS AGUDA (RESFRIADO COMUN)</span>
							</li>
							<li>
								F: <span className="texto">CONTROL DE SALUD DE RUTINA DEL NIÑO</span>
							</li>
							<li>
								G:{' '}
								<span className="texto">
									CONSULTA PARA ATENCION Y SUPERVISION DE LA SALUD DEL NIÑO
								</span>
							</li>
							<li>
								H: <span className="texto">CARIES LIMITADA AL ESMALTE</span>
							</li>
							<li>
								I: <span className="texto">GINGIVITIS AGUDA</span>
							</li>
							<li>
								J: <span className="texto">CEFALEA</span>
							</li>
						</ul>
					</div>

					<div className="grafica col2 card">
						<AnyChart {...ProcedimientosRealizados} />
						<ul>
							<li>
								A: <span className="texto">CONTROL DE PLACA DENTAL</span>
							</li>
							<li>
								B: <span className="texto">TOPICACION DE FLUOR EN GEL</span>
							</li>
							<li>
								C:{' '}
								<span className="texto">GLUCOSA EN SUERO U OTRO FLUIDO DIFERENTE A ORINA</span>
							</li>
							<li>
								D:{' '}
								<span className="texto">
									HEMOGRAMA IV (HEMOGLOBINA HEMATOCRITO RECUENTO DE ERITROCITOS IN DICES
									ERITROCITARIOS LEUCOGRAMA RECUENTO DE PLAQUETAS INDICES PLAQUETARIOS Y
									MORFOLOGIA ELECTRONICA E HISTOGRAMA) AUTOMATIZADO
								</span>
							</li>
							<li>
								E: <span className="texto">APLICACION DE SELLANTES DE FOTOCURADO</span>
							</li>
							<li>
								F:{' '}
								<span className="texto">
									DETARTRAJE SUPRAGINGIVAL SOD + (OBS)-DESHABILITADO RES 1132 2017
								</span>
							</li>
							<li>
								G: <span className="texto">UROANALISIS</span>
							</li>
							<li>
								H:{' '}
								<span className="texto">
									CREATININA EN SUERO ORINA U OTROS (OBS)-DESHABILITADO RES 1132 2017
								</span>
							</li>
							<li>
								I: <span className="texto">NEBULIZACION</span>
							</li>
							<li>
								J:{' '}
								<span className="texto">
									HEMOGRAMA I (HEMOGLOBINA HEMATOCRITO Y LEUCOGRAMA) MANUAL
								</span>
							</li>
						</ul>
					</div>
				</div>
			</Layout>
		);
	}
}
