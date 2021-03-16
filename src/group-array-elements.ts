export class InvalidArrayLengthException extends Error {}
export class InvalidGroupLengthException extends Error {}
export class InvalidGroupTypeException extends Error {}

/*
    Divides an array in to specified number of equal length arrays.
    Where an equal length is not possible the final array will contain the remainder.
 */
export const groupArrayElements = <T>(array: T[], nGroups: number): T[][] => {
  if (array.length === 0) {
    throw new InvalidArrayLengthException('Array must be of length 1 or more')
  }

  if (nGroups <= 0) {
    throw new InvalidGroupLengthException('Group length must be 1 or more')
  }

  if (!Number.isInteger(nGroups)) {
    throw new InvalidGroupTypeException('Group length must be whole integer')
  }

  const maxGroupLength = Math.ceil(array.length / nGroups)
  const copy: T[] = [...array]
  const output: T[][] = Array.from<T[]>({ length: nGroups }).fill([])
  let i = 0

  while (copy.length > 0) {
    output[i++] = copy.splice(0, maxGroupLength)
  }

  return output
}
