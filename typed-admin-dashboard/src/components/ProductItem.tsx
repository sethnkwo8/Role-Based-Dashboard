import type { Product } from "../types/product.types"

interface ProductProps {
    product: Product
}

export function ProductItem({ product }: ProductProps) {
    return (
        <div className="rounded-lg border border-black p-2 shadow-lg text-center hover:scale-105 transition-all ease-in-out duration-300">
            <h1 className="font-bold text-2xl">{product.name}</h1>
            <p>#{product.price}</p>
        </div>
    )
}
