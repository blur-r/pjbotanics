import { useEffect, useState } from "react"
import { useAppContext } from "../context/AppContextHook"

const Nav = ({ scrollToContact }) => {
    const { setActivePanel, cart, wishlist } = useAppContext()
    const [scrolled, setScrolled] = useState(false)
    useEffect(
        () => {
            const handleScroll = () => {
                if (window.scrollY >= window.innerHeight) {
                    setScrolled(true)
                } else {
                    setScrolled(false)
                }
            }

            window.addEventListener("scroll", handleScroll)
            return () => window.removeEventListener("scroll", handleScroll)
        }, []
    )

    const toggleCart = () => {
        setActivePanel(prev => (prev == "cart" ? null : "cart"))

    }

    const toggleWishlist = () => {
        setActivePanel(prev => (prev == "wishlist" ? null : "wishlist"))

    }

    return (
        <>

            <div className={`sticky top-0 z-50 pt-1 ${scrolled ? "" : "bg-[#0C2317] "}`}>
                <div className='flex gap-4 bg-[#06170F] w-45 md:w-60 py-3 px-3 justify-evenly mx-auto rounded-4xl border-2 border-[#41441B] items-center'>
                    <button onClick={toggleCart} className="cursor-pointer relative inline-flex">
                        {cart.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                {cart.length}
                            </span>
                        )}

                        <i className="fa-solid fa-cart-shopping text-xl md:text-xl text-white"></i>
                    </button>
                    <a onClick={scrollToContact} href="#">
                        <i className="fa-solid fa-phone text-xl md:text-xl text-white"></i>
                    </a>
                    <button onClick={toggleWishlist} className="cursor-pointer relative inline-flex">
                        {wishlist.length > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                            {wishlist.length}
                        </span>}
                        <i className="fa-solid fa-heart text-xl md:text-xl text-white"></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Nav
