import {
  sortByPriceDesc,
  sortByPriceAsc
} from './arraySorting'

// ENVIRONMENT VARIABLES
const sortedDescPrices = [{ price: 9 }, { price: 7 }, { price: 2 }, { price: 1 }, { price: 0 }]
const sortedAscPrices = [{ price: 0 }, { price: 1 }, { price: 2 }, { price: 7 }, { price: 9 }]
let unsortedPrices = [{ price: 2 }, { price: 7 }, { price: 1 }, { price: 9 }, { price: 0 }]

const _resetEnv = () => {
  unsortedPrices = [{ price: 2 }, { price: 7 }, { price: 1 }, { price: 9 }, { price: 0 }]
}

describe('sortByPriceDesc', () => {
  it('should exist', () => {
    expect(sortByPriceDesc).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(sortByPriceDesc())
  })

  it('should sort descendent an array of objects with prices', () => {
    _resetEnv()
    expect(unsortedPrices.sort(sortByPriceDesc)).toEqual(sortedDescPrices)
  })
})
