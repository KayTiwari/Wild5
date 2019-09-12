export const compose = (...fns) => initial =>
  fns.reduceRight((aggregate, fn) => fn(aggregate), initial);

export const pipe = (...fns) => initial =>
  fns.reduce((aggregate, fn) => fn(aggregate), initial);
