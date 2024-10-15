import { NextSeo } from "next-seo";
import React from "react";
import Head from "next/head";
import Header from "./Header";
import NewsFeed from "./NewsFeed";
import Footer from "./Footer";
import Script from "next/script";

export default function Layout({ children }) {
  const [navbarOpen, setNavbarOpen] = React.useState<boolean>(false);

  return (
    <>
      <NextSeo
        title="Lukas Tech"
        description="Lukas Tech Ltd - Digital Tech Solutions"
        canonical="https://lukas-tech.com"
        openGraph={{
          url: "https://lukas-tech.com",
        }}
      />
      <Head>
        <title>Digital Tech Solutions - Lukas Tech Ltd</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/fav/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/fav/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/fav/favicon-16x16.png"
        />
        <link rel="manifest" href="/img/fav/site.webmanifest" />
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-Y0TGZ4K67J`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-script" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y0TGZ4K67J');
        `}
      </Script>
      <main>
        <Header
          navbarOpen={navbarOpen}
          setNavbarOpen={() => setNavbarOpen(!navbarOpen)}
        />
        {children}
        <NewsFeed navbarIsOpen={navbarOpen} />
        <Footer />
      </main>
    </>
  );
}
