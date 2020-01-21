---
title: 'NODE.JS'
date: '2019-09-13T11:20:56'
thumbnail: '/images/thumbnails/n.png'
author: 'channing'
tags: ['Node.js', 'Server', 'Node.js', 'JavaScript']
description: 'NODE.JS를 통한 서버 구축 - 기본'
---

![no](./n.png)

<!-- <img width="974" alt="스크린샷 2019-10-06 오후 3 11 43" src="https://user-images.githubusercontent.com/48753593/66265110-ad591b00-e84b-11e9-9c56-463992e883be.png">
 -->

### URL Module

주소 정보가 담긴 주소 문자열을 url 모듈을 사용하여 URL 객체로 만들거나 또는 URL 객체에서 일반 문자열로 변환하는 일을 합니다.<br>
url 모듈을 통해 주소 문자열을 객체로 만들면 문자열 안에 있던 정보를 나누어 객체의 속성으로 보관 합니다.<br>
따라서 요청 프로토콜이 http 인지 https 인지를 구별하거나 요청 파라미터를 확인하고 싶다면 url 객체가 갖고 있는 속성 값을 확인하면 됩니다.<br>

대표적인 url 모듈의 주요 메서드 입니다.

- parse( ) - 주소 문자열을 파싱하여 URL 객체를 만들어 줍니다.
- format( ) - URL 객체를 주소 문자열로 반환 합니다.

```js
var url = require('url');

// 주소 문자열을 URL 객체로 만들기
var curURL = url.parse('https://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm-mtp_hty');

// URL 객체를 주소 문자열로 만들기
var curStr = url.format(curURL);

console.log('주소 문자열 : %s', curStr);
console.dir(curUrl);

Url {
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'm.search.naver.com',
    port: null,
    hostname: 'm.search.naver.com',
    hash: null,
    search: '?query=steve+jobs&where=m&sm=mtp_hty',
    query: 'query=steve+jobs&where=m &sm=mtp_hty',
    pathname: '/search.naver',
    path: '/search.naver?query=steve+jobs&where=m&sm=mtp_hty',
    href: 'https://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm-mtp_hty'
    }


// querystring module
var querystring = require('querystring');
var param = querystring.parse(curURL.query);

console.log('요청 파라미터 중 query의 값 : %s', param.query);
console.log('원본 요청 파라미터 : %s', querystring.stringify(param));

parse() - 요청 파라미터 문자열을 파싱하여 요청 파라미터 객체로 만들어 줍니다.
stringify() - 요청 파라미터 객체를 문자열로 변환합니다.

'요청 파라미터 중 query의 값' : steve jobs
'원본 요청 파라미터' : query=steve+jobs&where=m &sm=mtp_hty

```

---

### 이벤트

노드는 이벤트 기반(Event driven)으로 하는 논블로킹 입출력 방식(Non-blocking I/O model)이 특징입니다.<br>
이벤트의 범주 에는 어떤 함수를 실행한 결과물도 이벤트로 전달 합니다.<br>
즉 '지금 이쪽의 상태는 이렇다' 는 정보를 다른쪽으로 보내는 것 입니다.<br>
노드에는 이런 이벤트를 보내고 받을 수 있도록 EventEmitter 라는 것이 만들어져 있습니다.

<hr />
<center>

### 간단한 웹 서버 만들기

</center>

- 노드의 수많은 모듈 중에서도 웹 서버는 다른 서버 기능을 추가할 수 있는 서버입니다. 따라서 웹 서버를 먼저 구축 하도록 하겠습니다.
  <br>
  노드에는 웹 서버 를 만들때 필요한 http 모듈이 들어있는데 이를 통해 HTTP 프로토콜로 요청하는 내용과 응답을 처리할 수 있습니다. 나중에 좀 더 쉽고 빠르게 웹 서버를
  구성하기 위해 **익스프레스(Express)**도 사용해보도록 하겠습니다.

<br>

- http 모듈을 활용하여 간단한 서버를 만들어 보겠습니다.

```js
var http = require('http');

// 웹 서버 객체를 만듭니다.
var server = http.createServer();

// 웹 서버를 시작하여 3000번 포트에서 대기합니다.
var port = 3000;
server.listen(port, function() {
  console.log('localhost:3000 웹 서버가 시작되었습니다.');
});
```

<br>

---

### 이벤트 처리

**클라이언트(웹 브라우저)가 웹 서버에 요청할때 발생하는 이벤트 처리**

- 클라이언트가 웹 서버에 접속한 후 데이터를 요청하면 그때 마다 이벤트가 발생하므로 각 상황에 맞추어 콜백 함수를 등록하면 됩니다.

- 주요 이벤트<br>
  -- **connection** : 클라이언트가 접속하여 연결이 만들어질 때 발생하는 이벤트 입니다.<br>
  -- **request** : 클라이언트가 요청할 때 발생하는 이벤트 입니다.<br>
  -- **close** : 서버를 종료할 때 발생하는 이벤트 입니다.

  ```js
  // 클라이언트(웹 브라우저) 연결 이벤트를 처리합니다.
  server.on('connection', function(socket) {
    var addr = socket.address();
    console.log(addr.address + ', ' + addr.port + '클라이언트가 접속했습니다.');
  });

  // 클라이언트 요청 이벤트 처리
  server.on('request', function(req, res) {
    console.log('클라이언트 요청이 들어왔습니다.');
    console.dir(req);
  });

  //서버 종료 이벤트 처리
  server.on('close', function() {
    console.log('서버가 종료됩니다.');
  });
  ```

  - 각 이벤트를 on( ) 메소드를 통해 이벤트를 처리합니다.
  - connection 이벤트가 발생하면 Socket 객체가 파라미터로 전달되는데, 이 객체는 클라이언트 연결정보를 담고 있으므로, address( ) 메소드를 호출하여
    클라이언트의 IP와 포트 정보를 확인할 수 있습니다.

  - 클라이언트가 특정 패스로 요청을 하면 requset 이벤트가 발생합니다. <br>
    서버를 실행하게 되면 콘솔에 requset 정보 와 connection 정보를 확인할 수 있습니다.

  - 현재 코드는 서버에서 아무런 응답을 주지 않기 때문에 클라이언트 에서는 결과 페이지를 볼 수 없습니다.<br>
    따라서 서버에서 응답을 보내도록 requset 이벤트를 처리하는 콜백함수를 작성해야 합니다.

  ```js
  // 클라이언트 요청 이벤트 처리
  server.on('request', function(req, res) {
    console.log('클라이언트 요청이 들어왔습니다.');
    // console.dir(req);

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<!DOCTYPE html>');
    res.write('<html>');
    res.write(' <head>');
    res.write('  <title>응답 페이지</title>');
    res.write(' </head>');
    res.write(' <body>');
    res.write('  <h1>Node.js로 부터의 응답 페이지');
    res.write(' </body>');
    res.write('</html>');
    res.end();
  });
  ```

  - res 객체의 **wirteHead( )**, **write( )**, **end( )** 메소드를 사용하면 클라이언트로 응답을 보낼 수 있습니다.<br>
    **end( )** 메소드는 응답을 모두 보냈다는 것을 의미하며, 일반적으로 **end( )** 메소드가 호출될 때 클라이언트로 응답을 전송합니다.

  - res 객체를 사용하여 보내는 주요 응답 메소드는 다음과 같습니다.<br>
    -- **writeHead(statusCode[,statusMessage][,headers]** : 클라이언트가 접속하여 연결이 만들어질 때 발생하는 이벤트 입니다.<br>
    -- **write(chunk[,encoding][,callback])** : 응답 body 데이터를 만듭니다. 여러 번 호출될 수 있습니다.<br>
    -- **end([data[,encoding][,callback])** : 클라이언트로 응답을 전송합니다. 파라미터에 데이터가 들어있다면 이 데이터를 포함시켜 응답을 전송합니다.

<br>

---

### 파일 읽어 응답하기

**클라이언트에서 요청이 있을 때 파일 읽어 응답하기**

```js
const http = require('http');
const fs = require('fs');

const fs_server = http.createServer();

const port = 3001;
fs_server.listen(port, function() {
  console.log('connect to port:3001');
});

fs_server.on('request', function(req, res) {
  console.log('클라이언트에서 요청이 들어왔습니다.');

  const filename = 'photo.jpg';
  fs.readFile(filename, function(err, data) {
    res.writeHead(200, { 'Content-Type': 'image/jpg' }); // 데이터 타입이 어떤 것 인지를 표시합니다. 여기서는 이미지 임을 표시합니다.
    res.write(data);
    res.end();
  });
});
```

- fs 모듈을 이용 합니다. fs 모듈의 **readfile( )** 메소드로 photo.jpg를 읽어 옵니다.
- **readfile( )**은 비동기로 처리 됩니다. 따라서 파일을 모두 읽으면 콜백함수 안의 data객체로 파일 내용이 전달 됩니다.
- 콜백 함수 안에서는 **res(응답 객체)**의 **write( )**메소드를 사용해서 파일 내용을 클라이언트로 전송 합니다.

---

### 파일을 스트림으로 읽어 응답 보내기

- 위 과정을 보다 간단하게 하는 방법이 있습니다. 바로 **pipe( )**입니다. <br>
  파일은 스트림 객체로 읽어 들일 수 있고, 웹 서버의 응답 객체도 스트림으로 데이터를 전송할 수 있기 때문에 두 개의 스트림은 **파이프**로 서로 연결할 수 있습니다.
- 파일을 스트림 객체로 읽어 들인 후 **pipe( )** 메소드로 응답 객체와 연결하면 파일에 응답을 보낼 수 있습니다.

```js
fs_server.on('request', function(req, res) {
  console.log('port 3001에서 클라이언트 요청이 들어왔습니다.');

  const filename = 'photo.jpg';
  const infile = fs.createReadStream(filename, { flags: 'r' });

  // 파이프로 연결하여 알아서 처리하도록 설정
  infile.pipe(res);
});
```

- 코드는 짧아졌지만, 헤더를 설정할 수 없는 등의 제약이 생기므로 필요할 때에만 사용하길 권합니다.

---

### 파일과 버퍼

**파일을 버퍼에 담아 두고 일부분만 읽어 응답 보내기**

- 파일을 버퍼에 담아 일정 크기만큼 읽어 응답을 보내는 방법 입니다.

```js
//TODO Buffer 활용
fs_server.on('request', function(req, res) {
  console.log('port 3001에서 클라이언트 요청이 들어왔습니다.');

  const filename = 'photo.jpg';
  const infile = fs.createReadStream(filename, { flags: 'r' });
  let filelength = 0;
  let curlength = 0;

  fs.stat(filename, function(err, stats) {
    filelength = stats.size;
  });

  // 헤더
  res.writeHead(200, { 'Content-Type': 'image/jpg' });

  // 파일 내용을 스트림에서 읽어 본문 쓰기
  infile.on('readable', function() {
    let chunk;
    while (null !== (chunk = infile.read())) {
      console.log('읽어 들인 데이터 크기: ' + chunk.length);
      curlength += chunk.length;
      res.write(chunk, 'utf8', function(err) {
        console.log('파일 부분 쓰기 완료: ' + curlength + ' ,' + filelength);
        if (curlength >= filelength) {
          //응답 전송
          res.end();
        }
      });
    }
  });
});
```

---

### 서버 간의 데이터 응답

**서버에서 다른 웹 사이트의 데이터를 가져와서 응답하기**

- 서버에서 다시 다른 웹 사이트를 접속하여 데이터를 가져온 후 응답하는 과정에 대한 설명입니다.
- 이 경우 서버에서 HTTP 클라이언트 기능도 사용하게 됩니다. http 모듈은 서버 기능이외에 클라이언트 기능도 제공합니다.
- HTTP 클라이언트가 GET 과 POST 방식으로 다른 웹 서버에 데이터를 요청할 수 있습니다.

```js
const http = require('http');

var options = {
  host: 'www.google.com',
  port: 80,
  path: '/'
};

// GET 방식으로 다른 사이트에 데이터를 요청하는 코드 입니다.
let req = http.get(options, function(res) {
  // 응답 처리
  let resData = '';
  res.on('data', function(chunk) {
    resData += chunk;
  });

  res.on('end', function() {
    console.log(resData);
  });
});

req.on('error', function(err) {
  console.log('오류 발생: ' + err.message);
});
```

- **get( )** 메소드를 사용하면 다른 사이트에 요청을 보내고 응답을 받아 처리할 수 있습니다.
- **get( )** 메소드의 첫 번째 파라미터는 다른 사이트의 정보를 담고 있는 객체 입니다. options 객체에 다른 사이트 정보를 담아 파라미터로 넘겨줍니다.
- 응답 데이터를 받고 있는 상태에서는 data 이벤트가 발생하므로, 이때 받은 데이터를 모두 redData 변수에 담아줍니다.
- 다른 서버로부터 응답을 받을 때는 data 이벤트가 발생합니다. 수신 데이터 용량에 따라 여러 번 발생할 수도 있습니다.
  <br>
  <br>
  <br>
- POST 방식으로 요청할 경우 **request( )** 메소드를 이용합니다.
- 이 때는 요청을 보내려면 요청 헤더와 바디를 모두 직접 설정해줘야 합니다.

```js
const http = require('http');

var opts = {
  host: 'www.google.com',
  port: 80,
  path: '/',
  headers: {}
};

var resData = '';
var req = http.request(opts, function(res) {
  // 응답 처리
  res.on('data', function(chunk) {
    resData += chunk;
  });

  res.on('end', function() {
    console.log(resData);
  });
});

opts.headers['Content-Type'] = 'application/x-www-form-urlencoded';
req.data = 'q=actor';
opts.headers['Content-Length'] = req.data.length;

req.on('error', function(err) {
  console.log('오류 발생 : ' + err.message);
});

//요청 전송
req.write(req.data);
req.end();
```

---

<center>

**다음편**<br>
[Express](https://channing.netlify.com/ko/blog/2019/10/24/channing)

---

Reference <br>

[Node.js 프로그래밍](https://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&barcode=9791187370581) <br>

</center>
