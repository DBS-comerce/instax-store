import React from 'react';
import { Link } from 'react-router-dom';

import {Item as ItemType} from '../../store/items/types'


const Cart: React.FC<ItemType> = (props) => {

  return (
    <div className="item">
            Cart
    </div>
  );
}


export default Cart;