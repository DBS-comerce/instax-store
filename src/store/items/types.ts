export interface Item {
    id: number
    name: string
    image: string
    price: number
    description: string
}


export interface ItemsState {
    readonly loading: boolean
    readonly data: Item[]
    readonly errors?: string
}