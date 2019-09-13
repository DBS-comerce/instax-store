import React from 'react';
import { connect } from 'react-redux';

import Item from './Item';
import {Item as ItemType, ItemsState} from '../../store/items/types'
import { ApplicationState } from '../../store'

interface PropsFromState {
  items: ItemsState
}

type AllProps = PropsFromState

const ItemList: React.FC<AllProps> = (props) => {
  const {items: {data} } = props
  const itemsList = itemsMap(data)
  return (
    <div className="item-list">
      {itemsList}
    </div>
  );
}

const itemsMap = (items: ItemType[]) => {
  const itemsList = items.map((item: ItemType , index: number)=>{
    return (<Item
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              type={item.type}
              description={item.description}
            />)
  })

  return itemsList
}

const mapStateToProps = (state: ApplicationState) => ({
  items: state.items,
})

export default connect(mapStateToProps, null)(ItemList);