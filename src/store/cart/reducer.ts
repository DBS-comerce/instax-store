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
            console.log(state)
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