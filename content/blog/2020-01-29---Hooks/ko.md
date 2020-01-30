---
title: 'REACT HOOKS'
date: '2020-01-29T00:06:03'
thumbnail: '/images/thumbnails/hooks.jpeg'
author: 'channing'
tags: ['react', 'react hooks', 'hooks']
description: 'React Hooks 에 대하여'
---

![hook](./hooks.jpeg)

<br>

---

### Hook

[공식문서](https://ko.reactjs.org/docs/hooks-intro.html) 를 정리한 내용입니다.

"Hook은 React 버전 16.8에 새로 추가되었습니다. Hook를 이용하여 Class를 작성할 필요 없이 상태 값과 여러 React의 기능을 사용할 수 있습니다."

**언제 Hook을 사용하나요?**
함수 컴포넌트를 사용하던 중 state를 추가하고 싶을 때 클래스 컴포넌트로 바꾸지 않고, 함수 컴포넌트 안에서 Hook을 이용하여 state를 사용할 수 있습니다.

```js
import React, { useState } from 'react';

function Example() {
  // ' count'라는 새로운 상태 값을 정의합니다.
  const [count, setCount] = useState(0);

  // 여러 state 선언하기
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  return (
    <div>
      <p> You clicked {count} times </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

// 클래스 형태
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

---

### USESTATE

위 코드에서 `useState`가 Hook 입니다. 이를 통해서 function component 안에 state를 추가했습니다. useState는 `const [ count, setCount ] = useState(0)` 처럼 현재의 state 값과, 이 값을 업데이트하는 함수를 쌍으로 제공 합니다.
`useState(0)`에서 0는 설정한 초기 값 입니다. 이 초기 값은 맨 처음 렌더링 시에만 딱 한번 사용되며 객체일 필요가 없습니다.

---

### HOOK 사용 규칙

- 최상위 에서만 Hook을 호출해야 합니다. (반복문, 조건문, 중첩된 함수내에서 X)

* React function component 에서만 Hook을 호출해야 합니다.

---

<center>

Reference <br>
[react](https://ko.reactjs.org/docs/react-component.html)<br>

</center>
