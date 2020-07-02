// Tiny, recursive autocurry
const curry = (
  f, arr = [],
  length = f.length
) => (...args) => (
  a => a.length >= length ?
    f(...a) :
    curry(f, a)
)([...arr, ...args]);

export default curry;
