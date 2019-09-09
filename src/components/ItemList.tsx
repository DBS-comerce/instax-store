import React, { Component, ReactComponentElement } from 'react';
import Item from './Item';
import { connect } from 'react-redux';


type itemType = {
  name: string;
  price: number;
  image: string;
}

const ItemList: React.FC = (props) => {
  const {items: {items}}: any = props
  const itemsList = itemsMap(items)
  return (
    <div className="item-list">
      {itemsList}
    </div>
  );
}

const itemsMap = (items: any) => {

  const itemsList = items.map((item: itemType , index: number)=>{
    return (<Item
              name={item.name}
              price={item.price}
              image={item.image}
            />)
  })

  return itemsList
  
}

const mapStateToProps = (state: any) => ({
  items: state.items,
})

export default connect(mapStateToProps, null)(ItemList);