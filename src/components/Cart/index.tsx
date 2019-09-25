import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ApplicationState } from '../../store'
import {ItemCart as ItemCartType, CartState} from '../../store/cart/types'
import {upItemCount as upItemCountAction, downItemCount as downItemCountAction} from '../../store/cart/actions'
import Counter from '../elements/Counter'


interface PropsFromState {
    itemsCart: CartState
    upItemCount: typeof upItemCountAction
    downItemCount: typeof downItemCountAction
}

const Cart: React.FC<PropsFromState> = (props) => {
    const {itemsCart: {data}, upItemCount, downItemCount} = props
    const itemsCartList = cartItemsMap(data, upItemCount, downItemCount)
    return (
        <div className="cart-info">
            <div className="cart-items">
                <h1>Cart</h1>
                <div>
                    {data.length > 0 ? itemsCartList : 'Cart is empty :('}
                </div>
            </div>
            <div className="cart-total">
                <div className="item" >
                    <div className="cart-ammount-text">
                        Total ammount:
                    </div>
                    <div className="cart-ammount-price">
                        {getSumm(data)} $
                    </div>
                </div>
            </div>

        </div>
    );
}

const cartItemsMap = (items: ItemCartType[], upItemCount: typeof upItemCountAction, downItemCount: typeof downItemCountAction) => {
    const itemsCartList = items.map(item => {
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
                            <div className="item-cart-right">
                                <div className="item-cart-counter">
                                    <Counter
                                        upCount={() => upItemCount(item.id)}
                                        downCount={() => downItemCount(item.id)}
                                        count={item.count}
                                    />
                                </div>
                                <div className="item-cart-price">
                                    Summ: {item.count * item.price} $
                                </div>
                            </div>

                    </div>
                </div>
            )
        })
        return itemsCartList
}

const getSumm = (cartItems: ItemCartType[]) =>{
    
    let summ: number = 0
    cartItems.forEach((item: ItemCartType) => {
        summ+=(item.price * item.count)
    });

    return summ;
}

const mapStateToProps = (state: ApplicationState) => ({
    itemsCart: state.itemsCart,
})

const mapDispatchToProps = {
    upItemCount: upItemCountAction,
    downItemCount: downItemCountAction
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
