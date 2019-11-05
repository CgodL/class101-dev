---
title: 'ASYNC'
date: '2019-08-03T19:32:56'
thumbnail: '/images/thumbnails/axi.png'
author: 'channing'
tags: ['Axios', 'Fetch', 'Server', 'Node.js', 'Async']
description: 'Async - Ajax - Axios - Fetch'
---

![a](./axi.png)

### ASYNC

### AJAX

<hr />

### FETCH

**Fetch** 는 사전적 의미로 <b>꺼내오다 / 가지고 오다</b> 라는 뜻을 갖고 있습니다. 말 그대로 클라이언트에서 서버로부터 리소스를 가져 온다 라고 생각하면 될 것 같습니다. **Fetch API** 는 디폴트로 GET 메서드를 사용합니다.
Fetch API 는 네트워크 통신을 포함한 리소스 취득을 위한 인터페이스가 정의되어 있습니다.

#### 기본 개념 과 사용 방법

Fetch API를 이용하면 Request와 Response와 같은 HTTP의 파이프라인을 구성하는 요소를 조작하는 것 이 가능합니다. 또한 **fetch( )** 메소드를 이용하는 것으로 비동기 네트워크 통신을 알기 쉽게 기술할 수 있습니다.

이전에 **XMLHttpRequest**에서 제공하고 있던 기능을 Fetch는 **Service Workers** 같은 기술로 간단히 이용하는 것이 가능해졌습니다. 또한 **COR**나 **HTTP 확장**같은 HTTP에 관련한 개념을 모아 정의하고 있습니다.

fetch( )로부터 반환되는 Promise객체는 HTTP error 상태를 reject 하지 않습니다. 대신 ok 상태가 false인 resolve가 반환되며, 네트워크 장애나 요청이 완료되지 못한 상태에는 reject가 반환됩니다.

보통 fetch는 쿠키를 보내거나 받지 않습니다. 사이트에서 사용자 세션을 유지 관리해야하는 경우 인증되지 않는 요청이 발생합니다. 쿠키를 전송하기 위해서는 자격증명(credentials) 옵션을 반드시 설정해야 합니다. 기본 자격증명(credentials) 정책이 same-origin 으로 변경되었습니다. 파이어폭스는 61.0b13 이후 변경되었습니다.

```js
fetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json();
    // response는 JSON 타입이 아닙니다. 우리는 JSON 데이터를 받기 원하기 때문에 json() 메서드를 사용해서 변환 합니다.
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
```

네트워크 JSON 파일을 가져 와서 콘솔에 출력합니다. 사용 흐름은 인수 한개( 가져올 리소스의 경로 )를 가져오고 응답을 포함하는 약속 ( Response 개체 )을 반환하는 것 입니다.

fetch 를 통해 얻은 response 는 JSON 타입이 아닙니다. 이를 JSON 타입으로 받기위해 우리가 사용할 수 있는 메서드에는 몇 가지가 존재합니다.

- clone() - As the method implies this method creates a clone of the response.
- redirect() - This method creates a new response but with a different URL.
- arrayBuffer() - In here we return a promise that resolves with an ArrayBuffer.
- formData() - Also returns a promise but one that resolves with FormData object.
- blob() - This is one resolves with a Blob.
- text() - In this case it resolves with a string.
- json() - Lastly we have the method to that resolves the promise with JSON.

#### Response Metadata

```js
fetch('users.json').then(function(response) {
  console.log(response.headers.get('Content-Type'));
  console.log(response.headers.get('Date'));
  console.log(response.status);
  console.log(response.statusText);
  console.log(response.type);
  console.log(response.url);
});
```

### Fecth API 요청과 응답

클라이언트에서 fetch api를 통해서 특정 리소스에 대한 요청을 하면 서버에서는 이를 토대로 응답을 주게 되는데, 응답에 걸리는 시간이 수초 에서 수시간 까지 예측할 수 없는 범위내에 일어날 수 있기 때문에, 응답을 마냥 기다리는 것이 아닌 **비동기 처리**를 위해 then을 사용합니다.

![fetch](./fetch.png)

### Fetch API 와 Express

- backend

```js
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.post('/api/courses', (requset, response) => {
  response.json(requset.body);
});
```

- front

```js
fetch('/api/courses', {
  method: 'POST',
  body: JSON.stringify({ hi: 'hello' }),
  headers: new Headers({ 'Content-Type': 'application/json' })
});
```

<hr />

### AXIOS

---

<center>
Reference <br>

[MDN-FETCH](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API)<br>
[ASYNC](https://engineering.huiseoul.com/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%9E%91%EB%8F%99%ED%95%98%EB%8A%94%EA%B0%80-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%A3%A8%ED%94%84%EC%99%80-%EB%B9%84%EB%8F%99%EA%B8%B0-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%EC%9D%98-%EB%B6%80%EC%83%81-async-await%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%BD%94%EB%94%A9-%ED%8C%81-%EB%8B%A4%EC%84%AF-%EA%B0%80%EC%A7%80-df65ffb4e7e)<br>
[async/await](https://perfectacle.github.io/2017/01/25/ES6-ajax-with-fetch/)

</center>
