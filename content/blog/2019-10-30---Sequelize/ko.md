---
title: 'SEQUELIZE'
date: '2019-10-28T10:23:56'
thumbnail: '/images/thumbnails/se3.png'
author: 'channing'
tags: ['SQL', 'Database', 'MySQL', 'MongoDB', "NoSQL'Sequelize", 'Node.js']
description: 'Sequelize'
---

![sequelize](./se3.png)

### Sequelize

**시퀄라이즈**는 **ORM(Object-Relational Mapping)**으로 분류됩니다. ORM은 자바스크립트 객체와 데이터베이스의 관계를 매핑 해주는 도구 입니다.
시퀄라이즈는 MySQL 뿐만 아니라 MariaDB, PostgreSQL, SQLite, MSSQL 등 다른 데이터베이스도 같이 쓸 수 있습니다. 시퀄라이즈를 쓰는 이유는 자바스크립트 구문을 알아서 SQL로 바꿔주기 때문입니다. <br>
즉, SQL을 몰라도 자바스크립트 만으로 MySQL을 조작할 수 있습니다.

#### Install

```js
npm install --save sequelize
```

#### Setting up a Connection

데이터 베이스에 연결하기 위해, 우리는 시퀄라이즈 인스턴스를 만들어야 합니다.

```js
const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});
// Option 2: Passing a connection URI
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

```

#### Setting up SQLite

만약 SQLite를 사용한다면 아래와 같이 하면 됩니다.

```js
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite'
});
```

#### Testing the connection

**.authenticate( )** 함수를 사용하여 연결상태를 테스트 할 수 있습니다.

```js
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
```

#### Closing the connection

연결을 끊길 원한다면 **sequelize.close( )** 를 호출하면 됩니다.

#### Modeling a table

모델은 **Sequelize.Model**로 확장된 클래스 입니다. 생성에는 두가지 방법이 존재합니다.

- **Sequelize.Model.init(attributes, options)**

```js
const Model = Sequelize.Model;
class User extends Model {}
User.init(
  {
    // attributes
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
      // allowNull defaults to true
    }
  },
  {
    sequelize,
    modelName: 'user'
    // options
  }
);
```

- **sequelize.define**

```js
const User = sequelize.define(
  'user',
  {
    // attributes
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
      // allowNull defaults to true
    }
  },
  {
    // options
  }
);
```

#### Synchronizing the model with the database

Sequelize가 모델 정의에 따라 테이블을 자동으로 작성하거나 필요에 따라 수정하도록 하려면 다음과 같이 동기화 방법을 사용할 수 있습니다.

```js
// Note: using `force: true` will drop the table if it already exists
User.sync({ force: true }).then(() => {
  // Now the `users` table in the database corresponds to the model definition
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});
```

#### Querying

```js
// Find all users
User.findAll().then(users => {
  console.log('All users:', JSON.stringify(users, null, 4));
});

// Create a new user
User.create({ firstName: 'Jane', lastName: 'Doe' }).then(jane => {
  console.log("Jane's auto-generated ID:", jane.id);
});

// Delete everyone named "Jane"
User.destroy({
  where: {
    firstName: 'Jane'
  }
}).then(() => {
  console.log('Done');
});

// Change everyone without a last name to "Doe"
User.update(
  { lastName: 'Doe' },
  {
    where: {
      lastName: null
    }
  }
).then(() => {
  console.log('Done');
});
```

<hr />
<center>

Reference <br>
[Node.js교과서](https://kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&barcode=9791160505221&orderClick=LA6)<br>
[sequelize.org](https://sequelize.org/v5/manual/getting-started.html)

</center>
