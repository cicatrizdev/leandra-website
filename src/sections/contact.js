/** @jsx jsx */
import { jsx, Box, Container, Grid, Link } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import styled from 'styled-components';

import Whatsapp from '../assets/images/icons/whatsapp.svg';
import Vittude from '../assets/images/icons/vittude.svg';
import Instagram from '../assets/images/icons/instagram.png';
import Gmail from '../assets/images/icons/gmail.png';

const data = [
	{
		id: 1,
		icon: Whatsapp,
		iconWidth: '50',
		title: 'Whatsapp',
		link: `https://api.whatsapp.com/send?phone=5511911217680&text=Ol%C3%A1%2C+Leandra`,
	},
	{
		id: 2,
		icon: Vittude,
		iconWidth: '38',
		title: 'Vittude',
		link: `https://www.vittude.com.br/psicologo?slug=leandra-camila-melo-campos`,
	},
	{
		id: 3,
		icon: Gmail,
		iconWidth: '',
		title: 'E-mail',
		link: `mailto:leandramelo.psi@gmail.com`,
	},
];

const StyledLink = styled(Link)`
	text-decoration: none;
	color: inherit;

	img:hover {
		opacity: 0.5;
	}
`;

const Contact = () => {
	return (
		<Box as='section' id='contact' sx={styles.section}>
			<Container style={{ height: '60vh', marginBottom: '120px' }}>
				<SectionHeading sx={styles.heading} slogan='Contatos' title='Agende agora comigo' />
				<Grid sx={styles.serviceGrid}>
					{data.map((item) => (
						<StyledLink
							href={item.link}
							key={item.id}
							rel='nofollow noreferrer nofollow'
							target='_blank'
						>
							<Service service={item} />
						</StyledLink>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default Contact;

const styles = {
	section: {
		pt: [6, null, null, 9, null, 13],
		pb: [8, null, null, 9, null, 17],
		position: 'relative',
	},
	heading: {
		mb: [6, null, null, 9],
	},
	serviceGrid: {
		// backgroundColor: 'white',
		boxShadow: '0px 0px 25px rgba(54, 91, 125, 0.20)',
		borderRadius: 10,
		gap: [8, null, null, '60px 40px', '50px 30px', '60px 40px'],
		justifyContent: 'center',
		gridTemplateColumns: [
			'repeat(3, 70px)',
			null,
			null,
			'repeat(3, 150px)',
			'repeat(3, 150px)',
			'repeat(3, 150px)',
		],
		pt: [8, null, null, 16],
		pb: [8, null, null, 15],
	},
};
