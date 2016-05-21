import assert from 'assert'

import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from '../src/js/reducers'
import {increment, decrement, incrementAsync} from '../src/js/actions'

describe('reducers', function() {
    beforeEach(function() {
        this.store = createStore(reducers, applyMiddleware(thunk))
    })

    describe('increment', function() {
        it('should increment the value', function() {
            this.store.dispatch(increment())
            const state = this.store.getState()
            assert.strictEqual(state.value, 1)
        })

        it('should increment the value each time', function() {
            this.store.dispatch(increment())
            this.store.dispatch(increment())
            this.store.dispatch(increment())

            const state = this.store.getState()
            assert.strictEqual(state.value, 3)
        })
    })

    describe('decrement', function() {
        it('should decrement the value', function() {
            this.store.dispatch(decrement())
            const state = this.store.getState()
            assert.strictEqual(state.value, -1)
        })

        it('should decrement the value each time', function() {
            this.store.dispatch(decrement())
            this.store.dispatch(decrement())
            this.store.dispatch(decrement())

            const state = this.store.getState()
            assert.strictEqual(state.value, -3)
        })
    })

    describe('incrementAsync', function() {
        it('should increment the value asynchronously', function(done) {
            this.store.dispatch(incrementAsync()).
                then(() => {
                    // value is 1 only after the promise is resolved
                    const state = this.store.getState()
                    assert.strictEqual(state.value, 1)
                    done()
                })

            // value is still 0 after the dispatch
            const state = this.store.getState()
            assert.strictEqual(state.value, 0)
        })
    })
})
