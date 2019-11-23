---
title: 'Koa'
date: '2019-11-19T17:20:56'
thumbnail: '/images/thumbnails/koa.jpeg'
author: 'channing'
tags: ['Koa', 'Node.js', 'Javascript', 'Server', 'Express.js']
description: 'Koa로 서버 만들기'
---

![koa](./koa.jpeg)

---

### Koa

Koa 는 웹 프레임워크 입니다. Express.js 와 비슷합니다. 서버를 구현하는데 에 편리한 도구? 입니다. <br>
Koa 미들웨어 함수에는 두가지 파라미터가 있습니다. `ctx` 와 `next` 입니다.
`ctx`는 웹 요청과 응답 정보를 갖고 있습니다.

> `yarn add koa`로 koa를 설치합니다.
> koa 서버는 `node src`로 서버를 실행합니다.

```js
// 미들웨어를 설정합니다.
app.use(ctx => {
  console.log(ctx);
});

// 서버를 실행합니다.
$ node src

// ctx 내부에는 요청과 응답을 모두 갖고 있습니다.
listening to port 4000
{ request:
   { method: 'GET',
     url: '/',
     header:
      { host: 'localhost:4000',
        connection: 'keep-alive',
        'cache-control': 'max-age=0',
        dnt: '1',
        'upgrade-insecure-requests': '1',
        'user-agent':
         'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36',
        'sec-fetch-user': '?1',
        accept:
         'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
        'sec-fetch-site': 'none',
        'sec-fetch-mode': 'navigate',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
        cookie:
         'csrftoken=WPnydFLqOxx9mL6F1jsonmpWnvV6UWwLLjxAvRbe56M2bFJBvI1MgCzvVS2IkCrN; sessionid=h95y5imval1nfk6lf3zw48j7xkpde6iq; io=q5ToN8z2Kie0JLKzAAAD' } },
  response:
   { status: 404,
     message: 'Not Found',
     header: [Object: null prototype] {} },
  app: { subdomainOffset: 2, proxy: false, env: 'development' },
  originalUrl: '/',
  req: '<original node req>',
  res: '<original node res>',
  socket: '<original node socket>' }
{ request:
   { method: 'GET',
     url: '/favicon.ico',
     header:
      { host: 'localhost:4000',
        connection: 'keep-alive',
        pragma: 'no-cache',
        'cache-control': 'no-cache',
        'user-agent':
         'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36',
        dnt: '1',
        accept: 'image/webp,image/apng,image/*,*/*;q=0.8',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'no-cors',
        referer: 'http://localhost:4000/',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
        cookie:
         'csrftoken=WPnydFLqOxx9mL6F1jsonmpWnvV6UWwLLjxAvRbe56M2bFJBvI1MgCzvVS2IkCrN; sessionid=h95y5imval1nfk6lf3zw48j7xkpde6iq; io=q5ToN8z2Kie0JLKzAAAD' } },
  response:
   { status: 404,
     message: 'Not Found',
     header: [Object: null prototype] {} },
  app: { subdomainOffset: 2, proxy: false, env: 'development' },
  originalUrl: '/favicon.ico',
  req: '<original node req>',
  res: '<original node res>',
  socket: '<original node socket>' }

```

---

<hr />

<center>

Reference <br>

<br>

</center>
