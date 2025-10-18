import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Analytics Dashboard</title>
        <meta name="description" content="Overview of your dashboard" />
        <link rel="icon" sizes="16x16" href="/icon2.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
