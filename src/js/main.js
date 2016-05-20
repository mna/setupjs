/* @flow */

import 'babel-polyfill' // must be first import

import { createStore, applyMiddleware, compose } from 'redux'
import { createApp, element } from 'deku'
import thunk from 'redux-thunk'
import reducers from './reducers'
import Counter from './counter'

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f: any): any => f
))

const rootEl = document.getElementById('root')

const render = createApp(rootEl, store.dispatch)

render(element(Counter))

