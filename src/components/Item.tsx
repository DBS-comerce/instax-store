import React from 'react';


interface ItemProps {
  name: string;
  price: number;
  image: string;
}

const Item: React.FC<ItemProps> = (props) => {

  return (
    <div className="item">
      <div className="item-image">
        <img src={props.image} alt=""/>
      </div>
      <div>{props.name}</div>
      <div>A long Item decription</div>
      <div>Price: {props.price}$</div>
    </div>
  );
}

export default Item;