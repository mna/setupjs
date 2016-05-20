declare module 'deku' {
    declare function createApp(el: HTMLElement, dispatch: Dispatch): Render
    declare function element(type: string | Function | Object, attributes: ?Object, children: ?Array<string | VirtualElement>): VirtualElement

    // dom, diff, vnode and string functions are voluntarily omitted, 
    // not needed in frontend scenarios.
}

