import Link from "next/link";

const Footer = () => {
    return (
        <div className="container-fluid fixed-bottom bg-secondary border-top border-primary p-3 text-center text-white">
            <div className="row">
                <div className="col-12">
                    <p>&copy;{(new Date().getFullYear())} The Blue Rose Affiliation. All Rights Reserved.</p>
                    <p>
                        <Link href="/" className="text-white">Home</Link>&nbsp;|&nbsp;
                        <Link href="/about" className="text-white">About</Link>&nbsp;|&nbsp;
                        <Link href="/join" className="text-white">Join</Link>&nbsp;|&nbsp;
                        <Link href="/privacy" className="text-white">Privacy</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;