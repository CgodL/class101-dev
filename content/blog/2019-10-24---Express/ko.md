---
title: 'EXPRESS'
date: '2019-10-24T20:45:56'
thumbnail: '/images/thumbnails/ex.png'
author: 'channing'
tags: ['Node.js', 'Server', 'Node.js', 'Express', 'Javascript']
description: 'Express - Express 는 Node.js를 위한 웹 프레임워크 입니다. 웹 애플리케이션, API 개발을 위해 설계되었습니다.'
---

![express](./ex.png)

<center>
🥰[Do it! Node.js 프로그래밍을 정리한 내용 입니다]

**SETUP BASIC SERVER WITH EXPRESS**

</center>
<br>

**Express란?**

---

<b>[Express.js](https://ko.wikipedia.org/wiki/Express.js)</b>, 또는 간단히 익스프레스(Express)는 Node.js를 위한 <b>[웹 프레임워크](https://ko.wikipedia.org/wiki/%EC%9B%B9_%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC)</b>의 하나로, MIT 허가서로 라이선스되는 자유-오픈 소스 소프트웨어로 출시되었습니다. 웹 애플리케이션, API 개발을 위해 설계되었습니다. Node.js의 사실상의 표준 서버 프레임워크로 불리고 있습니다.

> 제 나름의 해석을 해보자면 ( 제 생각 입니다.. )<br><br>`Express(Framework)`는 `let app = express()`와 같이 `app`이라는 인스턴스를 만듭니다.<br> `app` 은 `express()` 객체를 상속받은것 이며 `app.set/get/use` 처럼 사용하는데 <br> `set/get/use` 는 `express`에 있는 메소드 이며 / 각각 필요에 맞춰서 사용합니다..?<br>
> 이후
> `express`는 작성된 코드를 컴파일 합니다? Node.js 기반이면 V8 엔진이 컴파일 할텐데..<br>
> port 를 리스닝 한 뒤에 해당 포트에서 요청받는 라우트 경로에 따라 원하는 결과를 라우트를 통해 보여줍니다.<br>
> 아무튼, 프레임워크 특성상 정해진 틀(요구, 갖춰진 기능) 안에서 코드를 작성합니다.

---

- **Express** 모듈을 사용하면 간단한 코드로 웹 서버의 기능을 구현할 수 있습니다.
- 익스프레스에서 제공하는 **미들웨어** 와 **라우터** 를 사용하면 기능을 편리하게 구성할 수 있습니다.
  <br>

```js
// Express 기본 모듈 불러오기
// express 모듈은 웹 서버를 위해 만들어진 것으로, http 모듈위에서 동작 합니다.
// express 모듈을 사용할 때는 항상 http 모듈도 함께 불러야 합니다.
const express = require('express'),
  http = require('http');

// 익스프레스 객체 생성
// app은 express의 인스턴스입니다.
// 생성한 app 이라는 인스턴스 가 각 요청을 처리한다 라고 생각하고 있습니다.
let app = express();

// 기본 포트를 app 객체에 속성으로 설정
app.set('port', process.env.PORT || 3000);

// Express 서버 시작
http.createServer(app).listen(app.get('port'), function() {
  console.log('익스프레스 서버를 시작했습니다 : ' + app.get('port'));
});
```

```
app 객체는 express() 메소드 호출로 만들어지는 익스프레스 서버 객체 입니다.
  주요 메소드들은 다음과 같습니다.
  - set(name, value) : 서버 설정을 위한 속성을 지정합니다. set( ) 메소드로 지정한 속성은 get ( ) 메소드로 꺼내어 확인할 수 있습니다.
  - get(name) : 서버 설정을 위해 지정한 속성을 꺼내옵니다.
  - use([path,]function[,function...]) : 미들웨어 함수를 사용합니다.
  - get([path,]function) : 특정 패스(Path)로 요청된 정보를 처리합니다.
```

### 미들웨어로 클라이언트에 응답보내기

- 현재 까지 구현한 Express 서버에는 아무런 응답이 없습니다. 아직 어떤 응답을 할 것인지 지정하지 않았기 때문입니다.
- **use( )** 메소드를 사용하여 미들웨어를 설정해보도록 하겠습니다.
- **미들웨어**나 **라우터**는 하나의 독립된 기능을 가진 함수라고 생각하면 됩니다.<br> 즉, 익스프레스에서는 웹 요청과 응답에 관한 정보를 사용해 필요한 처리를 할 수 있도록 독립된 함수로 분리합니다.<br>
  이러한 분리한 각각의 것들을 **미들웨어**라고 합니다. <br><br>

  > 예를 들어, 클라이언트에서 요청했을 때 로그로 남기는 기능을 함수로 만든후 **use( )** 메소드를 사용해 미들웨어로 등록해두면, 모든 클라이언트 요청이 이 미들웨어를 거치면서 로그를 남기게 됩니다. 각각의 미들웨어는 **next( )** 메소드를 호출하여 그 다음 미들웨어가 처리할 수 있도록 순서를 넘길 수 있습니다.

- **라우터**는 클라이언트의 요청 패스(Path)를 보고 이 요청 정보를 처리할 수 있는 곳으로 기능을 전달해주는 역할을 합니다. 이러한 역할을 **라우팅(Routing)** 이라고 합니다. 클라이언트의 요청 패스(Path)에 따라 각각을 담당하는 함수로 분리시키는 것 입니다.<br>
  <br>
  > 예를 들면, 클라이언트가 /users 패스로 요청 하면 이에 대한 응답 처리를 하는 함수를 별도로 분리 해서 만든 다음 **get( )** 메소드를 호출하여 라우터로 등록할 수 있습니다. 그러면 등록해둔 라우터 정보로 찾은 함수가 호출 되며, 이 함수 안에서 클라이언트로 응답을 보낼 수 있습니다.

```js
var express = require('express'),
  http = require('http');

var app = express();

app.use(function(req, res, next) {
  console.log('첫 번째 미들웨어에서 요청을 처리함');

  res.writeHead('200', { 'Content-Type': 'text/html;charset=utf8' });
  res.end('<h1>Express 서버에서 응답한 결과 입니다</h1>');
});

http.createServer(app).listen(3000, function() {
  console.log('Express 서버가 3000번 포트에서 시작됨');
});
```

### 익스프레스의 요청 객체와 응답 객체

```
  - send([body]) : 클라이언트에 응답 데이터를 보냅니다. 데이터는 HTML 문자열 / Buffer 객체 / JSON 객체, 배열 입니다.
  - status(code) : HTTP상태 코드를 반환합니다. 상태 코드는 send()나 end() 같은 전송 메소드를 추가로 호출해야 전송할 수 있습니다.
  - sendStatus(statusCode) : HTTP 상태 코드를 반환합니다. 상태 코드는 상태 메시지와 함께 전송됩니다.
  - redirect([status], path) : 웹 페이지 경로를 강제로 이동시킵니다.
  - render(view [,locals][,callback]) : 뷰 엔진을 사용해 문서를 만든 후 전송합니다.
```

### 요청 객체 헤더와 파라미터

```
 - query : 클라이언트에서 GET 방식으로 전송한 요청 파라미터를 확인합니다.
 - body : 클라이언트에서 POST 방식으로 전송한 요청 파라미터를 확인합니다. 단, body-parser와 같은 외장 모듈을 사용해야 합니다.
 - header(name) : 헤더를 확인합니다.
```

클라이언트에서는 요청 파라미터를 함께 보낼 수 있습니다. 이때 GET 방식으로 요청했다면 요청 파라미터들은 요청 객체의 query 객체 안에 들어갑니다.

**요청 파라미터(query string)**는 클라이언트에서 서버로 요청할때 **문자열로 데이터를 전달하는 것** 입니다.
이 **요청 파라미터는 서버 쪽에서 받아 사용**할 수 있어야 하므로 **req 객체의 query 객체 안에 넣어두게 됩니다**.

```js
var express = require('express'),
  http = require('http');

var app = express();

app.use(function(req, res, next) {
  console.log('첫 번째 미들웨어에서 요청을 처리함');

  var userAgent = req.header('User-Agent');
  var paramName = req.query.name;

  res.writeHead('200', { 'Content-Type': 'text/html;charset=utf8' });
  res.write('<h1>Express 서버에서 응답한 결과 입니다</h1>');
  res.write('<div><p>User-Agent : ' + userAgent + '</p></div>');
  res.write('<div><p>Param name : ' + paramName + '</p></div>');
  res.end();
});

app.use('/', function(req, res, next) {
  console.log('두 번째 미들웨어에서 요청을 처리함');

  res.writeHead('200', { 'Content-Type': 'text/html;charset=utf8' });
  res.end('<h1>Express 서버에서 ' + req.user + '가 응답한 결과입니다. </h1>');
});
http.createServer(app).listen(3000, function() {
  console.log('Express 서버가 3000번 포트에서 시작됨');
});
```

---

### 미들웨어 사용하기

익스프레스에서는 개발자가 다양한 기능을 사용할 수 있도록 미리 만들어 둔 여러가지 미들웨어를 제공합니다.

### static 미들웨어

static 미들웨어는 특정 폴더의 파일들을 특정 패스(Path)로 접근할 수 있도록 만들어 줍니다.<br>
예를 들어 [public] 폴더에 있는 모든 파일을 웹 서버의 루트 패스(Path)로 접근할 수 있도록 만들고 싶다면 다음 코드를 추가하면 됩니다.

```js
var static = require('serve-static');
app.use('/public', static(path.join(__dirname, 'public')));
```

### body-parser 미들웨어

POST 요청시 요청 파라미터를 확인할 수 있도록 만들어 둔 body-parser 미들웨어에 대해 알아보겠습니다.
POST 방식으로 요청할 때는 Body에 요청 파라미터가 들어 있게 되므로 요청 파라미터를 파싱하는 방법이 GET방식 과 다릅니다.
**body-parser** 미들웨어는 요청 파라미터들을 파싱하여 요청 객체의 body 속성 에 넣어 줍니다.

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>로그인 테스트</title>
  </head>
  <body>
    <h1>로그인</h1>
    <br />
    <form method="post">
      <table>
        <tr>
          <td><label>아이디</label></td>
          <td><input type="text" name="id" /></td>
        </tr>
        <tr>
          <td><label>비밀번호</label></td>
          <td><input type="password" name="password" /></td>
        </tr>
      </table>

      <input type="submit" value="전송" name="" />
    </form>
  </body>
</html>
```

```js
var express = require('express'),
  http = require('http'),
  path = require('path');

// Express의 미들웨어 불러오기
var bodyParser = require('body-parser'),
  static = require('serve-static');

// 익스프레스 객체 생성
var app = express();

// 기본 속성 설정
app.set('port', process.env.PORT || 3000);

// body-parser를 사용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended: false }));

// body-parser를 사용해 application/json 파싱
app.use(bodyParser.json());

app.use('/public', static(path.join(__dirname, 'public')));

// 미들웨어에서 파라미터 확인
app.use(function(req, res, next) {
  console.log('첫 번째 미들웨어에서 요청을 처리함');

  var paramId = req.body.id || req.query.id;
  var paramPassword = req.body.password || req.query.password;

  res.writeHead('200', { 'Content-Type': 'text/html;charset=utf8' });
  res.write('<h1>Express 서버에서 응답한 결과 입니다</h1>');
  res.write('<div><p>Param Id : ' + paramId + '</p></div>');
  res.write('<div><p>Paramm Password : ' + paramPassword + '</p></div>');
  res.end();
});

http.createServer(app).listen(3000, function() {
  console.log('Express 서버가 3000번 포트에서 시작됨');
});
```

### 요청 라우팅 하기

사용자 요청은 한 가지가 아닌 다양하고 다른 요청이 들어오게 됩니다. <br>이때 `use()`메소드로 설정한 미들웨어 함수는 요청을 구분하지 않고(서로 다른 요청) 항상 호출 되기 때문에 <b>요청 url이 무엇인지 일일이 확인해야 하는 번거로움</b>이 생기게 됩니다. 이 문제를 해결하는 것이 **라우터 미들웨어** 입니다.
**라우터 미들웨어(router middleware)** 는 익스프레스에 포함되어 있습니다. 라우터를 사용하면 사용자가 요청한 기능이 무엇인지 Path를 기준으로 구별하기 때문에 아주 중요합니다.

```js
//익스프레스 객체에서 라우터 객체를 참조합니다.
var router = express.Router();

//라우팅 함수 등록
router.route('/process/login').get(...);
router.route('/process/login').post(...);

//라우터 객체를 app객체에 등록
app.use('/', router);
```

클라이언트에서 요청한 요청 패스에 따라 실행될 함수는 **라우터** 객체를 사용해 등록합니다. **router** 객체에는 **route( )** 메소드가 있어 요청 패스(Path)를 지정할 수 있으며, get( ) 이나 post( ) 메소드를 호출하면 실행될 함수를 등록할 수 있습니다.

```
  주요 메소드들은 다음과 같습니다.
  - get(callback) : GET 방식으로 특정 패스 요청이 발생했을 때 사용할 콜백함수를 지정합니다.
  - post(callback) : POST 방식으로 특정 패스 요청이 발생했을 때 사용할 콜백함수를 지정합니다.
  - put(callabck) : PUT 방식으로 특정 패스 요청이 발생했을 때 사용할 콜백함수를 지정합니다.
  - delete(callback) : DELETE 방식으로 특정 패스 요청이 발생했을 때 사용할 콜백함수를 지정합니다.
  - all(callback) : 모든 요청 방식을 처리하며, 특정 패스 요청이 발생했을 때 사용할 콜백함수를 지정합니다.
```

---

<br>

**express.js** 는 body-parser가 built in 되어 있습니다. 즉 body-parser를 따로 Import 하지 않아도 됩니다.

```js
var express = require('express')
var app = express();
app.use(express.json())
app.post('/public', function(req, res) => {
  console.log(req.body)
})
```

### 라우터

클라이언트가 서버로 접속할때는 특정한 URL를 통해 접속합니다.

---

<center>

### ---

### ERROR | ISSUE

</center>

> <b> - </b> 
    
---

<center>
Reference <br>

[Express](https://expressjs.com/ko/guide/writing-middleware.html)<br>
[웹 프레임워크](https://ko.wikipedia.org/wiki/%EC%9B%B9_%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC)<br>
[Node.js 프로그래밍](https://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&barcode=9791187370581) <br>
[Express vs Koas vs Salis](https://www.cleveroad.com/blog/the-best-node-js-framework-for-your-project--express-js--koa-js-or-sails-js)

</center>
