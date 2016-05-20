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
    return (
        div([
            'Hello!',
            button({onClick: incrClick(dispatch)}, ['Increment']),
            button({onClick: decrClick(dispatch)}, ['Decrement']),
            button({onClick: incrAsyncClick(dispatch)}, ['IncAsync']),
        ])
    )
}
