exports.min = function min (array) {
  if (Array.isArray(array) && array.length !== 0) {
    array.sort((a, b) => a - b);
    return array.shift();
    } else { 
    return 0;
    }
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.length !== 0) {
    array.sort((a, b) => b - a);
    return array.shift();
    } else { 
    return 0;
    }
}

exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length !== 0) {
      var sum = 0;
      for (var i = 0; i < array.length; i++) {
      sum += array[i];
    } 
    return sum / array.length;
  } else {
    return 0;
  }      
}