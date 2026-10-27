import { Link } from 'react-router-dom'
import './Navbar.css'

// Data for navigation links
const navLinks = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" }
]

function Navbar() {
    return (
        <>
            <div className="announcement">Free delivery in Nairobi over KES 10,000</div>
            <header className="navbar">

                {/* Loop through navLinks and build one link for each */}
                <nav className="navbar-left">
                    {navLinks.map((link) => (
                        <Link key={link.path} to={link.path}>
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="navbar-center">
                    <Link to="/"><h2>Mali Fragrances</h2></Link>
                </div>
                <div className="navbar-right">
                    <Link to="/cart">Cart</Link>
                </div>
            </header>
        </>
    )
}

export default Navbar