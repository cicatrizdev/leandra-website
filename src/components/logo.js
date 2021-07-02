/** @jsx jsx */
import { jsx, Image, Text } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/images/logo.svg';
import logoWhite from 'assets/images/logoFull.svg';

export default function Logo({ isWhite, ...props }) {
	return (
		<Link path='/' sx={styles.logo} {...props}>
			{isWhite ? (
				<Image width='350' height='350' src={logoWhite} alt='startup landing logo' />
			) : (
				<Image width='80' height='80' src={logo} alt='startup landing logo' />
			)}
		</Link>
	);
}
const styles = {
	logo: {
		alignItems: 'center',
		cursor: 'pointer',
		display: 'inline-flex',
		img: {
			maxWidth: [300, '100%'],
		},
	},
};
