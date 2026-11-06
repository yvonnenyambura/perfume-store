import {Link} from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <h3>Lulu Fragrances</h3>
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                </nav>
            <p>&copy; 2026 Perfume Store. All rights reserved.</p>
        </footer>
    );
}

export default Footer;