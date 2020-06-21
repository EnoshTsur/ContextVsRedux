import React from 'react'
import { CounterContext, } from '../../context/context'

export default function CounterView() {

    const { counter, } = React.useContext(CounterContext)

    return (
        <div>
            <h1>{counter}</h1>   
        </div>
    )
}
