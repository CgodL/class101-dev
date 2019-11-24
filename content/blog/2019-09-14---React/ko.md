---
title: 'REACT'
date: '2019-09-14T17:20:56'
thumbnail: '/images/thumbnails/r.png'
author: 'channing'
tags: ['React', 'JavaScript']
description: 'React 기본'
---

![r](./r.png)
<br>

<center>

[2019.11.23 토요일 ~ 수정 중]

</center>

## REACT

리액트는 페이스북에서 개발하고 관리하는 UI 라이브러리 입니다. 라이브러리 이기 때문에 전반적인 시스템을 개발자가 직접 구축해야 합니다.

초심자에게는 진입장벽이 높기 때문에 CRA 가 존재합니다.
CRA (create-react-app)는 여러개의 패키지를 조합해서 자동으로 리액트 개발환경을 구축 해줍니다.

### 리액트 를 사용하는 이유

- UI를 자동으로 업데이트 해줍니다.
  > DOM을 직접 건드리지 않습니다. 리액트는 Virtual DOM을 통해서 UI를 업데이트 합니다.

### 리액트 개발 환경 구축하기

하나의 웹 애플리케이션을 만들기 위해서는 테스트 시스템, 빌드 시스템, 라우팅 시스템 둥 UI 외에도 신경 써야할 부분이 많습니다. CRA를 사용하지 않고 직접 구축하기 위해서는 바벨과 웹팩에 대한 이해가 필요합니다.

---

### CRA

create-react-app 으로 개발환경을 구축 합니다.
초기 생성된 파일이 여러개 존재하는데, `index.html` | `index.js` | `package.json` 파일을 제외한 나머지 파일은 삭제해도 됩니다. index 파일들은 빌드시 예약된 파일이름으로 지워서는 안됩니다. <br>
`index.js`로 연결된 모든 JS파일과 CSS파일은 `src폴더` 밑에 있어야 합니다.
src폴더 밖의 파일은 `import` 되지 않습니다.<br>
css 파일 이나 이미지 / 폰트 파일은 모두 src 폴더 밑에서 import를 사용해서 포함시키는게 좋습니다.

> 브라우저 캐싱 효과

---

### 리액트 작동원리

CRA로 리액트 프로젝트를 생성하면 초기에 `src 폴더` 에 파일이 몇 개 존재하고, `public 폴더`에도 파일이 존재합니다. `index.js / index.html` 파일을 제외하고는 삭제해도 상관 없습니다. 대략적인 작동원리는 위에서 짧게 말한 Virtual DOM이 변화를 감지해서 그 부분 부분 만을 업데이트 하는 건데요, 이를 파일로 보게되면 아래와 같습니다.

src의 `index.js`파일에는 아래와 같은 코드가 작성되어있습니다.<br>
`ReactDOM.render(<App />, document.getElementById("root"));`
이는 ReactDOM이 html의 'root' Id에 <App> 파일을 렌더링 한다는 뜻 입니다.

그러면 다음으로 public폴더의 `index.html`을 보겠습니다.

```js

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>

```

주석을 다 지우고 나면 위와 같은 html 구조가 보일겁니다. `body 태그`를 보게 되면, `<div id="root">` 가 보입니다.<br> 바로 **App** 파일이 렌더링 되는 부분이 이곳 입니다.
리액트는 html 해당 태그에 자동으로 렌더링을 해줍니다.

#### COMPONENT

리액트는 컴포넌트로 이루어져 있습니다. CRA로 생성한뒤, 불필요한 부분을 제거한 `App.js` 내부를 살펴보면 코드가 아래와 같습니다.<br> `App()`이 컴포넌트가 됩니다.

```js
import React from 'react';

function App() {
  return <div className="App">Hello</div>;
}

export default App;
```

리액트는 컴포넌트를 생성해서 프론트단을 구현하는데요, 우리가 생성한 컴포넌트는 아래와 같이 `index.html`에 들어가게 됩니다.

![r](./re.png)

Virtual DOM으로 작동하기 때문에 실제 HTML 파일은 변화가 없습니다.
사진에서 볼 수 있듯이 `<div id="root">` 내부에 우리가 App() 컴포넌트에 return내부에 정의한 태그가 그대로 들어가는걸 볼 수 있습니다!

그런데 React 를 보면 문법이 조금 특이합니다. `<App />` 이라던가 `{ }` 내부에 변수 등을 넘긴다던가 합니다. 이런 문법을 **JSX**라고 하는데요.<br> Javascript와 HTML을 융합해주는 겁니다.

---

### 빌드

---

### 테스트

---

### eject

---

### Code Splitting

코드 분할은 사용자에게 필요한 양의 코드만 내려 줄 수 있다. 코드를 분할하지 않으면 전체 코드를 한번에 내려줘 첫 페이지가 뜨는 시간이 오래 걸린다.
동적 임포트를 통해서 분할한다.

```js
import React, { Component } from 'react';

class TodoList extends Component {
  state = {
    todos: []
  };

  onClick = () => {
    // onClick으로 이벤트를 호출하면 비동기로 Todo 모듈을 가져옵니다.
    import('./Todo.js').then(({ Todo }) => {
      // 동적 임포트는 Promise를 반환 합니다.
      const { todos } = this.state;
      const position = todos.length + 1;
      const newTodo = <Todo key={position} title={`할 일 ${position}`} />;
      this.setState({ todos: [...todos, newTodo] });
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <button onClick={this.onClick}>할 일 추가</button>
        {todos}
      </div>
    );
  }
}

export default TodoList;
```

---

### 환경 변수 사용하기

---

### CSS

---

### 단일 페이지 어플리케이션 만들기(SPA)

단일페이지 애플리케이션은 최초 요청시 서버에서 첫 페이지를 처리하고 이후의 라우팅은 클라이언트에서 처리하는 웹 애플리케이션 입니다.
전통적인 방식의 웹 페이지는 페이지를 전환할때 마다 렌더링 결과를 서버에서 받기 때문에 화면이 깜빡 거렸었습니다. SPA는 페이지 전환 렌더링을 클라이언트에서 처리하기 때문에 자연스럽게 동작합니다.

- 브라우저 히스토리 API

  > - JS에서 브라우저로 페이지 전환요청을 보낼 수 있습니다. <br>
  > - 브라우저의 뒤로 가기 와 같은 사용자의 페이지 전환 요청을 JS에서 처리할 수 있어야 합니다.<br> ( 두 과정 모두 브라우저는 서버로 요청을 보내지 않습니다. )<br><br> 이러한 조건을 만족하는 브라우저 API는 `pushState`, `replaceState` 함수와 `popstate` 이벤트 입니다.

- react-router-dom
  > 브라우저 히스토리 API를 활용하여 라우팅 처리를 구현할 수 있지만 신경써야할 부분이 많습니다. `react-router-dom`을 활용합니다. <br>(내부적으로 브라우저 히스토리 API를 사용합니다.)

---

<hr />

<center>

Reference <br>
[react](https://ko.reactjs.org/docs/react-component.html)<br>
[실전 리액트 프로그래밍](http://book.interpark.com/product/BookDisplay.do?_method=detail&sc.prdNo=308722586&gclid=Cj0KCQiAq97uBRCwARIsADTziyYXgPG4TOcakdMytOcXHMRPm0vFapky32IvMRayJaKomTp8-GYsERYaAjpnEALw_wcB)<br>
[노마드](https://academy.nomadcoders.co/courses/216871/lectures/10881288)

</center>
