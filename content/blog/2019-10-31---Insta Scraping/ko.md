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
description: 'INSTAGRAM SCRAPING - 인스타그램 해시태그를 활용하여 특정 지역 들의 데이터를 스크랩핑 / 크롤링 해보도록 하겠습니다.'
---

![it](./it4.jpg)

<center>

**INSTAGRAM SCRAPING** <br>
[기덥](https://github.com/CgodL/Insta_Crawling)

</center>

## GOAL

> 인스타그램 해시태그를 활용하여 특정 지역 들의 데이터를 스크랩핑 / 크롤링 해보도록 하겠습니다.

---

## STACK

초기 스택으로 <b>Beautiful Soup</b>을 활용하려 했으나, 인스타그램의 모든 스크립트(데이터)를 크롤링 해오지 못하는 문제로,<br>
**selenium** 또는 **puppeteer**을 사용하는 방향으로 전향했습니다.
저는 **JavaScript** 와 **puppeteer**를 활용하여 크롤링 하겠습니다.

- JS + Puppeteer
- Python + Selenium

---

## 시나리오

> 1. 인스타그램 로그인 화면을 띄운다.
> 2. 인스타그램에 로그인 한다.
> 3. 검색창에 '제주도'를 입력한다.(해시태그)
> 4. 페이지 소스를 검사한다.
> 5. 사진에 있는 해시 태그를 추출한다.

<b>먼저 특정 검색어를 지정해서 원하는 데이터를 제대로 크롤링 해오는지</b> 부터 확인하기 위해 검색어를 '제주도'로 하여 크롤링을 구현해보도록 하겠습니다.<br>
후에 '제주도' 로 크롤링을 성공한 후 다른 키워드로 확장하는 식으로 구현 해보겠습니다.

<center>

작지만 작동하는 기능을 구현한 후, 크게 확장하는 식으로 코드를 작성하기

</center>

---

## REQUIREMENTS

- 비동기로 처리해야 합니다.
- 인스타 페이지 로그인이 필요합니다.<br>
  - 로그인 시에 계정 비밀번호와 같은 시크릿한 값에 대한 처리가 필요합니다. <b>dotenv</b>를 활용하겠습니다.
- 인스타 그램 검색 페이지는 인피니티 스크롤로 이루어져 있습니다. 인스타 그램 에서 적정량의 데이터만을 처리해야 합니다.<br>
  - 모든 데이터를 크롤링 하다보면 `setTimeout`에 걸리게 됩니다. 분기처리나 제약을 걸 수 있는 API를 활용해야 합니다.
- robot.txt를 확인해야 합니다.

---

## SETTING DOTENV

puppeteer instagram은 비밀번호 와 아이디를 포함하기 때문에 `.env`파일(환경변수?)로 따로 세팅하여야 합니다. 그리고 `.gitignore`에 `.env`파일을 추가하여 github에 개인정보가 올라가는 불상사를 막습니다.

- `npm i dotenv` 로 dotenv를 설치합니다.
- .env 파일을 프로젝트 루트에 생성합니다.
- .gitignore에 .env 를 추가합니다.
- .env 내부에 아이디와 비밀번호를 설정해 줍니다.
- 패스워드나 아이디 같은 값을 .env에 설정해줍니다.
- 필요한 부분에 .env 에 저장한 값을 가져와 사용합니다.

```js
$ .env;
INSTA_ID = 'HHHHHHHHHHH';
INSTA_PASSWORD = 'BBBBBBBBB';

$ crwaler.js
require('dotenv').config();
await page.type('input[name="username"]', process.env.INSTA_ID)
await page.type('input[name="password"]', process.env.INSTA_PASSWORD)
```

---

## 무작정 구현해보기

> 일단 무작정 이해없이 부딪혀봅니다.

```js
const puppeteer = require('puppeteer');

puppeteer.launch().then(async browser => {
  const page = await browser.newPage();

  // TODO 인스타그램 로그인 페이지에서의 설정을 먼저 해줍니다.
  await page.goto('https://www.instagram.com/accounts/login/');
  await page.waitForSelector('input[name="username"]');

  // TODO 인스타그램 페이지에 접속하기 위해서 계정에 로그인 해야 합니다.
  // SECRET 한 값으로 관리할 필요가 있습니다.
  // DOTENV!!
  await page.type('input[name="username"]', '');
  await page.type('input[name="password"]', '');
  await page.click('button[type="submit"]');

  // TODO 로그인 을 기다린 뒤 리다이렉트 합니다.
  await page.waitForResponse(
    response =>
      response.url() === 'https://www.instagram.com/' &&
      response.status() === 200
  );
  // TODO Gets the full HTML contents of the page, including the doctype.
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

> 역시나 원하는 대로 코드가 작동하지 않으므로 순서에 맞춰서 다시 작성해보겠습니다.(2019.12.02~ )

---

## 태그 읽어오기

<br>

태그를 읽어오기 위해선 해당 페이지를 `evaluate`하여, 원하는 태그를 읽어와야 합니다. 그런데 여기서 문제가 생겨버렸습니다.. 예상과 달리 아래 코드는 undefined 만을 반환합니다. page 자체에서 해당 태그 자체를 읽어오지 못합니다.
`content`의 경우 html을 다 읽어오는 반면에, content로는 읽어오지 못하는 것 같습니다.

```js
// TODO Page에 특정 태그 클래스 네임만 읽어오기
const text = await page.evaluate(() => {
  document.querySelectorAll('article');
});
console.log(text);
```

<center>

--

</center>

`evaluate`을 잘못 사용했었습니다! return을 따로 하였고 아래와 같이 코드를 구성했을 경우, 태그를 통해 데이터를 받아오는걸 볼 수 있었습니다!

```js
const links = await page.evaluate(() => {
  const article = Array.from(document.querySelectorAll('article div a'));
  return article.map(a => a.textContent);
});
```

<center>

--

</center>

또, [Puppeteer Crawling](https://moonsupport.tistory.com/239) 블로그를 참조하니, 아래와 같이 사용하여 태그에 접근할 수 있다는 것을 알았습니다.

```js
const scoreEl = await page.$('.score.score_left .star_score');
```

"태그의 접근은 해당 페이지로 이동 후 .\$ 메소드를 이용하고, 그 중 text만 가져오기 위해서 evaluate 메소드를 이용하였다."<br>
이를 활용해서도 다시 인스타 태그에 접근할 수 있을것 같습니다.

---

## 인스타 사진 클릭하기

<br>

```js
const links = await page.evaluate(() => {
  const article = Array.from(document.querySelectorAll('article div a'));
  return article.map(a => a.textContent);
});
```

이렇게 `querySelectorAll("article div a")` 태그를 읽었을 때 return 값으로 textContent를 주면 빈 스트링을 담은 배열이 반환됩니다. <br>왜냐하면 인스타그램의 a 태그에는 text가 없기 때문입니다. 따라서 저는 a 태그를 클릭하여 해당 사진에 들어가는 코드를 작성해보겠습니다.<br>
<br>

[Select Link](https://stackoverflow.com/questions/51011466/puppeteer-select-link)를 참조하여 클릭 이벤트를 작동시킵니다.

```js
await page.waitForSelector('article div a'); // article 태그 밑, div 태그 밑, a 태그

await Promise.all([
  page.$eval('article div a', el => el.click()),
  page.waitForNavigation()
]).catch(e => console.log(e));

// 스크린샷은 작동하지 않습니다. 하지만 console을 따로 찍어서 확인하지 않으므로 넣어줍니다.
await page.screenshot({ path: '인스타' });
```

---

## 해시태그 읽어오기

인스타 사진을 클릭하는 것 까지 구현이 되었으며, 이제 인스타 사진 내부의 해시태그를 가져와야 합니다.

```js
await page.waitForSelector('article div span a');

const tags = await page.evaluate(() => {
  const div = Array.from(document.querySelectorAll('article div span a'));
  return div.map(a => a.textContent);
});
console.log(tags);
```

<center>

--

</center>

![tags](./hashtag.png)

<center>

읽어오는데에 성공했습니다!

</center>

---

## 크롤링 고도화 하기

이제 저는 하나의 사진에 해당하는 태그를 읽어올 수 있습니다. 보다 많은 데이터를 가공하기 위해서 더많은 사진의 태그를 크롤링해야 합니다. <br>이에 대한 코드를 구상해보도록 하겠습니다.

먼저 클릭한 이미지에서 나가야 합니다. 인스타 그램 사진을 누르면 상단에 X 버튼이 있습니다.
puppeteer로 X를 클릭해 줍니다.

```js
// <button class="ckWGn" > 닫기 </button>
await page.click('button.ckWGn');
```

<center>

-<br>
이제 문제에 대해 고려해야 합니다.

</center>

<br>

![instaa](./instaa.png)

인스타그램 페이지는 위 사진 처럼 `<div>` 안에 이미지 태그가 들어있습니다. 이미지 100개를 크롤링 한다고 가정할때 어떻게 할지 시나리오를 작성해 보겠습니다.

- `<div>` 하나를 클릭한다
- 해시태그를 크롤링 한다
- 크롤링을 마친후 X 버튼을 클릭하여 이전 페이지로 돌아온다.
- 다음 `<div>`를 클릭한다.
- 위 과정을 반복한다.

위 처럼 해야겠다고 생각했었는데, 인스타그램 사진을 클릭한 뒤 잘보면, `<a class="HBoOv coreSpriteRightPaginationArrow"> 이전 또는 다음 </a>` 태그가 존재합니다.
네 그렇습니다 살아남은것 같습니다. 다음 페이지를 클릭한뒤 해시태그를 크롤링을 반복하는 식으로 시나리오를 변경해야 할 것 같습니다.

- X 버튼을 클릭하는 코드를 지웁니다.
- '>' 다음 버튼을 클릭합니다.
- 변한 페이지의 해시태그를 크롤링 합니다.
- '>' 다음 버튼을 클릭합니다.
- 위 과정을 반복합니다.

```js
// 다음 버튼을 클릭합니다.
await page.click('.HBoOv.coreSpriteRightPaginationArrow');
```

<center>
페이지가 잘 이동합니다!<br>
<br>
-
</center>

<br>

반복작업을 어떻게 할지 고민해봅니다. puppeteer 자체에 반복을 도와주는 API가 있는지 모르기때문에, 일단 JS 코드로 구현해보겠습니다.
<br>로직은 매우 간단합니다. 100개의 사진의 해시태그만을 뽑을 것 이기 때문에 while문을 활용하여 코드를 작성합니다.

```js
let count = 0;
// 맨 처음 사진을 클릭하는 코드
while(count < 100){
  ...
  await page.click('.HBoOv.coreSpriteRightPaginationArrow');
  ...
  count++
}

```

콘솔을 찍어보니 원하는 데이터가 출력이 됩니다! 이제 데이터를 담아줄 배열을 추가하여, 안에 넣어줍니다. <br> 데이터 타입을 `Array.from` 으로 배열로 뽑으므로, 보다 데아터 관리가 쉽도록 1차원 배열로 만들기 위해 `concat`을 활용합니다.

![tags](./tags.png)

> 문제가 하나 있습니다. 크롤링 하던중 태그가 없는 사진을 만나게 되면 크롤링을 멈춥니다. 코드에 태그가 없을 경우 에 대한 처리가 필요합니다.

---

## 데이터 가공하기

---

<center>

## ---

## ERROR | ISSUE

</center>

<br>

> <b> - </b> `UnhandledPromiseRejectionWarning: Error: net::ERR_ABORTED` : 리소스를 가져오지 못한다.. | 애초에 검색창에서 '제주도'를 입력해서 페이지에 접근하려 `page.type( )`을 활용하려 했으나 태그 class를 읽지못해서(능력부족 ㅠㅠ) 다른 방법을 찾아보다가, 그냥 제주도 링크를 `page.goto( )`로 주고, `launch( )에 headless 설정` 을하여 chronium으로 접근 하는 방법을 찾았고, 콘솔에 찍히는걸 확인했다. <br> [참고]: https://github.com/puppeteer/puppeteer/issues/1477

> <b>-</b> **dotenv 설정**을 코드를 어느정도 구현한 상태에서 했었는데, ignore처리가 잘 된걸 확인했지만, github에 올라갈때는 이전 커밋 내역들이 함께올라가게 되어서, 테스트하며 했던 시크릿 키 값이 담긴 코드가 그대로 올라가버렸다. 커밋을 지우거나 / 파일을 새로 파거나 ..

> <b>-</b> **multiple class selector** | 인스타그램은 class 명이 `<a class="HBoOv coreSpriteRightPaginationArrow"></a>` 이런식인 경우가 많은데,<br>
> 이를 선택하기 위해선 multiple select가 필요했다. `.HBoOv.coreSpriteRightPaginationArrow` 이런식으로 말이다.<br> [참고]: https://stackoverflow.com/questions/2554839/select-element-based-on-multiple-classes > <br>

> <b>-</b> `UnhandledPromiseRejectionWarning: TimeoutError: waiting for selector "article div span a" failed: timeout 30000ms exceeded` | 크롤링을 하다보면 잘되던 코드가 갑자기 TimeOutError가 걸리며 크롤링을 해오지 못한다. 이럴때 vscode를 종료후 다시 실행시킨뒤 코드를 실행하면 다시 작동한다.. (임시 방편)
> 알고보니까 새로운 배열에 생성된 태그들을 push 해주는 부분에서 에러가 난거 같다.
> push 할때 timeouterror가 빈번하다..
> 크로니움에서 `Failed to load resource: the server responded with a status of 429 ()`
> 이 에러를 발견했다. 이에 대한 검색이 필요.

<hr />
<center>

Reference <br>
[PUPPETEER](https://github.com/puppeteer/puppeteer/blob/master/docs/api.md)<br>
[PupGithub](https://github.com/GoogleChrome/puppeteer)<br>
[INSTA-Package](https://www.npmjs.com/package/puppeteer-instagram)<br>
[Puppeteer Example](https://github.com/checkly/puppeteer-examples#amazon-search)

</center>
