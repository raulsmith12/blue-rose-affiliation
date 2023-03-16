import Head from 'next/head';
import Script from 'next/script';
import { IoIosRose } from "react-icons/io";
import PageHeader from '../components/PageHeader';

const Home = () => {
  return (
    <>
      <Head>
        <title>404 - Not Found - The Blue Rose Affiliation</title>
        <meta name="description" content="The page you are looking for cannot be found. Please try typing that in again." />
        <meta name="keywords" content="404, page not found" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://theblueroseaffiliation.com/404" />
        <meta property="og:title" content="404 - Not Found - The Blue Rose Affiliation" />
        <meta property="og:description" content="The page you are looking for cannot be found. Please try typing that in again." />
        <meta property="og:image" content="https://theblueroseaffiliation.com/img/blue-rose-final-logo.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://theblueroseaffiliation.com/404" />
        <meta property="twitter:title" content="404 - Not Found - The Blue Rose Affiliation" />
        <meta property="twitter:description" content="The page you are looking for cannot be found. Please try typing that in again." />
        <meta property="twitter:image" content="https://theblueroseaffiliation.com/img/blue-rose-final-logo.png" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-B8904LJMQQ"/>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B8904LJMQQ', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <div className="container-fluid px-0 pb-4 mb-4">
        <div className="row">
            <PageHeader title="Page Not Found" />
            <div className="col-md-4 col-sm-12 text-center py-5">
                <h1 className="display-1 text-primary">
                    <IoIosRose /><br />
                    404 - Page Not Found
                </h1>
            </div>
            <div className="col-md-8 col-sm-12 text-center py-4">
                <h3 className="display-3">Oh dear. You got lost, didn't you? Well no worries. I'm sure we can find the page you were looking for in no time. Try typing it in again or using the menu on the top or bottom of this page to find what you are looking for.</h3>
            </div>
        </div>
      </div>
    </>
  )
}

export default Home;