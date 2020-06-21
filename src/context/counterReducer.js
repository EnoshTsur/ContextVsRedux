import { INCREMENT, DECREMENT,  } from './events'

export function counterReducer( counter, { type, payload, }) {
    
    switch(type) {
        case INCREMENT:
            return counter + payload
        case DECREMENT:
            return counter - payload
        default:
            return counter
    }
}