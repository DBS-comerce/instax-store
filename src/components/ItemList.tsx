import React from 'react';
import Item from './Item';
import items from '../mockData/items'



const ItemList: React.FC = () => {
  return (
    <div className="item-list">
      {itemsMap}
    </div>
  );
}

const itemsMap = items.map((item , index)=>{
  return <Item
            name={item.name}
            price={item.price}
            image={item.image}
          />
})

export default ItemList;