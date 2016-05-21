/* @flow */

import {element} from 'deku'
import dscript from 'dscript'
import {increment, decrement, incrementAsync} from './actions'

const {div, button} = dscript(element)

function incrClick(dispatch: Dispatch): Function {
    return function() {
        dispatch(increment())
    }
}

function decrClick(dispatch: Dispatch): Function {
    return function() {
        dispatch(decrement())
    }
}

function incrAsyncClick(dispatch: Dispatch): Function {
    return function() {
        dispatch(incrementAsync())
    }
}

export default function render(obj: Object): VirtualElement {
    const dispatch = obj.dispatch
    const state = obj.context
    console.log(state)
    return (
        div([
            `Hello! ${state.value}`,
            button({class: 'button', onClick: incrClick(dispatch)}, ['Increment']),
            button({class: 'button', onClick: decrClick(dispatch)}, ['Decrement']),
            button({class: 'button', onClick: incrAsyncClick(dispatch)}, ['IncAsync']),
        ])
    )
}
