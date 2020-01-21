---
title: 'TYPESCRIPT'
date: '2019-10-31T11:46:56'
thumbnail: '/images/thumbnails/t.png'
author: 'channing'
tags: ['Javascript', 'Typescript']
description: 'TYPESCRIPT - TypeScript는 컴파일 속도가 일반 JavaScript 보다 월등히 빠릅니다.
컴파일을 하는 동안 타입을 체크하는데 걸리는 시간이 현저히 짧기 때문입니다.'
---

![TypeScript](./t.png)

<center>

### TypeScript

TypeScript는 컴파일 속도가 일반 JavaScript 보다 월등히 빠릅니다.<br>
컴파일을 하는 동안 타입을 체크하는데 걸리는 시간이 현저히 짧기 때문입니다.

</center>

---

### 설치 및 초기 세팅

- 먼저 Typescript를 전역에 설치합니다.
  <br>

```javascript
yarn global add typscript
npm install --save typescript @types/node || npm install -g typescript
```

- `yarn init -y` 로 package.json을 설치합니다.

- `tsc --init` 명령어를 통해 tsconfig.json을 세팅합니다.파일을 생성하여, Typescript 에게 Javascript로 어떻게 컴파일 할지 세팅 합니다.

* .ts 확장자로 파일을 생성합니다.

* `yarn build`를 사용하여 컴파일 하기 위해, `yarn add typescript`를 설치 해준뒤 package.json에 "scripts": { "build" : "tsc" } 를 추가해줍니다.

---

### Type

```ts
const message: string = 'hi';
console.log(message);
```

- tsc filename 으로 컴파일(트랜스파일링) 합니다.

Type은 기본적으로 `const message: 'type' = 'blahblah'` 같은 형태로 지정 해줍니다.

#### Boolean

```js
let isDone: boolean = false;
```

#### Number

```js
let decimal: numberr = 6;
let hex: number = 0xf00d;
```

#### String

```js
let color: string = 'blue';
color = 'red';

let fullName: string = 'Channing';
let age: number = 29;
let sentence: string = `Hello, my name is ${fullName}. I'll be ${age +
  1} years old next month.`;
```

#### null / undefined

```js
const nullValue: null = null;
const undefinedValue: undefined = undefined;
const numberValue: number = null; // Type 'null' is not assignable to type 'number'
```

#### any

```js
let bool: any = true;
bool = 3;
bool = 'whatever';
bool = {};
```

#### Array

```js
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3]; // generic array type
let list: string[] = ['a', 'b', 'c'];
```

#### Tuple

```js
let x: [string, number];
x = ['hello', 10]; // OK
x = [10, 'hello']; // Error

console.log(x[0].substring(1)); // OK
console.log(x[1].substring(1)); // Error, 'number' does not have 'substring'
x[3] = 'world'; // Error, Property '3' does not exist on type '[string, number]`
```

#### Enum

```js
enum Color { Red, Green, Blue }
let c: Color = Color.Green
```

#### Void

```js
function warnUser(): void {
  console.log('This is my warning message');
}
```

#### Object

```js
const user: { name: string, height: number } = {
  name: 'Channing',
  height: 176
};

const userWithUnkknownHeight: { name: string, height?: number } = {
  name: 'Channing'
};

const user: { readonly name: string; height: number } = { name: 'Channing', height: 176}
user.name = 'Henry' // Cannot assign to 'name' because it is a constant or a read-only property.
```

---

<center>

Reference <br>
[NOMAD](https://academy.nomadcoders.co/courses/303219/lectures/4975930)<br>
[TypeScript](http://blog.haandol.com/2017/04/27/typescript2-experss-tutorial-part-one.html)<br>
[Symbol](https://www.freecodecamp.org/news/some-of-javascripts-most-useful-features-can-be-tricky-let-me-explain-them-4003d7bbed32/)<br>
[Symbol2](https://medium.com/sjk5766/es-6-symbol-%EC%9D%B4%EB%9E%80-48c2ad5b054c)<br>
[Symbol3](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

</center>
