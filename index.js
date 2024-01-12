
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else if (typeof collection === 'object') {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        callback(values[i]);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, function (item, key) {
      result.push(callback(item, key));
    });
    return result;
  }
  
  function myReduce(collection, callback, acc) {
    let startIdx = 0;
    if (acc === undefined) {
      acc = collection[0];
      startIdx = 1;
    }
    for (let i = startIdx; i < collection.length; i++) {
      acc = callback(acc, collection[i], collection);
    }
    return acc;
  }
  
  function myFind(collection, predicate) {
    let result;
    myEach(collection, function (item) {
      if (predicate(item) && result === undefined) {
        result = item;
      }
    });
    return result;
  }
  
  function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, function (item) {
      if (predicate(item)) {
        result.push(item);
      }
    });
    return result;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection) || typeof collection === 'string') {
      return collection.length;
    } else if (typeof collection === 'object') {
      return Object.keys(collection).length;
    }
  }
  
  
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }
  
  
  