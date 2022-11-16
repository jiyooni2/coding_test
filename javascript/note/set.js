/* 
Set
    자료형과 관계 없이, 원시 값과 객체 참조 모두 유일한 값을 저장

*/

{
  //array to set
  const array = [1, 2, 3, 4, 5];
  const set = new Set(array);

  console.log(set);
  set.add(6);
  set.add(3);
  console.log(set);

  //set to array
  const array2 = [...set];
  console.log(array2);
}

{
  const set = new Set([1, 2, 3, 4, 5]);
  set.delete(3);
  console.log(set.has(4));
  console.log(set);

  //get size of set
  console.log(set.size);
}
