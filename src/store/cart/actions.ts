import { ItemCart, CartActionTypes } from './types'

export const addItemToCart = (item: ItemCart) => ({
    type: CartActionTypes.ADD_ITEMS_TO_CART,
    payload: item,
});