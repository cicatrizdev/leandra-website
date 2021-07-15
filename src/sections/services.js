/** @jsx jsx */
import { jsx, Box, Container, Grid } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon1 from 'assets/images/services/online.svg';
import icon2 from 'assets/images/services/psy.svg';
import icon3 from 'assets/images/services/heart.svg';
import icon4 from 'assets/images/services/lock.svg';
import icon5 from 'assets/images/services/video_call.svg';
import icon6 from 'assets/images/services/chair.svg';

const data = {
	services: [
		{
			id: 1,
			icon: icon1,
			title: 'Atendimento online',
			desc: `O atendimento psicológico online é uma prática reconhecida pelo Conselho Federal de Psicologia. Sua eficácia é a mesma do atendimento presencial, com a vantagem do cliente poder escolher um lugar em que se sente confortável para fazer os atendimentos, de qualquer parte do mundo.`,
		},
		{
			id: 2,
			icon: icon2,
			title: 'Vittude',
			desc: `As sessões podem acontecer via Vittude, uma plataforma que conecta psicólogos e pacientes. O link para o meu perfil está mais abaixo, na sessão de Contatos`,
		},
		{
			id: 3,
			icon: icon3,
			title: 'Outras plataformas',
			desc: `Outra forma de realizar as sessões é entrando em contato diretamente comigo pelo WhatsApp. Você escolhe o dia e horário que melhor se encaixam na sua agenda e define o método de pagamento. No dia da sessão, enviarei a você um link para acesso. `,
		},
	],
	faq: [
		{
			id: 1,
			icon: icon4,
			desc: `O sigilo profissional prevalece também em atendimentos online. Somente você e eu temos acesso à sessão e ao que foi dito nela. As sessões não são gravadas.`,
		},
		{
			id: 2,
			icon: icon5,
			desc: `O acesso à uma conexão de boa qualidade ajuda durante o atendimento, para que ninguém perca detalhes do que o outro está dizendo.`,
		},
		{
			id: 3,
			icon: icon6,
			desc: `Um lugar seguro, tranquilo e particular também deve ser garantido durante o atendimento. Dessa forma, você se sente mais à vontade para falar aquilo que tem vontade, sem interrupções ou distrações. `,
		},
	],
};

const Services = () => {
	return (
		<Box as='section' id='services' sx={styles.section}>
			<Container>
				<SectionHeading slogan='Sobre meu trabalho' title='Cuidados com sua saúde mental' />
				<Grid sx={styles.serviceGrid}>
					{data.services.map((item) => (
						<Service key={item.id} service={item} />
					))}
				</Grid>
				<SectionHeading
					slogan='Informações adicionais'
					title='Para ajudar nas suas dúvidas'
					style={{ paddingTop: '95px' }}
				/>
				<Grid sx={styles.serviceGrid}>
					{data.faq.map((item) => (
						<Service key={item.id} service={item} />
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default Services;

const styles = {
	section: {
		pt: [8, null, null, 8, 10, null, 15],
		pb: [7, null, null, null, 10, null, 14],
	},
	serviceGrid: {
		backgroundColor: 'white',
		boxShadow: '0px 0px 25px rgba(54, 91, 125, 0.20)',
		borderRadius: 10,
		gap: [8, null, null, '60px 40px', '50px 30px', '60px 40px'],
		justifyContent: 'center',
		gridTemplateColumns: [
			'repeat(1, 250px)',
			null,
			null,
			'repeat(1, 260px)',
			'repeat(3, 258px)',
			'repeat(3, 300px)',
		],
		pt: [8, null, null, 16],
		pb: [8, null, null, 15],
	},
};
