---
title: '로딩 중 ..'
date: '2019-12-04T23:20:56'
thumbnail: '/images/thumbnails/lod.jpg'
author: 'channing'
tags: ['Project', 'Insta', 'Crawling', 'Scraping']
description: '로딩 중 ..'
---

![lo](./loading.png)

<center>

<b>[인스타그램 크롤링](https://developer-channing.com/blog/2019/10/29/channing/#%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B0%80%EA%B3%B5%ED%95%98%EA%B8%B0)</b> 에서 시작된 <b>프로젝트 서버와 DB 만들기 편</b> 입니다!

</center>

### GOAL

> 목표는 크롤링한 데이터를 효과적으로 관리하기 위한 <b>DB 선택 과 이에 맞는 서버를 선택 및 구현</b>하는 것 입니다. <br>
> 먼저 서버를 선택 한다면 리액트 Django 또는 Node.js를 선택할텐데 각각의 장단점이 분명하다고 생각합니다. <br> 저는 나중을 생각해서 Node.js를 통해 서버를 구축하겠습니다. <br>DB 같은 경우는, NoSQL | SQL 중에 MongoDB를 활용하는 대신 필요에 따라 Mongoose를 활용하는 쪽으로 가도록 하겠습니다.

---

### STACK

- Node.js (Express.js | Koa.js)
- MongoDB

---

### REQUIREMENTS

- git init
- npm init
- eslint --init
- dotenv 설치
- express 설치
- nodemon 설치

---

### Express 서버 만들기

후다닥 서버가 작동하는지 확인해보도록 하겠습니다. 바벨설정을 따로 해주지 않아서 `require`를 사용합니다. 아래처럼 서버를 만든 뒤, nodemon 을 통해 실행합니다.

```js
const express = require('express');
http = require('http');

let app = express();
app.set('port', process.env.PORT || 3000);

http.createServer(app).listen(app.get('port'), function() {
  console.log('익스프레스 서버를 시작했습니다 : ' + app.get('port'));
});
```

<center>

잘 실행 됩니다.

</center>

---

### Express 와 MongoDB 연동하기

<br>

- 먼저 Mongoose를 설치합니다. `npm install --save mongoose`

참조 : [POIEMA](https://poiemaweb.com/mongoose)

```js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

let app = express();
const port = process.env.PORT || 4500;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));

app.listen(port, () => console.log(`Server listening on post ${port}`));
```

---

### 스키마 생성 테스트

참조 : [Mongoose](https://mongoosejs.com/)

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
```

> 잘보면 생성한 model은 OOP 의 생성자 처럼 작동합니다. Cat의 인스턴스로 kitty를 만드는 것을 통해 확인할 수 있습니다.<br>레퍼런스를 기반으로 하여 스키마와 모델을 생성해보겠습니다.

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
```

- 이렇게 Cat model을 생성한뒤 , 저 같은 경우 index.js 에서 아래와 같이 사용합니다.

```js
//Test Model
const Cat = require('./models/hashtag');
const munchkin = new Cat({ name: 'Maum' });
console.log(munchkin.name);
munchkin.speak();
```

- 이제 생성한 모델을 db에 저장합니다.

```js
munchkin.save((err, munchkin) => {
  if (err) return console.error(err);
  munchkin.speak();
});
```

- 저장한 모델을 확인합니다.

```js
Cat.find((err, munchkin) => {
  if (err) return console.error(err);
  console.log(munchkin);
});

// 이런식으로도 쓸수 있습니다.
Cat.find({ name: munchkin }, () => {
  console.log(munchkin);
});
```

---

### 프로젝트 스키마 생성

models 폴더를 생성하고, Schema가 될 파일을 생성합니다.

```js
$ models > hashtag.js

const mongoose = require("mongoose");

// Schema
const hashTagSchema = new mongoose.Schema({
  // id: { type: Number, required: true, unique: true } 이런식으로 구성
});

module.exports = mongoose.model("Hashtag", hashTagSchema);

```

---

<center>

### ---

### ERROR | ISSUE

</center>

>

<hr />
<center>

Reference <br>
[express](https://developer-channing.com/blog/2019/10/24/channing)<br>
[mongoose](https://mongoosejs.com/docs/index.html)

</center>
