---
title: 'INSTAGRAM SCRAPING'
date: '2019-10-29T15:47:56'
thumbnail: '/images/thumbnails/it4.jpg'
author: 'channing'
tags:
  [
    'Scraping',
    'Crawling',
    'Scraper',
    'Python',
    'Crawler',
    'selenium',
    'puppeteer',
  ]
description: 'INSTAGRAM SCRAPING'
---

![it](./it4.jpg)

### INSTAGRAM SCRAPING

인스타그램 해시태그를 활용하여 특정 지역 들의 데이터를 스크랩핑 해보도록 하겠습니다.

인스타 그램 해시태그를 스크랩핑 / 크롤링 하는 코드를 작성해보도록 하겠습니다.

- 목표는 인스타그램에서 해시태그만 을 스크랩핑 하는 것 입니다.<br>

  1. 인스타그램(웹) 메인화면 에서 해시태그를 스크랩핑 한다.
  2. 인스타그램(앱) 화면 에서 해시태그를 스크랩핑 한다.

  여기서 하나 문제가 있습니다. 인스타그램(웹)은 앱과 달리 초기화면은 사진으로만 구성되어 있습니다.

Beautiful Soup으로 크롤링이 되지 않는 것은 **selenium** 또는 **puppeteer**을 사용해야합니다.

### dotenv 패키지 세팅

puppeteer instagram은 비밀번호 와 아이디를 포함하기 때문에 .env파일로 따로 세팅하여야 합니다.

<hr />
<center>

Reference <br>
[PUPPETEER](https://boxfoxs.tistory.com/418)<br>
[PupGithub](https://github.com/GoogleChrome/puppeteer)<br>
[INSTA-Package](https://www.npmjs.com/package/puppeteer-instagram)<br>

</center>
