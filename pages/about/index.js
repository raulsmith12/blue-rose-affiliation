import Head from 'next/head';
import Script from 'next/script';
import { GiShutRose } from 'react-icons/gi';
import PageHeader from '../../components/PageHeader';

const About = () => {
    return (
        <>
            <Head>
                <title>About The Blue Rose Affiliation</title>
                <meta name="description" content="The Blue Rose Affiliation is small business networking leveled up. Connect with other small businesses throughout the United States and expand your prospective client reach." />
                <meta name="keywords" content="blue rose affiliation, business networking, small business" />
        
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://theblueroseaffiliation.com/about" />
                <meta property="og:title" content="About The Blue Rose Affiliation" />
                <meta property="og:description" content="The Blue Rose Affiliation is small business networking leveled up. Connect with other small businesses throughout the United States and expand your prospective client reach." />
                <meta property="og:image" content="https://theblueroseaffiliation.com/img/blue-rose-final-logo.png" />
        
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://theblueroseaffiliation.com/about" />
                <meta property="twitter:title" content="About The Blue Rose Affiliation" />
                <meta property="twitter:description" content="The Blue Rose Affiliation is small business networking leveled up. Connect with other small businesses throughout the United States and expand your prospective client reach." />
                <meta property="twitter:image" content="https://theblueroseaffiliation.com/img/blue-rose-final-logo.png" />
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
                    <PageHeader title="About Us" />
                </div>
                <div className="row mx-0">
                    <div className="col-md-7 offset-md-1 col-sm-12">
                        <h3 className="display-5 text-primary text-shadow-sm">So What is the Blue Rose Affiliation, Exactly?</h3>
                        <p>Named after the late Sheila Fierro, and modeled after other networking or affilate programs such as Gephardt Approved and Angie&rsquo;s List, the Blue Rose Affiliation likes to keep things simple and effective:</p>
                        <p>If you want in, you&rsquo;re in. No hidden membership fees. No yearly or monthly subscription that you have to pay to continue to receive access. Just fill out the form on the How to Join page and we will contact you regarding what businesses you are looking to communicate with.</p>
                        <p>After we contact you regarding possibly joining, we will undergo a series of tests that will help us determine if we deem your company&rsquo;s services of a high enough quality to add it to our affiliate program. These tests could include buying products from your storefront or website, brand investigation, website testing, secret shopper, and more. Above all else, we want everybody that we do business with to have a positive and encouraging experience. After all, &ldquo;word of mouth&rdquo; advertising isn&rsquo;t very effective if the service is not well-received.</p>
                        <p>If you are looking for services that may charge a fee, just know that the Blue Rose Affiliation is not responsible for any charges outside of this site that may occur as a result of your communications with other businesses.</p>
                        <p>All we can guarantee is an introduction. Aside from that, it is up to you and those that you communicate with to decide what happens next.</p>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <h4 className="display-xxxl">
                            <GiShutRose />
                        </h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;