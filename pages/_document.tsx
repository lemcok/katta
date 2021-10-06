import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    render():JSX.Element {
        return (
            <Html lang='es'>
                <Head>
                    <title>Katta</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument