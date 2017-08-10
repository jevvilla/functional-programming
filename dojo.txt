# Functional Programming

## Author
[<img src="https://avatars3.githubusercontent.com/u/7031018" width="40px;"/>](https://github.com/jevvilla)<br />Juan Esteban Villa - Speaker 🎤
## Description
During this first DOJO we're going to talk and share knowledge about Functional Programming (FP) in Javascript, ES6 syntax will be used to approach and explore some of the basic conceps in FP like pure functions, mutable data and how to write more functional and readable code applying Declarative Programming intead of Imperative Programming.
## Slides

## Exercises
Hey! Try to resolve each exercise by yourself, before see the solution raise your hand 🖐 and ask for help. 


### 1. Hello World

Write a function that takes an input string and returns it uppercased.

#### Arguments

* input: a String of random words (lorem ipsum).

#### Boilerplate

```js
function upperCaser(input) {
  // SOLUTION GOES HERE
}

module.exports = upperCaser
```

### 2. Higher Order Functions
A higher-order function is a function that does at least one of the following:

* Take one or more functions as an input
* Output a function

All other functions are first order functions. [1]

Implement a function that takes a function as its first argument, a number `num` as its second argument, then executes the passed in function `num` times.

Use the boilerplate code given to you below to get started. Most/all future exercises will provide boilerplate.

#### Arguments
* operation: A Function, takes no arguments, returns no useful value.
* num: the number of times to call `operation`

#### Boilerplate

```js
function repeat(operation, num) {
  // SOLUTION GOES HERE
}

// Do not remove the line below
module.exports = repeat
```
### 3. Basic Map
Convert the following code from a for-loop to Array#map:

```js
function doubleAll(numbers) {
  var result = []
  for (var i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2)
  }
  return result
}

module.exports = doubleAll
```
#### Arguments
* numbers: An Array of 0 to 20 Integers between 0 and 9

#### Conditions

* Your solution should use Array.prototype.map()
* Do not use any for/while loops or Array.prototype.forEach.
* Do not create any unnecessary functions e.g. helpers.

#### Boilerplate
```js
function doubleAll(numbers) {
  // SOLUTION GOES HERE
}

module.exports = doubleAll
```

### 4. Basic Filter
Use Array#filter to write a function called `getShortMessages`.
`getShortMessages` takes an array of objects with '.message' properties and returns an array of messages that are *less than < 50 characters long*.
The function should return an array containing the messages themselves, *without their containing object*.

#### Arguments

* messages: an Array of 10 to 100 random objects that look something like this:

```js
{
  message: 'Esse id amet quis eu esse aute officia ipsum.' // random
}
```

#### Conditions

* Do not use any for/while loops or Array#forEach.
* Do not create any unnecessary functions e.g. helpers.

#### Hint

* Try chaining some Array methods!

#### Example

```
[ 'Tempor quis esse consequat sunt ea eiusmod.',
  'Id culpa ad proident ad nulla laborum incididunt.',
  'Ullamco in ea et ad anim anim ullamco est.',
  'Est ut irure irure nisi.' ]
```

#### Boilerplate

```js
function getShortMessages(messages) {
  // SOLUTION GOES HERE
}

module.exports = getShortMessages
```

## Resources
💪 ¡Follow the resources if you want to start becoming a Functional Programming Rock! 💪

- [What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)
- [Do you want to be a Functional Programmer? So, check this series](https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-1-1f15e387e536)