import assert from 'assert'
import {doIt} from '../src/js/main'

describe('doIt', () => {
    it('should return the right value', () => {
        let got = doIt(7, 3)
        assert.equal(10, got)
    })
})
