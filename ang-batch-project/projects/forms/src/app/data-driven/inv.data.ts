export interface Invoice {
    userInfo: UserInfo
    products: Array<Product>
}

export interface UserInfo {
    yourName: string
    company: string
    mobile: string
    email: string
}
export interface Product {
    product: string
    qty: number
    price: number
    tax: number
}

export interface User {
    avatar: string
    email: string
    first_name: string
    last_name: string
    id: number
}

