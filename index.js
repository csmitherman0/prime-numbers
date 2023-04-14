const isPrime = (num) => {
  if (num < 0) {
    for (let i = -2; i >= num / 2; i--) {
      if (num % i === 0) {
        return false;
      }
    }
  } else {
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        return false;
      }
    }
  }

  return true;
};

const getPrimes = (max, start) => {
  try {
    if (!start) {
      if (max < 0) {
        start = -1;
      } else {
        start = 1;
      }
    }
    const primes = [];
    if (max < 0) {
      for (let i = start; i >= max; i--) {
        if (isPrime(i)) {
          primes.push(i);
        }
      }
    } else {
      for (let i = start; i <= max; i++) {
        if (isPrime(i)) {
          primes.push(i);
        }
      }
    }

    return primes;
  } catch (e) {
    console.log(e);
  }
};

const getPrimesAsObjects = (max, start) => {
  try {
    if (!start) {
      if (max < 0) {
        start = -1;
      } else {
        start = 1;
      }
    }
    const primes = [];
    if (max < 0) {
      for (let i = start; i >= max; i--) {
        primes.push({
          value: i,
          isPrime: isPrime(i),
        });
      }
    } else {
      for (let i = start; i <= max; i++) {
        primes.push({
          value: i,
          isPrime: isPrime(i),
        });
      }
    }
    return primes;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getPrimes,
  getPrimesAsObjects,
};
