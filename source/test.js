// ES6 Curry & Function Composition

import test from 'tape';
import { add2 } from './index';
import { add3 } from './index';
import { inc } from './index';
import { compose2 } from './index';
import { trace } from './index';
import { compose } from './index';
import { pipe } from './index';

// What is currying?
// add2(a) => b => Number
test('add2(a) => b => Number', assert => {
  const msg = 'should take two numbers and return the sum';

  const actual = add2(1)(2);
  const expected = 3;

  assert.same(actual, expected, msg);
  assert.end();
});

// What is partial application?
// add3(a) => b => c => Number
test('add3(a) => b => c => Number', assert => {
  const msg = 'should auto-curry arguments and return the sum';

  const expected = 6;

  assert.same(add3(1, 2, 3), expected, msg);
  assert.same(add3(1)(2)(3), expected, msg);
  assert.same(add3(1)(2, 3), expected, msg);
  assert.same(add3(1, 2)(3), expected, msg);
  assert.end();
});

// What is point-free style?
// inc(n) => Number
test('inc(n) => Number', assert => {
  const msg = 'should take a number a and return the sum of a and 1';

  const actual = inc(4);
  const expected = 5;

  assert.same(actual, expected, msg);
  assert.end();
});

// What is function composition?
// compose2(f: Function, g: Function) => Function
// Given functions f and g, return the composition f ∘ g (f after g).
// (f ∘ g)(x) = f(g(x))
test('compose2(f: Function, g: Function) => Function', assert => {
  const msg = 'should take two functions, f & g, and return f ∘ g';

  const g = n => n + 1;
  const f = n => n * 2;
  const h = compose2(f, g);

  const actual = h(20);
  const expected = 42;

  assert.same(actual, expected, msg);
  assert.end();
});

// trace
test('trace(label) => v => v, effects(log to console)', assert => {
  const msg = 'should take a label and value and log, "label: value"';

  const actual = trace('foo')('bar');
  const expected = 'bar';

  assert.same(actual, expected, msg);
  assert.end();
});

// How does currying help with function composition?
// compose(...fns: [...Functions]) => Function
test('compose(...fns: [...Function]) => Function', assert => {
  const msg = 'should take any number of functions and return their composition';

  const g = n => n + 1;
  const f = n => n * 2;

  const h = compose(
    trace('after f'),
    f,
    trace('after g'),
    g
  );

  const actual = h(20);
  const expected = 42;

  assert.same(actual, expected, msg);
  assert.end();
});

test('pipe(...fns: [...Function]) => Function', assert => {
  const msg = 'should take any number of functions and return their composition';

  const g = n => n + 1;
  const f = n => n * 2;

  const h = pipe(
    f,
    g
  );

  const actual = h(20);
  const expected = 41;

  assert.same(actual, expected, msg);
  assert.end();
});
