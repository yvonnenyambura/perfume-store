import { Link } from 'react-router-dom'

const footerLinks = [
    { label: "Shop", path: "/shop" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
]

function Footer() {
    return (
        <footer className="border-t border-[#E0BE7C]/40 bg-[#4A1420] text-[#F1E6D3]">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-6 text-center md:flex-row md:justify-between md:gap-8 md:text-left">

                <Link to="/" className="font-serif text-xl italic text-[#FAF3E8] md:text-2xl">
                    Lulu Fragrances
                </Link>

                <nav className="flex gap-6 text-[11px] uppercase tracking-[0.2em]">
                    {footerLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="text-[#E0BE7C] transition hover:text-[#FAF3E8]"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <p className="text-[11px] text-[#F1E6D3]/70">
                    &copy; {new Date().getFullYear()} Lulu Fragrances. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer