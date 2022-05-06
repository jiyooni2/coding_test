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

//split number into digits
{
  const input = "123456";

  const a = input.split("");
  console.log(a);
}

{
  console.log("with newline");
  process.stdout.write("without newline");
  console.log();
}

{
  //string에서 특정 인덱스의 캐릭터를 바꾸려면, substring으로 쪼갠다음에 합쳐서 바꾸는 방법밖에 없음
  //되도록 array로 저장할것!!
}

//연속된 문자열 체크
{
  const a = "AAAbbCC";
  a.match(/[A-z]{3}/);
}

//use regex
{
  let str = "ABCDDEEFFFKKKKKLLLL";

  //g : 전체 모든 문자열 변경
  //i : 대소문자 무시
  //2번 매칭되는 문자열 삭제
  str = str.replace(/([A-Z])\1{1}/g, "");
  console.log(str);
}
