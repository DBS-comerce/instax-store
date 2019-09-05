import React from 'react';
import Item from './Item'
import LeftSidebar from './LeftSidebar'

const ItemList: React.FC = () => {
  return (
    <div className="item-list">
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
    </div>
  );
}

export default ItemList;