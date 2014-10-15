'use strict';

module.exports = {
  toHaveIdsMatching: function(expected) {
    var actualValues = pluck('id', this.actual);
    var matched = compare(actualValues, expected);
    return matched;
  }
};

var pluck = function(key, array) {
    var output = [];

    for (var i = 0; i < array.length; i++) {
      output.push(array[i][key]);
    }

    return output;
};

var compare = function(arrayA, arrayB) {
  if (arrayA.length != arrayB.length) {
    return false;
  }

  // Ignore the order
  arrayA = arrayA.sort();
  arrayB = arrayB.sort();

  for (var i = 0; i < arrayA.length; i++) {
    if (arrayA[i] != arrayB[i])
      return false;
  }

  return true;
};
