export interface Item {
    id: number
    name: string
    image: string
    price: number
    type: string
    description: string
}


export interface ItemsState {
    readonly loading: boolean
    readonly data: Item[]
    readonly errors?: string
}

export enum ItemsActionTypes {
    ADD_ITEMS = 'ADD_ITEMS',
}