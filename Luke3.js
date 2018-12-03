
// Gives all prime factors of a number - too slow
const primeFactors = num => {
  let totalPrimes = 0;

  for (let faktor = 2; faktor <= num; faktor++) {
    while (num % faktor == 0) {
      totalPrimes++;
      num = num / faktor;
    }
  }

  return totalPrimes;
}


function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function findPrimes(n) {
  const primes = [];

  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}

// @fshauge solution
function main() {
  const possiblePrimes = findPrimes(2**9);
  let total = 0;
  
  for (let i = 2 ** 24; i < 2 ** 32; i++) {
    let n = i;
    let f = 0;

    for (let j = 0; j < possiblePrimes.length && f <= 24; j++) {
      const p = possiblePrimes[j];

      while (n % p === 0 && f <= 24) {
        f++;
        n /= p;
      }
    }

    if (f === 24) {
      const percent = i / 2 ** 32 * 100;
      console.log(`${i} - ${percent}%`);
      total++;
    }
  }

  return total;
}

main();