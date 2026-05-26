function iseven(num) {
  if (num % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
function isodd(num) {
  if (num % 2 != 0) {
    console.log("odd");
  } else {
    console.log("even");
  }
}
function isprime(n) {
  let count = 0;
  for (let i = 1; i <= n; i++)
    if (n % i == 0) {
      count++;
    }
  if (count == 2) {
    console.log(n);
  } else {
    console.log("not prime");
  }
}
module.exports = { iseven: iseven, isodd: isodd, isprime: isprime };
