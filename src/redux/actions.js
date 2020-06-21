import { INCREMENT, DECREMENT, } from './events'

function makeAction(type) {
    return payload => ({
        type,
        payload
    })
}

export const increase = makeAction(INCREMENT)
export const decrease = makeAction(DECREMENT)