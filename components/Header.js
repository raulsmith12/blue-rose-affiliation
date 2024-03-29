import Link from "next/link";

const Header = () => {
    function hideNavbar() {
        const element = document.getElementById('navbarSupportedContent');
        element.classList.remove('show');
    }

    return (
        <nav className="navbar navbar-expand-lg bg-light sticky-top border-bottom border-primary">
            <div className="container">
                <Link href="/" className="navbar-brand">
                    <img src="https://theblueroseaffiliation.com/img/blue-rose-final-logo.png" height="65" alt="The Blue Rose Affiliation" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-end">
                        <li className="nav-item px-1">
                            <Link href="/" className="nav-link font-lg text-shadow-sm text-primary" onClick={hideNavbar}>Home</Link>
                        </li>
                        <li className="nav-item px-1">
                            <Link href="/about" className="nav-link font-lg text-shadow-sm text-primary" onClick={hideNavbar}>About</Link>
                        </li>
                        <li className="nav-item px-1">
                            <Link href="/contact" className="nav-link font-lg text-shadow-sm text-primary" onClick={hideNavbar}>Contact</Link>
                        </li>
                        <li className="nav-item px-1">
                            <Link href="/join" className="nav-link font-lg text-shadow-sm text-primary" onClick={hideNavbar}>How to Join</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;
