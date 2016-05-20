/* @flow */

export const actions = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
}

export function increment(): Action {
    return {
        type: actions.INCREMENT,
    }
}

export function decrement(): Action {
    return {
        type: actions.DECREMENT,
    }
}

export function incrementAsync(): Thunk {
    return (dispatch: Dispatch): Promise => {
        return new Promise((resolve: Function) => {
            setTimeout(() => {
                resolve(dispatch(increment()))
            }, 1000)
        })
    }
}
