import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';

const Contact = () => {
    return (
        <div className="container-fluid px-0">
            <div className="row mx-0">
                <PageHeader title="Contact Us" />
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact;