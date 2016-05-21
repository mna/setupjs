/* @flow */

import {element} from 'deku'
import dscript from 'dscript'
import {increment, decrement, incrementAsync} from './actions'

const {div, button} = dscript(element)

function dispatchEvent(dispatch: Dispatch, action: Action | Thunk): (ev: Event) => void {
    return function(ev: Event) {
        dispatch(action)
    }
}

// see https://github.com/facebook/flow/issues/307
// can't type-annotate directly when destructuring args.
type RenderArgsType = {dispatch: Dispatch, context: State}
export default function render({dispatch, context}: RenderArgsType): VirtualElement {
    return (
        div([
            `Hello! ${context.value}`,
            button({class: 'button', onClick: dispatchEvent(dispatch, increment())}, ['Increment']),
            button({class: 'button', onClick: dispatchEvent(dispatch, decrement())}, ['Decrement']),
            button({class: 'button', onClick: dispatchEvent(dispatch, incrementAsync())}, ['IncAsync']),
        ])
    )
}
