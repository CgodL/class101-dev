---
title: 'TYPESCRIPT'
date: '2019-10-31T11:46:56'
thumbnail: '/images/thumbnails/t.png'
author: 'channing'
tags: ['Javascript', 'Typescript']
description: 'TYPESCRIPT'
---

![TypeScript](./t.png)

<center>

### TypeScript

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

* `yarn add tsc-watch --dev` 설치합니다.
* package.json 설정 합니다.

```js
{
  "name": "typechain",
  "version": "1.0.0",
  "description": "Learning Typescript by making a Blockchain with it",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "start": "tsc-watch --onSuccess \" node dist/index.js\" "
  },
  "devDependencies": {
    "tsc-watch": "^4.0.0"
  },
  "dependencies": {
    "@types/node": "^12.12.3",
    "typescript": "^3.6.4"
  }
}

```

---

- tsconfig.json 설정<br>
  tsconfig 에서 Typescript에게 어떻게 Javscript로 변환할지를 알려줍니다.

```js
{
  "compilerOptions": {
    "module": "commonjs",
    // 자바스크립트 컴파일 버전
    "target": "ES2015",
    "sourceMap": true,
    "outDir": "dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}

```

---

### Type

```ts
const message: string = 'hi';
console.log(message);
```

- tsc filename 으로 컴파일(트랜스파일링) 합니다.

Type은 기본적으로 `const message: 'type' = 'blahblah'` 같은 형태로 지정 해줍니다.

---

### BOOLEAN

<br>

```js
let isDone: boolean = false;
```

---

### NUMBER

<br>

```js
let decimal: numberr = 6;
let hex: number = 0xf00d;
```

---

### STRING

<br>

```js
let color: string = 'blue';
color = 'red';

let fullName: string = 'Channing';
let age: number = 29;
let sentence: string = `Hello, my name is ${fullName}. I'll be ${age +
  1} years old next month.`;
```

---

### NULL / UNDEFINED

<br>

```js
const nullValue: null = null;
const undefinedValue: undefined = undefined;
const numberValue: number = null; // Type 'null' is not assignable to type 'number'
```

---

### ANY

<br>

```js
let bool: any = true;
bool = 3;
bool = 'whatever';
bool = {};
```

---

### ARRAY

<br>

```js
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3]; // generic array type
let list: string[] = ['a', 'b', 'c'];
```

---

### TUPLE

<br>

```js
let x: [string, number];
x = ['hello', 10]; // OK
x = [10, 'hello']; // Error

console.log(x[0].substring(1)); // OK
console.log(x[1].substring(1)); // Error, 'number' does not have 'substring'
x[3] = 'world'; // Error, Property '3' does not exist on type '[string, number]`
```

---

### ENUM

<br>

```js
enum Color { Red, Green, Blue }
let c: Color = Color.Green
```

---

### VOID

<br>

```js
function warnUser(): void {
  console.log('This is my warning message');
}
```

---

### OBJECT

<br>

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

### INTERFACE

<br>

---

### CLASS

<br>

1. Class
2. 상속
3. 오버라이드
4. 접근 제어자
5. readonly
6. 매개변수 프로퍼티
7. static
8. 추상 클래스

---

- Class <br><br>
  타입스크립트에서의 클래스는 자바스크립트와 상이합니다.
  하나의 큰 blueprint에서 하위 인스턴스를 생성한다는 큰 개념은 같습니다. <br>
  – 상속을 확장하여 기존 클래스를 새로운 클래스를 생성 할 수 있습니다.

```js
class GreeterTS {
  // 클래스 프로퍼티를 사전에 선언합니다.
  greeting: string;
  // 생성자
  constructor(message: string) {
    // 프로퍼티에 값을 할당 합니다.
    this.greeting = message;
  }
  // greet 메서드
  greet() {
    return 'Hello, ' + this.greeting;
  }
}

// greeter 인스턴스 생성
let greeterTs = new GreeterTS('world');
greeterTs.greet();
```

---

- 상속<br><br>
  extends 키워드를 사용하여 상속 합니다.

```js
class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof! Woof!');
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
```

---

- 오버라이드 <Br><br>
  오버라이드는 상위 클래스(부모) 에서 정의한 메서드를 자식 클래스에서 재정의 하는 것 입니다.

```js
class Animal2 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Horse extends Animal2 {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters: number = 50) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

// move 메서드를 하위클래스인 Horse에서 오버라이드하여 호출했습니다.
const horse = new Horse('Spirit');
horse.move();
```

---

- 접근 제어자 <br><br>
  접근 제어자를 사용하는 이유는 보안 때문이라고 할 수 있습니다.
  만약에 웹사이트에서 아이디와 비밀번호 같은 중요한 정보를 public 변수에 저장을 한다면 아무데서나 직접적으로 접근하여 그 값을 변경할 수 있기 때문에 노출되기 쉽습니다.
  이런 중요한 변수들은 대부분 private를 붙여줍니다.
  또한 여러 사람들과 함께 프로그램을 만들다 보면 다른 사람이 내가 만든 중요한 변수나 메서드를 무분별하게 사용하여 값을 변경할 수 있는데, 이를 막기 위해 상황에 맞는 접근 제어자를 사용합니다.
  이렇게 중요한 변수와 메서드에 접근 제어자를 이용해 사용 범위를 지정해주면 완성도가 높은 프로그램을 완성할 수 있습니다.

---

- public <br><br>
  공개 범위(Public / Protected / Private) 를 통해 접근할 수 있는 부분 / 접근 불가능 한 부분을 구분합니다. <br>
  타입스크립트는 접근 제한자를 생략한 경우(생략이 가능합니다) 기본적으로 public이 default 입니다. <br>
  public은 클래스 내부 | 자식 클래스 내부 | 클래스 인스턴스 어디에서나 접근 가능 합니다.
  명시적으로 표현할 뿐 사용하지 않아도 됩니다.

```js
class Animal3 {
  public name: string;
  public constructor(name: string) {
    this.name = name;
  }
  public callName() {
    console.log(`Name is ${this.name}`)
  }
}
const dog = new Animal3("Maeum"
dog.callName()
```

---

- protected<br><br>
  protected는 클래스 내부 | 자식 클래스 내부에서 접근이 가능합니다.
  선언한 클래스를 포함해 상속받는 하위클래스 에서만 접근 가능합니다.

```js
class Animal4 {
  protected name: string
  constructor(name: string) {
    this.name = name
  }
  protected callName() {
    console.log(`Name is ${this.name}`)
  }
}

const sheep = new Animal4("baa")
sheep.name
sheep.callName(); // Property 'callName' is protected and only accessible within class 'Animal4' and its subclasses.ts(2445)
// public인 constructor()를 통해 인스턴스를 생성했지만 protected 가 붙은 callName은 외부에서 호출이 불가능 합니다.

class Animal4_1 {
  protected name: string
  protected constructor(name: string) {
    this.name = name
  }
  protected callName() {
    console.log(`Name is ${this.name}`)
  }
}

class Cat extends Animal4_1 {
  constructor(name: string) {
    super(name)
  }
  callName() {
    console.log(`Name is ${this.name}`)
  }
}

const cats = new Cat('Munchkin')
cats.callName();
```

---

- private<br><br>
  지역 변수 생성.
  private은 클래스 내부 에서만 접근 가능합니다.
  private 키워드가 붙은 프로퍼티는 언더바를 붙이는 것 이 통상적 이라고 합니다.
  private으로 정의한 프로퍼티를 외부에서 접근할 시 get / set 을 이용합니다.

```js
class Animal5 {
  private _name: string;
  protected constructor(name: string) {
    this._name = name
  }
  get name(): string {
    return this._name
  }

  set name(name: string) {
    this._name = name;
  }
}

const cat = new Animal5("Munchkin") // Constructor of class 'Animal5' is protected and only accessible within the class declaration.ts(2674)
cat.name();

class Cat extends Animal5 {
  constructor(name: string) {
    super(name);
  }
}
const cat = new Cat('Munchkin');
console.log(`Cat name is ${cat.name}`)
cat.name = 'Chicken'
console.log(`Cat name is ${cat.name}`)
```

---

- readonly <br><br>
  읽기전용 프로퍼티 는 readonly를 붙이면 됩니다.
  선언 또는 생성자에서 초기화 해야 합니다.
  readonly는 상수의 선언에 사용합니다.

```js
class Animal6 {
  readonly name: string;
  constructor(name: string) {
    this.name = name
  }
}

const Dog = new Animal6('Maeum')
Dog.name = 'Chicken' // Cannot assign to 'name' because it is a read-only property.ts(2540)
```

---

- 매개변수 프로퍼티<br><br>
  선언과 할당을 동시에 합니다.

```js
class Animal7 {
  constructor(readonly name: string) { }
  greet() {
    console.log(`Name is ${this.name}`)
  }
}
const dog = new Animal7('Maeum');
dog.greet();
```

---

- static<br><br>
  인스턴스화가 필요하지 않은 경우 사용합니다.
  바뀌지 않고 공통적으로 사용될 값 혹은 메서드 입니다.
  정적 메소드는 클래스의 인스턴스가 아닌 클래스 이름으로 호출 합니다.

```js
class Foo {
  prop: string;
  static instanceCounter = 0;
  constructor(prop: string) {
    this.prop = prop;
    Foo.instanceCounter++;
  }

  static staticMethod() {
    // 정적 메소드는 this를 사용할 수 없습니다. 내부에서 this는 인스턴스가 아닌 클래스 자신을 가리킵니다.
    return 'staticMethod';
  }

  prototypeMethod() {
    return this.prop;
  }
}

// 정적 메소드는 클래스 이름으로 호출합니다.
console.log(Foo.staticMethod());

// 정적 메소드는 인스턴스로 호출할 수 없습니다.
const foo = new Foo('Hello');
console.log(foo.staticMethod()); // Property 'staticMethod' is a static member of type 'Foo'ts(2576)

const foo1 = new Foo('any');
console.log(Foo.instanceCounter);
```

---

- 추상 클래스<br><br>
  추상을 왜 사용하나요 ?
  공통적으로 사용할부분을 추상화(미리 뽑아내어)하여 미리 정의해 둘 수 있습니다.
  <br>[참조](https://limkydev.tistory.com/188)
  A클래스, B클래스, C클래스가 있다고 치면 각 클래스 안에는 각자의 필드와 메서드가 있습니다. 추상클래스는 A클래스, B클래스, C클래스들 간에 비슷한 필드와 메서드를 공통적으로 추출해 만들어진 클래스 입니다.
  추상 클래스는 다른 클래스가 파생될 수 있는 기본 클래스 입니다. <br>추상 클래스는 직접적으로 인스턴스화 할 수 없습니다.인터페이스와 달리 추상 클래스는 클래스의 멤버에 대한 구현 세부정보를 포함할 수 있습니다.

```js
abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log("Blah Blah Blah")
  }
}

class Dog extends Animal {
  // 추상 클래스를 상속한 클래스는 추상 클래스의 추상 메소드를 반드시 구현해야 합니다.
  makeSound() {
    console.log('Bowwww~~')
  }
}

const dog = new Dog();
dog.makeSound();
dog.move();

abstract class Job {
  readonly nickname: string;
  constructor(nickname: string) {
    this.nickname = nickname
  }
  greet(): void {
    console.log(`Welcome ${this.nickname}`)
  }
  abstract attack(): void;
}

class Warrior extends Job {
  attack() {
    console.log('검을 사용해 공격')
  }
}

class Magician extends Job {
  attack() {
    console.log('마법을 사용해 공격!')
  }
}

// const job = new Job('what') // Cannot create an instance of an abstract class.ts(2511)
const warrior: Job = new Warrior("Maeum")
const magician: Job = new Magician("Maeum2")

warrior.greet();
magician.greet();
warrior.attack();
magician.attack();
```

---

<center>

Reference <br>
[NOMAD](https://academy.nomadcoders.co/courses/303219/lectures/4975930)<br>
[TypeScript](http://blog.haandol.com/2017/04/27/typescript2-experss-tutorial-part-one.html)<br>

</center>
