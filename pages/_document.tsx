import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <link rel='icon' href='portfolio.svg' />
                <meta name='description' content="Andrew Chalupa's Portfolio" />
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
                <link href='https://fonts.googleapis.com/css2?family=Oxanium:wght@200..800&display=swap' rel='stylesheet' />
                <link rel='preload' href='/fonts/inter/inter-medium.woff' as='font' type='font/woff2' crossOrigin='anonymous' />
                <link rel='preload' href='/fonts/inter/inter-regular.woff' as='font' type='font/woff2' crossOrigin='anonymous' />
                <title>Andrew Chalupa</title>
                <meta name='robots' content='noindex, nofollow, noarchive, noimageindex' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
