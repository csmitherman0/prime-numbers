# prime-numbers

An NPM package for finding all prime numbers within a certain integer limit.

## Installation

Install this package by running the following command:

```
npm i @christian-js/prime-numbers
```

## Usage

There are three functions available for use:

| Function           | Description                                            | Parameters | Return value |
| ------------------ | ------------------------------------------------------ | ---------- | ------------ |
| isPrime            | Determines if a given number is prime or not           | number     | Boolean      |
| getPrimes          | Retrieves a list of the prime numbers in a given range | max, start | Array        |
| getPrimesAsObjects | Returns all numbers in a given range as objects        | max, start | Array        |

### isPrime()

The `isPrime` function accepts a single number and returns `true` or `false` based on whether the number is a prime number or not.

#### Examples

```
isPrime(2)      // false
isPrime(11)     // true
```

### getPrimes()

The `getPrimes` function returns an array containing all prime numbers in a given range. You can optionally provide a starting number.

#### Examples

```
getPrimes(11)       // [1, 3, 5, 7, 11]
getPrimes(11, 5)    // [5, 7, 11]
getPrimes(11, -5)   // [-5, -3, -1, 1, 3, 5, 7, 11]
getPrimes(-11)      // [-1, -3, -5, -7 -11]
```

### getPrimesAsObjects()

The `getPrimesAsObjects` function returns an array of objects containing all numbers in the given range and an `isPrime` property containing true or false. You can optionally provide a starting number.

#### Examples

```
getPrimesAsObjects(11)
/************
[
    {
        value: 1,
        isPrime: true
    },
    {
        value: 2,
        isPrime: false
    },
    {
        value: 3,
        isPrime: true
    },
    {
        value: 4,
        isPrime: false
    },
    {
        value: 5,
        isPrime: true
    },
    {
        value: 6,
        isPrime: false
    },
    {
        value: 7,
        isPrime: true
    },
    {
        value: 8,
        isPrime: false
    },
    {
        value: 9,
        isPrime: false
    },
    {
        value: 10,
        isPrime: false
    },
    {
        value: 11,
        isPrime: true
    }
]
************/
```
