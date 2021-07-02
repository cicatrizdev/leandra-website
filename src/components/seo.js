import React from 'react';
import Head from 'next/head';

export default function SEO({
	description = 'Leandro Melo Psicóloga Clínica <leandramelo.psi@gmail.com>',
	author = 'Pedro Mello <contato@cicatriz.dev>',
	meta,
	title = 'Leandra Melo | Psicóloga',
}) {
	const metaData = [
		{
			name: `description`,
			content: description,
		},
		{
			property: `og:title`,
			content: title,
		},
		{
			property: `og:description`,
			content: description,
		},
		{
			property: `og:type`,
			content: `website`,
		},
	].concat(meta);
	return (
		<Head>
			<title>{title}</title>
			{metaData.map(({ name, content }, i) => (
				<meta key={i} name={name} content={content} />
			))}
		</Head>
	);
}

SEO.defaultProps = {
	lang: `pt-br`,
	meta: [],
	description: ``,
};
