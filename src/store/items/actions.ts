import { Item } from './types'

export const addNewElement = (items: Item) => ({
    type: 'ADD_ITEMS',
    items,
});