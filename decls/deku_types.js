// VirtualElement is an element of the virtual DOM.
declare type VirtualElement = {
    type: string,
    attributes?: Object,
    children?: Array<string | VirtualElement>,
}

// AppRender is the function signature of the render function returned by
// createApp. Technically, the context argument is optional and can be
// anything, but I force it to be present and be the State.
declare type AppRender = (vnode: VirtualElement, context: State) => HTMLElement

// Model is the type of the object passed to the component render method and
// to the various lifecycle events.
declare type Model = {
    children: Array<string | VirtualElement>,
    context: State,
    dispatch: Dispatch,
    path: string,
    props: Object,
}

// ComponentRender is the signature of the render method for a component.
declare type ComponentRender = (model: Model) => VirtualElement

// Component is a UI component.
declare type Component = {
    render: ComponentRender,
    onCreate?: (model: Model) => Action | Thunk | void,
    onUpdate?: (model: Model) => Action | Thunk | void,
    onRemove?: (model: Model) => Action | Thunk | void,
}

// Function signature of the element function.
declare type CreateElement = (type: string | ComponentRender | Component, attributes: ?Object, children: ?Array<string | VirtualElement>) => VirtualElement
