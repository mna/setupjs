/*
* From flux-standard-action: https://github.com/acdlite/flux-standard-action
*
* An action MUST
*
* be a plain JavaScript object.
* have a type property.
*
* An action MAY
*
* have a error property.
* have a payload property.
* have a meta property.
*
* An action MUST NOT include properties other than type, payload, and error, and meta.
*/
declare type Action = {
    type: string,
    payload?: any,
    error?: boolean,
    meta?: Object,
}

// TODO : The State declaration should be replaced with the actual state type
// used for the project.
declare type State = {value: number}

// Reducer is a pure function that takes an initial state and action, and
// returns the new state.
declare type Reducer = (state: State, action: Action) => State

// Thunk is an async action as supported by redux-thunk.
declare type Thunk = (dispatch: Dispatch, getState: () => State) => Promise

// Dispatch is the type of the dispatch function that takes an action or
// a thunk and sends it to the store (directly or asynchronously).
declare type Dispatch = (a: Action | Thunk) => any

// ActionCreator creates an action or a thunk ready to be dispatched.
declare type ActionCreator = (...args: any) => Action | Thunk

// MiddlewareAPI is the definition of the object passed to the middleware
// function.
declare type MiddlewareAPI = {
    dispatch: Dispatch,   
    getState: () => State,
}

// Middleware is a function that can be used as middleware.
declare type Middleware = (api: MiddlewareAPI) => (next: Dispatch) => Dispatch

// Store is the redux store object type.
declare type Store = {
    dispatch: Dispatch,
    getState: () => State,
    subscribe: (listener: () => void) => void,
    replaceReducer: (reducer: Reducer) => void,
}

// StoreCreator is a function that creates a store.
declare type StoreCreator = (reducer: Reducer, state: ?State) => Store

// StoreEnhancer applies middleware for store creation.
declare type StoreEnhancer = (next: StoreCreator) => StoreCreator

