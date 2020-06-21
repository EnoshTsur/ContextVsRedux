import React from 'react'

export default function CounterWrraped({ counter, increase, decrease, }) {

    return (
        <div>
            <h1>{ counter }</h1>
          <button 
            onClick={() => increase(1)}
           >
            Increase
           </button> 
           <button
            onClick={() => decrease(1)}
           >
            Decrease
           </button>
        </div>
    )
}
