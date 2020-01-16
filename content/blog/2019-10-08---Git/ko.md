---
title: 'GIT'
date: '2019-10-08T16:09:56'
thumbnail: '/images/thumbnails/gi.png'
author: 'channing'
tags: ['Git', 'git', 'git workflow', 'git ignore']
description: 'Git'
---

![git](./gi.png)

---

### git Ignore

AWS access key 처럼 github에 올라가서는 안되는 값의 경우 **git ignore**를 해주어야 합니다. [보안상 매우 중요한 부분]

```js
// git ignore file을 폴더 루트에 생성합니다.
$.gitignore;
```

```
*.env
.django.env
uploads/
```

위 처럼 ignore 하고 싶은 데이터가 담긴 파일명 자체를 ignore 안에 추가하거나, 확장자 자체를 ignore 할 수 있습니다.<br>
ignore 된 파일은 editor 상에서 회색으로 바뀌고, github에도 파일이 올라가지 않습니다.

---

### git commit reset

이전 버전 또는 상태를 돌리기 위해선 **git commit reset**을 통해 되돌릴 수 있습니다.<br>
git log를 통해 commit 이력을 조회 및 version id를 확인 및 복사 합니다.
`git reset --hard "version id"` git reset 명령어를 통해 이전 커밋으로 되돌아 갑니다.

```git
$ git log
$ git reset --hard "version id"
```

---

### git push error

> <b>-</b> **git push error** <br>
> ! [rejected] master -> master (non-fast-forward)<br>
> error: failed to push some refs to 'https://github.com/...<br>
> hint: Updates were rejected because the tip of your current branch is behind<br>
> hint: its remote counterpart. Integrate the remote changes (e.g.<br>
> hint: 'git pull ...') before pushing again.<br>
> hint: See the 'Note about fast-forwards' in 'git push --help' for details.<br>
> 이 에러가 왜 나는건지 이제야 알았다.. 작업을 하던 vscode에서가 아닌, 깃헙 자체에서 README.md 파일을 추가 해줬었는데 vscode 커밋 내역에는 없던 README.md 파일이 있으니 에러가 날 수 밖에.. 작업은 한 곳에서 해야겠다.

---

### git rebase

> Q: 마스터랑 데브가 잇는데, 마스터에서 작업햇고 데브에서 마스터를 리베이스 하면 동일해지나? 부모의 내용이 다 따라오나 ? <br>
> A: dev에서 master rebase하면 갖고올겁니다.

git rebase 사용법(dev 브랜치에서 master 브랜치 가져오기) - merge 와 비슷하지만 git 그래프가 깔끔해 짐.

```git
git checkout -b dev
dev 2 work
git commit -m'dev 2 작업' -a
git checkout master
git pull
git checkout dev
git rebase master

#1. 충돌 파일 수정
git add .
git rebase --continue
git checkout master
git merge dev
git push

#2. 심각한 충돌 등의 이유로 취소시
git rebase --abort
```

---

<center>

Reference <br>
[git_reset](https://www.popit.kr/%EA%B0%9C%EB%B0%9C%EB%B0%94%EB%B3%B4%EB%93%A4-git-back-to-the-future/) <br>

</center>
