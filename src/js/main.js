/* @flow */

import 'babel-polyfill'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

export function doIt(x: number, y: number): number {
    console.log(`hey, ${x}`)
    return x + y
}

const store = createStore((state: Object, action: Object): Object => {
    console.log('I reduce stuff')
    return state
}, applyMiddleware(thunk))

store.dispatch({type: 'SOMETHING_HAPPENED'})

