---
title: 'EXPO'
date: '2019-12-08T11:10:56'
thumbnail: '/images/thumbnails/expo.png'
author: 'channing'
tags: ['Frontend', 'Expo', 'React', 'ReactNative', 'App']
description: '엑스포에 대해서 학습해 봅시다!'
---

![expo](expo.png)

<center>
공식 홈페이지 레퍼런스를 보고 정리하면서 학습하겠습니다.
</center>

### 엑스포란?

엑스포는 프레임워크 이고 리액트 앱을 위한 플랫폼 입니다. 리액트 네이티브를 중심으로 구축된 툴 / 서비스 이며 자바스크립트/타입스크립트 코드 베이스에서 iOS, Android, web app 의 개발, 빌드, 배포 전 과정을 신속하게 도와주는 기능을 갖고 있습니다.

---

### Workflows

엑스포로 어플리케이션을 개발할때, "managed workflow" 와 "bare workflow" 두 가지 접근방식이 있습니다.

- "managed workflow"는 오직 JS/TS 와 Expo 도구와 서비스만으로 개발하는 workflow 입니다.

- "bare workflow"는 native 프로젝트의 모든 부분을 완벽하게 컨트롤 할 수 있으며, Expo 툴은 큰 역할을 차지하지 않습니다.
  > React Native를 Expo 없이 사용하는 워크플로우가 "bare workflow" 입니다.

---

### Managed Workflow

Managed workflow 는 리액트/리액트 네이티브의 CRA와 비슷합니다. `expo-cli`를 사용하여 개발하는 앱 입니다.<br> Apps are built with the managed workflow using the expo-cli, the Expo client on your mobile device, and our various services: push notifications, the build service, and over-the-air (OTA) updates. Expo tries to manage as much of the complexity of building apps for you as we can, which is why we call it the managed workflow. A developer using the managed workflow doesn't use Xcode or Android Studio, they just write JavaScript code and manage configuration for things like the app icon and splash screen through app.json. The Expo SDK exposes an increasingly comprehensive set of APIs that give you the power to access device capabilities like the camera, biometric authentication, file system, haptics, and so on.

> Managed 되는게 싫다면 `eject` 하면 됩니다! 선택은 본인의 몫.

---

### 설치

`Expo CLI` 를 통해서 엑스포를 설치해보겠습니다.

- 노드가 설치되어 있어야 합니다.
- Git repo를 생성해야 합니다.
- npm install -g expo-cli
- expo init
- Expo 앱을 설치 후 카메라로 QR코드를 스캔 합니다.<br><br>
  > 스캔후, 접속에러가 날 수 있는데요, 이와 같이 해결할 수 있습니다. <br> First, make sure that you are on the same wifi network on your computer and your device.
  > If it still doesn't work, it may be due to the router configuration — this is common for public networks. You can work around this by <b>choosing the "Tunnel" connection type in Expo Dev Tools</b>, then scanning the QR code again.
  > ![e](./e.png)

---

### 시작

---

<center>

### ---

### ERROR | ISSUE

</center>

>

<hr />
<center>

Reference <br>
[Expo](https://docs.expo.io/versions/latest/)<br>

</center>
