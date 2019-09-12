import React from 'react';
import { Link } from 'react-router-dom';

import {Item as ItemType} from '../../store/items/types'


const Item: React.FC<ItemType> = (props) => {

  return (
    <div className="item">
      <div className="item-image">
        <Link to={`/item-card/${props.id}`}>
          <img src={props.image} alt=""/>
        </Link>
      </div>
      <div>{props.name}</div>
      <div>Price: {props.price}$</div>
    </div>
  );
}


export default Item;