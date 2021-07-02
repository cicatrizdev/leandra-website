/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import About from 'components/about';

const Banner = () => {
	return (
		<Box as='section' id='home' sx={styles.section}>
			<Container>
				<Box sx={styles.contentWrapper}>
					<About />
				</Box>
			</Container>
		</Box>
	);
};

export default Banner;

const styles = {
	section: {
		position: 'relative',
		zIndex: 0,
		pt: [17, null, null, 19, 21, 23],
		pb: [8, null, null, 10, null, null, 10],
		minHeight: [null, null, null, null, null, '100vh'],
	},
	contentWrapper: {
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'center',
	},
};
