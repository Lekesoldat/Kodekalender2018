// Uses about 4 seconds
function calculateNullTung() {
  let summed = 0;
  for (let i = 1; i <= 18163106; i++) {
    let tall = i.toString();
    let count = (tall.match(/0/g) || []).length;
  
    if (count > 0.5 * tall.length) {
      summed += parseInt(tall);
    }
  }
  console.log(summed);
}

/* Credit to @fshauge for the code below */
// Uses less than one second
function isZeroHeavy(i) {
  let n = i;
  let z = 0;
  let o = 0;

  while (n > 0) {
    if (n % 10 === 0) {
      z++;
    } else {
      o++;
    }

    // Hard division
    n /= 10;
    n |= 0;
  }

  return z > o;
}

function main() {
  let output = 0;

  for (let i = 1; i < 18163106; i++) {
    if (isZeroHeavy(i)) {
      output += i;
    }
  }

  return output;
}

console.log(main()); // 78650247070