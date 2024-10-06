// 문제1
// JavaScript에서 클래스를 정의하고, 해당 클래스를 사용하여 객체를 생성하는 방법을 설명하세요.
// 코드 예시를 포함해 주세요.

// 객체를 생성하고 속성과 메서드를 정의한다
//클래스 생성
class Obj {
  // 생성자 생성
  constructor(title) {
    // 속성 생성
    this.title = title;
  }
  // 메서드 정의
  cooking() {
    console.log(`부모 클래스에선 ${this.title}을 만들고`);
  }
}
// 객체 생성
const myobj = new Obj("붕어빵");
// 객체.메서드 호출
myobj.cooking();

// 문제 2
// JavaScript에서 상속을 사용하여 클래스를 확장하는 방법을 설명하세요.
// 부모 클래스와 자식 클래스를 정의하고, 상속을 통해 재사용하는 예시 코드를 작성하세요.

class Jop extends Obj {
  constructor(title) {
    super(title);
  }
  working() {
    console.log(`자식 클래스에선 ${this.title}틀로 바꿔 만듭니다`);
  }
}
const myjop = new Jop("국화빵");
myjop.working();

// 문제 3
// 다형성이란 무엇인가요? JavaScript에서 메서드 오버라이딩을 사용하여
// 다형성을 구현하는 방법을 설명하고, 관련 예시를 작성하세요.

// 클래스 생성
class Animal {
  makeSound() {
    console.log("동물 소리");
  }
}
// Animal 객체를 Cat에 상속
class Cat extends Animal {
  // 상속받아 오버라이딩
  makeSound() {
    console.log("미야아오오옹");
  }
}
// Animal 객체를 Camal에 상속
class Camel extends Animal {
  // 상속받아 오버라이딩
  makeSound() {
    console.log("카아아악퉤");
  }
}
// 객체 배열 생성
const animal = [new Animal(), new Cat(), new Camel()];

// anmal객체를 for.Eath로 배열 순환하며 인스턴스 호출
animal.forEach((animal) => {
  animal.makeSound();
});

// 문제 4
// 추상화의 개념과 JavaScript에서 추상화를 구현하는 방법을 설명하세요.
// 추상 클래스를 만들고 이를 상속받는 클래스의 예시 코드를 작성하세요.

class Animal1 {
  constructor() {
    if (new.target === Animal1) {
      throw new TypeError("인스턴스를 생성할 수 없습니다");
    } // 인스턴스 직접 생성 금지하며 인스턴스 생성시 오류를 발생시킴
  }
  sound() {
    throw new Error("메서드를 재정의 해야합니다");
  } // 자식클래스에서 반드시 오버라이딩해야 하고 호출될 경우 오류를 발생시킴
}
// Animal 상속받는 클래스
class Pig extends Animal1 {
  constructor(name) {
    super(); // 부모클래스 생성자 호출
    this.name = name; // 속성 초기화
  }

  sound() {
    return `${this.name}는 꿀꿀.`;
  }
}
const piglet = new Pig("돼지");
console.log(piglet.sound());

// 문제 5
// JavaScript에서 생성자 함수의 역할은 무엇인가요?
// 생성자를 사용하여 객체를 초기화하는 예시를 작성하세요.

// class Person {
//   constructor(name, age) { //생성자 생성
//     this.name = name; //
//     this.age = age; //
//   }
// }
// const myPerson = new Person('아무개', 20);

// 문제 6
// JavaScript에서 Getter와 Setter 메서드를 사용하여 객체의
// 속성에 접근하고 수정하는 방법을 설명하세요. 관련 예시를 작성하세요.

// ***별도 getter, setter 의 차이점***
// getter 속성 값을 읽기 위해 사용
// setter 속성 값을 수정하기 위해 사용

class Employee {
  #직원;

  constructor() {
    this.#직원 = 0; // 초기화
  }
  get찍원() {
    // getter
    return this.#직원;
  }

  set찍원(amount) {
    // setter
    if (amount >= 0) {
      this.#직원 = amount;
    }
  }
}
// 객체 생성
const employee = new Employee();
// 객체 set메서드 호출
employee.set찍원(4000);
// get 메서드 출력
console.log(employee.get찍원());

// 문제 7
// 함수형 프로그래밍의 주요 특징과 장점을 설명하세요.
// 순수 함수, 불변성, 고차 함수의 개념을 포함하여 답변하세요.

// 함수형 프로그래밍

// 특징
// 1. 순수 함수
// 동일 입력에 대해 항상 동일한 출력을 반환, 외부상태 변경을 하지 않는 함수
// 부수 효과 X, 에측 가능

// 2. 고차 함수
// 함수를 인자로 받거나 함수로 반환
// 함수의 재사용성, 조합성을 높임

// 3. 불변성
// 데이터가 한번 생성되면 변경되지 않는 성질
// 오류를 방지하고 코드의 안정성을 높임

// 4. 함수 합성
// 여러 함수를 결합하여 새로운 함수를 만드는 과정
// 작은 함수들을 조합하여 복잡한 동작을 구현

// 장점
// 1. 코드의 가독성 및 유지보수 향상
// 2. 순수 함수는 외부에 의존하지 않기에 단위 테스트 가능
// 3. 상태가 변경되지 않기 때문에 스레드에서 안전하게 실행 가능해 병렬처리에 유리
// 4. 고차 함수, 함수조합을 통해 코드의 재사용을 높임

// 문제 8
// 순수 함수와 부수 효과의 차이를 설명하세요.
// 순수 함수의 예시와 부수 효과가 있는 함수의 예시를 작성하세요.

// 순수 함수
// 함수 외부의 상태에 영향을 미치지 않음, 항상 같은 결과를 반환
function sum(x) {
  return x + x;
}
let print = sum(2);
console.log(print);

// 부수 효과
// 함수가 외부상태를 변경, 외부상태에 의존함
let total = 0;
function addTotal(x) {
  total += x;
  return total;
}
console.log(addTotal(3)); // 3
console.log(addTotal(5)); // 8

// 문제 9
// JavaScript에서 고차 함수란 무엇인가요?
// map, filter, reduce 함수의 사용 예시를 각각 작성하세요.
const numbers = [1, 2, 3, 4];

// map 일정한 규칙에 따라 변환
const double = numbers.map((num) => num + 1);
console.log(double);

// filter 주어진 조건에 맞는 요소를 반환
const square = numbers.filter((num) => num % 2 === 0);
console.log(square);

//reduce 하나의 값으로 반환

// 문제 10
// 불변성을 유지하는 방법을 설명하고,
// JavaScript에서 Spread 연산자를 사용하여 객체나 배열의 불변성을 유지하는 예시 코드를 작성하세요.

const Array = [1, 2, 3];
const newArray = Array.concat(4);
// concat은 두개 이상의 배열을 병합할때 사용하지만 기존 배열은 놔두고 새 배열에 병합
const Arry1 = [...Array, 4];
console.log(newArray); // [1, 2, 3, 4]
console.log(Arry1); // [1, 2, 3, 4]

// 문제 11
// 커링의 개념을 설명하고, 커링을 적용한 함수의 예시를 작성하세요.

// 개념 - n개의 인자를 받는 함수를 n개의 단일 인자로 받는 함수로 변환
function add(a) {
  return function (b) {
    return a + b;
  };
}
const curryAdd = add(4);
console.log(curryAdd(3));

// 문제 12
// 함수 합성의 개념을 설명하고, 두 개 이상의 함수를 결합하여 새로운 함수를 만드는 예시를 작성하세요.

// 개념 - 두개 이상의 함수를 결합
const compose = (f, g) => (x) => f(g(x));

const square1 = (x) => x * x;
const addOne = (x) => x + 1;

// 문제 13
// 모나드의 저주란 무엇인가요? 모나드를 이해하고 설명하기 어려운 이유를 설명하고, 모나드의 개념을 비유적으로 설명해 보세요.

// 모나드의 저주란?
// 모나드를 이해하고 나면 다른사람에게 설명하기 매우 어렵다는 말로 회자됨
// 모나드의 개념을 꺠우치면 다른사람에게 전하는 방법이 어렵다는 말이다.

// 모나드의 개념을 비유적으로 설명
// 박스 : 모나드는 값을 감싸는 박스와 같음
// 값을 담음 : 값을 담고 있을 뿐아니라, 값을 안전한게 다룰 수 있는 방법을 제공 (Maybe 모나드)
// 체인 가능성 : 메소드를 체인할 수 있음 (박스 안의 값을 변환 할때 박스를 열지 않고도 메소드를 호출할 수 있음)
// 부작용 관리 : Promise모나드를 사용하면 비동기 작업때 성공/실패를 쉽게 처리 가능

// 문제 14
// 재귀 함수의 개념을 설명하고, 팩토리얼을 계산하는 재귀 함수의 예시를 작성하세요.
// 재귀함수 : 자신을 호출하여 반복적인 작업을 수행

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
// factorial(1) = 1 * 0 = 1 ;
// factorial(2) = 2 * 1 = 2 ;
// factorial(3) = 3 * 2 = 6 ;
// factorial(4) = 4 * 6 = 24 ;
// factorial(5) = 5 * 24 = 120 ;

// 문제 15
// 객체 지향 프로그래밍(OOP)과 함수형 프로그래밍(FP)의 차이점을 설명하세요. 두 패러다임의 장단점을 비교하세요.

// OOP : 프로그램을 객체라는 단위로 구성하여 설계하는 방법
// 장점
// 코드 재사용과 유지보수가 가능 (재사용 가능)
// 코드 구조가 명확하며 수정,관리에 용이함 (유지보수)
// 상속과 다형성을 통해 기능을 쉽게 확장 가능 (확장성)
// 캡슐화를 통해 데이터와 메소드를 단위로 묶어 관리 (모듈화)

// FP : 수학적 함수의 개념을 기반으로 한 프로그램을 구성하는 방법
// 장점
// 입력에 대한 예측 가능한 출력을 제공해 디버깅, 테스트에 용이 (예측 가능성)
// 함수가 독립적으로 작동, 코드의 모듈화, 재사용성 용이 (모듈화)
// 여러 함수를 동시에 실행하는 것이 용이 (병렬 처리)
// 고차 함수를 통해 복잡한 로직을 간결하게 표현 가능 (간결성)

// 문제 16
// 오버라이딩(Overriding)과 오버로딩(Overloading)의 차이점을 설명하고,
// JavaScript에서 오버라이딩을 구현한 예시를 작성하세요.

// 오버라이딩
// - 부모 클래스에 정의된 메소드를 자식 클래스에 재정의하는 것

// 오버로딩
// - 같은 이름의 메소드를 여러개 정의하되, 매개변수의 타입이나 개수에 따라 조건문을 사용하여 구현 가능

class parents {
  cooking() {
    console.log("엄마가 음식을 만드는중.");
  }
}
class child extends parents {
  cooking() {
    console.log("자식은 재료를 다듬는중.");
  }
}
const togetherCooking = new child();
togetherCooking.cooking();

// 문제 17
// 함수형 프로그래밍에서 상태 관리는 어떻게 이루어지나요? 상태 변화를 최소화하고 불변성을 유지하는 방법을 설명하세요.
// - 불변성의 원칙을 따르며 상태 변경을 피하는 방식을 이루어짐

// 불변성을 유지
const state = {
  count: 0,
};
// 상태를 변경하는 함수
const increment = (num) => ({
  ...num,
  count: num.count + 1,
});
// 상태 변경 예시
let changeState = state;

console.log(changeState); // 0

changeState = increment(changeState);
console.log(changeState); // 1

// 문제 18
// JavaScript에서 프로토타입 상속이란 무엇인가요? 프로토타입을 사용하여
// 객체 간 상속을 구현하는 방법을 설명하고, 예시 코드를 작성하세요.

// 객체간의 상속을 구현하는 방법

function Animal2(name) {
  // 부모 생성자
  this.name = name;
}
Animal.prototype.speak = function () {
  // 부모 메서드
  console.log(`${this.name}이 울부짖습니다.`);
};

function wolf(name) {
  // 자식 생성자
  Animal2.call(this, name);
}

wolf.prototype = Object.create(Animal2.prototype); // 프로토타입 상속 설정
wolf.prototype.constructor = wolf;

wolf.prototype.speak = function () {
  // 자식 메서드 정의
  console.log(`${this.name}가 하울링합니다.`);
};

const mywolf = new wolf("늑대");
mywolf.speak();

// 문제 19
// 함수형 프로그래밍의 개념을 활용하여 간단한 Todo 리스트 애플리케이션을 구현하세요. 항목 추가, 삭제, 완료 처리를 순수 함수로 구현하는 코드를 작성하세요.
// 불변 데이터 구조를 위한 객체
const todos = [
  { id: 1, text: "함수형 프로그래밍 공부", completed: false },
  { id: 2, text: "자바스크립트 복습", completed: true },
  { id: 3, text: "프로젝트 아이디어 구상", completed: false },
];

// 항목 추가 함수
const addTodo = (todos, newTodo) => [...todos, newTodo];

// 항목 삭제 함수
const removeTodo = (todos, id) => todos.filter((todo) => todo.id !== id);

// 완료 상태 토글 함수
const toggleTodo = (todos, id) =>
  todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );

// 미완료 항목 필터링
const incompleteTodos = todos.filter((todo) => !todo.completed);

// 사용 예제
let updatedTodos = addTodo(todos, {
  id: 4,
  text: "테스트 코드 작성",
  completed: false,
});

updatedTodos = toggleTodo(updatedTodos, 1);
updatedTodos = removeTodo(updatedTodos, 2);

console.log(updatedTodos);

/*
[
  { id: 1, text: '함수형 프로그래밍 공부', completed: true },
  { id: 3, text: '프로젝트 아이디어 구상', completed: false },
  { id: 4, text: '테스트 코드 작성', completed: false }
]
*/
