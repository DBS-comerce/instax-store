import React from 'react';
import { Link } from 'react-router-dom';

import {Item as ItemType} from '../../store/items/types'


const Item: React.FC<ItemType> = (props) => {

  return (
    <div className="item">
      <Link to={`/item-card/${props.id}`}>
        <div className="item-preview-info">
          <div className="item-image">
            <img src={props.image} alt={props.name}/>
          </div>
          <div>{props.name}</div>
          <div>Price: {props.price}$</div>
        </div>
      </Link>
    </div>
  );
}


export default Item;