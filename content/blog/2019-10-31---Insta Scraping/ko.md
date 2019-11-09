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

## INSTAGRAM SCRAPING

### GOAL

> <b>2019.10.29 - (미정)</b><br>
> 인스타그램 해시태그를 활용하여 특정 지역 들의 데이터를 스크랩핑 / 크롤링 해보도록 하겠습니다.
>
> 1.  해시태그를 크롤링 한다.
> 2.  인덱스 페이지에서 특정 지역(\*제주도)를 크롤링 한다.
> 3.  제주도 사진에 접근하여 제주도 해시태그를 크롤링 한다.
> 4.  해시태그된 데이터 기준 '글' 을 크롤링 한다.
> 5.  '글'에 유용한 정보가 될 부분에 분기 / 한글 전처리 패키지를 활용한다.

### STACK

초기 스택으로 <b>Beautiful Soup</b>을 활용하려 했으나, 인스타그램의 모든 스크립트(데이터)를 크롤링 해오지 못하는 문제로,<br>
**selenium** 또는 **puppeteer**을 사용하는 방향으로 전향했습니다.
저는 **JavaScript** 와 **puppeteer**를 활용하여 크롤링 하겠습니다.

- JS + Puppeteer
- Python + Selenium
- async / await

---

<b>1번 목표의 가이드를 작성합니다.</b>

1.  인스타그램(웹) 메인화면 에서 해시태그를 스크랩핑 한다.
1.  인스타그램(앱) 화면 에서 해시태그를 스크랩핑 한다.

저는 인스타그램(웹) 에 대해서 스크랩핑(크롤링)을 할 것입니다.<br>
<b>먼저 특정 검색어를 지정해서 원하는 데이터를 제대로 크롤링 해오는지</b> 부터 확인하기 위해 검색어를 '제주도'로 하여 크롤링을 구현해보도록 하겠습니다.<br>
후에 '제주도' 로 크롤링을 성공한 후 → '전국' 으로 확장하는 식으로 구현하겠습니다.

<center>

작지만 작동하는 기능을 구현한 후, 크게 확장하는 식으로 코드를 작성하겠습니다.

</center>

---

### PUPPETEER

> **Puppeteer** 는

---

**Requirements**

- 비동기로 처리해야 합니다.
- 인스타 페이지 로그인이 필요합니다.<br>
  - 로그인 시에 계정 비밀번호와 같은 시크릿한 값에 대한 처리가 필요합니다. <b>dotenv</b>를 활용하겠습니다.
- 인스타 그램 검색 페이지는 인피니티 스크롤로 이루어져 있습니다. 인스타 그램 에서 적정량의 데이터만을 처리해야 합니다.<br>
  - 모든 데이터를 크롤링 하다보면 `setTimeout`에 걸리게 됩니다. 분기처리나 제약을 걸 수 있는 API를 활용해야 합니다.
- robot.txt

---

### SETTING DOTENV PACKAGE

puppeteer instagram은 비밀번호 와 아이디를 포함하기 때문에 .env파일로 따로 세팅하여야 합니다.

---

```js
const puppeteer = require('puppeteer');

puppeteer.launch().then(async browser => {
  const page = await browser.newPage();

  //TODO 인스타그램 로그인 페이지에서의 설정을 먼저 해줍니다.
  await page.goto('https://www.instagram.com/accounts/login/');
  await page.waitForSelector('input[name="username"]');

  //TODO 인스타그램 페이지에 접속하기 위해서 계정에 로그인 해야 합니다.
  // SECRET 한 값으로 관리할 필요가 있습니다.
  await page.type('input[name="username"]', '');
  await page.type('input[name="password"]', '');
  await page.click('button[type="submit"]');

  //TODO 로그인 을 기다린 뒤 리다이렉트 합니다.
  await page.waitForResponse(
    response =>
      response.url() === 'https://www.instagram.com/' &&
      response.status() === 200
  );
  //TODO Gets the full HTML contents of the page, including the doctype.
  await page.waitForNavigation();
  // const html = await page.content();
  // console.log('html', html)

  // var links = "https://www.instagram.com/";
  // var instaHtml = await page.content(links);
  // console.log('insta', instaHtml)

  // await page.goto('https://www.instagram.com/')

  // //TODO 제주도를 검색합니다.
  // await page.type('input[value]', '제주도')
  // //! 인스타그램은 엔터한번으로 검색이 되지 않는다.
  // // await page.keyboard.type(String.fromCharCode(13));
  // await page.goForward('https://www.instagram.com/explore/tags/%EC%A0%9C%EC%A3%BC%EB%8F%84/')

  //TODO 제주도 페이지로 이동합니다.
  await page.waitForResponse(
    response =>
      response.url() ===
        'https://www.instagram.com/explore/tags/%EC%A0%9C%EC%A3%BC%EB%8F%84/' &&
      response.status() === 200
  );

  // await page.goto('https://www.instagram.com/explore/tags/%EC%A0%9C%EC%A3%BC%EB%8F%84/')
  //TODO div class = "Nnq7C weEfm"의 개수가 10개 면 .. 으로 조건을 걸면 되나
  let countDivTag = [];

  //TODO 페이지 스크립트를 배열로 만든다.
  // let htmlArr = [];
  // const html = await page.content('https://www.instagram.com/explore/tags/%EC%A0%9C%EC%A3%BC%EB%8F%84/');
  // htmlArr.push(html)
  // console.log('html', htmlArr)
  let div = `<div class="Nnq7C weEfm">`;
  await page.screenshot({ path: '인스타제주도첫번째클릭.png' });

  // let splited = html.split('<div')
  // console.log('spt', splited)
  // await page.waitForResponse(async response => {
  //     if(response.url() === 'https://www.instagram.com/explore/tags/%EC%A0%9C%EC%A3%BC%EB%8F%84/' && response.status() === 200){
  //         let arr = response.url().split(',')
  //         if(arr.includes(div)){
  //             console.log(true)
  //         }
  //         if(countDivTag > 20){
  //             await page.screenshot({path: '인스타제주도첫번째클릭.png'})
  //         }
  //     }
  // })
  await browser.close();
});
```

<hr />
<center>

Reference <br>
[PUPPETEER](https://boxfoxs.tistory.com/418)<br>
[PupGithub](https://github.com/GoogleChrome/puppeteer)<br>
[INSTA-Package](https://www.npmjs.com/package/puppeteer-instagram)<br>

</center>
