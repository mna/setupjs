/* @flow */

import 'babel-polyfill' // must be first import

import { createStore, applyMiddleware, compose } from 'redux'
import { createApp, element } from 'deku'
import thunk from 'redux-thunk'
import reducers from './reducers'
import Counter from './counter'
import { run } from './actions'

// add the thunk middleware, and the DevTools Chrome extension in dev
// (and if the extension is available)
let enhancers = applyMiddleware(thunk)
if (process.env.NODE_ENV === 'development') {
    if (window.devToolsExtension) {
        enhancers = compose(enhancers, window.devToolsExtension())
    }
}

const store = createStore(reducers, enhancers)
const rootEl = document.getElementById('root')
const render = createApp(rootEl, store.dispatch)

store.subscribe(function() {
    render(element(Counter), store.getState())
})
store.dispatch(run())

