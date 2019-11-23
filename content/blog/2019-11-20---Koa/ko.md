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

> `yarn add koa`로 koa를 설치합니다. <br>
> koa 서버는 `node src`로 서버를 실행합니다. <br> `node src`로 실행하는 서버는 업데이트를 위해서 서버 종료와 시작을 반복해야 합니다. 이는 매우 귀찮고 불편하므로 <br>`yarn --dev add nodemon`(노드몬이 전역에 설치되어 있다면)으로 nodemon을 설치 후 script 설정을 후 `yarn start`로 서버를 시작합니다.

#### Koa ctx

---

```js

// eslint-disable-next-line no-undef
const Koa = require("koa");

// Koa를 상속받는 app 인스턴스를 생성합니다.
const app = new Koa();

// 미들웨어를 설정합니다.
app.use(ctx => {
  console.log(ctx);
  ctx.body = "Test"
  console.log(ctx.body)
});

// app 인스턴스를 4000 port에 연결합니다.
app.listen(4000, () => {
  console.log("listening to port 4000");
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

  Test

```

---

#### Koa next

Koa의 `next`는 프로미스 입니다. 다음 미들웨어로 가게 하는 명령 이라고 생각하면 됩니다.
프로미스 이기 때문에 비동기로 작동합니다.

```js
// 일반적인 사용법 입니다.
app.use((ctx, next) => {
  console.log('처음입니다.');
  next();
});

app.use((ctx, next) => {
  console.log('next를 받은 다음 값 입니다.');
});

// next는 프로미스 이므로 then을 활용할 수 있습니다.
app.use((ctx, next) => {
  console.log('처음입니다.');
  next().then(() => {
    console.log('마지막으로 나올겁니다');
  });
});

app.use((ctx, next) => {
  console.log('next를 받은 다음 값 입니다.');
});
```

---

### Koa async/await

Koa 는 async/await을 정식으로 지원합니다. <b>Express와 다른 분명한 점입니다.</b>
async/await을 지원한다는 것은 에러 처리가 Koa 자체적으로 가능하다는 말 입니다.

```js
app.use(async (ctx, next) => {
  console.log('처음입니다.');
  await next();
  console.log('async/await을 사용했습니다');
});
```

---

### Koa-router

Koa 역시 라우터가 존재합니다. 다른 주소로 요청이 들어오면 이를 처리하기 위한 라우터를 사용합니다.

> Koa 자체에는 라우터가 없기 때문에 `yarn add koa-router`로 설치합니다.

```js
// ...
const Router = require('koa-router');
const app = new Koa();

// Router 를 상속받는 router 인스턴스를 생성합니다.
const router = new Router();

// 라우터를 설정합니다.
router.get('/', (ctx) => {
    ctx.body = 'HOME'
}

router.get('/page', (ctx) => {
    ctx.body = 'Page'
})

// app 인스턴스에 라우터를 적용합니다.
app.use(router.routes()).use(router.allowedMethods());

// ...

```

라우터 의 첫번째 파라미터는 path 이며, 두번째는 라우터를 처리할 함수 입니다.
두번째 파라미터로 ctx 를 처리합니다.

> router 인스턴스를 만들고 왜 app 인스턴스에 등록하나요?
> <br>[개인적 생각] 제가 생각하는 작동 원리 입니다. <br>
> Koa 또는 Express 는 프레임워크 입니다. 이 녀석들이 요구하는 규칙 같은게 존재합니다. <br>Koa / Express 는 미들웨어를 읽습니다. 미들웨어는 `app.use()`와 같이 만듭니다. 우리는 Third party로 router를 설치했습니다. <br> Koa 는 router를 읽지 못합니다. 이를 읽게 하기 위해서 Koa를 상속받은 app 미들웨어에 설정한 router를 등록합니다.

### Route Query

라우트에는 첫번째 파라미터로 path를 넘깁니다. path를 설정할 때는 /page/:what 형식으로 콜론 을 이용하여 라우트 path를 설정합니다.
Query 는 URL 에서 ? 기준 뒤 에 해당하는 부분입니다

---

<hr />

<center>

Reference <br>

<br>

</center>
