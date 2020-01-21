---
title: 'DATA MODELING'
date: '2019-10-26T18:00:56'
thumbnail: '/images/thumbnails/dataa.png'
author: 'channing'
tags: ['SQL', 'Database', 'MySQL', 'MongoDB', 'NoSQL']
description: 'DATA MODELING'
---

![dt](./dataa.png)

> **개인학습** [아래 내용은 정확하지 않습니다..] <br>
> 데이터 구조와 설계 레퍼런스를 참조하여 '도서관' DB를 작성 해보겠습니다.<br>
> schema 작성 이전에 고려 사항에 대해서 정리하겠습니다.<br>
> 먼저 데이터 설계를 할때 있어서, 해당 테이블에 필요로 하는 컬럼이 무엇이 있을지를 고려해야 합니다. <br>
> 또 어떻게 schema를 짤지 구상해 봅니다.

<hr />

DATA MODELING 을 위해서 서버 아키텍쳐를 먼저 구상하고, 설계를 먼저 하겠습니다. 클라이언트에서 서버로의 접근을 위해서는 API가 필요하겠죠? RESTful API역시 설계 해보도록 하겠습니다. [ GraphQL을 더 공부해서 RESTful API를 벗어나보고 싶네요 ]

전체적인 아키텍쳐는 클라이언트가 서버로의 요청을 할 것이고 해당 요청은 RESTful API를 통해 처리할 것입니다. 서버는 받은 요청에 맞게 DB에서 데이터를 가져오던가, 업데이트하던가, 삭제하던가 등의 작업을 할겁니다. DB는 관계형 / 비관계형 데이터베이스가 존재하고, 필요에 따라서 선택해서 사용하면 됩니다. 저는 관계형DB를 사용할겁니다. 관계형 DB를 사용한다면 schema가 필요합니다. 따라서 스키마도 설계하면 될 것 같습니다.

---

### 도서관 DB

---

#### API 설계

- 회원 관리
  <br>

  | 기능      | METHOD | URI    |
  | :-------- | :----- | :----- |
  | 회원 등록 | POST   | /users |
  | 회원 조회 | GET    | /users |
  | 회원 탈퇴 | DELETE | /users |

* 도서 관리
  <br>

  | 기능    | METHOD | URI    |
  | :------ | :----- | :----- |
  | 책 등록 | POST   | /books |
  | 책 조회 | GET    | /books |

* 대출 관리

    <br>

  | 기능           | METHOD | URI   |
  | :------------- | :----- | :---- |
  | 대출           | POST   | /rent |
  | 대출 내역 조회 | GET    | /rent |

---

#### 말로 풀어쓰기

- 먼저 **도서관**에는 **도서관 회원 정보**와 소장하고 있는 **책**에 대한 정보가 존재합니다.
- 회원 정보에는 이름 / 나이 / 도서관 코드 등이 들어갈 수 있습니다.
- 도서관 코드는 해당 사용자가 도서를 대여/반납 할 수 있는 도서관의 이름(ID)가 될겁니다.<br>
  || 도서관을 이용하기 위해서는 해당 지역의 사람만이 회원가입을 할 수 있어야합니다.
- 도서관에는 회원 정보와 책 정보를 많이 갖고 있습니다.
- 책 정보에는 책 이름 / 도서관 코드 / 그 외 정보 등이 담겨 있을 수 있습니다.
- 회원은 책을 여러권 빌릴 수 있습니다. | [1:M]
- 책은 같은 책이 여러권 있을 수 있습니다.
- 회원이 책을 대여하기 위해서는 도서관을 통해서 대여 할 수 있습니다.
- 연체한 회원은 책을 빌릴 수 없습니다.

> 여기까지 정리후에 레퍼런스를 참조 설계부분을 수정해보도록 하겠습니다.

<br>
<br>
<br>
<br>

![tb](./table.png)

<center>

[틀린 스키마 v1]

</center>

---

![scu](./scu.png)

<center>

[미완성 스키마 v2]

</center>

---

![libray](./sch1.png)

- [ 틀린 스키마 v1 ]
- 먼저 회원이 해당 도서관의 회원이 맞는지 확인합니다. 도서관에선는 해당 회원이 연체 회원 인지를 체크합니다. 연체회원이 아니라면 해당하는 책을 대여해줍니다. 회원은 책을 빌릴 것이고, 여러 권 빌릴 수 있습니다.

---

<center>

### ERROR | ISSUE

</center>

<hr />
<center>

Reference <br>
[데이터 구조와 설계](https://medium.com/@khwsc1/%EB%B2%88%EC%97%AD-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B5%AC%EC%A1%B0%EC%99%80-%EC%84%A4%EA%B3%84-%ED%8A%9C%ED%86%A0%EB%A6%AC%EC%96%BC-b25792a0aa86)<br>
[lucidchart](https://www.lucidchart.com/pages/database-diagram/database-models#discovery__top)<br>
[DATA_MODELING](http://www.dbguide.net/db.db?boardUid=148404&boardConfigUid=9&boardIdx=132)

</center>
