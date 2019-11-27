---
title: '구글 캘린더 블로그에 연동하기'
date: '2019-11-26T17:20:56'
thumbnail: '/images/thumbnails/c.jpeg'
author: 'channing'
tags: ['Google Calendar', 'Idea']
description: '구글 캘린더 블로그에 연동하기'
---

![cal](./c.jpeg)

<center>

[2019.11.26 ~ 진행중]

</center>

### CONTENT

- 시작

- 설계

- 구글 캘린더 API

### 시작

> 아이디어 : 구글 캘린더를 쓰는데, 캘린더에 오늘 할일을 계획 하고, 그걸 다시 TIL에 정리하는건 비효율적이지 않나 싶다. <br>
> 구글 캘린더 연동 페이지를 만들어 보고 싶다. 먼저 가능한지 부터 고려해보기.
> 구체적으로 생각해보면 구글 캘린더에 작성한 내용을 블로그에 옮길 수 있는지 가능성 체크
> 먼저 입력받은 구글 캘린더 데이터 export를 해서 내 개츠비 서버로 받아와야 하는데 개츠비는 graphQL이고 ..<br>
> 라는 생각에서 시작 된 캘린더 연동하기 ..<br>

> 처음에 얼마나 안일하게 생각했는지, 구글 캘린더 에서 달력 데이터 export 해서 그 데이터를 내 DB에 집어넣으면 되지 않겠나 라고 생각했는데, 왠걸 export한 데이터 타입이 ics.. 어떻게 처리해야 하는건지도 모르겠고..
> 못하나보다 했는데, 알아보니까 <b>구글 캘린더 API</b>가 존재한다!!

---

### 설계

제 블로그의 프론트는 리액트로 구성되어 있고 GraphQL을 사용하고 있습니다. <br>
어떻게 구글 캘린더 데이터를 가져올지를 생각해 보겠습니다. 먼저 리액트에서 구글 캘린더 API로 get요청을 합니다. JSON 타입 데이터를 받습니다. 그러면 리액트에서 구글 캘린더 데이터를 map을 돌려서 TIL 화면에 출력 합니다. 실시간으로 업데이트가 불가능 합니다. 구글 데이터를 받아오는 주기 / 받아온 데이터를 data파일을 하나 만들어서 거기 배열 안에 추가해서 ..
제 서버에서 받아올 데이터가 없기때문에 이렇게 하면 되지 않을까 싶습니다.

> TIL페이지는 현재 .md 파일로 마크다운으로 작성되어 있습니다. 컴포넌트로 만들어서 빼야 합니다. 또는 TIL 페이지를 새로 생성해서 링크로 연결해도 됩니다.

---

### 구글 캘린더 API

![ap](./api.png)

레퍼런스도 쉽게 잘 설명이 되어 있다. 다만 문제가 있다면, 내 블로그 코드 구조에 있다.
이 블로그는 graphQL과 갯츠비 또 typescript로 이루어져있다.. 난 graphQL / typescript / 갯츠비 다 개념이 부족하다..

---

<center>

### ---

### ERROR | ISSUE

</center>

> <b> - </b>

<hr />

<center>

Reference <br>
[Google Calendar API](https://developers.google.com/calendar/v3/reference)<br>
[Google Calendar NodeAPI](https://developers.google.com/calendar/quickstart/nodejs)<br>
[Google Calendar Node](https://googleapis.dev/nodejs/googleapis/latest/calendar/classes/Calendar.html)<br>
[Google Claendar Git](https://github.com/googleapis/google-api-nodejs-client#google-apis-nodejs-client)<br>
[캘린더](https://docfriends.github.io/DevStrory/2019-05-24/google-calendar/)

</center>
