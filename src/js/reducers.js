/* @flow */

import {actions} from './actions'

const initialState: State = {
    value: 0,
}

export default function counter(state: State = initialState, action: Action): State {
    let value: number
    switch (action.type) {
        case actions.INCREMENT:
            value = state.value + 1
            return Object.assign({}, state, {value})
        case actions.DECREMENT:
            value = state.value - 1
            return Object.assign({}, state, {value})
        default:
            return state
    }
}
