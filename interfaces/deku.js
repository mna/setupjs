declare module 'deku' {
    declare function createApp(el: HTMLElement, dispatch: Dispatch): AppRender
    declare function element(type: string | ComponentRender | Component, attributes: ?Object, children: ?Array<string | VirtualElement>): VirtualElement

    // dom, diff, vnode and string functions are voluntarily omitted, 
    // not needed in frontend scenarios.
}

