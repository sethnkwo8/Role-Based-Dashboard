import { Products } from "../api/products.api"
import { ProductItem } from "./ProductItem"

export function ProductsList() {
    return (
        <div className="grid grid-cols-3 gap-4">
            {Products.map(p => (
                <ProductItem key={p.id} product={p} />
            ))}
        </div>
    )
}
