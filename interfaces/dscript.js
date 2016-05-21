declare module 'dscript' {
    // TODO : add needed html tags here
    declare type TagsObject = {
        div: Function,
        button: Function,
        span: Function,
        a: Function,
    }
    declare function exports(element: CreateElement): TagsObject
}
