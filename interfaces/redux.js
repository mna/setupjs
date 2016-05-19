declare module 'redux' {
    declare function createStore(reducer: Reducer, initialState: ?State, enhancer: ?StoreEnhancer): Store
    declare function combineReducers(reducers: Object): Reducer
    declare function applyMiddleware(...middlewares: MiddlewareAPI[]): StoreEnhancer
    declare function compose(...funcs: StoreEnhancer[]): StoreEnhancer

    // bindActionCreators is voluntarily omitted, shouldn't be used/needed
}

