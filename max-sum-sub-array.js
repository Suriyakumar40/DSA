// Problem: Given an array of integers, 
// find the maximum sum of a subarray with a fixed window size.

const arr = [1, 15, 1, 2, 6, 12, 5, 7];
const target = 4;

let remaining = 0, maximum = 0;
console.time('start');
for (let i=0;i<arr.length; i++) {
    if (target > i) {
        maximum = remaining += arr[i];
    } else {
        remaining = (remaining - arr[i - target]) + arr[i];
        maximum = Math.max(maximum, remaining);
    }
}
console.timeEnd('start');
console.log(maximum);
