import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    bodyStyle = {
        margin: 0
    }

    render() {
        return (
            <Html>
            <Head />
            <link rel="shortcut icon" href="/static/favicon.ico" />
            <link rel="manifest" href="/static/manifest.json" />
            <body style={this.bodyStyle}>
                <Main />
                <NextScript />
            </body>

            <style global jsx>
                {`
                html {
                    height: 100%;
                }
                body {
                    height: 100%;
                    background-image: linear-gradient(to right top, #54b7e1, #49adef, #5f9ff8, #868df6, #b174e8);
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                }
                `}
            </style>

            </Html>
        )
    }
}

export default MyDocument