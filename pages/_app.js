import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import CookieConsent from "react-cookie-consent";
import Transition from '../components/Transition';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/owl.css';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.js')
  }, [])

  return (
    <>
      <Head>
        <title>The Blue Rose Affiliation</title>
        <meta name="description" content="The Blue Rose Affiliation is a business networking entity designed to help small business owners network with one another." />
        <meta name="keywords" content="business networking, small business networking, local business networking" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-CPK6DB6E5B"/>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CPK6DB6E5B', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <div className="container-fluid px-0">
        <div className="row mx-0">
          <div className="col px-0 pb-5 mb-5">
            <main className="main">
              <Header />
                <Transition>
                  <Component {...pageProps} />
                </Transition>
              <Footer />
              <CookieConsent
                location="bottom"
                buttonText="Okay"
                buttonStyle={{ backgroundColor: "#767676", color: "black" }}
                style={{ backgroundColor: "#0d6efd", zIndex: 9999, border: "3px groove #767676" }}
              >
                The Blue Rose Affiliation uses cookies to better the web experience for everyone. We have a strict privacy policy that prohibits us from selling user information to third party advertisers. Please see our privacy policy for more information.
              </CookieConsent>
            </main>
            <div className="pb-2 mb-2">&nbsp;</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyApp;
