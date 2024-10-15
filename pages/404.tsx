import Head from "next/head";
import { NextSeo } from "next-seo";

export default function Contact() {
  const buttonStyle =
    "w-64 p-1 mx-auto font-bold text-center text-black border border-gray-500 rounded-lg sm:p-4";

  return (
    <div className="text-black">
      <NextSeo
        title="404 - Lukas Tech"
        description="404 page for all missing pages"
        canonical="https://lukas-tech.com/404"
        openGraph={{
          url: "https://lukas-tech.com/404",
        }}
      />
      <Head>
        <title>404 - Lukas Tech</title>
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
      <div className="flex flex-col justify-center mx-auto mt-52 text-center max-w-2x1">
        <h1 className="text-3xl font-bold tracking-tight text-black md:text-5xl">
          404 - Unavailable
        </h1>
        <br />
        <h3>Sorry, we didn't find a page that that location.</h3>
        <br />
        <a className={buttonStyle} href="/">
          Return Home
        </a>
      </div>
      <div className="mt-64"></div>
    </div>
  );
}
