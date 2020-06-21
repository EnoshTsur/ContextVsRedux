import React from 'react'
import { CounterContext, } from '../../context/context'
import { INCREMENT, DECREMENT, } from '../../context/events'

export default function CounterMutation() {

    const { dispatch, } = React.useContext(CounterContext)

    return (
        <div>
           <button onClick={() => dispatch({ type: INCREMENT, payload: 12 })}>Increase</button> 
           <button onClick={() => dispatch({ type: DECREMENT, payload: 8 })}>Decrease</button> 
        </div>
    )
}
