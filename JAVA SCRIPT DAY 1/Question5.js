// another method of prime

for (let num = 2; num <= 100; num++) {
  let isprime = true;

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      isprime = false;
      break;
    }
  }
  if (isprime) {
    console.log(num);
  }
}
