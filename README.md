# ES6 Curry and Function Composition

Currying in ES6: Exercises.

Questions:

1. What is currying?
2. What is partial application?
3. [What is the difference between curry and partial application?](https://medium.com/javascript-scene/curry-or-partial-application-8150044c78b8)
3. What is point-free style?
4. What is function composition?
5. How does currying help with function composition?

## add2 (curried)

```js
add2(a) => b => Number
```

> Question: What does it mean to curry a function?

Given two numbers, `a` and `b` in curried form, return a `Number` which is the sum of `a` and `b`.

### Usage

```js
add2(2)(3); // 5
```

## add3 (partially applied / autocurried)

```js
add3(a) => b => c => Number
```

> Questions:
> 1. What is partial application?
> 1. What is the difference between curry and partial application?

Given 3 numbers, curried or partially applied, return the sum of all 3 numbers.

Lodash and Ramda both supply curry functions that create auto-curried functions. Here's a function you can use to create `add3`:

```
// Tiny, recursive autocurry
const curry = (
  f, arr = []
) => (...args) => (
  a => a.length === f.length ?
    f(...a) :
    curry(f, a)
)([...arr, ...args]);
```

This curry utility takes a function that takes any number of arguments and returns a function that will curry or partially apply as necessary depending on how many arguments you pass in to the returned function.


### Usage

```js
add3(1, 2, 3); // 6
add3(1, 2)(3); // 6
add3(1)(2, 3); // 6
add3(1)(2)(3); // 6
```


## inc (from add2)

```js
inc(n) => Number
```

> Question: What is point-free style?

Use `add2()` to create a new function that adds 1 to any number.

Your function should not have a reference to its argument in the function definition. In other words, it should be written in **point free** style. Write the function without using any of the following: `=>`, `function`, `Function`, `eval`.

### Usage

```js
inc(3); // 4
```


## trace

```js
trace(label: s) => (value: v) => v, effects(log to console)
```

Given a `label` and a `value` in curried form, log a message to the console using template literal notation:

```
label: value
```

Usage:

```js
trace('inc')(inc(3)); // inc: 4
```

## compose2

```js
compose(f: Function, g: Function) => Function
```

> Question: What is function composition?

Given two functions, `f` and `g`, return a new function representing the composition: `f ∘ g` (`f` *after* `g`).

> Hint: In math notation, the application of `f ∘ g` is equivalent to `(f ∘ g)(x)` which is equal to `f(g(x))`. Where does `x` come from?

Usage:

```js
const g = n => n + 1;
const f = n => n * 2;

const meaning = compose2(f, g);

meaning(20); // 42
```

## compose

```js
compose(...fns: [...Functions]) => Function
```

> Question: How does currying help with function composition?

Given any number of functions, `fns`, e.g., `f`, `g`, `h`, etc..., return a new function representing the composition of all given functions from right to left. In other words, `compose(f, g, h)` represents the composition `f ∘ g ∘ h`.

### Usage

```js
const composed = compose(
  trace('after f'),
  f,
  trace('after g'),
  g
);

composed(20); // 42
```

> Hint: You can use a reducer function, but `Array.prototype.reduce()` probably won't give you what you need. Is there another form of reduce you can use?

### pipe

Pipe is exactly like compose, but instead of working from right to left, it works left to right.

```js
pipe(...fns: [...Functions]) => Function
```

Given any number of functions, `fns`, e.g., `f`, `g`, `h`, etc..., return a new function representing the composition of all given functions from left to right. In other words, `pipe(f, g, h)` represents the composition `h ∘ g ∘ f`.

### Usage

```js
const piped = pipe(
  f,
  trace('after f'),
  g,
  trace('after g')
);

piped(20); // 41
```
