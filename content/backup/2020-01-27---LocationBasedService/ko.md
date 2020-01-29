---
title: 'Location Based Service'
date: '2020-01-27T17:59:03'
thumbnail: '/images/thumbnails/map.jpg'
author: 'channing'
tags: ['mongo', 'express', 'node', 'Javascript', 'React']
description: 'Location Based Service'
---

![map](./map.jpg)
<br>

### 목표

우한 폐렴 확진자 들의 동선 경로를 포함하고 있는 지도 서비스를 만들어 보겠습니다.

---

### 시나리오

1. 지도 데이터(뉴스에 발표된 동선)을 통하여 특정 장소의 위치 정보(경위도 좌표)를 확인합니다.
2. 환자 동선에 포함된 장소의 위치 정보를 서버의 데이터베이스에 저장합니다.
3. 환자 동선에 포함된 장소의 경위도 좌표를 조회해야 합니다.

---

### STACK

- 프론트 : 리액트
- 서버 : Node
- DB : 몽고DB

---

### 공간 인덱싱(Spatial Indexing)

디비에서 위도, 경도를 조회 하기 위해서 공간 인덱싱을 사용하는데, 몽고 디비에서는 이러한 방법을 GeoSpatial Indexing 이라고 부릅니다.

---

### 장소 조회

몽고 디비에서 특정 장소 위치 정보를 어떻게 저장하고 조회할 것인지를 고려해야 합니다.

---

<center>

Reference <br>

</center>
