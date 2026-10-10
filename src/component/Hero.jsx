import bgImage from '../assets/pjb.jpeg'
import ScrollingBanner from './HeroBanner'
import Nav from './Nav2'

const Hero = ({ scrollToCategories, scrollToContact }) => {
    return (
        <>
            <Nav scrollToContact={scrollToContact} />
            <div
                className="relative min-h-svh flex flex-col overflow-hidden pt-20
                           bg-[radial-gradient(ellipse_at_50%_40%,#0f2f1f_0%,#0b1f15_50%,#06100b_100%)]"
            >
                {/* Subtle dot pattern */}
                <div
                    className="absolute inset-0 pointer-events-none, opacity-60"
                    style={{
                        backgroundImage:
                            'radial-gradient(rgba(212,175,55,0.18) 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                    }}
                />

                {/* Logo + button share the free space equally */}
                <div className="relative z-10 flex flex-1 flex-col items-center justify-evenly">
                    <img
                        src={bgImage}
                        alt="PJ Botanics"
                        className="h-60svh] max-h-120 aspect-square rounded-full object-cover shadow-[0_0_80px_rgba(0,0,0,0.5)]"
                    />

                    <button
                        className="cursor-pointer h-12 bg-[#111] text-white px-7 py-2 rounded-3xl border border-yellow-700/40"
                        onClick={scrollToCategories}
                    >
                        start shopping
                        <i className="fa-solid fa-arrow-right mt-1 ml-3"></i>
                    </button>
                </div>

                <div className="relative z-10">
                    <ScrollingBanner />
                </div>
            </div>
        </>
    )
}

export default Hero