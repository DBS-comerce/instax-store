import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom'

import {Item as ItemType, ItemsState} from '../../store/items/types'
import { ApplicationState } from '../../store'
import {addItemToCart as addItemToCartAction} from '../../store/cart/actions'

interface CardRouterProps {
    id: string;
}

interface PropsFromDispatch {
    addItemToCart: typeof addItemToCartAction
}

interface PropsFromState {
    items: ItemsState
}


type AllProps = PropsFromState & RouteComponentProps<CardRouterProps> & PropsFromDispatch

const addToCart = (id:number, addItemToCart: typeof addItemToCartAction) => {
    console.log(id)
    addItemToCart({
        id,
        count: 1
    })
}

const ItemCard: React.FC<AllProps> = (props) => {
    const { id } = props.match.params;
    const {items: {data}, addItemToCart} = props;
    console.log(props)
    
    const itemCard: ItemType = getItem(data, parseInt(id))
    return (
        <div className="detail-container">
            <div className="detail-main">
                <div className="item-gallery">
                    <img className="item-card-img" src={itemCard.image} alt=""/>
                </div>
                <div className="detail-wrap">
                    <div className="item-info">
                        <h1 className="item-name">{itemCard.name}</h1>
                        <div className="item-description">{itemCard.description}</div>
                        <div className="item-price">{itemCard.price} $</div>
                    </div>
                    <div className="item-cart-button" >
                        <div 
                        onClick={() => addToCart(itemCard.id, addItemToCart)}
                        className="item-cart-button__text">
                            Add to cart
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

const getItem = (data: ItemType[], id: number) => {
    const itemCard: ItemType = data.filter((m: ItemType) =>  m.id ==  id)[0]
    return itemCard
}

const mapDispatchToProps = {
    addItemToCart: addItemToCartAction
}

const mapStateToProps = (state: ApplicationState) => ({
    items: state.items,
})
  
export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);