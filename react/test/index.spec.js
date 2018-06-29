/* eslint no-unused-expressions:0 */
console.clear()
import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { expect } from 'chai'

Enzyme.configure({ adapter: new EnzymeAdapter() })

describe('mocha tests', () => {
  it('actually run', () => {
    expect(true).to.be.true
  })
})
