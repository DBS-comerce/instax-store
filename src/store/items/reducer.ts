import { Reducer } from 'redux'
import { ItemsState, ItemsActionTypes } from './types'

export const initialState: ItemsState = {
    data: [],
    errors: undefined,
    loading: false
};


const reducer: Reducer <ItemsState>  = ( state = initialState, action ) => {
    switch (action.type){
        case ItemsActionTypes.ADD_ITEMS:
            return {
              ...state,
              data: action.payload,
            };

        default:
            return state;
    }
}

export { reducer as itemsReducer }