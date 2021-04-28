console.log('start');
setTimeout(() => {
  console.log('time');
});
Promise.resolve().then(() => {
  console.log('resolve');
});
console.log('end');
// 'start' 'end' 'resolve''time'
