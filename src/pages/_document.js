import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang='pt-BR'>
				<Head>
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Belleza&family=Montserrat&display=swap'
						rel='stylesheet'
					/>
					<meta
						name='google-site-verification'
						content='2gnRzbmn_9B1HAoSJNJKCSWaChzTDYBA2lEN25VlDXw'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default CustomDocument;
