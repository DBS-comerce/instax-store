import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ApplicationState } from '../../store'
import {ItemCart as ItemCartType, CartState} from '../../store/cart/types'
import Counter from '../elements/Counter'


interface PropsFromState {
    itemsCart: CartState
}

const Cart: React.FC<PropsFromState> = (props) => {
    const {itemsCart: {data}} = props
    const itemsCartList = cartItemsMap(data)
    console.log(data)
    return (
        <div className="cart-info">
            <div className="cart-items">
                <h1>Cart</h1>
                <div>
                    {itemsCartList}
                </div>
            </div>
            <div className="cart-total">
                <div className="item" >
                    Total
                </div>
            </div>

        </div>
    );
}

const changeCount = (type: 'up' | 'down') =>{
    console.log(type)
}

const cartItemsMap = (items: ItemCartType[]) => {
    const itemsCartList = items.map(item => {
            console.log(items)
            return (
                <div className="item cart">
                    <div className="item-cart-info">
                        <Link to={`/item-card/${item.id}`}>
                            <div className="item-cart-image">
                                <img className="item-small-image" src={item.image} alt=""/>
                            </div>
                        </Link>    
                            <div className="item-cart-name">
                                {item.name}
                            </div>
                            <div className="item-cart-price">
                                {item.price} $
                            </div>
                        <div className="item-cart-count">
                            Count {item.count}
                        </div>
                    </div>
                </div>
            )
        })
        return itemsCartList
}

const mapStateToProps = (state: ApplicationState) => ({
    itemsCart: state.itemsCart,
})
  
export default connect(mapStateToProps, null)(Cart);
