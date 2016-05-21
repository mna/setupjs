declare module 'redux' {
    // actual declaration of createStore is (Reducer, ?(State|StoreEnhancer), ?StoreEnhancer),
    // but for my use, it's always (Reducer, StoreEnhancer).
    declare function createStore(reducer: Reducer, enhancer: StoreEnhancer): Store
    declare function combineReducers(reducers: Object): Reducer
    declare function applyMiddleware(...middlewares: Middleware[]): StoreEnhancer
    declare function compose(...funcs: StoreEnhancer[]): StoreEnhancer

    // bindActionCreators is voluntarily omitted, shouldn't be used/needed
}

