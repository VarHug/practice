async function async1() {
  await async2();
  console.log('async1');
  return 'async1 success';
}
async function async2() {
  return new Promise((resolve, reject) => {
    console.log('async2');
    reject('error');
  });
}
async1().then((res) => console.log(res));
// 'async2'
// Uncaught (in promise) error

async function async1 () {
  console.log('async1');
  throw new Error('error!!!')
  return 'async1 success'
}
async1().then(res => console.log(res))
// Uncaught (in promise) Error: error!!!
