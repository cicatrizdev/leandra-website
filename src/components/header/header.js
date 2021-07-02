/** @jsx jsx */
import { jsx, Box, Flex, Container, Button } from 'theme-ui';
import Sticky from 'react-stickynode';
import Logo from 'components/logo';
import { NavLink } from 'components/link';
import { DrawerProvider } from 'contexts/drawer/drawer-provider';
import NavbarDrawer from './navbar-drawer';
import menuItems from './header.data';

const whatsappApi = 'https://api.whatsapp.com/send?phone=5511911217680&text=Ol%C3%A1%2C+Leandra';

export default function Header() {
	return (
		<DrawerProvider>
			<Box sx={styles.headerWrapper}>
				<Sticky enabled={true} top={0} activeClass='is-sticky' innerZ={100}>
					<Box as='header' sx={styles.header}>
						<Container>
							<Box sx={styles.headerInner}>
								<Logo sx={styles.logo} />
								<Flex as='nav' sx={styles.navbar} className='navbar'>
									<Box as='ul' sx={styles.navList}>
										{menuItems.map(({ path, label }, i) => (
											<li key={i}>
												<NavLink path={path} label={label} />
											</li>
										))}
									</Box>
								</Flex>
								<Flex sx={styles.buttonWrapper}>
									<a
										style={{ textDecoration: 'none' }}
										href={whatsappApi}
										rel='noreferrer noopener'
										target='_blank'
									>
										<Button variant='primary' sx={styles.contactNow}>
											Agende agora
										</Button>
									</a>
								</Flex>
								<NavbarDrawer />
							</Box>
						</Container>
					</Box>
				</Sticky>
			</Box>
		</DrawerProvider>
	);
}

const styles = {
	headerWrapper: {
		backgroundColor: 'transparent',
		'.is-sticky': {
			header: {
				backgroundColor: 'white',
				boxShadow: '0 6px 13px rgba(38,78,118,0.1)',
				paddingTop: '15px',
				paddingBottom: '15px',
			},
		},
	},
	header: {
		position: 'fixed',
		left: 0,
		right: 0,
		py: 4,
		transition: 'all 0.3s ease-in-out 0s',
		'&.is-mobile-menu': {
			backgroundColor: 'white',
		},
	},
	headerInner: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	logo: {
		mr: [null, null, null, null, 6, 12],
	},
	navbar: {
		display: ['none', null, null, null, 'flex'],
		alignItems: 'center',
		flexGrow: 1,
		// justifyContent: 'center',
	},
	navList: {
		display: ['flex'],
		listStyle: 'none',
		justifyContent: 'flex-end',
		flexGrow: 1,
		p: 0,
		'.nav-item': {
			cursor: 'pointer',
			fontWeight: 400,
			padding: 0,
			margin: [null, null, null, null, '0 20px'],
		},
		'.active': {
			color: '#B3365B',
			textShadow: '1px 0.5px #EBCACA',
		},
	},
	buttonWrapper: {
		alignItems: 'center',
		marginLeft: 'auto',
		marginRight: [4, 6],
		button: {
			fontWeight: 500,
		},
	},
	contactNow: {
		display: ['none', null, null, null, 'flex'],
		minHeight: [30, null, null, 45],
		px: ['12px', null, null, 4],
		fontSize: [0, null, null, '15px'],
		backgroundColor: '#B3365B',

		'&:hover': {
			backgroundColor: '#031C32',
		},
	},
	closeButton: {
		height: '32px',
		padding: '4px',
		minHeight: 'auto',
		width: '32px',
		ml: '3px',
		path: {
			stroke: 'text',
		},
	},
};
