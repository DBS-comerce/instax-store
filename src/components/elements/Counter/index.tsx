import React from 'react';

interface ICounter {
    upCount: () => void
    downCount: () => void
    count?: number
}

const Counter: React.FC<ICounter> = (props) => {

  return (
    <div className='counter'>
        <div className='counter-buttons'>
            <button className='counter-decrement' onClick={()=>props.downCount()}>-</button>
            <span className='counter-count'>{props.count}</span>
            <button className='counter-decrement' onClick={()=>props.upCount()} >+</button>
        </div>
    </div>
  );
}


export default Counter;