// 0 1 1 2 3 5 8 13
let count;

// Top down approach
// Time complexity is O(2^n)
function fib1(n) {
  count++;
  if (n == 0 || n == 1) {
    return n;
  }
  return fib1(n - 1) + fib1(n - 2);
}

// Using Memoization
// Time complexity is O(2n - 1) => O(n)
let memo = [];
function fib2(n) {
  count++;
  if (memo[n] !== undefined) {
    return memo[n];
  }
  if (n == 0 || n == 1) {
    memo[n] = n;
    return memo[n];
  }
  const sum = fib2(n - 1) + fib2(n - 2);
  memo[n] = sum;
  return memo[n];
}

// Bottom up approach

// Time complexity O(n - 1) => O(n)
function fib3(n) {
  const array = [];
  array[0] = 0;
  array[1] = 1;
  for (let i = 2; i <= n; i++) {
    count++;
    array[i] = array[i - 1] + array[i - 2];
  }
  return array[n];
}

// Time complexity O(n - 1) => O(n)
// Optimized for space
function fib3Optimized(n) {
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    count++;
    let next = a + b;
    a = b;
    b = next;
  }
  return n === 0 ? a : b;
}

count = 0;
console.log("fibonacci of 40 => ", fib1(40));
console.log("count =>", count);

count = 0;
console.log("fibonacci of 40 => ", fib2(40));
console.log("count =>", count);

count = 0;
console.log("fibonacci of 40 => ", fib3(40));
console.log("count =>", count);

count = 0;
console.log("fibonacci of 40 => ", fib3Optimized(40));
console.log("count =>", count);
