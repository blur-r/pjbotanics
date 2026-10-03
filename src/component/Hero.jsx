import bgImage from '../assets/pjb.jpeg'
import ScrollingBanner from './HeroBanner'
// import { useEffect, useRef } from "react";
// import NET from "vanta/dist/vanta.net.min";
// import * as THREE from "three";

const Hero = ({ scrollToCategories }) => {

    // const vantaRef = useRef(null);
    // const effectRef = useRef(null);

    // useEffect(() => {
    //     if (!effectRef.current && vantaRef.current) {
    //         effectRef.current = NET({
    //             el: vantaRef.current,
    //             THREE: THREE,
    //             color: 0x1111111,
    //             backgroundColor: 0xFBC322,
    //             backgroundAlpha: 0
    //         });
    //     }

    //     return () => {
    //         if (effectRef.current) {
    //             effectRef.current.destroy();
    //             effectRef.current = null;
    //         }
    //     };

    // ref = { vantaRef }   

    // }, []);

    return (
        <>
            <div className="relative -top-12 min-h-svh flex flex-col bg-contain bg-center bg-no-repeat bg-[#0F290E]" style={{ backgroundImage: `url(${bgImage})` }}>
                <button className='cursor-pointer mx-auto h-12 bg-[#111]  text-white px-7 py-2 rounded-3xl mt-auto ' onClick={scrollToCategories}>
                    start shopping
                    <i className="fa-solid fa-arrow-right mt-1 ml-3"></i>
                </button>
                <ScrollingBanner />
            </div>
        </>
    )
}

export default Hero


