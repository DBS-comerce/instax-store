import { Reducer } from 'redux'
import { CartState, CartActionTypes } from './types'

export const initialState: CartState = {
    data: [],
    errors: undefined,
    loading: false
};


const reducer: Reducer <CartState>  = ( state = initialState, action ) => {
    
    switch (action.type){
        case CartActionTypes.ADD_ITEMS_TO_CART:
            const itemPresented = state.data.filter(item => action.payload.id == item.id)
            if (itemPresented.length > 0){
                const data = state.data.map(item => {
                    if(action.payload.id == item.id){
                        return {
                            ...item,
                            count: item.count += action.payload.count
                        }
                    }
                    return item
                })

                return {...state, data}
            } 

            return {
                ...state,
                data: [
                    ...state.data,
                    action.payload
                    ]
                };

        default:
            return state;
    }
}

export { reducer as itemsCartReducer }