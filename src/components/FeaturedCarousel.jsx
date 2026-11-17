import { useState } from 'react'

const PER_PAGE = 2 // cards in view on a phone

function FeaturedCarousel({ products }) {
    const items = products.slice(0, 6)
    const pageCount = Math.ceil(items.length / PER_PAGE)
    const [page, setPage] = useState(0)

    // Group the cards into pages of 2
    const pages = Array.from({ length: pageCount }, (_, i) =>
        items.slice(i * PER_PAGE, i * PER_PAGE + PER_PAGE)
    )

    // Loops around: after the last page it goes back to the first
    const next = () => setPage((p) => (p + 1) % pageCount)
    const prev = () => setPage((p) => (p - 1 + pageCount) % pageCount)

    return (
        <section className="relative overflow-hidden bg-cream px-4 py-12">
            {/* Heading */}
            <div className="text-center">
                <div className="flex items-center justify-center gap-3">
                    <span className="h-px w-16 bg-gold/60" />
                    <span className="h-2 w-2 rotate-45 bg-burgundy" />
                    <span className="h-px w-16 bg-gold/60" />
                </div>
                <h2 className="mt-4 font-serif text-4xl font-semibold text-burgundy">
                    Featured Fragrances
                </h2>
                <p className="mt-2 font-serif text-base italic text-ink/80">
                    Timeless scents. Unforgettable impressions.
                </p>
            </div>

            {/* Carousel */}
            <div className="relative mt-10">
                <button
                    type="button"
                    aria-label="Previous perfumes"
                    onClick={prev}
                    className="absolute left-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-burgundy text-white shadow-md"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 5l-7 7 7 7" /></svg>
                </button>

                {/* Window: only one page shows at a time */}
                <div className="mx-5 overflow-hidden py-4">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${page * 100}%)` }}
                    >
                        {pages.map((pageItems, i) => (
                            <div key={i} className="grid w-full flex-none grid-cols-2 gap-3 px-1">
                                {pageItems.map((product) => (
                                    <div key={product.id} className="rounded-2xl bg-[#FFFAF2] p-2.5 text-center shadow-md">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="aspect-[4/5] w-full rounded-xl object-cover"
                                        />
                                        <h3 className="mt-3 font-serif text-lg text-ink">{product.name}</h3>
                                        <p className="mt-1 text-sm font-medium text-ink/80">
                                            KES {product.price.toLocaleString()}
                                        </p>
                                        <button
                                            type="button"
                                            className="mt-3 w-full rounded-lg bg-burgundy px-3 py-2 text-xs font-medium text-cream"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    type="button"
                    aria-label="Next perfumes"
                    onClick={next}
                    className="absolute right-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-burgundy text-white shadow-md"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>

            {/* Pagination dots: one per page */}
            <div className="mt-6 flex justify-center gap-2">
                {pages.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        aria-label={`Go to page ${i + 1}`}
                        onClick={() => setPage(i)}
                        className={`h-2.5 w-2.5 rounded-full transition ${i === page ? 'bg-burgundy' : 'bg-blush'}`}
                    />
                ))}
            </div>
        </section>
    )
}

export default FeaturedCarousel