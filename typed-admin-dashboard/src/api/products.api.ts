import type { Product } from "../types/product.types"

export const Products: Product[] = [
    { id: '1', name: 'IPhone17', price: 1450000, stock: 400, createdAt: '07/02/2026' },
    { id: '2', name: 'IPhone16', price: 1100000, stock: 500, createdAt: '07/02/2026' },
    { id: '3', name: 'IPhone15', price: 950000, stock: 300, createdAt: '07/02/2026' },
]

export function fetchProducts(): Promise<Product[]> {
    return new Promise<Product[]>((resolve, reject) => {
        setTimeout(() => {
            const shouldFail = Math.random() < 0.3
            if (shouldFail) {
                reject(new Error('Something went wrong'))
            }
            else {
                resolve(Products)
            }
        }, 2000)
    })
}