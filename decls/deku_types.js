// VirtualElement is an element of the virtual DOM.
declare type VirtualElement = {
    type: string,
    attributes: ?Object,
    children: ?Array<string | VirtualElement>,
}

// Render is the function signature of the render function.
declare type Render = (vnode: VirtualElement, context: ?Object) => HTMLElement

