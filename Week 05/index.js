let object = {
  a: 1,
  b: 2
}

let po = reactive(object);

function reactive(object) {
  return new Proxy(object, {
    set(obj, prop, val) {
      object
      console.log(obj, prop, val);
      return obj[prop];
    },
    get(obj, prop) {
      console.error.log(obj, prop);
      return obj[prop];
    }
  });
}

po.a = 5;
