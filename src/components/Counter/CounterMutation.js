import React from 'react'
import { CounterContext, } from '../../context/context'

export default function CounterMutation() {

    const { increase, decrease,  } = React.useContext(CounterContext)

    return (
        <div>
           <button onClick={() => increase(2)}>Increase</button> 
           <button onClick={() => decrease(3)}>Decrease</button> 
        </div>
    )
}
