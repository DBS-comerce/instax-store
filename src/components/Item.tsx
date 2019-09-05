import React from 'react';

const Item: React.FC = () => {
  return (
    <div className="item">
        <img src="/src/assets/img/instax.jpg" alt=""/>
        <div>Name</div>
        <div>A long Item decription</div>
        <div>Price: 40$</div>
    </div>
  );
}

export default Item;