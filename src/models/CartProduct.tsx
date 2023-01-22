import Product from './Product'

interface CartProduct {
    product: Product[],
    amount: number,
}

export default CartProduct;