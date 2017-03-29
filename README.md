# ES6 Curry

Currying in ES6: Exercises.

Questions:

1. What is currying?
2. What is partial application?
3. What is point-free style?
4. What is template literal syntax?
5. How does currying help with function composition?

## add2 (curried)

```js
add2(a) => (b) => Number
```

Given two numbers, `a` and `b` in curried form, return a `Number` which is the sum of `a` and `b`.

### Usage

```js
add2(2)(3); // 5
```

## inc (from add2)

```js
inc(n) => Number
```

Use `add2()` to create a new function that adds 1 to any number. Your function should not have a reference to its argument in the function definition. In other words, it should be written in **point free** style.

Write the function without using any of the following: `=>`, `function`, `Function`, `eval`.

### Usage

```js
inc(3); // 4
```


## trace

```js
trace(label: s) => (value: v) => Void, effects(log to console)
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

Given any number of functions, `fns`, e.g., `f`, `g`, `h`, etc..., return a new function representing the composition of all given functions from right to left. In other words, `compose(f, g, h)` represents the composition `f ∘ g ∘ h`.

### Usage

```js
const composed = compose(
  f,
  trace('after f'),
  g,
  trace('after g')
);
```

> Hint: You can use a reducer function, but `Array.prototype.reduce()` probably won't give you what you need. Is there another form of reduce you can use?
