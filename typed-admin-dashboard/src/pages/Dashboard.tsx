import { useState, useEffect } from "react"
import type { APIState } from "../types/api.types"
import type { Product } from "../types/product.types"
import { fetchProducts } from "../api/products.api"
import { ProductsList } from "../components/ProductsList"
import { useAuth } from "../auth/useAuth"

export default function Dashboard() {

    const [productState, setProductState] = useState<APIState<Product[]>>({ status: 'loading' })
    const { can } = useAuth()

    useEffect(() => {
        setProductState({ status: 'loading' })

        fetchProducts()
            .then((data) => setProductState({ status: 'success', data }))
            .catch((error) => setProductState({ status: 'error', error: error.message }))
    }, [])


    if (productState.status === 'loading') {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }
    if (productState.status === 'error') {
        return (
            <div>
                <p>Error fetching data</p>
            </div>
        )
    }
    if (productState.status === 'success') {
        return (
            <div>
                <div className="flex flex-row justify-between">
                    {can('create:product') && (
                        <button className="mb-4 py-4 px-8 rounded-lg bg-blue-400 hover:bg-blue-600 hover:scale-105 text-white">
                            Add Product +
                        </button>
                    )}
                    {can('delete:product') && (
                        <button className="mb-4 py-4 px-8 rounded-lg bg-red-500 hover:scale-105 text-white">
                            Delete Product
                        </button>
                    )}
                </div>
                <ProductsList />
            </div>
        )
    }
}
