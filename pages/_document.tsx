import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <link rel='icon' href='portfolio.svg' />
                <meta name='description' content="Andrew Chalupa's Portfolio" />
                <link rel='preload' href='/fonts/inter/inter-medium.woff' as='font' type='font/woff2' crossOrigin='anonymous' />
                <link rel='preload' href='/fonts/inter/inter-regular.woff' as='font' type='font/woff2' crossOrigin='anonymous' />
                
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
