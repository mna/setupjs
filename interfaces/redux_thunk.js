declare module "redux-thunk" {
    // this is really the Middleware type, but `declare exports: Middleware`
    // doesn't work.
    declare function exports(api: MiddlewareAPI): (next: Dispatch) => Dispatch
}
