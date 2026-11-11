import { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
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
    const [menuOpen, setMenuOpen] = useState(false)

    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

    // Desktop links: the current page is burgundy with a gold underline
    const linkClass = ({ isActive }) =>
        `transition hover:text-burgundy ${
            isActive ? "text-burgundy underline decoration-gold underline-offset-8" : ""
        }`

    return (
        <>
            {/* Top announcement bar */}
            <div className="bg-burgundy px-4 py-2 text-center text-xs tracking-widest text-cream">
                Free delivery in Nairobi over KES 10,000
            </div>

            {/* Header stays on screen while scrolling */}
            <header className="sticky top-0 z-50 border-b border-gold/50 bg-cream">
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 py-4 sm:gap-4 sm:px-6 lg:py-5 xl:px-12">

                    {/* Left: hamburger on phones, links on laptops */}
                    <div>
                        <button
                            type="button"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                            aria-expanded={menuOpen}
                            className="text-burgundy lg:hidden"
                        >
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d={menuOpen ? "M5 5l14 14M19 5L5 19" : "M3 6h18M3 12h18M3 18h18"} />
                            </svg>
                        </button>

                        <nav className="hidden gap-6 text-xs uppercase tracking-[0.15em] text-ink lg:flex xl:gap-8">
                            {navLinks.map((link) => (
                                <NavLink key={link.path} to={link.path} end={link.path === "/"} className={linkClass}>
                                    {link.label}
                                </NavLink>
                            ))}
                        </nav>
                    </div>

                    {/* Center: store name */}
                    <div className="text-center">
                        <Link to="/" className="whitespace-nowrap font-serif text-xl italic tracking-wide text-burgundy sm:text-2xl xl:text-4xl">
                            Lulu Fragrances
                        </Link>
                    </div>

                    {/* Right: cart */}
                    <div className="text-right text-xs uppercase tracking-[0.1em] text-ink sm:tracking-[0.15em]">
                        <Link to="/cart" className="transition hover:text-burgundy">
                            Cart ({itemCount})
                        </Link>
                    </div>
                </div>

                {/* Phone menu: opens under the header, closes when a link is tapped */}
                {menuOpen && (
                    <nav className="flex flex-col border-t border-sand lg:hidden">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                end={link.path === "/"}
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `border-b border-sand px-6 py-4 text-sm uppercase tracking-[0.15em] ${
                                        isActive ? "text-burgundy" : "text-ink"
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>
                )}
            </header>
        </>
    )
}

export default Navbar