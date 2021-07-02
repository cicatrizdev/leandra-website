import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import Contact from 'sections/contact';

export default function IndexPage() {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<SEO title='Leandra Melo | Psicóloga' description='' />
				<Banner />
				<Services />
				<Contact />
			</Layout>
		</ThemeProvider>
	);
}
