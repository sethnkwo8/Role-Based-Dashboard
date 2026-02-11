import type { Product } from "../types/product.types"

export const Products: Product[] = [
    { id: '1', name: 'IPhone17', price: 1450000, stock: 400, createdAt: '07/02/2026' },
    { id: '2', name: 'IPhone16', price: 1100000, stock: 500, createdAt: '07/02/2026' },
    { id: '3', name: 'IPhone15', price: 950000, stock: 300, createdAt: '07/02/2026' },
    { id: '4', name: 'IPhone14', price: 850000, stock: 300, createdAt: '07/02/2026' },
    { id: '5', name: 'IPhone13', price: 700000, stock: 300, createdAt: '07/02/2026' },
    { id: '6', name: 'IPhone12', price: 600000, stock: 300, createdAt: '07/02/2026' },
    { id: '7', name: 'IPhone11', price: 450000, stock: 300, createdAt: '07/02/2026' },
    { id: '8', name: 'IPhoneX', price: 300000, stock: 300, createdAt: '07/02/2026' },
    { id: '9', name: 'IPhone8', price: 200000, stock: 300, createdAt: '07/02/2026' },
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