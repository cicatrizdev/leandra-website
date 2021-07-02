/** @jsx jsx */
import styled from 'styled-components';
import { jsx, Box, Heading, Text } from 'theme-ui';
import Avatar from '../assets/images/leandra_avatar.jpg';

const RoundImg = styled.img`
	border-radius: 50%;
	width: 200px;
	height: 200px;
	border: 3px solid #031c32;
	position: absolute;
	top: -100px;
`;

const About = () => {
	return (
		<Box sx={styles.formWrapper}>
			<RoundImg src={Avatar} alt='foto de leandra' />
			<Heading sx={styles.title}>LEANDRA CAMILA MELO CAMPOS</Heading>
			<Box sx={styles.form}>
				<Text>
					Sou psicóloga clínica (CRP-04/60465), pós-graduada em Terapia de Casais e Família pelo
					Instituto Brasileiro de Formação (IBF Pós) com ênfase em Gestalt-terapia e
					gestalt-terapeuta em formação pelo Instituto Gestalt Paraná.
					<br />
					<br />
					Atendo adultos, idosos e casais, no momento apenas de forma online.
				</Text>
			</Box>
		</Box>
	);
};

export default About;

const styles = {
	formWrapper: {
		borderRadius: 10,
		marginTop: '100px',
		backgroundColor: 'white',
		boxShadow: '0px 24px 50px rgba(54, 91, 125, 0.05)',
		p: ['26px', null, null, '35px 40px 50px'],
		position: 'relative',
		maxWidth: '800px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		'::before, ::after': {
			content: [null, null, null, null, null, `''`],
			position: 'absolute',
			width: 302,
			height: 347,
			zIndex: -1,
		},
		'::before': {
			left: '-60px',
			bottom: 15,
		},
		'::after': {
			right: '-41px',
			top: '-30px',
		},
	},
	title: {
		color: '#031C32',
		fontFamily: 'Belleza',
		fontWeight: 'bold',
		fontSize: [6, null, null, 12, 8, 11],
		lineHeight: 1.4,
		letterSpacing: 'heading',
		marginBottom: '25px',
		marginTop: '100px',
		textAlign: 'center',
	},
	form: {
		label: {
			alignItems: 'center',
			cursor: 'pointer',
			fontWeight: 400,
		},
	},
};
