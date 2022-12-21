import Link from "next/link";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light sticky-top border-bottom border-primary">
            <div className="container">
                <Link href="/" className="navbar-brand">
                    <img src="https://theblueroseaffiliation.com/img/blue-rose-logo.png" height="125" alt="The Blue Rose Affiliation" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-end">
                        <li className="nav-item px-1">
                            <Link href="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item px-1">
                            <Link href="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item px-1">
                            <Link href="/contact" className="nav-link">Contact</Link>
                        </li>
                        <li className="nav-item px-1">
                            <Link href="/join" className="nav-link">How to Join</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;
