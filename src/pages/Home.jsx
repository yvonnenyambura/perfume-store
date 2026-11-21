import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import products from '../data/products'
import ProductCard from '../components/ProductCard'
import FeaturedCarousel from '../components/FeaturedCarousel'
import WhyShopWithUs from '../components/WhyShopWithUs'

const scents = [
    { name: "Floral", note: "Soft and romantic" },
    { name: "Woody", note: "Warm and grounded" },
    { name: "Fruity", note: "Sweet and playful" },
    { name: "Amber", note: "Rich and glowing" },
]

function Home() {
    // Get the first 3 products as featured products
    const featuredProducts = products.slice(0, 3)

    // Search bar: sends the shopper to the Shop page with their search filled in
    const [query, setQuery] = useState("")
    const [focused, setFocused] = useState(false)
    const navigate = useNavigate()

    function handleSearch(e) {
        e.preventDefault()
        const text = query.trim()
        navigate(text ? `/shop?search=${encodeURIComponent(text)}` : "/shop")
    }

    const cleanQuery = query.trim().toLowerCase()
const suggestions = cleanQuery
    ? products
          .filter((p) => p.name.toLowerCase().includes(cleanQuery) || p.brand.toLowerCase().includes(cleanQuery))
          .slice(0, 5)
    : []

    return (
        <>
            {/* Hero */}
            <section
                className="relative flex min-h-[480px] items-center bg-burgundy bg-cover bg-right-top md:min-h-[560px]"
                style={{ backgroundImage: "url('/images/hero.png')" }}
            >
                {/* Dark fade on the left so the text stays readable */}
                <div className="absolute inset-0 bg-gradient-to-r from-burgundy via-burgundy/70 to-transparent lg:via-burgundy/40" />

                <div className="relative mx-auto w-full max-w-7xl px-6">
                    <div className="max-w-xl text-cream">
                        <p className="text-xs uppercase tracking-[0.3em] text-gold-light">
                            Welcome to Lulu Fragrances
                        </p>
                        <span className="mt-3 block h-px w-24 bg-gold" />
                        <h1 className="mt-6 font-serif text-4xl leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl">
                            Find the scent <br />
                            that feels like you
                        </h1>
                        <p className="mt-6 text-lg text-cream/90">
                            Timeless fragrances. Unforgettable you.
                        </p>
                        <Link
                            to="/shop"
                            className="mt-10 inline-block rounded-full bg-cream px-10 py-4 text-sm font-medium text-burgundy transition hover:bg-sand"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
            </section>

           {/* Search bar */}
<section className="bg-cream">
    <div className="relative mx-auto max-w-3xl px-6 pt-10">
        <form
            onSubmit={handleSearch}
            role="search"
            className="flex items-center gap-3 rounded-full border border-sand bg-white py-1.5 pl-5 pr-1.5 shadow-sm focus-within:border-burgundy"
        >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0 text-burgundy" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-4-4" />
            </svg>
            <label htmlFor="home-search" className="sr-only">Search perfumes</label>
            <input
                id="home-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="Search perfumes or brands"
                className="min-w-0 flex-1 bg-transparent py-2 text-sm outline-none"
            />
            <button
                type="submit"
                className="rounded-full bg-burgundy px-6 py-2.5 text-xs uppercase tracking-[0.15em] text-cream transition hover:bg-burgundy-dark"
            >
                Search
            </button>
        </form>

        {/* Suggestions */}
        {focused && cleanQuery && (
            <ul
                onMouseDown={(e) => e.preventDefault()}
                className="absolute inset-x-6 top-full z-20 mt-2 overflow-hidden rounded-2xl border border-sand bg-white shadow-lg"
            >
                {suggestions.length === 0 ? (
                    <li className="px-5 py-4 text-sm text-ink/70">No perfumes found</li>
                ) : (
                    suggestions.map((p) => (
                        <li key={p.id}>
                            <Link
                                to={`/product/${p.id}`}
                                onClick={() => setQuery("")}
                                className="flex items-center gap-4 px-5 py-3 transition hover:bg-cream"
                            >
                                <img src={p.image} alt="" className="h-12 w-12 rounded-lg object-cover" />
                                <span className="flex-1">
                                    <span className="block text-[11px] uppercase tracking-[0.15em] text-ink/60">{p.brand}</span>
                                    <span className="block font-serif text-lg text-burgundy">{p.name}</span>
                                </span>
                                <span className="text-sm text-ink">KES {p.price.toLocaleString()}</span>
                            </Link>
                        </li>
                    ))
                )}
            </ul>
        )}
    </div>
</section>

            {/* Shop by category */}
            <section className="bg-cream">
                <div className="mx-auto max-w-7xl px-6 pt-16">
                    <div className="mb-8 flex items-center gap-6">
                        <span className="h-px flex-1 bg-gold/60" />
                        <h2 className="font-serif text-3xl text-burgundy md:text-4xl">Shop by Category</h2>
                        <span className="h-px flex-1 bg-gold/60" />
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
                        {["Women", "Men", "Unisex"].map((category) => (
                            <Link
                                key={category}
                                to={`/shop?gender=${category}`}
                                className="flex h-28 items-center justify-center rounded-2xl bg-sand font-serif text-3xl text-burgundy transition hover:bg-burgundy hover:text-cream md:h-32"
                            >
                                {category}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured perfumes: phones get the sliding carousel */}
            <div className="md:hidden">
                <FeaturedCarousel products={products} />
            </div>

            {/* Featured perfumes: tablets and laptops get 3 static cards */}
            <section className="hidden bg-cream md:block">
                <div className="mx-auto max-w-7xl px-6 py-16">
                    <div className="mb-10 flex items-center gap-6">
                        <span className="h-px flex-1 bg-gold/60" />
                        <h2 className="font-serif text-3xl text-burgundy md:text-4xl">Featured Perfumes</h2>
                        <span className="h-px flex-1 bg-gold/60" />
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            to="/shop"
                            className="inline-block rounded-full border border-burgundy px-10 py-3 text-xs uppercase tracking-[0.2em] text-burgundy transition hover:bg-burgundy hover:text-cream"
                        >
                            View All Perfumes
                        </Link>
                    </div>
                </div>
            </section>

            {/* Shop by scent */}
            <section className="bg-sand">
                <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
                    <div className="mb-10 flex items-center gap-6">
                        <span className="h-px flex-1 bg-gold/60" />
                        <h2 className="font-serif text-3xl text-burgundy md:text-4xl">Shop by Scent</h2>
                        <span className="h-px flex-1 bg-gold/60" />
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
                        {scents.map((scent) => (
                            <Link
                                key={scent.name}
                                to={`/shop?scent=${scent.name}`}
                                className="group rounded-2xl border border-gold/40 bg-cream p-6 text-center transition hover:-translate-y-1 hover:bg-burgundy hover:shadow-lg md:p-8"
                            >
                                <h3 className="font-serif text-2xl text-burgundy transition group-hover:text-cream md:text-3xl">
                                    {scent.name}
                                </h3>
                                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-ink/70 transition group-hover:text-gold-light">
                                    {scent.note}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brand story */}
            <section className="bg-cream">
                <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-14 md:grid-cols-2 md:gap-14 md:py-20">

                    {/* Photo */}
                    <div
                        className="min-h-[300px] rounded-2xl bg-sand bg-cover bg-center md:min-h-[420px]"
                        style={{ backgroundImage: "url('/images/donna.jpg')" }}
                    />

                    {/* Text */}
                    <div className="text-center md:text-left">
                        <p className="text-xs uppercase tracking-[0.3em] text-burgundy/80">Our Story</p>
                        <span className="mx-auto mt-3 block h-px w-24 bg-gold md:mx-0" />
                        <h2 className="mt-5 font-serif text-3xl leading-tight text-burgundy md:text-5xl">
                            Your home for fragrances you love
                        </h2>
                        <p className="mt-5 text-base leading-relaxed text-ink/80">
                            Lulu Fragrances brings together popular perfumes from well-loved brands, so you can find
                            your signature scent in one place.
                        </p>
                        <p className="mt-4 text-base leading-relaxed text-ink/80">
                            Lulu Fragrances began with a simple love for perfume and the way the right scent can change
                            your whole day. We handpick fragrances we adore, so finding your signature scent feels easy,
                            exciting and a little bit special.
                        </p>
                        <Link
                            to="/about"
                            className="mt-8 inline-block rounded-full border border-burgundy px-10 py-3 text-xs uppercase tracking-[0.2em] text-burgundy transition hover:bg-burgundy hover:text-cream"
                        >
                            Read More About Us
                        </Link>
                    </div>
                </div>
            </section>

            <WhyShopWithUs />
        </>
    )
}

export default Home