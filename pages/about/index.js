import { GiShutRose } from 'react-icons/gi';
import PageHeader from '../../components/PageHeader';

const About = () => {
    return (
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
    )
}

export default About;