---
title: 'PREPARATION FOR MOCK INTERVIEW'
date: '2019-10-15T15:22:56'
thumbnail: '/images/thumbnails/demo.png'
author: 'channing'
tags: ['Node.js']
description: 'Node.js 인터뷰'
---

#### Q: Node.js란 무엇 인가요? 어디에 사용할 수 있나요?

Node.js 는 자바스크립트 런타임 환경 입니다. V8 엔진 기반의 Non-blocking I/O Event Driven 방식 으로써, 내장 HTTP 서버 라이브러리를 포함하고 있어 웹 서버에서 아파치 등의 별도의 소프트웨어 없이 동작하는 것이 가능하며 이를 통해 웹 서버의 동작에 있어 더 많은 통제를 가능케 한다.

#### Q: 다른 개발환경이 아닌 Node.js 를 사용해야 하는 장점이 무엇인가요?

빠르고 쉽게 서버를 구축할 수 있다.

#### Q: 왜 Node.js 는 single-threaded 인가요?

멀티 스레드 방식은 복잡한 동기화 문제가 골칫거리 였습니다. 동기화 모델이나 락에 대해 학습해야 하고 쓰기가 상당히 어려워 생산성 저하로 이어집니다.
이런 문제를 해결 하기 위한 것이 Single Thread 기반의 비동기 서버인데, 하나의 Thread만을 사용해서 여러 Client로부터 오는 Request를 처리합니다.

#### Q: Node.js에서 callback을 설명하시오.

먼저 Callback function은, 특정 함수에 매개변수로서 전달된 함수를 지칭합니다.
Node.js 에선 Callback 함수가 매우 많이 사용됩니다.
Non-Blocking Code / 비동기 처리 가 대표적인 예 입니다.

#### Q: Node.js에서 비동기란 무엇인가요?

#### Q: Node.js callback hell이 무엇인가요? 어떻게 이를 피할 수 있을까요?

#### Q: Node.js에서 module 이란 무엇인가요?

#### Q: Node.js에서 event loop이란 무엇인가요? Node.js에서 비동기 처리를 그림으로 그려서 설명할 수 있나요?

#### Q: Chrome과 Node.js 환경 다른점

#### Q: 두 환경 모두에서 동일하게 돌아가나요? 브라우저 환경에서는 어떻게 돌아가나요?

#### Q: express는 무엇인가요? 무엇을 해 주나요?

#### Q: package.json 의 역할은 무엇인가요?

<hr />

<center>

Reference <br>
[Single-Threaded](https://m.blog.naver.com/hhw1990/221394005779) <br>
[Callback](https://velopert.com/255)

</center>
