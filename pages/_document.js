import Document, { Html, Head, Main, NextScript } from "next/document";
import crypto from "crypto";

const cspHashOf = (text) => {
  const hash = crypto.createHash("sha256");
  hash.update(text);
  return `'sha256-${hash.digest("base64")}'`;
};

export default class MyDocument extends Document {
  render() {
    // let csp = `default-src 'self'; script-src 'self' ${cspHashOf(
    //   NextScript.getInlineScriptSource(this.props)
    // )}`;
    // if (process.env.NODE_ENV !== "production") {
    //   csp = `style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src fonts.gstatic.com;
    //   default-src 'self'; img-src 'self' data:; media-src res.cloudinary.com; script-src 'unsafe-eval' 'self' 
    //   ${cspHashOf( NextScript.getInlineScriptSource(this.props) )}`;
    // }

    return (
      <Html lang="en">
        <Head>
          {/* <meta httpEquiv="Content-Security-Policy" content={csp} /> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&family=Red+Hat+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
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
