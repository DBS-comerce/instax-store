import { Item, ItemsActionTypes } from './types'

export const addNewElement = (items: Item[]) => ({
    type: ItemsActionTypes.ADD_ITEMS,
    payload: items,
});