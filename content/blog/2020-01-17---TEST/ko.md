---
title: 'TEST'
date: '2020-01-16T12:51:03'
thumbnail: '/images/thumbnails/jest.png'
author: 'channing'
tags: ['jest', 'react', 'js', 'node', 'test', 'Javascript']
description: 'Jest는 Facebook에서 유지 보수하는 Javascript 테스팅 프레임워크 입니다. Babel, TypeScript, Node.js, React, Angular, Vue.js를 사용하는 프로젝트에서 작동합니다.
'
---

![jest](./jest.png)<br>

<center>
[공식 레퍼런스를 정리한 글 입니다.]<br>
Jest는 Facebook에서 유지 보수하는 Javascript 테스팅 프레임워크 입니다.<br>
Babel, TypeScript, Node.js, React, Angular, Vue.js를 사용하는 프로젝트에서 작동합니다.

</center>

---

### HOW TO USE

<br>

- 설치 `yarn add --dev jest` || `npm install --save-dev jest`
  <br>
  <br>

* sum.js 파일을 생성한뒤 아래처럼 코드를 입력합니다.

```js
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

- sum.test.js 파일을 생성한뒤 코드를 입력합니다.

```js
const sum = require('./sum');
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

- package.json에 코드를 추가합니다.

```js
{
    "scripts": {
        "test": "jest"
    }
}
```

- yarn test || npm run test를 통해 실행합니다.
  > PASS ./sum.test.js <br>
  > ✓ adds 1 + 2 to equal 3 (5ms)

---

### USING MATCHERS

<br>

Jest는 "matchers"를 사용해 테스트를 합니다.

```js
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
```

위 코드에서 expect는 expectation 객체를 반환합니다. .toBE( )가 matchers 입니다.

- toEqual<br>
  > 객체안의 value를 체크하고 싶으면 `toBe` 대신 `toEqual`을 사용할 수 있습니다.

```js
test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});
```

- expect().not.toBe()
  > not을 붙여서 반대의 케이스를 테스트 할 수 있습니다.

---

### TRUTHINESS

<br>

- toBeNull은 오직 null 값과 만 매치 됩니다.
- toBeUndefined는 오직 undefined 와 매치 됩니다.
- toBeDefined는 toBeUndefined의 반대 입니다.
- toBeTruthy는 if 조건문에서 true일 때 매치 됩니다.
- toBeFalsy는 if 조건문에서 false일 때 매치 됩니다.

```js
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});
```

---

### NUMBERS

<br>

- toBeGreaterThan
- toBeGreaterThanOrEqual
- toBeLessThan
- toBeLessThanOrEqual
- toBeCloseTo

```js
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.3);
});
```

---

### STRINGS

<br>

- toMatch
  > 문자열은 toMatch를 통해 체크할 수 있습니다.

```js
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});
```

---

### ARRAYS AND ITERABLES

<br>

- toContain

  > 배열 또는 이터러블 객체를 포함하는 아이템은 toContain을 통해 체크할 수 있습니다.<br> JS에서 includes 나 contain같은 느낌입니다.

```js
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer'
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
  expect(new Set(shoppingList)).toContain('beer');
});
```

---

### EXCEPTIONS

<br>

- throw
  > 예외처리를 위해 throw를 사용합니다.

```js
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(compileAndroidCode).toThrow('you are using the wrong JDK');
  expect(compileAndroidCode).toThrow(/JDK/);
});
```

---

<center>

### ASYNC CODE TEST

</center>

---

### CALLBACKS

<br>

만약 일부 데이터를 가져오고 완료되면 callback(data)를 호출하는 fetchData(callback) 기능이 있다고 가정해 봅시다. 당신은 이 반환된 데이터가 '피넛 버터' 문자열임을 테스트하고 싶습니다.

일반적으로, Jest 는 함수 실행이 끝나면 완료됩니다.

```js
// Don't dso this
test('the data is peanut butter', () => {
  function callback(data) {
    expect(data).toBe('peanut butter');
  }
  fetchData(callback);
});
```

위 코드는 의도한 대로 작동하지 않습니다. 위 코드의 문제는 테스트가 fetchData가 callback을 호출하기 전에 완료되는 즉시 완료된다는 것 입니다.
이를 해결하기 위한 다른 방법의 test가 존재합니다. 인자 없이 function안에 test를 넣는 대신에, `done` 이라는 단일 인자를 사용하는 겁니다. Jest는 테스트를 끝나기 전에 완료된 done callback을 부를때 까지 기다립니다.

```js
test('the data is peanut butter', done => {
  function callback(data) {
    expect(data).toBe('peanut butter');
    done();
  }

  fetchData(callback);
});
```

---

### Promise

<br>

---

<center>

Reference <br>
[공식 Reference](https://jestjs.io/docs/en/getting-started) <br>

</center>
