function cachingDecoratorNew(func) {
  let cache = {};
  
  function wrapper(...args) {
    const hash = args.join(',');
    const first = Object.keys(cache).splice(0, 1);

    if (hash in cache) {
      console.log("Из кэша: " + cache[hash]);
      return "Из кэша: " + cache[hash];
    } else {
      let result = func(...args);
      cache[hash] = result;
      if (Object.keys(cache).length > 5) {
        delete cache[first];
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
  }

  return wrapper;
}

function debounceDecoratorNew(func, ms) {
  let timeout;
  let first = true;

  return function() {
    if (first) {
      first = false;
      func();
    }
    
    clearTimeout(timeout);
    timeout = setTimeout(() => func(), ms);
  };
}

function debounceDecorator2(func, ms) {
  let timeout;
  let first = true;
  let count = 0;

  function wrapper() {
    count++;
    if (first) {
      first = false;
      func();
    }

    clearTimeout(timeout);
    timeout = setTimeout(() => func(), ms);
  }
  return wrapper;
}
