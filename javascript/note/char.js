{
  //char to ASCII
  const str = "ABC";
  console.log(str.charCodeAt(0));
  console.log(str.charCodeAt(0) - "A".charCodeAt(0));

  //ASCII to char
  console.log(String.fromCharCode(65, 66, 67));
}

//repeat char
{
  const str = "A".repeat(10);
  console.log(str);
}

//array 사이의 교집합 합집합...
{
  const arrA = [1, 2, 3, 4];
  const arrB = [4, 5, 6, 7];
  let intersection = arrA.filter((x) => arrB.includes(x));
  let subtraction = arrA.filter((x) => !arrB.includes(x));
  let symmetric = arrA
    .filter((x) => !arrB.includes(x))
    .concat(arrB.filter((x) => !arrA.includes(x)));
  let union = [...arrA, ...arrB];
}
