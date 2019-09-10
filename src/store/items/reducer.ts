import { Reducer } from 'redux'
import { ItemsState } from './types'

export const initialState: ItemsState = {
    data: [],
    errors: undefined,
    loading: false
};


const reducer: Reducer <ItemsState>  = ( state = initialState, action ) => {
    switch (action.type){
        case 'ADD_ITEMS':
            return {
              ...state,
              data: action.items,
            };

        default:
            return state;
    }
}

export { reducer as itemsReducer }