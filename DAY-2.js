// // 1. 전역 스코프와 함수 스코프에 대한 이해
// // 출력 결과는 무엇인가요? 그리고 그 이유를 설명하세요.
// // undefine, 20
// var x = 10;

// function example() {
//   console.log(x); // 선언 및 할당 없이 출력 undefind
//   var x = 20; // x에 대한 선언및 값 할당
//   console.log(x); // 출력 20
// }

// example(); // example 함수 호출

// // 2. IIFE(즉시 실행 함수) 동작 이해
// // 위 코드에서 콘솔에 출력되는 값은 무엇이며, 외부에서 a에 접근할 수 없는 이유를 설명하세요.
// // 5, ReferenceError
// // 함수 내부에서 선언된 것이므로 외부에서 내부 변수에 접근을 못함.
// (function() {
//   var a = 5;
//   console.log(a);
// })();

// // console.log(a);

// // 3. this 바인딩 규칙 1: 전역 컨텍스트
// // 위 코드에서 this가 가리키는 값은 무엇인가요? (브라우저 환경 기준)
// // 브라우저 기준 window 전역 객체를 가리킴
// function showThis() {
//   console.log(this);
// }

// showThis();

// // 4. this 바인딩 규칙 2: 메서드 호출
// // this는 무엇을 가리키며, 출력 결과는 무엇인가요?
// // this는 car를 가리키며 car내부의 brand를 참조,  'Toyota'
// const car = {
//   brand: 'Toyota',
//   displayBrand() {
//     console.log(this.brand);
//   }
// };

// car.displayBrand();

// // 5. call()을 사용한 명시적 바인딩
// // call() 메서드를 사용했을 때 this가 가리키는 값과 출력 결과는 무엇인가요?
// // this는 person 객체를 가리키며 name 프로퍼티를 접근
// // Hello, Gyejin 으로 출력 됨
// const person = { name: 'Gyejin' };

// function sayHello() {
//   console.log(`Hello, ${this.name}`);
// }

// sayHello.call(person);

// // 6. bind() 메서드를 활용한 바인딩
// // bind() 메서드를 사용한 후 함수 boundGreet()를 호출했을 때의 출력 결과는 무엇인가요?
// // Hello, Gyejin

// function greet() {
//   console.log(`Hello, ${this.name}`);
// }

// const person1 = { name: 'Gyejin' };
// const boundGreet = greet.bind(person1);

// boundGreet();

// // 7. 프로토타입을 통해 상속된 메서드 speak()가 어떤 객체에서 호출되며, 출력 결과는 무엇인가요?
// //dog 객체에서 호출되며 출력은 Dog makes a sound
// function Animal(type) {
//   this.type = type;
// }

// Animal.prototype.speak = function() {
//   console.log(`${this.type} makes a sound.`);
// };

// const dog = new Animal('Dog');

// dog.speak();

// // 8. 콜 스택과 비동기 함수의 순서
// // 위 코드를 실행하면 출력 순서는 어떻게 되고, 그 이유는 무엇인가요?
// // start, End, Timeout (setTimeout으로 1초 후로 출력을 예약해)
// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout');
// }, 1000);

// console.log('End');

// // 9. 마이크로태스크 큐와 태스크 큐의 차이
// // 위 코드에서 출력 순서와 그 이유를 설명하세요.
// // Start, End, Promise, Timeout
// // 항상 마이크로태스크 큐는 태스크 큐보다 먼져 실행됨
// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Promise');
// });

// console.log('End');

// // 10. Strict 모드에서의 오류 탐지
// // 위 코드에서 발생하는 오류와 그 이유를 설명하세요.
// // 엄격 모드가 활성화 되었기떄문에 x를 선언 하지 않고 값을 할당하면 ReferenceError가 발생
// "use strict";

// x = 5;

// console.log(x);

// // 11. 클로저를 이용한 상태 유지
// // 클로저를 사용했을 때, count 변수의 상태는 어떻게 유지되며, 출력 결과는 무엇인가요?
// // count = 0; 으로 시작하여 유지하다 ++증감으로 실행이 끝나도 누적하여 기억됩니다.
// function createCounter() {
//   let count = 0;

//   return function() {
//     count++;
//     console.log(count);
//   };
// }

// const counter = createCounter();

// counter();
// counter();

// // 12. 화살표 함수에서의 this 바인딩
// // 화살표 함수 greet()에서 this가 가리키는 것은 무엇이며, 출력 결과는 무엇인가요?
// // 화살표 함수는 자신의 this바인딩을 가지고 있지 않기 떄문에 undefind
const person2 = {
  name: "Gyejin",
  greet: () => {
    console.log(this.name);
  },
};

person2.greet();

// 13. setTimeout과 this 바인딩 문제 해결
// 위 코드에서 this.name이 제대로 출력되지 않는 이유는 무엇이며, 이를 해결하는 방법을 설명하세요.
// 여기서 setTimeout은 전역 객체를 잡기 떄문에 name 속성을 찾을수가 없어 undefind를 출력함
// 해결방법은 화살표 함수를 이용해 내부 this가 아닌 외부 this를 잡아 문제를 해결
const user = {
  name: "Gyejin",
  greet() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

user.greet();

// 14. Promise의 기본 이해
// 위 Promise의 실행 흐름과 최종 출력 결과를 설명하세요.
// Promise 생성, setTimeout 시작
// 1초 후 Success 전달
// result에 Success 할당
// 출력 Success
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 1000);
});

promise.then((result) => {
  console.log(result);
});

// 15. async/await를 이용한 비동기 함수 제어
// async/await를 사용한 비동기 함수의 실행 흐름과 출력 결과를 설명하세요.
// fetchData함수 호출
// await 사용 Promise가 해결될때까지 대기
// 1초후 data 변수에 Fetched Data가 할당됨
// console.log를 통해 data할당값 출력( Fetched Data)
async function fetchData() {
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fetched Data");
    }, 1000);
  });

  console.log(data);
}

fetchData();

// 16. 호이스팅이 발생하는 경우
// 위 코드에서 a의 값은 무엇으로 출력되며, 그 이유는 무엇인가요?
// 호이스팅발생 선언이 상단으로 올라오고 초기화가되지 않아서 undefind
console.log(a);

var a = 10;

// 17. let과 const에서의 호이스팅 차이
// let으로 선언된 변수가 호이스팅되지 않는 것처럼 보이는 이유는 무엇인가요?
// 일시적 TDZ가 존재, b를 초기화 하기 전까지 Reference가 발생
console.log(b);

let b = 10;

// 18. 생성자 함수에서 this의 역할
// 생성자 함수에서 this가 가리키는 객체는 무엇이며, 출력 결과는 무엇인가요?
// this는 Car을 가리키며, 출력은 Tesla
function Car(model) {
  this.model = model;
}

const myCar = new Car("Tesla");

console.log(myCar.model);

// 19. 이벤트 루프의 동작 원리
// 이벤트 루프가 setTimeout을 처리하는 방식에 대해 설명하고, 출력 순서를 예측하세요.
// setTimeout이 호출되어 이벤트 큐에 등록됨, 콜백함수는 즉시 실행이 아닌 대기 상태로 들어감
// Start, End, Timeout
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");

// 20. 프로미스 체인의 동작 이해
// 프로미스 체인이 어떻게 동작하는지 설명하고, 최종 출력 결과를 예측하세요.
// Promise 생성
// 1초가 지나면 resolve가 전달
// First Promise 출력
// 반환값인 Second Promise가 두번쨰 콜백 함수에 전달
// Second Promise 출력
// First Promise, Second Promise

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First Promise");
  }, 1000);
})
  .then((result) => {
    console.log(result);
    return "Second Promise";
  })
  .then((result) => {
    console.log(result);
  });
