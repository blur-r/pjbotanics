const features = [
    {
        icon: 'fa-leaf',
        title: '100% Organic Extracts',
        text: 'Sourced sustainably from pure botanical gardens and cold-pressed to retain potent restorative enzymes.',
    },
    {
        icon: 'fa-mortar-pestle',
        title: 'Handcrafted Wellness',
        text: 'Artisanal micro-batch formulation preserving delicate herbal aromatics and cellular rejuvenation actives.',
    },
    {
        icon: 'fa-hand-holding-heart',
        title: 'Clean & Cruelty-Free',
        text: 'Zero parabens, sulfates, or artificial fillers. Crafted with deep reverence for nature and your skin barrier.',
    },
]

const BrandInfo = () => {
    return (
        <section className="bg-[#0a1d14] px-6 py-24">
            <div className="mx-auto grid max-w-5xl gap-7 md:grid-cols-3">
                {features.map(({ icon, title, text }) => (
                    <div
                        key={title}
                        className="flex flex-col items-center rounded-2xl border border-[#403410]
                                   bg-linear-to-b from-[#06170f] to-[#051610] px-8 py-8 text-center"
                    >
                        {/* Icon circle */}
                        <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-full bg-[#d4af37]/10">
                            <i className={`fa-solid ${icon} text-lg text-[#d4af37]`}></i>
                        </div>

                        {/* Title (swap font-family for your serif, e.g. Cinzel) */}
                        <h3 className="mb-3 font-[Cinzel,serif] text-lg font-bold tracking-wide text-white">
                            {title}
                        </h3>

                        <p className="text-sm leading-relaxed text-[#f4f1e9]">
                            {text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default BrandInfo