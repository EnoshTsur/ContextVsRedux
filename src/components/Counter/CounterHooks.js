import React from 'react'
import { useSelector, useDispatch, } from 'react-redux'
import { INCREMENT, DECREMENT, } from '../../redux/events'

export default function CounterHooks() {
    const counter = useSelector(state => state.counterReducer.counter)
    const dispatch = useDispatch()

    return (
        <div>
           <h1>{counter}</h1>
           <button onClick={() =>dispatch({ type: INCREMENT, payload: 5})}>Increase</button>
           <button onClick={() => dispatch({ type: DECREMENT, payload: 5})}>Decrease</button> 
        </div>
    )
}
