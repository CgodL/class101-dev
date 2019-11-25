---
title: 'DOCKER'
date: '2019-10-17T11:22:56'
thumbnail: '/images/thumbnails/dok.png'
author: 'channing'
tags: ['Docker']
description: 'Docker 설정 - 도커(Docker)는 리눅스의 응용 프로그램들을 소프트웨어 컨테이너 안에 배치시키는 일을 자동화하는 오픈 소스 프로젝트입니다.'
---

![doc](./dok.png)

---

<br>
<br>

**도커(Docker)는 리눅스의 응용 프로그램들을 소프트웨어 컨테이너 안에 배치시키는 일을 자동화하는 오픈 소스 프로젝트입니다.**

서버에서 이야기하는 컨테이너도 이와 비슷한데 다양한 프로그램, 실행환경을 컨테이너로 추상화하고 동일한 인터페이스를 제공하여 프로그램의 배포 및 관리를 단순하게 해줍니다.

백엔드 프로그램, 데이터베이스 서버, 메시지 큐등 어떤 프로그램도 컨테이너로 추상화 할 수 있고 조립 PC, AWS, Azure, Google Cloud 등 어디에서든 실행할 수 있습니다.

![Docker](./docker.png)

### 서버 분산 처리 용이

![Docker-flow](./docker-flow.png)

Docker 에서 ubuntu image를 실행 해보겠습니다.<br>
각각의 선호 하는 운영체제의 패키지 관리자가 이미지로 도커에서 구성되어 있습니다.

#### 도커의 특징

- 패키지 관리자가 설치된 이미지를 받아옵니다.
- push / pull 명령이 존재합니다.
- 용량이 큰 이유 <br>
  : 패키지 시스템만 있으면 사용이 불편, 커널만 제외한 리눅스 배포판이 전부 다 들어있습니다. 리눅스를 설치할 때 필요한 공유 자원들 / 라이브러리들
- 이미지 : 실행 파일과 라이브러리들의 조합
- 컨테이너 : 이미지를 실행한 상태 <br>
  : rough 하게 하면 이미지는 실행 파일, 프로세스가 컨테이너

<hr />
<center>

### 도커세팅

</center>

> 먼저 설치한 Docker Version을 확인합니다

<img width="500" alt="스크린샷 2019-09-16 오후 10 29 51" src="https://user-images.githubusercontent.com/48753593/64963450-3d064c00-d8d4-11e9-992c-2bbfd368c58f.png">

> 현재 갖고있는 images를 확인합니다 [ 원래는 hello-world 만이 예시로 담겨 있습니다. ]

<img width="547" alt="스크린샷 2019-09-16 오후 10 32 55" src="https://user-images.githubusercontent.com/48753593/64963453-3d9ee280-d8d4-11e9-85a1-c6c65cd3e320.png">

> docker pull ubuntu:14.04

- ubuntu 운영체제 통째로 가져오는 것이 아닌 패키지 매니저만 가져오는 과정입니다.
- 용량은 docker images 로 확인이 가능합니다.<br>
- 여러가지 라이브러리가 들어있습니다. [ 기본적으로 포함 되어 있습니다. ]<br>
- 용량이 큰게 싫다면 이미지를 직접 구성할 수 있습니다.

<img width="591" alt="스크린샷 2019-09-16 오후 10 34 44" src="https://user-images.githubusercontent.com/48753593/64963455-3d9ee280-d8d4-11e9-9fc1-a84863afe6d7.png">

> ubuntu: 14.04 버전이 추가된 것을 알 수 있습니다.

<img width="579" alt="스크린샷 2019-09-16 오후 10 35 31" src="https://user-images.githubusercontent.com/48753593/64963458-3d9ee280-d8d4-11e9-9358-fbc8264cc10b.png">

> docker run -it ubuntu:14.04 /bin/bash

- /bin/bash 는 우분투 안 실행파일 이며 위와 같이 명령어를 입력하면 안으로 들어갑니다.<br>
- /bin/bash 를 붙여야하는 이유: 실행할 메인 실행파일을 지정해주어야 합니다. <br>
- 컨테이너 안에 있는 실행파일을 실행해야 컨테이너가 유지가 됩니다.

<img width="461" alt="스크린샷 2019-09-16 오후 10 43 31" src="https://user-images.githubusercontent.com/48753593/64963452-3d9ee280-d8d4-11e9-98c6-2fba93467a86.png">

> 새로운 운영체제에 들어간 상태 [ docker 로 생성한 가상 환경 ]

리눅스의 기본적인 디렉토리 <br>
[ i 는 Interactive 사용자가 입출력을 할 수 있는 상태 | t 는 가상 터미널 환경을 emulation 하겠다 는 의미 입니다. ]
<img width="678" alt="스크린샷 2019-09-16 오후 10 44 13" src="https://user-images.githubusercontent.com/48753593/64963456-3d9ee280-d8d4-11e9-8a54-9368007f30e2.png">

> /bin/bash 실행여부를 확인 합니다.

<img width="344" alt="스크린샷 2019-09-16 오후 10 45 35" src="https://user-images.githubusercontent.com/48753593/64963459-3d9ee280-d8d4-11e9-93b2-c0dc124a15c6.png">

> 다른 사용자들이 만든 image를 확인할 수 도 있습니다

<img width="698" alt="스크린샷 2019-09-16 오후 10 36 38" src="https://user-images.githubusercontent.com/48753593/64963451-3d064c00-d8d4-11e9-8960-87315a222b29.png">

> 운영체제 (여기선 ubuntu) 내에서 apt-get update 를 먼저 실행합니다.

<img width="520" alt="스크린샷 2019-09-16 오후 10 46 37" src="https://user-images.githubusercontent.com/48753593/64963460-3e377900-d8d4-11e9-8976-8c70bf225724.png">

> docker에서 생성한 운영체제(가상 머신) 에 git을 설치합니다.<br>
> apt-get install git

<img width="487" alt="스크린샷 2019-09-16 오후 10 48 08" src="https://user-images.githubusercontent.com/48753593/64963463-3e377900-d8d4-11e9-9440-52c28e020ef2.png">

<hr />

### Docker-Compose

컨테이너를 Stack-Service-Task 라는 세가지 가상 계층으로 구분해 관리합니다. <br>
하나의 웹 어플리케이션을 만들기 위해서는 여러가지의 컴포넌트들이 필요합니다. <br>

도커의 compose는 각 컴포넌트의 Configuration과 dependency등을 yml이라는 하나의 파일에 정의하고<br>
이 파일에 작성된 대로 도커에 올려주는 (deploy 해주는) 툴 입니다. 포트는 몇이고, 컨테이너의 이름은 뭐고, 로그 파일은 어디에 저장하고 이런 설정들을 yml 파일 안에서 명시하면 그 내용 (stack이라고 부릅니다) 그대로 docker compose를 이용해 한번에 docker에 올릴 수 있습니다.

버전정보가 클라이언트와 서버로 나뉘어져 있습니다. 도커는 하나의 실행파일이지만 실제로 클라이언트와 서버역할을 각각 할 수 있습니다. 도커 커맨드를 입력하면 도커 클라이언트가 도커 서버로 명령을 전송하고 결과를 받아 터미널에 출력해 줍니다.

![docker-host](https://user-images.githubusercontent.com/48753593/64958176-71c0d600-d8c9-11e9-84cf-63edb4a367ff.png)

### pip install

docker를 사용하는 중에 pip3 install 과 같이 패키지를 설치하려고 할때, 도커내부가 아닌 전역 또는 폴더에서 install 시 도커 내부 에서는 제대로 설치가 되지 않을 수 있습니다.

따라서 install 시에는 docker-compose exec 'filename' /bin/bash 와 같이 도커 컨테이너 내부에 들어간 후에 설치하게 되면 위와 같은 에러를 피할 수 있습니다.

---

<center>

### ---

### ERROR | ISSUE

</center>

> <b> - </b> 
    

<hr />

<center>

Reference <br>
[Docker](https://aws.amazon.com/ko/docker/) <br>

</center>
