

Array.prototype.myMap = function (foo) {
    var arr = this;
  
    if (arr.length === 0) return null;
    if (typeof(foo) === 'undefined') return null;
  
    for (var i = 0, o; o = arr[i]; i++) {
      arr[i] = foo(o);
    }
  
    return arr;
  };
  let a = [1,2,3,4,5,6];

  let a2 = a.myMap((value) => {return value *2})
  console.log(a2)