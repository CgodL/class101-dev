---
title: 'MONGO DB - NoSQL'
date: '2019-09-19T10:20:56'
thumbnail: '/images/thumbnails/mo1.jpeg'
author: 'channing'
tags: ['Sql', 'Database', 'MySQL', 'MongoDB', 'NoSQL', 'Mongoose']
description: 'MongoDB 기본'
---

![m](./mo1.jpeg)

### Mongo DB

---

> - 유동적 스키마 => 고정된 컬럼이 없다 ? <br>
> - 기존 데이터는 새로 필요한 데이터의 영향을 받지 않습니다. <br>
> - 분산처리를 위한 확장이 용이하다.<br>
> - 몽고 DB에서 document 는 RDBMS 에서 record와 비슷합니다. JSON형태로 저장합니다.
> - RDBMS는 모두 같은 스키마를 가져야 합니다. 하지만 MongoDB는 아닙니다.

몽고디비는 기존의 **관계형 데이터 베이스**와 달리 **SQL**을 사용하지 않습니다.
따라서 데이터 조회 방식도 SQL과 다릅니다. <br> 하지만 데이터를 저장하거나 조회 하는 방법을 따로 제공하기 때문에 몇 가지 사용법만 알아두면 쉽게 사용할 수 있습니다.
<br> **몽고디비는 자바스크립트 객체를 그대로 저장할 수 있어서 노드에서 데이터를 저장하기 좋은 데이터베이스 입니다.**

**NoSQL**에 주목하는 이유는 대부분 성능 때문입니다. NoSQL은 데이터베이스 성능을 최우선시 하기 때문에 실시간 처리 나 대용량 트래픽을 감당할 수 있는 메시징 시스템 등에 활용 됩니다. 특히 클라우드 서비스로 서버를 구성하는 경우가 많아지면서 많은 사용자를 수용하거나 시스템 자원을 적게 소모는 NoSQL DB에 더 관심을 갖게 되었습니다.

- **관계형 데이터베이스란** 데이터 항목들을 모아 놓은 집합체인 정형화된 테이블을 여러 개 포함하고 있으면서 다양한 방법으로 데이터에 접근하거나 조회할 수 있도록 만든 데이터 저장소를 말합니다. 관계형 DB는 데이터를 조작하거나 접근할 수 있도록 검색 언어인 **SQL**을 제공 합니다. **SQL**문장은 데이터를 직접 조회하거나 보고서를 추출하는데 주로 사용됩니다.

몽고디비는 앞서 말했듯이 **NoSQL**이기 때문에 **DB의 테이블 개념이 없습니다.**  대신 여러 데이터가 모인 하나의 단위를 **컬렉션**이라고 부릅니다.<br>
몽고디비는 데이터 저장소를 갖고 있으며, 그 안에 여러개의 컬렉션을 갖고 있는 **컬렉션의 집합** 이라고 할 수 있습니다.
각각의 컬렉션은 여러 개의 **문서 객체(Document)** 를 가질 수 있습니다.
문서는 Key-value pair로 이루어져 있습니다.

```js
{
    "_id": ObjectId("5099803df3f4948bd2f98391"), // 12bytes의 hexadecimal 값으로서, 각 document의 유일함(uniqueness)을 제공합니다.
    "username": "channing",
    "name": { first: "C.H", last: "LEE" }
}
```

Document 동적( dynamic )의 schema 를 갖고있습니다. 같은 Collection 안에 있는 Document 끼리 다른 schema 를 갖고 있을 수 있는데요, 쉽게 말하면 서로 다른 데이터 ( 즉 다른 key ) 들을 가지고 있을 수 있습니다.

**장점**

- Schema-less ( Schema가 없다. 같은 Collection 안에 있을지라도 다른 Schema를 가지고 있을 수 있다 )
- 복잡한 JOIN 이 없다.

<br>

---

### Data Modelling

<br>

![mongo-collection](./mongoDBStructure.svg)
<br>
<br>
<br>
<br>

---

### MongoDB 와 RDBMS 비교

<br>
<br>

![mongosql](./mongo.png)

<br>

---

### Mongoose


<b>Mongoose</b> 는 elegant mongodb object modeling for node.js.
|| **Node.js 전용** MongoDB기반 ODM(Object Document Mapping) 입니다. <br>( ODM 은 객체와 문서를 매칭 한다는 뜻 입니다.)<br>
Object는 자바스크립트 객체 이고 Document는 몽고 DB의 문서 입니다. 문서를 DB에서 조회할 때 자바스크립트 객체로 바꿔주는 역할이라고 생각하시면 됩니다.

> 그냥 한마디로 NoSQL인 MongoDB를 SQL처럼 쓰고싶으니 mongoose를 활용해서 RDBMS처럼 테이블 주고 데이터 관리하고 싶다 인것 같다.

#### 스키마 란 ?

데이터베이스를 구성하는 레코드의 크기, 키(key)의 정의, 레코드와 레코드의 관계, 검색 방법 등을 정의한 것 입니다. <br>
데이터베이스 스키마(database schema)는 데이터베이스에서 자료의 구조, 자료의 표현 방법, 자료 간의 관계를 형식 언어로 정의한 구조입니다. 데이터베이스 관리 시스템(DBMS)이 주어진 설정에 따라 데이터베이스 스키마를 생성하며, 데이터베이스 사용자가 자료를 저장, 조회, 삭제, 변경할 때 DBMS는 자신이 생성한 데이터베이스 스키마를 참조하여 명령을 수행합니다. <br>
다시 말해 데이터베이스의 구조와 제약조건에 관하여 전반적인 명세를 기술한 것이며 DB에 어떤 구조로 데이터가 저장되는가를 나타내는 데이터베이스 구조를 스키마라고 합니다.

---

#### Defining your schema

[mongoose docs](https://mongoosejs.com/docs/guide.html)

```sql
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
})
```

각 Key 값이 필드의 이름이 됩니다. value는 자료형(데이터 타입)을 정의 해준겁니다. 생성한 스키마를 토대로 모델을 생성합니다.

#### Creating a model

정의한 스키마를 사용하기 위해서 우리는 위에서 만든 blogSchema를 Model로 convert 해야합니다. <br>이를 위해서 `mongoose.model(modelName, schema)` 형태로 넘겨줍니다.

```sql
var Blog = mongoose.model('Blog', blogSchema);
```

---

#### 예제를 통한 스키마 테스트

<br>

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
```

> 잘보면 생성한 model은 OOP 의 생성자 처럼 작동합니다. Cat의 인스턴스로 kitty를 만드는 것을 통해 확인할 수 있습니다.<br>레퍼런스를 기반으로 하여 테스트 스키마와 테스트 모델을 생성해보겠습니다.

```js
$ models > hashtag.js
// Test Schema
const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
})

// 생성한 스키마에 메서드도 추가할 수 있습니다.
// 야옹! 메서드 입니다.
catSchema.methods.speak = function() {
  const greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
};

module.exports = mongoose.model("Cat", catSchema)

// 이렇게 Cat model을 생성한뒤 , 저 같은 경우 index.js 에서 아래와 같이 사용합니다.
// Test Model
const Cat = require('./models/hashtag');
const munchkin = new Cat({ name: 'Maum' });
console.log(munchkin.name);
munchkin.speak();

// 이제 생성한 모델을 db에 저장합니다.
munchkin.save((err, munchkin) => {
  if (err) return console.error(err);
  munchkin.speak();
});

// 저장한 모델을 확인합니다.
Cat.find((err, munchkin) => {
  if (err) return console.error(err);
  console.log(munchkin);
});

// 이런 방법 으로도 쓸수 있습니다.
Cat.find({ name: munchkin }, () => {
  console.log(munchkin);
});
```

---

### Mongoose QUERY

<center>

<b>[QUERY](https://mongoosejs.com/docs/api/query.html)</b>

</center>

<!--
<center>

#### docker 터미널에서 mongo DB 설정
</center>
<br>

  <img width="485" alt="스크린샷 2019-09-18 오후 9 30 19" src="https://user-images.githubusercontent.com/48753593/65148624-8e8d1300-da5b-11e9-9fc8-62df64ac1e10.png">
docker pull mongo
<br>
<br>


  <img width="479" alt="스크린샷 2019-09-18 오후 9 30 25" src="https://user-images.githubusercontent.com/48753593/65148625-8e8d1300-da5b-11e9-8caf-a1a9023ea337.png">
docker images<br>
  <br>

  <img width="588" alt="스크린샷 2019-09-18 오후 9 32 37" src="https://user-images.githubusercontent.com/48753593/65148843-e7f54200-da5b-11e9-9a15-aef909b83254.png">
  docker run --name (mongodb) mongo<br>

docker run -d -p 27017-27019:27017-27019 --name (mongodb) mongo

1. aleredy error
2. docker ps -a ( 실행 중인 상태 확인 )
3. docker stop mongodb
4. docker rm mongodb
<br>

  <img width="591" alt="스크린샷 2019-09-18 오후 9 35 33" src="https://user-images.githubusercontent.com/48753593/65148995-43273480-da5c-11e9-8859-97e79e2408cd.png">
  <br>

  <img width="591" alt="스크린샷 2019-09-18 오후 9 34 33" src="https://user-images.githubusercontent.com/48753593/65148936-1f63ee80-da5c-11e9-8857-89913673fe7c.png">
  <br>

  ### *docker exec -it (mongodb) bash*
  <img width="579" alt="스크린샷 2019-09-18 오후 9 35 58" src="https://user-images.githubusercontent.com/48753593/65149043-5cc87c00-da5c-11e9-97c7-c7955c6c8b54.png">
  <br>

## mongo shell - 명령어

  ### mongo
>mongo 내부

  <img width="584" alt="스크린샷 2019-09-18 오후 9 38 02" src="https://user-images.githubusercontent.com/48753593/65149201-a2854480-da5c-11e9-85ac-96fce7b18025.png">
  <br>
  <img width="594" alt="스크린샷 2019-09-18 오후 9 38 16" src="https://user-images.githubusercontent.com/48753593/65149203-a31ddb00-da5c-11e9-92d1-e89dc02a0fda.png">
  <br>

  ### use (db name)
>use는 현재 존재하지않는 dbname 도 사용 가능하다

<img width="180" alt="스크린샷 2019-09-18 오후 9 39 17" src="https://user-images.githubusercontent.com/48753593/65149299-cfd1f280-da5c-11e9-98d1-58e95b069083.png">
<br>
<img width="186" alt="스크린샷 2019-09-18 오후 9 39 30" src="https://user-images.githubusercontent.com/48753593/65149298-cfd1f280-da5c-11e9-8bb3-a1a78e4d194f.png">
<br>
<img width="157" alt="스크린샷 2019-09-18 오후 9 42 35" src="https://user-images.githubusercontent.com/48753593/65149553-40790f00-da5d-11e9-86a5-ad27efdf7c25.png">
<br>
<img width="610" alt="스크린샷 2019-09-18 오후 9 42 29" src="https://user-images.githubusercontent.com/48753593/65149552-3fe07880-da5d-11e9-90dc-74b29ae15371.png">

 -->

---

<center>

### ---

### ERROR | ISSUE

</center>

> <b> - </b>

<hr />

<center>

Reference <br>
[MongoDB](https://docs.mongodb.com/manual/core/databases-and-collections/)<br>
[mongo](https://velopert.com/mongodb-tutorial-list)<br>
[mongoose](https://mongoosejs.com/)<br>
[velopert-mongoose](https://velopert.com/594)<br>
[zerocho-mongoose](https://www.zerocho.com/category/MongoDB/post/5963b908cebb5e001834680e)<br>
[schema](https://ko.wikipedia.org/wiki/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%EC%8A%A4%ED%82%A4%EB%A7%88)

</center>
