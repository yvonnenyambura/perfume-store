import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext.jsx'

// Data for navigation links
const navLinks = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" }
]

function Navbar() {
    const { cart } = useContext(CartContext)

    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

    return (
        <>
        <div className="sticky top-0 z-50">
            <div className="bg-burgundy py-2 text-center text-xs tracking-widest text-cream">
                Free delivery in Nairobi over KES 10,000
            </div>
            <header className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 border-b border-sand bg-cream px-6 py-5 xl:px-12">

                {/* Loop through navLinks and build one link for each */}
                <nav className="flex gap-5 text-xs uppercase tracking-[0.1em] text-ink xl:gap-8 xl:tracking-[0.15em]">
                    {navLinks.map((link) => (
                        <Link key={link.path} to={link.path} className="transition hover:text-burgundy">
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="text-center">
                    <Link to="/" className="whitespace-nowrap font-serif text-2xl tracking-wide text-burgundy xl:text-3xl">
                        Lulu Fragrances
                    </Link>
                </div>
                <div className="text-right text-xs uppercase tracking-[0.15em] text-ink">
                    <Link to="/cart" className="transition hover:text-burgundy">
                        Cart ({itemCount})
                    </Link>
                </div>
            </header>
            </div>
        </>
    )
}

export default Navbar