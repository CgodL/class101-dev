---
title: 'GRAPHQL 1'
date: '2019-10-19T14:14:56'
thumbnail: '/images/thumbnails/apo.png'
author: 'channing'
tags: ['GraphQL']
description: 'GraphQL 개념 과 특징 - GraphQL은 페이스북에서 만든 어플리케이션 레이어 쿼리 언어 입니다'
---

![gq](./apo.png)

### GraphQL

---

GraphQL은 API를 위한 쿼리 언어이며 이미 존재하는 데이터로 쿼리를 수행하기 위한 런타임 입니다. GraphQL은 API에 있는 데이터에 대한 완벽하고 이해하기 쉬운 설명을 제공하고 클라이언트에게 필요한 것을 정확하게 요청할 수 있는 기능을 제공하며 시간이 지남에 따라 API를 쉽게 진화시키고 강력한 개발자 도구를 지원합니다.

![gql](./gql.png)

---

### SQL VS GQL

- SQL은 데이터베이스 시스템에 저장된 데이터를 효율적으로 가져오는 것이 목적 입니다.
- GQL은 웹 클라이언트가 데이터를 서버로 부터 효율적으로 가져오는 것이 목적 입니다.

```sql
SELECT plot_id, species_id, sex, weight, ROUND(weight / 1000.0, 2) FROM surveys;
```

```gql
{
  hero {
    name
    friends {
      name
    }
  }
}
```

---

### GraphQL

GraphQL은 페이스북에서 만든 어플리케이션 레이어 쿼리 언어 입니다.<br>

- 클라이언트측 에서 서버쪽으로 필요한 정보를 쿼리로 만들어서 서버에 전달합니다.
- 서버는 이를 토대로 프로세싱 하여 주어진 틀 대로 데이터를 보여주는 것이 **GraphQL** 의 역할 입니다.

- 쿼리를 통하여 필요한 데이터만 fetching 하기 때문에 overfetch / underfetch 할 걱정을 할 필요가 없습니다.

---

[공식 홈페이지 내용 입니다.](https://graphql-kr.github.io/learn/)<br>
GraphQL 서비스는 타입과 필드를 정의하고, 각 타입의 필드에 대한 함수로 구현됩니다. 예를 들어, 로그인한 사용자가 누구인지(me)와 해당 사용자의 이름(name)을 가져오는 GraphQL 서비스는 다음과 같습니다.

```sql
type Query {
  me: User
}

type User {
  id: ID
  name: String
}
```

GraphQL 서비스가 실행되면 (일반적으로는 웹 서비스의 URL) GraphQL 쿼리를 전송하여 유효성을 검사하고 실행할 수 있습니다. 수신된 쿼리는 먼저 정의된 타입과 필드만 참조하도록 검사한 다음, 함수를 실행하여 결과를 생성합니다.

```sql
{
  me {
    name
  }
}
```

```json
{
  "me": {
    "name": "Luke Skywalker"
  }
}
```

---

```sql
쿼리
query {
    account(id: "1") {
        username
        email
        firstName
        lastName
        friends {
            firstName
            username
        }
    }
}
```

```js
결과
{
  "data": {
    "account": {
      "username": "velopert",
      "email": "public.velopert@gmail.com",
      "firstName": "Minjun",
      "lastName": "Kim",
      "friends": [
        {
          "firstName": "Jayna",
          "username": "jn4kim"
        },
        {
          "firstName": "Abet",
          "username": "abet"
        }
      ]
    }
  }
}
```

---

### 장점

특정 언어에 제한된 기술이 아니기 때문에, 여러 환경에서 사용할 수 있으며, 이미 구현된 시스템에 도입을 해도 기존에 있던 시스템이 무너지지 않기 때문에 부담 없이 적용할 수 있습니다.

---

### PipeLine

![graphql-pipline](./graphql-pipeline.png)

<center>

source : https://tech.kakao.com/2019/08/01/graphql-basic/

</center>

<br>

서버사이드 GQL 어플리케이션은 GQL로 작성된 쿼리를 입력으로 받아 쿼리를 처리한 결과를 다시 클라이언트로 돌려줍니다.

---

### REST API 와 비교

REST API는 URL, METHOD등을 조합하기 때문에 다양한 Endpoint가 존재 합니다. 반면, GQL은 단 하나의 Endpoint가 존재 합니다. 또한, GQL API에서는 불러오는 데이터의 종류를 쿼리 조합을 통해서 결정 합니다. <br>예를 들면, REST API에서는 각 Endpoint마다 데이터베이스 SQL 쿼리가 달라지는 반면, GQL API는 GQL 스키마의 타입마다 데이터베이스 SQL 쿼리가 달라집니다.
![gql-http](./gql-http.png)

<center>

source : https://tech.kakao.com/2019/08/01/graphql-basic/

</center>

---

### HTTP와 GQL의 기술 스택 비교

<br>

![gql-API](./graphql-mobile-api.png)

<center>

source : https://blog.apollographql.com/graphql-vs-rest-5d425123e34b

</center>

REST API와 GraphQL API의 사용
위 그림처럼, gql API를 사용하면 여러번 네트워크 호출을 할 필요 없이, 한번의 네트워크 호출로 처리 할 수 있습니다.

---

### GraqhQL의 Structure

#### 쿼리 / 뮤테이션 ( query / mutation )

쿼리와 뮤테이션 그리고 응답 내용의 구조는 상당히 직관적 입니다. 요청하는 쿼리문의 구조와 응답 내용의 구조는 거의 일치 합니다.

```gql
 {                                           {
   hero {                                       "data" : {
     name                                           "hero" : {
     friends {                                          "name" : "WALL-E"
       name                                         }
     }                                           }
   }
 }                                           }
 쿼리문                                        응답
```

> 즉 요청 쿼리를 응답 쿼리 구조와 비슷하게 하면 된다 라는 말

---

<center>

### ERROR | ISSUE

</center>

<hr />

<center>

Reference <br>
[GraphQL-velopert](https://velopert.com/2318) <br>
[GraphQL-kakao](https://tech.kakao.com/2019/08/01/graphql-basic/)<br>
[GraphQL 공식홈페이지 영문](https://graphql.org/)<br>
[GraphQL 공식홈페이지 한글](https://graphql-kr.github.io/)<br>
[GraphQL JS](https://graphql-kr.github.io/code/#javascript)<br>
[GraphQL Tutorial](https://www.howtographql.com/basics/0-introduction/)

</center>
