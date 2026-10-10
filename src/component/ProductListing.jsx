import ProductCard from "./ProductCard"
import { useAppContext } from "../context/AppContextHook"
import { forwardRef } from "react"



const ProductListing = forwardRef((props, ref) => {

    const { filteredProducts } = useAppContext()

    return (
        <>

            {/* <div className='flex flex-wrap gap-3 px-3 md:px-5'> */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-2.5 px-2.5 pb-10 items-stretch bg-[#05160E] pt-10" ref={ref}>
                {filteredProducts.map(p => (
                    <ProductCard product={p} key={p.id} />
                ))}
            </div>
        </>
    )
})

export default ProductListing