import Head from 'next/head';
import Script from 'next/script';
import { GiShutRose } from 'react-icons/gi';
import PageHeader from '../components/PageHeader';
import LineBreak from '../components/LineBreak';

const Home = () => {
    return (
        <>
            <Head>
                <title>The Blue Rose Affiliation</title>
                <meta name="description" content="The Blue Rose Affiliation is small business networking leveled up. Connect with other small businesses throughout the United States and expand your prospective client reach." />
                <meta name="keywords" content="blue rose affiliation, business networking, small business" />
        
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://theblueroseaffiliation.com" />
                <meta property="og:title" content="The Blue Rose Affiliation" />
                <meta property="og:description" content="The Blue Rose Affiliation is small business networking leveled up. Connect with other small businesses throughout the United States and expand your prospective client reach." />
                <meta property="og:image" content="https://theblueroseaffiliation.com/img/blue-rose-final-logo.png" />
        
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://theblueroseaffiliation.com" />
                <meta property="twitter:title" content="The Blue Rose Affiliation" />
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
                    <PageHeader title="Welcome to the Blue Rose Affiliation" />
                </div>
                <div className="row mx-0">
                    <div className="col-md-4 col-sm-12 text-center">
                        <h3 className="display-1 text-primary">
                            <GiShutRose />
                        </h3>
                        <h3 className="display-5 text-primary">
                            A Sense of Community
                        </h3>
                        <p>Blue Rose aims to connect small business owners in ways that are both revolutionary and simple. We look to connect you as a business owner with other business people and pool resources to help improve the small local business community.</p>
                    </div>
                    <div className="col-md-4 col-sm-12 text-center">
                        <h3 className="display-1 text-primary">
                            <GiShutRose />
                        </h3>
                        <h3 className="display-5 text-primary">
                            Small Business Approved
                        </h3>
                        <p>Because we connect small businesses and business owners with one another, we put businesses wanting to join their local Blue Rose charter through a series of tests, particularly in three key areas: service, friendliness, and quality. If a business passes these tests, they are approved to join as a Blue Rose Affiliate.</p>
                    </div>
                    <div className="col-md-4 col-sm-12 text-center">
                        <h3 className="display-1 text-primary">
                            <GiShutRose />
                        </h3>
                        <h3 className="display-5 text-primary">
                            Networking is Key
                        </h3>
                        <p>As an affiliate of Blue Rose, you are opened up to new networking possibilities; whether you are looking to find a web developer or graphic designer for your business or you just wish to find other local small business owners to connect with, we are able to connect you to several business people.</p>
                    </div>
                </div>
                <LineBreak />
                <div className="row mx-0">
                    <div className="col-12 text-center">
                        <h3 className="display-3 text-primary">
                            We&rsquo;re Ready for Your Business to Get Down to Business
                        </h3>
                        <p>Let&rsquo;s get to brass tax. The reason you are looking for an affiliate system for your business is to not only promote and advertise your small local business, but to help other small local businesses advertise as well. Your business will not only have the full social media, web, and mobile advertising power of some of our members, but - hopefully - they will have your support as well.<br /><br />
                        So what are you waiting for? The new digital age of &ldquo;word of mouth&rdquo; advertising is here! And it starts by joining the Blue Rose Affiliation.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;