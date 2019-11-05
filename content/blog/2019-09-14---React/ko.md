---
title: 'REACT'
date: '2019-09-14T17:20:56'
thumbnail: '/images/thumbnails/r.png'
author: 'channing'
tags: ['React', 'JavaScript']
description: 'React 기본'
---

![r](./r.png)

### React Component

### 리액트의 생성배경

웹 페이지 생성과 유저와의 수많은 상호작용 -> 상태관리의 필요성 증가.

예를들어, 배경이미지를 바꾸는 버튼을 클릭 하면

1. 바꿀 이미지 DOM을 찾는다.
2. 이미지 DOM의 소스를 바꿀 이미지로 바꾼다.
3. 바뀐 이미지를 화면에 다시 띄어준다.

interaction이 증가할 수록 관리가 힘들다는 문제가 있습니다.
이를 해결하기 위해서 React 같은 라이브러리가 등장 했습니다.
React는 Component(독립적 모듈, 나만의 HTML tag)로 구성 .

<hr/>

```js
// functional

var students = [
  { name: 'Saejung Kim', photo: ' ./saejung.jpg' },
  { name: 'Pika', photo: ' ./pika.jpg' }
];

var getStudent = function() {
  var randomIdx = Math.floor(Math.random() * students.length);
  return students[randomIdx];
};

var Profile = function(name, photo) {
  this.name = name;
  this.photo = photo;
};

Profile.prototype.render = function() {
  var element = document.createElement('div');
  var nameText = document.createTextNode(this.name);
  element.appendChild(nameText);

  var photo = document.createElement('img');
  photo.setAttribute('src', this.photo);
  element.appendChild(photo);

  return element;
};

var displayOnTheDOM = function(componentInstacne, targetNode) {
  var newEl = componentInstacne.render();
  targetNode.appendChild(newEl);
};

var s = getStudent();
var p = new Profile(s.name, s.photo);
document.getElementById('app').appendChild(p.render());
```

```js
import React from "react";

// React
var students = [
  { name: "Saejung Kim", photo: " ./saejung.jpg" },
  { name: "Pika", photo: " ./pika.jpg" }
];

var getStudent = function() {
  var randomIdx = Math.floor(Math.random() * students.length);
  return students[randomIdx];
};

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <img src={this.props.photo} />
      </div>
    );
  }
}

var s = getStudent();
ReactDOM.render(
  <Profile name={s.name} photo={s.photo} />,
  //   new Prorfile({ name: s.name, photo: s.photo }),
  document.getElementById("app")
);

// 최종

var students = [
  { name: "Saejung Kim", photo: " ./saejung.jpg" },
  { name: "Pika", photo: " ./pika.jpg" }
];

var getStudent = function() {
  var randomIdx = Math.floor(Math.random() * students.length);
  return students[randomIdx];
};

var Profile = props => {
  <div>
    <div>{props.name}</div>
    <5img src={props.photo} />
  </div>;
};

var s = getStudent();
ReactDOM.render(
  <Profile name={s.name} photo={s.photo} />,
  //   new Prorfile({ name: s.name, photo: s.photo }),
  document.getElementById("app")
);
```

<hr/>

“컴포넌트” 라는 개념에 집중이 되어있는 라이브러리입니다. 데이터를 넣으면 우리가 지정한 유저 인터페이스를 조립해서 보여줍니다. 페이스북 개발자들이 라이브러리의 성능과 개발자 경험을 개선하기 위해 많은 연구를 합니다. 리액트를 한번 해본 개발자들은 대부분 맘에 들어합니다. 생태계가 엄청 넓고, 사용하는 곳도 많습니다. HTTP 클라이언트, 라우터, 심화적 상태 관리 등의 기능들은 내장되어있지 않습니다. 따로 공식 라이브러리가 있는 것도 아니여서, 개발자가 원하는 스택을 맘대로 골라서 사용 할 수 있습니다 (혹은 직접 라이브러리를 만들어서 쓸 수도 있겠죠.)

> We built React to solve one problem: building large applications with data that changes over time.

> 번역: 우리는 지속해서 데이터가 변화하는 대규모 애플리케이션을 구축하기 위해 React를 만들었습니다

기존의 프레임워크들의 모델은, 대부분 어떻게 작동하냐면, 양방향 바인딩을 통하여 모델에 있는 값이 변하면, 뷰에서도 이를 변화시켜줍니다.
여기서 핵심적인 부분은 변화시켜준다는 부분입니다. 일단 첫 화면을 보여주고, 변화에 따라 필요한곳을 바꿔주는거죠.

리액트는 이를 해결하려고 했고, 그 아이디어로 그냥 Mutation 을 하지 말고 그 대신에, 데이터가 바뀌면 그냥 뷰를 날려버리고 새로 만들어버리면 어떨까? 라는 생각을 했습니다.

그렇게 하면 진짜 간단하겠죠? 그런데 브라우저가 무슨 게임 엔진도 아니고, DOM 기반으로 작동하는 이 페이지는 그때 그때 새로 뷰를 만들어버리라고 하면 성능적으로 엄청난 문제가 있을 것입니다.

> 그래서 사용하는게 바로, Virtual DOM 입니다.

Virtual DOM 은 가상의 DOM 입니다. 변화가 일어나면, 실제로 브라우저의 DOM 에 새로운걸 넣는것이 아니라, 자바스크립트로 이뤄진 가상 DOM 에 한번 렌더링을 하고, 기존의 DOM 과 비교를 한 다음에 정말 변화가 필요한 곳에만 업데이트를 해주는 것이죠.

이 Virtual DOM 을 사용함으로서, 데이터가 바뀌었을 때 더 이상 어떻게 업데이트 할 지를 고려하는게 아니라, 그냥 일단 바뀐 데이터로 일단 그려놓고 비교를 한다음에, 바뀐 부분만 찾아서 바꿔주는거죠.

React로 구현된 애플리케이션은 일반적으로 하나의 루트 DOM 노드가 있습니다. React를 기존 앱에 통합하려는 경우 원하는 만큼 많은 수의 독립된 루트 DOM 노드가 있을 수 있습니다.

React 엘리먼트를 루트 DOM 노드에 렌더링하려면 둘 다 ReactDOM.render( )로 전달하면 됩니다.

<hr/>

### 함수 컴포넌트와 클래스 컴포넌트( Components and Props )

컴포넌트를 통해 UI를 재사용 가능한 개별적인 여러 조각으로 나누고, 각 조각을 개별적으로 살펴볼 수 있습니다.

**개념적으로 컴포넌트는 JavScript 함수와 유사합니다. "props" 라고 하는 임의의 입력을 받은 후, 화면에 어떻게 표시되는지를 기술하는 React 엘리먼트를 반환합니다.**

#### 함수 컴포넌트

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

**이 함수는 데이터를 가진 하나의 'props'(props는 속성을 나타내는 데이터) 객체 인자를 받은 후 React 엘리멘트를 반환하므로 유효한 React 컴포넌트 입니다.**

#### ES6 class 컴포넌트

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

Props 와 State 는 연관이 있습니다. 종종 The state of one component 는 child component 의
props 가 됩니다. Props 는 parent의 메서드 rernder method 로 child로 넘어갑니다.
`<MyChild name={this.state.childsName} />`
부모 state value 인 childsName 은 child의 `this.props.name` 이 됩니다.
child의 관점에서 name prop은 불변값 입니다. 만약, 변경이 필요한 경우 부모는 internal state를 변경해야 합니다.
`this.setState({ childsName: 'New name' });`
그리고 React는 child에게 이를 전달합니다.

`<MyChild name={this.state.childsName} onNameChanged={this.handleName} />`

Use state to store the data you current page needs in your controller view.
Use props to pass data & event handlers down to your child components.

### Props

Props are used to pass data down from your view-controller
your top level component
use this to pass data to child components
Props shouldn't change(immutable), so state steps up.
Normally components don't have state so are referred to as stateless.

### State

State is mutable
should not be accessed from child components
pass it down with props instead
state is used so that a component can keep track of information in between any renders that it does. When you setState it updates the state object and then re-renders the component.

<hr/>

### 컴포넌트 렌더링

### State and Lifecycle

#### 엘리먼트 렌더링

렌더링된 엘리먼트 업데이트 하기.<br>
React 엘리먼트는 불변객체 입니다. 엘리먼트는 영화에서 하나의 프레임과 같이 특정 시점의 UI를 보여줍니다.

```js
function tick(){
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.<h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

위 함수는 setInterval( ) 콜백을 이용해 초마다 ReactDOM.render( )를 호출합니다.<br>
대부분의 React 앱은 ReactDOM.render( )를 한번만 호출 합니다.
(유상태 컴포넌트에 어떻게 캡슐화 되는가)

#### 변경된 부분만 업데이트<br>

React DOM은 해당 엘리먼트와 그 자식 엘리먼트를 이전의 엘리먼트와 비교하고 DOM을 원하는 상태로 만드는데 필요한 경우에만 DOM을 업데이트 합니다.<br>
매초 전체 UI를 다시 그리도록 엘리먼트를 만들었지만 React DOM은 내용이 변경된 텍스트 노드만 업데이트했습니다.

경험에 비추어 볼 때 특정 시점에 UI가 어떻게 보일지 고민하는 이런 접근법은 시간의 변화에 따라 UI가 어떻게 변화할지 고민하는 것보다 더 많은 수의 버그를 없앨 수 있습니다.

<hr/>

Clock 컴포넌트를 완전히 재사용하고 캡슐화하는 방법을 배울 것입니다. 이 컴포넌트는 스스로 타이머를 설정할 것이고 매초 스스로 업데이트할 것입니다.

시계가 생긴 것에 따라 캡슐화하는 것으로 시작할 수 있습니다.

```js
function Clock(props) {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(<Clock date={new Date()} />, document.getElementById('root'));
}

setInterval(tick, 1000);
```

Clock이 타이머를 설정하고 매초 UI를 업데이트하는 것이 Clock의 구현 세부사항이 되어야 합니다.
이상적으로 한 번만 코드를 작성하고 Clock이 스스로 업데이트하도록 만들려고 합니다.
이것을 구현하기 위해서 Clock 컴포넌트에 'state'를 추가해야 합니다.

#### 함수에서 클래스로 변환하기

1. React.Component를 확장하는 동일한 이름의 ES6 class를 생성합니다.<br>
2. render( )라고 불리는 빈 메서드를 추가합니다.<br>
3. 함수의 내용을 render( ) 메서드 안으로 옮깁니다.<br>
4. render( ) 내용 안에 있는 props를 this.props로 변경합니다.<br>
5. 남아있는 빈 함수 선언을 삭제합니다.<br>

```js
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2> It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function tick(){
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
    );
  }
}

setInterval(tick, 1000)
```

render 메서드는 업데이트가 발생할 때마다 호출되지만, 같은 DOM 노드로 <Clock />을 렌더링하는 경우 Clock 클래스의 단일 인스턴스만 사용됩니다.
이것은 로컬 state와 생명주기 메서드와 같은 부가적인 기능을 사용할 수 있게 해줍니다.

화면을 다시 그려주는 방법으로, setInterval()를 사용하여 ReactDOM.render()을 매초 호출하여 화면을 갱신하였습니다.
매초 화면을 갱신하는 기능은 Clock 컴포넌트 안에서 구현하는 것이 코드가 훨씬 간결해 보일 것입니다. 화면을 매초 갱신하는 기능을 Clock 컴포넌트 안에서 구현하기 위해 사용하는 것이 state입니다. 컴포넌트에서 유동적인 데이터를 다를 때는 state를 사용합니다.

Component 에 state 를 사용하기 위해서 functiond으로 구현된 Component를 class로 구현해야 합니다.

### State

- 컴포넌트에서 관리하는 상태 값으로 유동적인 데이터를 다룰 때, state 를 사용합니다.
- state는 변경이 가능하고 변경할 때는 setState 메서드를 사용해 상태를 변경합니다.
- setState는 비동기로 동작하며 동작완료에 대한 콜백을 설정할 수 있습니다.

```js
class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  updateCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <button onClick={this.updateCount}>
        Clicked {this.state.count} times
      </button>
    );
  }
}
```

```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return <h1>{this.props.date.toLocaleTimeString()}</h1>;
  }
}

function tick() {
  ReactDOM.render(<Clock date={new Date()} />, document.getElementById('root'));
}

setInterval(tick, 1000);
```

> props -> state로 변경하는 코드

<hr/>

### React.Component

#### 마운트

**아래의 메서드들은 컴포넌트의 인스턴스가 생성되어 DOM 상에 삽입될때에 순서대로 호출 됩니다.**

    1. constructor( )
    2. static getDerivedStateFromProps( )
    3. redner( )
    4. componentDidMount( )

#### 업데이트

**props 또는 state가 변경되면 갱신이 발생합니다. 아래 메서드들은 컴포넌트가 다시 렌더링될 때 순서대로 호출됩니다.**

    1. static getDerivedStateFromProps( )
    2. shouldComponentUpdate( )
    3. render( )
    4. getSnapshotBeforeUpdate( )
    5. componentDidUpdate( )

#### setState( )

- setState(updater[, callback])
- setState( )는 컴포넌트 state의 변경 사항

<hr />

<center>

Reference <br>
[react](https://ko.reactjs.org/docs/react-component.html)
<br>

</center>
