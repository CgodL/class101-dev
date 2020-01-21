---
title: 'PYTHON SCRAPER'
date: '2019-10-30T16:06:56'
thumbnail: '/images/thumbnails/beautifulsoup.png'
author: 'channing'
tags: ['Scraper', 'Python', 'Crawler']
description: 'Python Scraper 만들기 - Python을 활용하여 Web Scraper 만들어 보겠습니다. 목표는 Python을 활용하여 Indeed 사이트의 Python 구인/구직현황 정보를 스크랩핑 하는 것 입니다.'
---

![beautiful](./beautifulsoup.png)

### Python Scraper

Python을 활용하여 <b>Web Scraper</b> 만들어 보겠습니다.<br> 목표는 Python을 활용하여 Indeed 사이트의 Python 구인/구직현황 정보를 스크랩핑 하는 것 입니다.

- 먼저 Indeed 사이트에서 python을 검색 후 고급설정에서 목록이 50개 까지 보이도록 설정합니다.
- Jupyter 또는 Repl.it을 활용하겠습니다.

---

### Scraping 이란?

정해진 특정 웹사이트에서 특정 데이터를 추출하고 가공하는 작업으로 필요한 정보 만을 스크랩하는 행위

---

### URL에서 DATA 가져오기

- 먼저 스크랩핑 하고자 하는 사이트의 <b>URL</b>에서 데이터를 가져와야 합니다.
  이를 위해서 **request 라이브러리**을 이용하여 원하는 사이트(URL)에 정보를 가져옵니다.

* [Requests](https://github.com/psf/requests) : Requests is an elegant and simple HTTP library for Python

```python
이와 같은 식으로 사용합니다.
>>> import requests
>>> r = requests.get('https://api.github.com/user', auth=('user', 'pass'))
>>> r.status_code
200
>>> r.headers['content-type']
'application/json; charset=utf8'
>>> r.encoding
'utf-8'
>>> r.text
u'{"type":"User"...'
>>> r.json()
{u'disk_usage': 368627, u'private_gists': 484, ...}
```

```python
# main.py 라는 파일을 생성합니다.
import requests
indeed_result = requests.get('https://kr.indeed.com/jobs?q=python&limit=50')
# html 파일을 .text를 통해 가져옵니다.
print(indeed_result.text)
```

<br>

---

### HTML에서 특정 DATA 추출하기

<br>

이제 저는 모든 페이지에 구인/구직 정보를 추출할 겁니다.
현재 스크래핑 하고자 하는 사이트(Indeed)의 페이지가 어디까지 있는지를 모르기 때문에 페이지에 관한 정보를 추출해야 합니다. 이를 위해서 **Beautiful Soup**을 활용하겠습니다.

- **[Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/)** <br>

HTML 에서 특정 정보만 뽑아오기 위해서 **Beautiful Soup**을 사용합니다.

- 먼저 beautifulsoup를 설치합니다.

```python
pip3 install beautifulsoup4
```

- [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)의 사용 방법을 확인합니다.

```python
from bs4 import BeautifulSoup
# soup은 기본적으로 data extractor 입니다.
soup = BeautifulSoup(html_doc, 'html.parser')

print(soup.prettify())
```

- Beautiful Soup을 이용하여 Indeed 사이트의 페이지 데이터를 추출하겠습니다.<br>
  <b>페이지에 대한 정보만을 뽑아올 것이기 때문에 Inspect 를 통해 해당 URL(Indeed)의 페이지 부분을 검사합니다.</b>

```python
import requests
from bs4 import BeautifulSoup
indeed_result = requests.get('https://kr.indeed.com/jobs?q=python&limit=50')

# 원하는 데이터는 페이지네이션 부분이며 div class 안에 a 태그안 span 태그에 원하는 데이터가 있습니다.

# extract information HTML
indeed_soup = BeautifulSoup(indeed_result.text, 'html.parser')

# find는 찾고자 하는 데이터를 아래와 같이 찾을 수 있습니다.
pagination = indeed_soup.find("div", {"class":"pagination"})

# find_all 은 list 형태로 parameter에 해당하는 모든 데이터가 뽑힙니다.
links = pagination.find_all('a')

# 리스트 이기 때문에 반복문을 돌릴 수 있습니다.
for link in links:
  print(link.find("span"))

# CASE 1
pages = []
for link in links:
    pages.append(link.find("span"))
# 마지막 페이지 연관 없는 데이터를 빼고 처리합니다.
pages = pages[:-1]

# CASE 2
# 위 과정을 보다 쉽게 할 수 있습니다.
# 바로 string을 사용하는 것 입니다.
# string은 a 링크 태그내부에 string이 하나만 있을 경우에 쓰기 적절한 방법으로, 원하는 값을 string으로 추출해낼 수 있습니다.
pages = []
for link in links:
    pages.append(link.string)

# 리스트 내부값을 intger로 변환합니다.
pages = []
for link in links[:-1]:
    pages.appned(int(link.string))

# 마지막 페이지를 찾습니다.
max_page = pages[-1]
```

---

### REQUESTING EACH PAGE

저는 BeautifulSoup을 사용하여 마지막 페이지가 몇 페이지 인지를 알았습니다.<br>
현재 Indeed Python의 구직/구인 현황은 11 페이지까지 있습니다. 이 말은 즉 11번의 request를 해야 한다는 말이기도 합니다.

- URL을 살펴보겠습니다.<br>
  1 Page : https://kr.indeed.com/jobs?q=python&limit=50<br>
  2 Page : https://kr.indeed.com/jobs?q=python&limit=50&start=50<br>
  3 Page : https://kr.indeed.com/jobs?q=python&limit=50&start=100<br><br>
  1 Page의 경우 첫 페이지이기 때문에 0 - 50 까지의 데이터가 출력되어 있습니다.<br>
  2 Page의 경우 50번째의 데이터부터 시작하기 때문에 start 에 50이 들어가있습니다.<br>
  <b>즉 각 페이지마다 시작 ( start ) 되는 값이 다르단걸 URL을 통해서도 알 수 있습니다.</b>

```python
# range는 0 부터 parameter 까지 사이의 값을 모두 갖고 있습니다.
# range gives you sequence
print(range(max_page)) # range(0, 11)

for n in range(max_page):
    # start 가 50개씩 늘어나는 것을 고려하여 코드를 작성합니다.
    print(f"start={n * 50}")

```

- **리팩토링**을 하겠습니다.

```python
# Indeed.py 라는 파일을 생성합니다.
# Indeed 파일 안에 main.py에 있던 코드를 함수로 만들어줍니다.

import requests
from bs4 import BeautifulSoup

# URL에 start 값을 추가하는 코드를 구현할 것 이기 때문에 변수로 설정합니다.
LIMIT = 50
URL = f"https://kr.indeed.com/jobs?q=python&limit={LIMIT}"

def extract_indeed_pages():
  result = requests.get(URL)
  # extract information HTML
  soup = BeautifulSoup(result.text, 'html.parser')
  pagination = soup.find("div", {"class":"pagination"})
  # list
  links = pagination.find_all('a')
  pages = []
  for link in links[:-1]:
    pages.append(int(link.string))

  max_page = pages[-1]
  return max_page

def extract_indeed_jobs(last_page):
    for page in range(last_page):
        result = requests.get(f"{URL}&start={page*LIMIT}")
        print(result.status_code)
```

```python
# main.py 에서는 indeed.py의 함수 extract_indeed_pages 를 import 해줍니다.
from indeed import extract_indeed_pages, extract_indeed_jobs

last_indeed_page = extract_indeed_pages()
indeed_jobs = extract_indeed_jobs(last_indeed_page)
```

---

### Extracting Titles

이번에는 본문에서 제목만을 추출 하겠습니다.<br>
추출 방식은 위와 같이 본문에 해당하는 부분을 Inspect를 통해 페이지 를 확인합니다.

```python
def extract_indeed_jobs(last_page):
  jobs = []
  for page in range(last_page):
    result = requests.get(f"{URL}&start={page*LIMIT}")
    soup = BeautifulSoup(result.text, 'html.parser')
    results = soup.find_all('div', {"class": "jobsearch-SerpJobCard"})
    for result in results:
        title = result.find('div', {'class': 'title'}).find("a")["title"]
        # print(title)
  return jobs
```

---

### Extracting Company

회사명 역시 같은 방법으로 추출 합니다.<br>

```python
company = result.find('span', {'class': 'company'})
      company_anchor =  company.find('a')
      if company_anchor is not None:
        company = str(company_anchor.string)
      else:
        company = str(company.string)
      company = company.strip()
      print(company)
```

---

### Extracting Locations and Finishing up

다시 Recap 합니다.

```python
# indeed.py

import requests
from bs4 import BeautifulSoup
LIMIT = 50
URL = f"https://kr.indeed.com/jobs?q=python&limit={LIMIT}"


def extract_indeed_pages():
  result = requests.get(URL)
  # extract information HTML
  soup = BeautifulSoup(result.text, 'html.parser')
  pagination = soup.find("div", {"class":"pagination"})
  #list
  links = pagination.find_all('a')
  pages = []
  for link in links[:-1]:
    pages.append(int(link.string))

  max_page = pages[-1]
  print(max_page)
  return max_page

def extract_job(html):
  title = html.find('div', {'class': 'title'}).find("a")["title"]
  # extracting company
  company = html.find('span', {'class': 'company'})
  company_anchor =  company.find("a")
  if company_anchor is not None:
    company =str(company_anchor.string)
  else:
    company = str(company.string)
  company = company.strip()
  location = html.find('div', {'class': 'recJobLoc'})["data-rc-loc"]
  job_id = html["data-jk"]
  return {'title': title, 'company': company, 'location': location, "link": f"https://www.indeed.com/viewjob?jk={job_id}"}


def extract_indeed_jobs(last_page):
  jobs = []
  for page in range(last_page):
    print(f"Scrapping page {page}")
    result = requests.get(f"{URL}&start={page*LIMIT}")
    soup = BeautifulSoup(result.text, 'html.parser')
    results = soup.find_all('div', {"class": "jobsearch-SerpJobCard"})
    for result in results:
      job = extract_job(result)
      jobs.append(job)
  return jobs


```

```python
# main.py
from indeed import extract_indeed_pages, extract_indeed_jobs

last_indeed_page = extract_indeed_pages()

indeed_jobs = extract_indeed_jobs(last_indeed_page)

print(indeed_jobs)
save_to_file(jobs)

```

---

### Make CSV

스크래핑한 데이터를 CSV 파일 형식으로 변환 합니다.

```python
def save_to_file(jobs):
    file = open("jobs.csv", mode="w")
    writer = csv.writer(file)
    writer.writerow(["title", "company", "location", "link"])
    for job in jobs:
        writer.writerow(list(job.values()))
    return
```

<br>

<hr />

<center>

Reference <br>
[Nomad](https://academy.nomadcoders.co/courses/enrolled/681401)<br>
[Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) <br>

</center>
