function solution(numbers) {
  var answer = 0;

  numbers = numbers.split("");

  let nums = [];
  for (let i = 0; i < numbers.length; i++) {
    let arr = getPermutation(numbers, i + 1);

    for (let item of arr) {
      let str = "";

      for (let c of item) {
        str += c;
      }

      let num = parseInt(str);

      if (!nums.includes(num)) {
        nums.push(num);
      }
    }
  }

  for (let n of nums) {
    if (n % 2 === 0 && n !== 2) {
      continue;
    }
    if (chkPrime(n)) {
      answer++;
    }
  }

  return answer;
}

function chkPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function isPrime(v) {
  let arr = new Array(v + 1).fill(true);
  arr[0] = false;
  arr[1] = false;
  for (let i = 2; i <= v; i++) {
    let k = i;
    while (k <= v) {
      k += i;
      arr[k] = false;
    }
    if (!arr[v]) {
      return arr[v];
    }
  }

  return arr[v];
}

function getPermutation(array, r) {
  const results = [];
  if (r === 1) {
    return array.map((item) => [item]);
  }

  array.forEach((num, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    let permutations = getPermutation(rest, r - 1);
    let attached = permutations.map((permutation) => [num, ...permutation]);

    results.push(...attached);
  });
  return results;
}
