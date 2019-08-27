/**
 * Given an object, return a tuple of the key/value of the max value in the object.
 * @param {Object} object
 * @returns {Array} [key, value]
 */
export const objectMax = object => {
  return Object.entries(object).reduce(
    ([maxKey, maxValue], [key, value]) => {
      if (value > maxValue) {
        return [key, value];
      } else {
        return [maxKey, maxValue];
      }
    },
    ['', -Infinity]
  );
};
