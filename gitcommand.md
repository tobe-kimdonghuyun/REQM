# 📘 Git 명령어 가이드

> **업무 흐름 중심 · 실전 예시 포함**

---

## 📌 현재 프로젝트 설정

| 항목            | 값                                          |
| --------------- | ------------------------------------------- |
| **원격 저장소** | `https://github.com/tobe-kimdonghuyun/REQM` |
| **브랜치**      | `main` (기본), `master` (보조)              |

---

## 📑 목차

1. [저장소 설정](#1-저장소-설정-및-초기화)
2. [기본 작업 흐름](#2-기본-작업-흐름-add--commit--push)
3. [브랜치 관리](#3-브랜치-관리)
4. [Cherry-pick](#4-cherry-pick-특정-커밋-가져오기)
5. [파일 단위 가져오기](#5-다른-브랜치에서-특정-파일만-가져오기)
6. [브랜치 동기화](#6-브랜치-동기화-master--main)
7. [되돌리기](#7-변경-사항-되돌리기)
8. [Stash 임시 저장](#8-stash-임시-저장)
9. [로그 확인](#9-로그-및-이력-확인)
10. [에러 해결](#10-자주-발생하는-에러-해결)

---

## 1. 저장소 설정 및 초기화

### 저장소 복제

```bash
# 전체 저장소 복제
git clone https://github.com/tobe-kimdonghuyun/REQM.git

# 특정 브랜치만 복제
git clone -b main https://github.com/tobe-kimdonghuyun/REQM.git
```

### 원격 저장소 확인 및 변경

```bash
# 현재 원격 저장소 확인
git remote -v
# → origin  https://github.com/tobe-kimdonghuyun/REQM (fetch)
# → origin  https://github.com/tobe-kimdonghuyun/REQM (push)

# URL 변경
git remote set-url origin https://github.com/새계정/새저장소.git
```

---

## 2. 기본 작업 흐름 (Add → Commit → Push)

### 전체 흐름 예시

**① 변경 사항 확인**

```bash
git status
# → modified:   search.py
# → new file:   utils.py
```

**② 변경 내용 상세 확인**

```bash
git diff search.py
```

**③ 스테이징 (커밋 준비)**

```bash
# 특정 파일만
git add search.py

# 모든 변경 파일
git add .
```

**④ 커밋**

```bash
git commit -m "search.py 파일 수정"
```

**⑤ 원격에 업로드**

```bash
git push origin main
```

> 💡 **TIP:** 마지막 커밋 메시지 수정하려면 `git commit --amend -m "수정된 메시지"`

### 원격에서 가져오기

```bash
# 원격 변경사항 가져오고 병합
git pull origin main

# 원격 정보만 가져오기 (병합 안함)
git fetch origin
```

---

## 3. 브랜치 관리

### 브랜치 목록 확인

```bash
git branch          # 로컬 브랜치
# → * main
# →   master

git branch -a       # 모든 브랜치 (로컬 + 원격)
```

### 브랜치 생성 및 전환

```bash
# 브랜치 생성
git branch feature-login

# 브랜치 전환
git switch feature-login
# 또는
git checkout feature-login

# 생성 + 전환 동시에
git checkout -b feature-login
예시 :
```

### 브랜치 병합 (Merge)

```bash
# 1. 병합 대상 브랜치로 이동
git switch main

# 2. 다른 브랜치 병합
git merge feature-login

# 3. 원격에 반영
git push origin main
```

### 브랜치 삭제

```bash
# 로컬 브랜치 삭제
git branch -d feature-login

# 강제 삭제 (병합 안된 브랜치)
git branch -D feature-login

# 원격 브랜치 삭제
git push origin --delete feature-login
```

---

## 4. Cherry-pick (특정 커밋 가져오기)

### 4-1. Cherry-pick 전체 흐름

**① 대상 브랜치로 이동**

```bash
git switch main
```

**② 원격 저장소 최신화**

```bash
git fetch origin
```

**③ 가져올 커밋 해시 확인**

```bash
git log origin/master --oneline
# → a1b2c3d search.py 파일 수정
# → e4f5g6h 로직 리팩토링
# → h7i8j9k 초기 설정
```

**④ cherry-pick 실행**

```bash
# 단일 커밋
git cherry-pick a1b2c3d

# 여러 커밋
git cherry-pick a1b2c3d e4f5g6h

# 연속 범위 (e4f5g6h ~ a1b2c3d)
git cherry-pick e4f5g6h^..a1b2c3d
```

**⑤ 원격에 반영**

```bash
git push origin main
```

### 4-2. ⚠️ 충돌 발생 시 해결 방법

**① 상태 확인**

```bash
git status
# → both modified: search.py
```

**② 충돌 파일 열어서 수동 해결**

> ⚠️ **충돌 마커 정리 필요:**
>
> ```
> <<<<<<< HEAD        ← 현재 브랜치 내용
> 현재 코드
> =======             ← 구분선
> 가져온 코드
> >>>>>>> a1b2c3d     ← 가져온 커밋 내용
> ```
>
> 위 마커들을 모두 삭제하고, 원하는 코드만 남기세요.

**③ 해결된 파일 스테이징**

```bash
git add search.py
# 또는 모든 파일
git add -A
```

**④ cherry-pick 계속**

```bash
git cherry-pick --continue
```

**⑤ 원격에 반영**

```bash
git push origin main
```

### 4-3. Cherry-pick 중단 (원상복구)

```bash
git cherry-pick --abort
```

> 📝 **NOTE:** 이 명령어는 cherry-pick 작업 전 상태로 완전히 복구합니다.

---

## 5. 다른 브랜치에서 특정 파일만 가져오기

### master 브랜치의 search.py를 main 브랜치에 적용하는 예시

**① main 브랜치로 이동**

```bash
git switch main
```

**② 원격 최신화**

```bash
git fetch origin
```

**③ 특정 브랜치의 파일 가져오기** ⭐

```bash
git checkout origin/master -- search.py
```

**④ 변경 내용 확인**

```bash
git diff
```

**⑤ 커밋 및 푸시**

```bash
git add search.py
git commit -m "master 브랜치에서 search.py 가져옴"
git push origin main
```

---

## 6. 브랜치 동기화 (master ↔ main)

### 방법 A: 완전히 덮어쓰기 (강제)

```bash
git checkout main
git reset --hard master
git push origin main --force-with-lease
```

> ⚠️ **주의:** main 브랜치의 모든 내용이 master로 덮어써집니다!

### 방법 B: 병합 방식 (안전)

```bash
git checkout main
git merge master
git push origin main
```

### 방법 C: 원격 기준으로 리셋 (실전에서 많이 사용)

```bash
git checkout main
git reset --hard origin/master
git push origin main --force-with-lease
```

---

## 7. 변경 사항 되돌리기

### 스테이징 취소

```bash
# 특정 파일 언스테이지
git reset search.py

# 모든 파일 언스테이지
git reset
```

### 작업 디렉토리 변경 취소

```bash
# 특정 파일 되돌리기
git checkout -- search.py

# 모든 변경 취소
git reset --hard
```

> ⚠️ **주의:** `--hard`는 되돌릴 수 없습니다!

### 커밋 되돌리기

```bash
# 새 커밋으로 되돌리기 (이력 유지, 권장)
git revert a1b2c3d
git push origin main

# 특정 커밋으로 리셋 (이력 삭제, 주의!)
git reset --hard a1b2c3d
git push origin main --force-with-lease
```

---

## 8. Stash (임시 저장)

> 📝 **언제 사용?** 작업 중 급하게 다른 브랜치로 전환해야 할 때, 현재 변경 사항을 임시로 저장합니다.

```bash
# 임시 저장
git stash
git stash push -m "로그인 기능 작업 중"

# 저장 목록 확인
git stash list
# → stash@{0}: 로그인 기능 작업 중
# → stash@{1}: WIP on main

# 적용 (삭제 안함)
git stash apply

# 적용 + 삭제
git stash pop

# 특정 stash 적용
git stash apply stash@{1}

# stash 삭제
git stash drop stash@{0}
```

---

## 9. 로그 및 이력 확인

### 커밋 로그 확인

```bash
# 기본 로그
git log --oneline
# → a1b2c3d search.py 파일 수정
# → e4f5g6h 로직 리팩토링

# 그래프로 보기
git log --oneline --graph --all

# 특정 파일 이력
git log -- search.py

# 커밋 메시지 검색
git log --grep="수정"
```

### 상세 정보 확인

```bash
# 특정 커밋 상세
git show a1b2c3d

# 모든 작업 이력 (복구용)
git reflog
```

---

## 10. 자주 발생하는 에러 해결

---

### 🔴 에러 1: Merge 충돌 (CONFLICT)

**에러 메시지:**

```
Auto-merging search.py
CONFLICT (content): Merge conflict in search.py
Automatic merge failed; fix conflicts and then commit the result.
```

**원인:** 두 브랜치에서 같은 파일의 같은 부분을 다르게 수정했을 때 발생

**해결 방법:**

**① 충돌 파일 확인**

```bash
git status
# → both modified: search.py
```

**② 충돌 파일 열어서 마커 정리**

```
<<<<<<< HEAD
console.log("main 브랜치 코드");
=======
console.log("feature 브랜치 코드");
>>>>>>> feature-branch
```

→ 원하는 코드만 남기고 `<<<<<<<`, `=======`, `>>>>>>>` 마커 모두 삭제

**③ 해결 후 커밋**

```bash
git add search.py
git commit -m "Merge conflict 해결: search.py"
```

**④ (선택) 충돌 해결 도구 사용**

```bash
git mergetool
```

---

### 🔴 에러 2: "fatal: refusing to merge unrelated histories"

**에러 메시지:**

```
fatal: refusing to merge unrelated histories
```

**원인:** 서로 관련 없는 두 저장소를 병합하려고 할 때 발생 (예: 새 원격 저장소 연결)

**해결 방법:**

```bash
git pull origin main --allow-unrelated-histories
```

> 📝 **NOTE:** 이 옵션 사용 후 충돌이 발생하면 위의 '에러 1' 방법으로 해결

---

### 🔴 에러 3: "error: failed to push some refs"

**에러 메시지:**

```
error: failed to push some refs to 'https://github.com/tobe-kimdonghuyun/REQM.git'
hint: Updates were rejected because the remote contains work that you do not have locally.
```

**원인:** 원격 저장소에 로컬에 없는 커밋이 있을 때 발생

**해결 방법 A: Pull 후 Push (권장)**

```bash
git pull origin main
# 충돌 발생 시 해결
git push origin main
```

**해결 방법 B: Rebase 후 Push**

```bash
git pull --rebase origin main
git push origin main
```

**해결 방법 C: 강제 Push (⚠️ 주의!)**

```bash
git push origin main --force-with-lease
```

> ⚠️ **주의:** 다른 사람의 커밋을 덮어쓸 수 있으므로 혼자 작업할 때만 사용!

---

### 🔴 에러 4: "fatal: You have not concluded your merge (MERGE_HEAD exists)"

**에러 메시지:**

```
fatal: You have not concluded your merge (MERGE_HEAD exists).
Please, commit your changes before you merge.
```

**원인:** 이전 merge 작업이 완료되지 않은 상태에서 다른 작업 시도

**해결 방법 A: Merge 완료하기**

```bash
# 1. 상태 확인
git status

# 2. 충돌 파일 해결 후 스테이징
git add -A

# 3. merge 커밋
git commit -m "Merge 완료"
```

**해결 방법 B: Merge 취소하기**

```bash
git merge --abort
```

---

### 🔴 에러 5: "fatal: You have not concluded your cherry-pick (CHERRY_PICK_HEAD exists)"

**에러 메시지:**

```
fatal: You have not concluded your cherry-pick (CHERRY_PICK_HEAD exists).
Please, commit your changes before you merge.
```

**원인:** 이전 cherry-pick 작업이 완료되지 않은 상태

**해결 방법 A: Cherry-pick 완료하기**

```bash
git status
git add -A
git cherry-pick --continue
```

**해결 방법 B: Cherry-pick 취소하기**

```bash
git cherry-pick --abort
```

---

### 🔴 에러 6: "error: Your local changes would be overwritten by merge"

**에러 메시지:**

```
error: Your local changes to the following files would be overwritten by merge:
    search.py
Please commit your changes or stash them before you merge.
```

**원인:** 커밋하지 않은 로컬 변경 사항이 있는 상태에서 merge/pull 시도

**해결 방법 A: 변경 사항 커밋 후 진행**

```bash
git add .
git commit -m "작업 중인 내용 저장"
git pull origin main
```

**해결 방법 B: Stash로 임시 저장 후 진행**

```bash
git stash push -m "임시 저장"
git pull origin main
git stash pop
```

**해결 방법 C: 변경 사항 버리기 (⚠️ 주의!)**

```bash
git checkout -- search.py
git pull origin main
```

---

### 🔴 에러 7: "fatal: Not possible to fast-forward, aborting"

**에러 메시지:**

```
fatal: Not possible to fast-forward, aborting.
```

**원인:** `git pull --ff-only` 사용 시 fast-forward 병합이 불가능할 때

**해결 방법:**

```bash
# 일반 merge 허용
git pull origin main

# 또는 rebase 방식
git pull --rebase origin main
```

---

### 🔴 에러 8: "error: pathspec 'branch-name' did not match any file(s)"

**에러 메시지:**

```
error: pathspec 'feature-branch' did not match any file(s) known to git
```

**원인:** 존재하지 않는 브랜치로 checkout 시도

**해결 방법:**

```bash
# 1. 브랜치 목록 확인
git branch -a

# 2. 원격 브랜치 정보 최신화
git fetch origin

# 3. 원격 브랜치에서 로컬 브랜치 생성
git checkout -b feature-branch origin/feature-branch
```

---

### 🔴 에러 9: "fatal: 'origin' does not appear to be a git repository"

**에러 메시지:**

```
fatal: 'origin' does not appear to be a git repository
```

**원인:** 원격 저장소가 설정되지 않았거나 잘못됨

**해결 방법:**

```bash
# 1. 원격 저장소 확인
git remote -v

# 2. 원격 저장소 추가
git remote add origin https://github.com/tobe-kimdonghuyun/REQM.git

# 3. 또는 URL 수정
git remote set-url origin https://github.com/tobe-kimdonghuyun/REQM.git
```

---

### 🔴 에러 10: "error: cannot lock ref" (브랜치 잠금)

**에러 메시지:**

```
error: cannot lock ref 'refs/heads/feature': 'refs/heads/feature/login' exists
```

**원인:** 브랜치 이름 충돌 (예: `feature`와 `feature/login`이 동시에 존재 불가)

**해결 방법:**

```bash
# 1. 문제되는 브랜치 삭제
git branch -d feature

# 2. 원격 참조 정리
git remote prune origin

# 3. 다시 시도
git fetch origin
```

---

### 📋 에러 해결 요약표

| 에러 유형                    | 빠른 해결                                   |
| ---------------------------- | ------------------------------------------- |
| Merge 충돌                   | 마커 정리 → `git add` → `git commit`        |
| MERGE_HEAD exists            | `git merge --abort` 또는 커밋 완료          |
| CHERRY_PICK_HEAD exists      | `git cherry-pick --abort` 또는 `--continue` |
| unrelated histories          | `--allow-unrelated-histories` 옵션 추가     |
| failed to push               | `git pull` 먼저 → 다시 `push`               |
| local changes overwritten    | `git stash` → pull → `git stash pop`        |
| Not possible to fast-forward | `git pull --rebase` 사용                    |
| pathspec did not match       | `git fetch origin` 먼저 실행                |
| origin does not exist        | `git remote add origin <URL>`               |
| cannot lock ref              | `git remote prune origin`                   |

---

## 📋 퀵 레퍼런스

| 작업                | 명령어                     |
| ------------------- | -------------------------- |
| 상태 확인           | `git status`               |
| 모든 파일 추가      | `git add .`                |
| 커밋                | `git commit -m "메시지"`   |
| 푸시                | `git push origin main`     |
| 풀                  | `git pull origin main`     |
| 브랜치 전환         | `git switch main`          |
| 브랜치 생성+전환    | `git checkout -b 브랜치명` |
| 로그 확인           | `git log --oneline`        |
| 되돌리기 (스테이징) | `git reset 파일명`         |
| 임시 저장           | `git stash`                |
