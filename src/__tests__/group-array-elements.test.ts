import {
  groupArrayElements,
  InvalidArrayLengthException,
  InvalidGroupLengthException,
  InvalidGroupTypeException
} from '../group-array-elements'

describe('groupArrayElements', () => {
  it.each<[number[], number, number[][]]>([
    // Fits perfectly
    [
      [1, 2, 3, 4],
      2,
      [[1, 2], [3, 4]]
    ],
    // Remainder
    [
      [1, 2, 3, 4, 5, 6, 7],
      2,
      [[1, 2, 3, 4], [5, 6, 7]]
    ],
    // Remainder
    [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      4,
      [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
    ],
    // Remainder
    [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      3,
      [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10]]
    ],
    // Will always return the number of arrays specified
    [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      4,
      [[1, 2, 3], [4, 5, 6], [7, 8, 9], []]
    ]
  ])('Should divide elements of %j array in to %i arrays -> %j', (inputArray, divideInto, expectedOutput) => {
    const grouped = groupArrayElements<number>(inputArray, divideInto)
    expect(grouped).toStrictEqual(expectedOutput)
  })

  it('Should throw an exception if an empty array is passed', () => {
    expect(() => groupArrayElements([], 2)).toThrow(InvalidArrayLengthException)
  })

  it('Should throw an exception if 0 is passed as group length', () => {
    expect(() => groupArrayElements([1, 2, 3], 0)).toThrow(InvalidGroupLengthException)
  })

  it('Should throw an exception if 0 is passed as group length', () => {
    expect(() => groupArrayElements([1, 2, 3], 1.3)).toThrow(InvalidGroupTypeException)
  })
})
