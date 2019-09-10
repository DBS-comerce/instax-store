import {createStore} from 'redux';
import { combineReducers } from 'redux'

import {ItemsState} from './items/types'
import {itemsReducer} from './items/reducer'

export interface ApplicationState {
  items: ItemsState
}

const store = createStore(
  combineReducers({
    items: itemsReducer
  })
);

export default store;