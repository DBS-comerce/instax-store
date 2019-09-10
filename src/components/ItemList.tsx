import React from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import {Item as ItemType} from '../store/items/types'
import { ApplicationState } from '../store'


const ItemList: React.FC = (props) => {
  const {items: {data}}: any = props
  const itemsList = itemsMap(data)
  return (
    <div className="item-list">
      {itemsList}
    </div>
  );
}

const itemsMap = (items: any) => {
  const itemsList = items.map((item: ItemType , index: number)=>{
    return (<Item
              name={item.name}
              price={item.price}
              image={item.image}
            />)
  })

  return itemsList
  
}

const mapStateToProps = (state: ApplicationState) => ({
  items: state.items,
})

export default connect(mapStateToProps, null)(ItemList);