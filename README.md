### 1. **DOM 문제**

- DOM이란 무엇이며, JavaScript가 DOM을 조작할 수 있는 방법 중 하나를 설명하고, 해당 방법을 사용하는 예제 코드를 작성하세요.

1.....DOM이란? 파싱하여 브라우저가 이해할 수 있는 구조로 구성해주는게 DOM
<h1 id="title">안녕</h1>
// 특정 ID 선택 
const text = document.getElementById('title');
text.textContent = '추가할 텍스트';



### 2. **DOM 선택자 문제**

- `getElementById`, `querySelector`, `getElementsByClassName`의 차이점을 설명하고, 각각의 예시 코드를 작성하세요.

getElementById`, `querySelector`, `getElementsByClassName 차이점
 
getElementById() ID요소를 선택, ID를 값으로 반환 
querySelector() CSS선택자를 사용, 첫번째로 일치하는 요소 선택
getElementsByClassName() 모든 CLASS요소를 선택, HTML로 반환



### 3. **DOM 이벤트 문제**

- `addEventListener`를 사용해 버튼을 클릭할 때 콘솔에 "Button clicked!"를 출력하는 코드를 작성하세요.

<button id="button">click</button>

const button = document.querySelector('button');
button.addEventListener('click', function() {
  alert('Button clicked!');
})
button



### 4. **BOM 문제** *(Extra)*

- BOM이란 무엇인지 정의하고, `window` 객체의 몇 가지 주요 기능을 설명하세요. 또한, `window.location` 객체를 사용하여 페이지를 리다이렉트하는 예시 코드를 작성하세요.

Browser Object Model - javascript를 통해 브라우저 기능을 제어
window.alert() : 메세지를 표시하는 대화상자를 생성
window.setTimeout() : 시간 간격으로 특정함수 반복
window.screen() : 화면정보를 제공

setTimeout(function() {
window.location.href = "https://www.naver.com";
}, 3000); 
3초 후 네이버로 이동



### 5. **BOM history 문제** *(Extra)*

- BOM에서 `window.history` 객체는 어떤 기능을 제공하나요? `history.back()`과 `history.forward()`를 사용하는 예시를 작성하세요.
window.history : 세션 히스토리를 조작할수있는 기능

history.back() : 이전페이지 이동
document.getElementById('backButton').addEventListener('click', function() {
window.history.back(); // 이전 페이지로 이동
});

history.forward() : 다음페이지 이동
document.getElementById('forwardButton').addEventListener('click', function() {
window.history.forward(); // 다음 페이지로 이동
        });




### 6. **CSSOM 문제**

- CSSOM이 무엇인지 설명하고, JavaScript를 사용해 HTML 요소의 CSS 스타일을 동적으로 변경하는 코드를 작성하세요.
CSSOM : CSSOM을 통해 javascript는 문서의 CSS시트를 읽고 수정,추가가 가능
document.getElementById('changeStyleButton').addEventListener('click', function() {
const element = document.getElementById('myElement');
element.style.backgroundColor = 'red';
element.style.color = 'yellow';
});
단점 - 성능이 저하될 수 있음


### 7. **Reflow와 Repaint 문제**

- Reflow와 Repaint의 차이점을 설명하고, DOM 조작을 최소화하여 성능을 향상시킬 수 있는 방법을 예시와 함께 설명하세요.

Reflow는 DOM의 요소,크기나 위치가 바뀔 떄 발생
Repaint는 시각적 스타일이 변경될 때 발생, 레이아웃에는 영향이 없음

안좋은 방법
element.style.width = '100px';
element.style.height = '200px';
element.style.backgroundColor = 'blue';

올바른 방법
element.style.cssText = 'width: 100px; height: 200px; background-color: blue;';




### 8. **JavaScript 실행 맥락 문제** *(Extra)*

- JavaScript의 실행 맥락이란 무엇인가요? 전역 실행 맥락과 함수 실행 맥락의 차이를 설명하세요.

맥락 : 코드가 실행되는 환경
전역 실행 : javascript가 처음 실행될 떄 기본 실행
함수 실행 : 호출될 때마다 생성, 함수가 종료되면 소멸



### 9. **콜 스택 문제**

- JavaScript에서 콜 스택이 무엇이며, 함수 호출이 콜 스택에서 어떻게 처리되는지 설명하세요. 예시 코드를 포함하세요.

콜스택이란? : 함수 호출을 관리하는 데이터 구조
처리방법 : 호출될 때마다 실행 맥락이 쌓이고 실행 완료되면 스택에서 제거되는 방식



### 10. **이벤트 루프 문제** *(Extra)*

- 이벤트 루프의 개념을 설명하고, 비동기 작업이 어떻게 이벤트 루프에 의해 처리되는지 설명하세요. `setTimeout`을 사용한 비동기 예시 코드를 작성하세요.

이벤트 루프 개념 : 비동기 프로그래밍을 지원, javascript는 단일 동작이기 때문에 동시에 처리는 못함 그러나 이벤트 루프를 이용하면 효율적으로 관리가 가능!

처리 과정
비동기 작업 시작, 웹 API에 처리
완료 시 콜백 함수가 태스크 큐에 추가됨
이벤트 루프는 콜 스택 비어있는지 확인, 비어있으면 콜백 함수 가져와 콜스택에 추가하여 실행됨

console.log("Start");

setTimeout(() => {
console.log("Timeout 1");
}, 1000);

setTimeout(() => {
console.log("Timeout 2");
}, 0);

console.log("End");
