import {createStore} from 'redux';
import { combineReducers } from 'redux'

import {ItemsState} from './items/types'
import {CartState} from './cart/types'
import {itemsReducer} from './items/reducer'
import {itemsCartReducer} from './cart/reducer'

export interface ApplicationState {
  items: ItemsState
  itemsCart: CartState
}

const store = createStore(
  combineReducers({
    items: itemsReducer,
    itemsCart: itemsCartReducer
  })
);

export default store;