import { useState, useEffect } from "react"
import type { APIState } from "../types/api.types"
import type { Product } from "../types/product.types"
import { fetchProducts } from "../api/products.api"

export default function Dashboard() {

    const [productState, setProductState] = useState<APIState<Product[]>>({ status: 'loading' })

    useEffect(() => {
        setProductState({ status: 'loading' })

        fetchProducts()
            .then((data) => setProductState({ status: 'success', data }))
            .catch((error) => setProductState({ status: 'error', error: error.message }))
    }, [])


    return (
        <div>Dashboard</div>
    )
}
