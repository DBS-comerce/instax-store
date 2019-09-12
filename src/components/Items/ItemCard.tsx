import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom'

import {Item as ItemType, ItemsState} from '../../store/items/types'
import { ApplicationState } from '../../store'

type AllProps = ItemsState & RouteComponentProps

const ItemCard: React.FC<AllProps> = (props: any) => {
    const { id } = props.match.params;
    const {items: {data}}: any = props
    
    const itemCard: ItemType = getItem(data, id)
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
                        <div className="item-cart-button__text">Add to cart</div>
                    </div>
                </div>
            </div>
        </div>

    );
}

const getItem = (data: any, id: number) => {
    const itemCard: ItemType = data.filter((m: ItemType) =>  m.id ==  id)[0]
    return itemCard
}

const mapStateToProps = (state: ApplicationState) => ({
    items: state.items,
  })
  
export default connect(mapStateToProps, null)(ItemCard);