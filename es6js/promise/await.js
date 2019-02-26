/**
 * @author wang
 * @description Generator 函数
 */
function* myGenerator () {
    yield 'hello'
    yield 'world'
    return 'end'
}
let testGenerator = myGenerator()
testGenerator.next()

var arr = [1, [[2, 3], 4], [5, 6]];

var flat = function* (a) {
  var length = a.length;
  for (var i = 0; i < length; i++) {
    var item = a[i];
    if (typeof item !== 'number') {
      yield* flat(item);
    } else {
      yield item;
    }
  }
};

let iterarr = ['a', 'b', 'c'];
let iter = iterarr[Symbol.iterator]();
let iterable = {
  1: 'a',
  2: 'b',
  3: 'c',
  length: 3,
  [Symbol.iterator]: Array.prototype[Symbol.iterator]
};

let myStr = '王鑫battle'
// console.log([...myStr])
let yieldxinxin = function* () {
  yield* [...myStr]
}()
// for (const item of yieldxinxin) {
//   console.log(item)
// }

function* fibonacci() {
  let [prev, curr] = [0, 1];
  for (;;) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

for (let n of fibonacci()) {
  if (n > 10) break;
  console.log(n);
}