import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <link rel='icon' href='portfolio.svg' />
                <meta name='description' content="Andrew Chalupa's Portfolio" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
