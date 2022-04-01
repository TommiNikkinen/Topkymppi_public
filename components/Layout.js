import Head from "next/head";
import CookieConsent from "react-cookie-consent";
import Footer from "./Footer";
import Header from "./Header";
import SocialMediaSidebar from "./SocialMediaSidebar";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container mx-auto md:px-0 my-7 flex-grow  ">
        {children}
      </main>
      <CookieConsent
        location="bottom"
        style={{ background: "#000", textAlign: "left" }}
        buttonStyle={{ fontSize: "14px" }}
        buttonText="Hyväksy"
        expires={365}
      >
        Tämä sivusto käyttää evästeitä käyttäjäkokemuksen parantamiseen.
        Jatkamalla sivuston käyttöä hyväksyt käytäntömme.{" "}
        <a className="underline" href="/privacy_policy">
          Lue lisää
        </a>
      </CookieConsent>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Topkymppi| Parhaat Top-listaukset",
  keywords:
    "Top, listaukset, terveys, urheilu, pelit, hyvinvointi, uutiset, musiikki, elokuvat, raha",
  description: "Topkymppi parhaat top-listaukset uutiset ja vinkit suomeksi",
};
