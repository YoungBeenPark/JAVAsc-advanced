// // 문제 1
// // - 다음 코드의 출력 결과와 이유를 설명하세요.
for (var y = 0; y < 3; y++) {
  setTimeout(() => console.log(y), 100);
}
// var는 함수 스코프로 y변수가 공유됨
// 3, 3, 3
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// let은 블록스코프이며 각 반복에서 새로운 i변수가 생김
//  0.1초 후 0,1,2를 출력
for (const j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}
// const는 재할당이 불가능하고 setTimeout에서 j는 참조할게 없어 Error가 발생



// // 문제 2
// // - 다음 코드에서 `person.greet()`를 호출했을 때 출력 결과는 무엇이며, 그 이유는 무엇인가요?
// const person = {
//   name: 'Alice',
//   greet: () => {
//     console.log(`Hello, ${this.name}!`);
//   },
// };
// person.greet();

// //답
// // 'Hello, undefined!' this는 외부 스코프를 참조하고 참조할게 없어 undefined 반환

// // 화살표 함수 this는 내부가 아닌 외부 스코프를 참조하기 때문에
// // undefined를 출력해 화살표 함수로 사용을 하려면
// const person = {
//   name: "Alice",
//   greet: function () { //함수로 감싸준다
//     const greetFunction = () => { //변수 선언 후 화살표 함수 이용
//       console.log(this.name);
//     };
//     greetFunction(); // 화살표 함수 호출
//   }
// }; 
// person.greet();
// // 이렇게 쓸수있음



//  문제 3: 템플릿 리터럴로 문자열 조합하기
// - 다음 변수들을 이용하여 템플릿 리터럴을 사용해 `'Today is Monday and the weather is sunny.'`라는 문자열을 생성하세요.
// const day = 'Monday';
// const weather = 'sunny';

// //답
// console.log(`Today is ${day} and the weather is ${weather}.`); // 백틱 사용!



//  문제 4: 객체 디스트럭처링 활용하기
// - 다음 객체에서 디스트럭처링을 사용하여 `name`, `age`, `city` 변수를 추출하세요.
// const user = {
//   name: 'Bob',
//   age: 25,
//   address: {
//     city: 'New York',
//     zip: '10001',
//   },
// };

// //답
// console.log(user.name);
// console.log(user.age);
// const AddCity = user.address.city;
// console.log(AddCity);



//  문제 5: 스프레드 연산자로 배열 합치기
// - 두 개의 배열 `arr1`과 `arr2`를 스프레드 연산자를 사용하여 하나의 배열로 합치고, 결과를 출력하세요.
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// //답
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);



//  문제 6: 클래스 상속과 메서드 오버라이딩
// - `Animal` 클래스를 상속하는 `Dog` 클래스를 작성하고, `speak` 메서드를 오버라이딩하여 `'Woof!'`를 출력하게 하세요.
// class Animal {
//   speak() {
//     console.log('Animal sound');
//   }
// }

// //답
// class Dog extends Animal {
//   speak() {
//     console.log('웊웊!');
//   }
// }
// const dog = new Dog();
// dog.speak();



// 문제 7: 제너레이터를 이용한 이터러블 객체 생성
// - 제너레이터 함수를 사용하여 1부터 5까지의 숫자를 순회하는 이터러블 객체를 생성하고, `for...of` 루프로 출력하세요
//답
// function* number() {
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
//   yield 5;
// }
// const numbers = number();

// for (const number of numbers) {
//   console.log(number);
// }



// 문제 8: 심볼을 이용한 객체의 비공개 프로퍼티
// - 심볼을 사용하여 객체 `user`에 비공개 프로퍼티 `id`를 추가하고, 외부에서 접근할 수 없는 것을 확인하세요.
// const password = Symbol('id');
// const user = {
//   name: 'young been',
//   [password]: 1234,
// };

// //답
// console.log(Object.keys(user));



//  제 9: 프록시를 이용한 속성 값 유효성 검사
// 객체의 속성 값이 숫자가 아닌 경우 오류를 발생시키는 프록시를 작성하세요.
// const handler = { 
//   set: (obj, prop, value) => { //프록시로 감싸진 원래 객체, 속성의 이름, 설정하려는 값
//     if (typeof value !== 'number') { //값이 숫자인지 검증
//       throw new Error('Error가 발생했습니다.');
//     }
//     obj[prop] = value; // 원래 객체의 속성에 값을 설정
//     return true;
//   }
// };

// const proxy = new Proxy({}, handler);
// proxy.age = 16; // 정상
// proxy.age = '12'; // Error




// // 문제 10: `Promise`와 `async/await` 비교
// // - 다음 `Promise`를 `async/await`을 사용하여 동일한 기능을 하는 함수로 변환하세요.
// function fetchData() {
//   return fetch('https://api.example.com/data')
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
// }

// //답
// async function fetchData() {
//   try {
//     const response = await fetch('https://api.example.com/data')
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Error입니다');
//   }
// }



//  문제 11: `Array.prototype.includes()` 활용
// - 배열 `numbers`에서 숫자 `7`이 포함되어 있는지 확인하는 코드를 작성하세요.
// const numbers = [1, 3, 5, 7, 9];
// //답
// console.log(numbers.includes(7));



// 문제 12: 객체의 Rest/Spread 프로퍼티
// - 객체 `person`에서 `name`을 제외한 나머지 프로퍼티를 새로운 객체 `details`로 추출하세요.
// const person = { name: 'Eve', age: 28, city: 'Paris' };
// //답
// const {name, ...details} = person ;
// console.log(details);



// 문제 13: `Object.fromEntries()`를 사용한 객체 생성
// - 다음 키-값 쌍 배열을 객체로 변환하세요.
// const entries = [
//   ['fruit', 'apple'],
//   ['color', 'red'],
// ];
// //답
// const obj = Object.fromEntries(entries);
// console.log(obj);



// 문제 14: Null 병합 연산자 (`??`) 사용하기
// - 변수 `value`가 `null` 또는 `undefined`인 경우 `'default'`를 할당하는 코드를 작성하세요.
// let value = null;
// //답
// let value1 = value ?? 'default';
// console.log(value1);



// 문제 15: 옵셔널 체이닝 (`?.`) 활용
// - 객체 `order`에서 `customer`가 존재하지 않더라도 오류 없이 `customer.name`을 안전하게 접근하는 코드를 작성하세요.
// const order = {
//   id: 1,
//   // customer: { name: 'Frank' },
// };
// //답
// console.log(order?.id); // 1
// console.log(order?.customer?.name); // undefined



// 문제 16: 동적 임포트를 이용한 모듈 로딩
// - 조건에 따라 `math.js` 모듈의 `add` 함수를 동적으로 임포트하여 사용하세요.
// math.js
// export function add(a, b) {
//   return a + b;
// }
// 답
// main.js
// import { add } from './math.js';
// console.log(add(5, 6)); // 11



// 문제 17: `String.prototype.replaceAll()` 사용하기
// - 문자열 `'banana'`에서 모든 `'a'`를 `'o'`로 교체하세요.
// 답
// const text = 'banana'
// const newText = text.replaceAll('a', 'o');
// console.log(newText); // bonono



// 문제 18: `Promise.any()`를 이용한 빠른 응답 받기
// - 여러 개의 Promise 중 가장 빨리 완료된 결과를 받는 코드를 작성하세요.
// const p1 = new Promise((resolve) => setTimeout(resolve, 300, '첫 번째'));
// const p2 = new Promise((resolve) => setTimeout(resolve, 200, '두 번째'));
// const p3 = new Promise((resolve) => setTimeout(resolve, 100, '세 번째'));

// //답 
// Promise.any([p1, p2, p3])
// .then((value) => console.log(value)); // 세 번째



// 문제 19: 클래스 필드 선언과 초기화
// - `Car` 클래스를 작성하고, `brand`와 `color` 필드를 클래스 내부에서 선언하여 초기화하세요.
// // 답
// class Car { // 클래스 선언
//   constructor(brand, color) {
//     this.brand = brand; // 초기화
//     this.color = color; // 초기화
//   }
// }



// 문제 20: `Array.prototype.at()` 메서드 활용
// - 배열 `letters`에서 마지막 요소를 `at()` 메서드를 사용하여 가져오세요.
// const letters = ['x', 'y', 'z'];

// //답
// console.log(letters.at(2)); // z
