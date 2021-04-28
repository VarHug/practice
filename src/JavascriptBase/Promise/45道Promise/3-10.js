Promise.resolve('1')
  .then((res) => {
    console.log(res);
  })
  .finally(() => {
    console.log('finally');
  });
Promise.resolve('2')
  .finally(() => {
    console.log('finally2');
    return '我是finally2返回的值';
  })
  .then((res) => {
    console.log('finally2后面的then函数', res);
  });
// '1'
// 'finally2'
// 'finally'
// 'finally2后面的then函数' '2'

function promise1() {
  const p = new Promise((resolve) => {
    console.log('promise1');
    resolve('1');
  });
  return p;
}
function promise2() {
  return new Promise((resolve, reject) => {
    reject('error');
  });
}
promise1()
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log('finally1'));

promise2()
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log('finally2'));
// 'promise1'
// '1'
// 'error'
// 'finally1'
// 'finally2'
