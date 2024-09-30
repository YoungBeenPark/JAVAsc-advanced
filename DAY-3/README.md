1.  JSON 직렬화와 `undefined` 처리

`JSON.stringify()` 메서드는 객체 내에서 `undefined` 속성을 어떻게 처리할까요?
- 속성이 undefined면 문자열에 포함 되지 않는다.

2.  배열 내의 `undefined` 값 처리

배열의 요소 중 `undefined` 값이 포함된 경우, `JSON.stringify()`는 이를 어떻게 처리할까요?
- 배열의 요소가 undefined인 경우 해당 요소는 null로 반환된다.

3.  `Date` 객체의 직렬화 결과

`JSON.stringify()`로 직렬화할 때 `Date` 객체는 어떤 형식으로 변환됩니까?
- ISO 8601 형식의 문자열로 변환된다.(국제 표준 시간으로 표현)

4.  `Date` 객체의 복원

 `JSON.parse(JSON.stringify(new Date()))`의 실행 결과는 무엇입니까?
- Date 객체가 아니라 일반 문자열이 됨.

5.  JSON에서 지원하지 않는 데이터 타입

JSON 표준(ECMA-404)에서 지원하지 않는 데이터 타입을 두 가지 이상 나열하세요.
- Function, Date, 정규 표현식객체, Symbol

6.  얕은 복사와 깊은 복사의 차이점

얕은 복사와 깊은 복사의 차이를 간단하게 설명하세요.
- 객체의 구조에 따라 다르게 작동함.

7.  `JSON.parse(JSON.stringify())`와 깊은 복사

`JSON.parse(JSON.stringify())` 방식이 깊은 복사를 수행하지 못하는 경우를 설명하세요.
- 객체에 포함된 함수를 직렬화 불가능으로 함수 복사 X
- undefined 값은 JSON으로 변환이 안됨으로 속성 복사 X
- Date 객체는 국제표준시간으로 변환되지만 Date객체가 아닌 문자열로 반환

8.  얕은 복사 방법

얕은 복사를 수행할 수 있는 자바스크립트의 방법을 3가지 이상 나열하세요.
- Object.assign(), 스프레드(…), Array.prototype.slice(), Array.from()

9.  깊은 복사의 필요성

깊은 복사가 필요한 상황을 예시로 설명하세요.
- 게임의 캐릭터 상태나 설정을 복사할때 캐릭터가 서로 영향을 미치지 않도록 독립적인 복사본을 만들어야 함.

10. 깊은 복사 구현 방법

`JSON.parse(JSON.stringify())` 외에 깊은 복사를 수행할 수 있는 방법을 제시하세요.
- Lodash 라이브러리 사용 cloneDeep()함수 이용

11. `Object.assign()`의 한계

`Object.assign()` 메서드를 사용한 얕은 복사의 한계를 설명하세요.
- 객체의 1차원 속성만 복사, 중첩된 객체는 원본 객체와 참조를 공유해 복사된 객체의 중첩 속성을 변경하면 원본 객체에도 영향이 감.

12. 배열 복사 시의 spread 연산자

다음 코드에서 `originalArray`와 `copiedArray`는 서로 독립적인 배열일까요?
- 독립적인 배열은 깊은 복사를 뜻함.
- 밑에 코드는 독립적이지 않음, 얕은 복사의 스프레드를 이용해 두 배열에서 공유가 되고있음
```jsx
const originalArray = [1, 2, { a: 3 }];
const copiedArray = [...originalArray];

copiedArray[2].a = 4;
```

13. 재귀를 통한 깊은 복사

깊은 복사를 수행하기 위한 재귀 복사 함수의 기본적인 원리를 설명하세요.
- 기본 조건 확인 → 타입 확인 → 재귀적으로 복사 → 결과 반환

14. `JSON.stringify()`의 함수 처리

객체 내에 함수가 포함된 경우 `JSON.stringify()`로 직렬화하면 어떻게 처리할까요?
- 객체 내 함수는 무시되고 다른 데이터들은 직렬화 가능. 이후 함수의 정보는 잃게 되며 복원 불가능

15. 깊은 복사 후 객체 수정

다음 코드에서 깊은 복사가 완료된 후, `copy.b.c` 값을 수정해도 `original.b.c` 값이 변경되지 않도록 하려면 어떻게 해야 할까요?
- 재귀 복사 함수와 `JSON.parse()`와 `JSON.stringify()` 사용하는 방법이 있는데 재귀는 어려우니 pass…..ㅎ `const copy = Object.assign({}, original)을` `const copy = JSON.parse(JSON.stringify(original));` 로 변경\*\*

```jsx
const original = { a: 1, b: { c: 2 } };
const copy = Object.assign({}, original);

copy.b.c = 3;
```

16. `slice()`와 얕은 복사

배열에서 `slice()` 메서드로 얕은 복사를 수행할 때, 중첩 배열이 있는 경우 그 동작을 설명하세요.
- 중첩 배열이 있는 경우 - 복사된 배열의 해당 요소는 원본 배열의 요소와 동일한 참조를 가져 복사된 배열의 중첩 배열을 수정하면 원본 배열의 중첩 배열에도 영향을 미침

17. `JSON.parse()`의 반환 값

`JSON.parse('{"a":1, "b":true, "c":"hello"}')`는 어떤 값을 반환할까요?
- a는 number 1로, b는 boolean ture로, c는 string ‘hello’로 변환

18. 깊은 복사 후 참조 확인

깊은 복사된 배열과 원본 배열이 참조적으로 독립적인지 확인하려면 어떻게 해야 할까요?
- 참조 비교로 원본 배열과 깊은 복사된 배열을 ===와 같은 엄격한 동등연산자를 이용해 두 요소가 동일한 객체를 갖고 있는지 확인할 수 있음

19. `Symbol` 타입의 직렬화

`Symbol` 타입이 객체 속성으로 포함된 경우, `JSON.stringify()`는 어떻게 처리할까요?
- `JSON.stringify`는 symbol 속성을 무시함.

20. `JSON.stringify()`의 순환 참조 문제

객체가 순환 참조(자기 자신을 참조)하는 경우 `JSON.stringify()`는 어떻게 동작할까요?
- `JSON.stringify()`를 호출 하면 TypeError가 발생하여 "Converting circular structure to JSON”라는 메세지가 나
