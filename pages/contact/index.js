import Head from 'next/head';
import Script from 'next/script';
import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact The Blue Rose Affiliation</title>
                <meta name="description" content="The Blue Rose Affiliation is small business networking leveled up. Connect with other small businesses throughout the United States and expand your prospective client reach." />
                <meta name="keywords" content="blue rose affiliation, business networking, small business" />
        
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://theblueroseaffiliation.com/contact" />
                <meta property="og:title" content="Contact The Blue Rose Affiliation" />
                <meta property="og:description" content="The Blue Rose Affiliation is small business networking leveled up. Connect with other small businesses throughout the United States and expand your prospective client reach." />
                <meta property="og:image" content="https://theblueroseaffiliation.com/img/blue-rose-final-logo.png" />
        
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://theblueroseaffiliation.com/contact" />
                <meta property="twitter:title" content="Contact The Blue Rose Affiliation" />
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
                    <PageHeader title="Contact Us" />
                    <ContactForm />
                </div>
            </div>
        </>
    )
}

export default Contact;