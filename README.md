# Group Array Elements Tech Test

Install packages with [`yarn`](https://classic.yarnpkg.com/en/docs/install) or [`npm i`](https://nodejs.org/en/download/).

See package.json or run `yarn run` or `npm run` to see commands for testing and linting.

## Considerations
With regards to the advice 
> "You may provide notes alongside your solution, but do not document your code any differently than you would in a real-world situation."

If this function was part of a larger codebase all of the notes/docs would be within the function and test file itself

The build script in the package.json is designed for as if this is part of a shared node module

If this was a package on it's own I would add the following (the last requirement is assumed)

# groupArrayElements
Divides an array across the specified number of equal length arrays (where possible).

Where an equal length is not possible the final array will contain the remainder.

### Examples
#### Groups evenly
```js
groupArrayElements([1, 2, 3, 4], 2)
// [[1,2], [3,4]]
```

#### Groups with remainder
```js
groupArrayElements([1, 2, 3, 4, 5], 2)
// [[1, 2, 3], [4, 5]]
```

#### Will always return the specified number of arrays
```js
groupArrayElements([1, 2, 3, 4, 5], 4)
// [[1, 2], [3, 4], [5], []]
```
