// Edit these to match what is true for your store
const points = [
    { title: "Free Delivery in Nairobi", text: "On all orders over KES 10,000." },
    { title: "Authentic Fragrances", text: "Original perfumes you can trust." },
    { title: "Support on WhatsApp", text: "Message us any time with your questions." },
]

function WhyShopWithUs() {
    return (
        <section className="bg-burgundy">
            <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
                {/* Heading */}
                <div className="mb-10 flex items-center gap-6">
                    <span className="h-px flex-1 bg-[#E0BE7C]/40" />
                    <h2 className="font-serif text-3xl text-[#FAF3E8] md:text-4xl">Why Shop With Us</h2>
                    <span className="h-px flex-1 bg-[#E0BE7C]/40" />
                </div>

                {/* Three cards, darker than the section so they stand out */}
                <div className="grid gap-5 md:grid-cols-3 md:gap-6">
                    {points.map((point) => (
                        <div
                            key={point.title}
                            className="rounded-2xl border border-[#E0BE7C]/30 bg-[#4A1420] p-8 text-center"
                        >
                            <span className="mx-auto block h-2 w-2 rotate-45 bg-[#E0BE7C]" />
                            <h3 className="mt-5 font-serif text-2xl text-[#E0BE7C]">{point.title}</h3>
                            <span className="mx-auto mt-4 block h-px w-12 bg-[#E0BE7C]/40" />
                            <p className="mt-4 text-sm leading-relaxed text-[#F1E6D3]">{point.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyShopWithUs