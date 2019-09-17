import { ItemCart, CartActionTypes } from './types'

export const addItemToCart = (item: ItemCart) => ({
    type: CartActionTypes.ADD_ITEMS_TO_CART,
    payload: item,
});

export const upItemCount = (id: number) => ({
    type: CartActionTypes.UP_ITEM_COUNT,
    payload: id,
});

export const downItemCount = (id: number) => ({
    type: CartActionTypes.DOWN_ITEM_COUNT,
    payload: id,
});