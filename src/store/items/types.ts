export interface Item {
    id: number
    name: string
    image: string
    price: number
}


export interface ItemsState {
    readonly loading: boolean
    readonly data: Item[]
    readonly errors?: string
}