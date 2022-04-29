{
  const array = [1, 2, 3, 4, 5];
  Math.max(...array);
  const sum = array.reduce((a, b) => a + b, 0);
  Math.pow(2, 4);
  //ln
  Math.log(5);
  //log2
  Math.log2(5);
  //log10
  Math.log10(5);
}

{
  BigInt(4);
  //BigInt는 BigInt끼리만 더할 수 있음

  //true
  console.log(Number(4) == BigInt(4));
  //false
  console.log(Number(4) === BigInt(4));

  const array = new Array(10).fill(BigInt(0));
  //BigInt사용 후 number로 리턴하는 것이 좋을듯
}
