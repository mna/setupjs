/* @flow */

import 'babel-polyfill'

export function doIt(x: number, y: number): number {
    console.log(`hey, ${x}`)
    return x + y
}

doIt(3, 5)

