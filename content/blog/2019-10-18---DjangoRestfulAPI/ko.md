---
title: 'DJANGO RESTFUL API'
date: '2019-10-18T23:04:56'
thumbnail: '/images/thumbnails/djan.png'
author: 'channing'
tags: ['Django Restful API', 'Django', 'Python']
description: 'Django Restful API'
---

![django](./djan.png)

### Django

장고는 Django Software Foundation이 관리하는 파이썬으로 작성된 오픈소스 웹 애플리케이션 프레임워크 입니다.

> <b>Model View Controller (MVC) 패턴을 따르고 있습니다.</b>

고도의 데이터베이스 기반 웹사이트를 작성하는 데 있어서 수고를 더는 것이 장고의 주된 목표입니다.<br>
장고는 콤포넌트의 재사용성(reusability)과 플러그인화 가능성(pluggability), 빠른 개발 등을 강조하고 있습니다. <br>
또한, "DRY(Don't repeat yourself: 중복배제)" 원리를 따릅니다. <br>
설정 파일부터 데이터 모델에까지 파이썬 언어가 구석구석에 쓰여 있습니다.

---

### Django Model

> **Django** 에서 **Model**은 MVC패턴에서 Model 영역을 의미합니다. 데이터를 DB에 저장하고 가공 하는 작업을 하며 데이터 서비스를 제공하는 기능을 담당합니다.

Django의 Model은 각각의 Django App 안에 기본적으로 생성되는 models.py에 코드를 작성하여 정의합니다.<br> 클래스 형태로 정의하며, <b>하나의 모델 클래스는 DB에서 하나의 테이블에 해당됩니다.</b> <br>
장고 모델은 DB데이터를 정의하는 작업 입니다.
models 패키지의 Model 객체를 상속받는 클래스가 하나의 DB 테이블 입니다.
특정 `Field 클래스`의 인스턴스로 생성되는 변수들이 해당 테이블의 한 필드가 됩니다.

- Each model is a Python class that subclasses django.db.models.Model.

* Each attribute of the model represents a database field.
* With all of this, Django gives you an automatically-generated database-access API

---

### Django Restful [API](https://channing.netlify.com/ko/blog/2019/10/22/channing/)

<br>
<br>

![django](./django.png)

<hr />

<center>

Reference <br>
[REST](https://medium.com/@BennettGarner/build-your-first-rest-api-with-django-rest-framework-e394e39a482c) <br>
[Model](https://revidream.tistory.com/18)<br>
[DJANGO](https://docs.djangoproject.com/en/2.2/topics/db/models/)<br>

</center>
