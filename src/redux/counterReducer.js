import { INCREMENT, DECREMENT, } from './events'

export default function reducer(state = { counter: 0}, action) {
    switch(action.type) {
        case INCREMENT:
            return {...state, counter: state.counter + action.payload}
        case DECREMENT:
            return {...state, counter: state.counter - action.payload}
        default:
            return state
    }
}