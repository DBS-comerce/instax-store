import React from 'react';
import './counter.scss'

interface ICounter {
    upCount: () => void
    downCount: () => void
    count?: number
}

const Counter: React.FC<ICounter> = (props) => {

  return (
    <div className='counter'>
        <div className='counter-buttons'>
            <div className='counter-decrement' onClick={()=>props.downCount()}>-</div>
            <span className='counter-count'>{props.count}</span>
            <div className='counter-decrement' onClick={()=>props.upCount()} >+</div>
        </div>
    </div>
  );
}


export default Counter;