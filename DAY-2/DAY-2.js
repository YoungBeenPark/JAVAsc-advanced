// 1. 전역 스코프와 함수 스코프 이해
var x = 10;

function example() {
  console.log(x); // undefined
  var x = 20;
  console.log(x); // 20
}

example();

/*
첫 번째 출력에서는 undefined가 나옴. 함수 내부에서 변수가 호이스팅되지만, 값이 할당되기 전에 접근되었기 때문임. 두 번째에서는 20이 출력됨, 변수에 값이 할당된 이후이기 때문임.
*/

// 2. IIFE 동작 이해
(function() {
  var a = 5;
  console.log(a); // 5
})();

console.log(a); // ReferenceError

/*
IIFE는 즉시 실행되며, a는 함수 내부에서만 유효함. 함수 밖에서 a를 호출하면 참조할 수 없기 때문에 ReferenceError가 발생함.
*/

// 3. this 바인딩 규칙 (전역 컨텍스트)
function showThis() {
  console.log(this); // window
}

showThis();

/*
전역에서 호출된 함수에서 this는 전역 객체인 window를 가리킴.
*/

// 4. this 바인딩 규칙 (메서드 호출)
const car = {
  brand: 'Toyota',
  displayBrand() {
    console.log(this.brand); // 'Toyota'
  }
};

car.displayBrand();

/*
this는 메서드를 호출한 객체를 가리킴, 여기서는 car 객체임. 그래서 'Toyota'가 출력됨.
*/

// 5. call()을 사용한 명시적 바인딩
const person = { name: 'Gyejin' };

function sayHello() {
  console.log(`Hello, ${this.name}`); // Hello, Gyejin
}

sayHello.call(person);

/*
call()을 사용해서 this를 명시적으로 person 객체로 바인딩함. 그래서 'Gyejin'이 출력됨.
*/

// 6. bind() 메서드를 활용한 바인딩
function greet() {
  console.log(`Hello, ${this.name}`);
}

const person2 = { name: 'Gyejin' };
const boundGreet = greet.bind(person2);

boundGreet(); // Hello, Gyejin

/*
bind()를 사용해 함수의 this를 영구적으로 person2 객체에 바인딩함. 그래서 'Gyejin'이 출력됨.
*/

// 7. 프로토타입 상속
function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function() {
  console.log(`${this.type} makes a sound.`);
};

const dog = new Animal('Dog');
dog.speak(); // Dog makes a sound.

/*
프로토타입 체인을 통해 Animal의 speak 메서드를 dog 객체가 상속받음. 그래서 'Dog makes a sound'가 출력됨.
*/

// 8. 콜 스택과 비동기 함수의 순서
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 1000);

console.log('End'); // Start, End, Timeout

/*
setTimeout은 비동기 함수라서 1초 후에 실행됨. 그 사이에 다른 코드가 먼저 실행되기 때문에 'Start', 'End' 순으로 출력되고, 마지막에 'Timeout'이 출력됨.
*/

// 9. 마이크로태스크 큐와 태스크 큐의 차이
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End'); // Start, End, Promise, Timeout

/*
Promise는 마이크로태스크 큐에서 처리되고, setTimeout은 태스크 큐에서 처리됨. 마이크로태스크 큐가 태스크 큐보다 우선 처리되기 때문에 Promise가 Timeout보다 먼저 실행됨.
*/

// 10. Strict 모드에서의 오류 탐지
"use strict";

x = 5; // ReferenceError: x is not defined

console.log(x);

/*
엄격 모드에서는 변수를 선언하지 않고 사용하면 ReferenceError가 발생함.
*/

// 11. 클로저를 이용한 상태 유지
function createCounter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

const counter = createCounter();

counter(); // 1
counter(); // 2

/*
클로저는 외부 함수의 변수를 기억함. 그래서 함수가 호출될 때마다 count 값이 유지되고 증가함.
*/

// 12. 화살표 함수에서의 this 바인딩
const person3 = {
  name: 'Gyejin',
  greet: () => {
    console.log(this.name); // undefined
  }
};

person3.greet();

/*
화살표 함수는 this를 자체적으로 가지지 않고 상위 스코프의 this를 상속받음.
여기서는 전역 객체를 가리키므로 name이 undefined임.
*/

// 13. setTimeout과 this 바인딩 문제 해결
const user = {
  name: 'Gyejin',
  greet() {
    setTimeout(() => {
      console.log(this.name); // Gyejin
    }, 1000);
  }
};

user.greet();

/*
setTimeout 안에서 this를 올바르게 사용하려면 화살표 함수를 사용해야 함. 화살표 함수는 상위 스코프의 this를 상속받기 때문임.
*/

// 14. Promise의 기본 이해
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success');
  }, 1000);
});

promise.then((result) => {
  console.log(result); // Success
});

/*
Promise는 비동기 작업이 성공하면 resolve가 호출되고, then 메서드를 통해 결과값을 받을 수 있음. 여기서는 1초 후 'Success'가 출력됨.
*/

// 15. async/await를 이용한 비동기 함수 제어
async function fetchData() {
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve('Fetched Data');
    }, 1000);
  });

  console.log(data); // Fetched Data
}

fetchData();

/*
async/await를 사용하면 프로미스를 비동기 함수처럼 처리할 수 있음. await는 프로미스가 해결될 때까지 기다리고, 그 후 결과값을 출력함.
*/

// 16. 호이스팅이 발생하는 경우
console.log(a); // undefined

var a = 10;

/*
변수 선언이 호이스팅되어 코드 상단으로 끌어올려지지만, 값은 할당되지 않아서 undefined가 출력됨.
*/

// 17. let과 const에서의 호이스팅 차이
console.log(b); // ReferenceError: Cannot access 'b' before initialization

let b = 10;

/*
let은 호이스팅되지만, TDZ(Temporal Dead Zone) 때문에 초기화되기 전에는 접근할 수 없음. 그래서 ReferenceError가 발생함.
*/

// 18. 생성자 함수에서 this의 역할
function Car(model) {
  this.model = model;
}

const myCar = new Car('Tesla');

console.log(myCar.model); // Tesla

/*
생성자 함수에서 this는 새로 생성된 객체를 가리킴. 그래서 myCar 객체의 model은 'Tesla'가 됨.
*/

// 19. 이벤트 루프의 동작 원리
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

console.log('End'); // Start, End, Timeout

/*
setTimeout은 비동기 함수라서 태스크 큐에 들어가고, 콜 스택이 비어야 실행됨. 그래서 Start, End가 먼저 출력되고, 그 후에 Timeout이 출력됨.
*/

// 20. 프로미스 체인의 동작 이해
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('First Promise');
  }, 1000);
})
  .then((result) => {
    console.log(result); // First Promise
    return 'Second Promise';
  })
  .then((result) => {
    console.log(result); // Second Promise
  });

/*
첫 번째 then에서 프로미스가 해결되면 'First Promise'가 출력됨. 그 다음에 return으로 'Second Promise'를 반환하고, 두 번째 then에서 출력됨.
*/