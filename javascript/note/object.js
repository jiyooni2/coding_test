const person = { name: "JiYoon", age: 3 };

person.hasJob = true;
delete person.age;
console.log(person);

//Computed Properties
console.log(person.name); //default 사용
console.log(person["age"]); //name : computed properties, runtime에 결정, 있는지 없는지 모를 때 사용, 없으면 undefined

//In operator

console.log("name in Person?", "name" in person);

//for in , for of
for (key in person) {
  //key가 할당 배열에서는, idx가 key니까 idx가 주어짐
  console.log(key);
}

//Cloning -> object는 pointer가 저장, 값을 바꾸면 같이 바뀜
const user = { name: "ji", age: "20" };
const user2 = user;

user2.name = "coder";
console.log("original", user);
console.log("clone", user2);

const user4 = {};
Object.assign(user4, user);
user4.name = "user4";
console.log(user4);

const user5 = Object.assign({}, user);
user5.name = "User5";
console.log(user5);

const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
//차례대로 할당한다고 생각 mixed={...fruit1, ...fruit2}
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color, mixed.size);

//Sort
{
  const array = [
    { name: "A", age: 13 },
    { name: "B", age: 14 },
    { name: "C", age: 1 },
  ];

  array.sort((a, b) => {
    return a.age - b.age;
  });

  console.log(array);
}
