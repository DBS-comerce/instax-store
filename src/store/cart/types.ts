export interface ItemCart {
    id: number
    count: number
    price: number
    name: string
    image:string
}


export interface CartState {
    readonly loading: boolean
    readonly data: ItemCart[]
    readonly errors?: string
}

export enum CartActionTypes {
    ADD_ITEMS_TO_CART = 'ADD_ITEMS_TO_CART',
    UP_ITEM_COUNT = 'UP_ITEM_COUNT',
    DOWN_ITEM_COUNT = 'DOWN_ITEM_COUNT',
}