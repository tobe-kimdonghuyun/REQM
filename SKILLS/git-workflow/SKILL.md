---
name: git-workflow
description: Git 워크플로우 스킬. "커밋", "브랜치", "PR", "머지", "git", "충돌 해결", "rebase", "stash", "태그", "릴리즈", "git push", "협업" 등을 언급할 때 이 스킬을 사용하세요.
---

# Git 워크플로우 스킬

이 프로젝트의 Git 브랜치 전략, 커밋 메시지 컨벤션, 협업 워크플로우를 안내합니다.

---

## 1. 브랜치 전략

```
main          — 운영 배포 브랜치 (직접 push 금지)
develop       — 개발 통합 브랜치
feature/*     — 기능 개발 (예: feature/user-auth)
fix/*         — 버그 수정 (예: fix/login-crash)
hotfix/*      — 운영 긴급 수정 (예: hotfix/null-pointer)
release/*     — 릴리즈 준비 (예: release/v1.2.0)
```

### 브랜치 생성
```bash
# 기능 개발
git checkout develop
git pull origin develop
git checkout -b feature/기능명

# 버그 수정
git checkout develop
git checkout -b fix/버그설명

# 운영 긴급 수정
git checkout main
git checkout -b hotfix/이슈설명
```

---

## 2. 커밋 메시지 컨벤션

### 형식
```
<type>: <제목> (50자 이내)

[선택] 본문 — 무엇을, 왜 변경했는지 설명

[선택] 이슈 번호 — Fixes #123
```

### type 종류
| type | 설명 |
|------|------|
| `feat` | 새 기능 추가 |
| `fix` | 버그 수정 |
| `refactor` | 코드 리팩토링 (기능 변경 없음) |
| `style` | 포맷팅, 세미콜론 등 (로직 변경 없음) |
| `docs` | 문서 수정 |
| `test` | 테스트 추가/수정 |
| `chore` | 빌드 설정, 패키지 업데이트 등 |
| `deploy` | 배포 관련 변경 |
| `perf` | 성능 개선 |

### 예시
```bash
git commit -m "feat: 사용자 검색 필터 기능 추가"
git commit -m "fix: 로그인 세션 만료 후 리다이렉트 오류 수정"
git commit -m "refactor: UserService 트랜잭션 처리 단순화"
git commit -m "deploy: nexacroK 배포 설정 경로 수정"
git commit -m "chore: log4j2 버전 업데이트"
```

---

## 3. 일반 개발 흐름

```bash
# 1. 최신 develop 동기화
git checkout develop && git pull origin develop

# 2. 기능 브랜치 생성
git checkout -b feature/my-feature

# 3. 작업 후 스테이징
git add src/UserService.ts src/UserController.ts   # 관련 파일만
# (git add -A 는 .env 등 민감 파일 실수 포함 위험 → 지양)

# 4. 커밋
git commit -m "feat: 사용자 목록 페이지네이션 추가"

# 5. push
git push origin feature/my-feature

# 6. PR 생성 → develop 으로 머지 요청
```

---

## 4. 이 프로젝트 전용 push

```bash
# tools/git_push.bat 사용 (설정된 원격 저장소로 push)
tools/git_push.bat
```

---

## 5. 충돌 해결

```bash
# 1. develop 최신화 후 rebase
git fetch origin
git rebase origin/develop

# 2. 충돌 파일 확인
git status

# 3. 충돌 마커 수동 해결
# <<<<<<< HEAD (내 변경)
# =======
# >>>>>>> origin/develop (상대방 변경)

# 4. 해결 후 스테이징
git add 충돌파일

# 5. rebase 계속
git rebase --continue

# 6. rebase 취소 (원상복귀)
git rebase --abort
```

---

## 6. 유용한 명령어

```bash
# 작업 임시 저장 (stash)
git stash                        # 저장
git stash list                   # 목록
git stash pop                    # 복원 (최신)
git stash apply stash@{1}        # 특정 stash 복원

# 최근 커밋 수정 (push 전에만)
git commit --amend -m "새 메시지"

# 특정 커밋만 가져오기 (cherry-pick)
git cherry-pick <커밋해시>

# 변경사항 비교
git diff                         # unstaged 변경
git diff --staged                # staged 변경
git diff develop..HEAD           # 브랜치 비교

# 로그 보기
git log --oneline --graph        # 그래프 형식
git log --oneline -20            # 최근 20개

# 파일 변경 이력
git log -p src/UserService.ts

# 특정 커밋으로 파일 되돌리기 (다른 파일 영향 없음)
git checkout <커밋해시> -- 파일경로

# 브랜치 정리
git branch -d feature/완료된기능   # 로컬 삭제
git push origin --delete feature/완료된기능  # 원격 삭제
```

---

## 7. .gitignore 체크리스트

nexacroN 프로젝트에서 commit 하면 안 되는 파일:

```gitignore
# 배포 출력물
apache-tomcat-9.0.89/webapps/*/
*.war

# 환경 설정 (로컬 경로 포함)
tools/deploy_config.json
tools/run_nexacroK_config.json

# 빌드 캐시
__pycache__/
*.class
.gradle/
build/

# IDE
.idea/
.vscode/settings.json
*.suo

# 민감 정보
.env
*.key
*.pem
```

---

## 8. PR(Pull Request) 작성 가이드

```markdown
## 변경 내용
- 사용자 검색 조건에 날짜 범위 필터 추가
- Dataset dsSearch에 FROM_DT, TO_DT 컬럼 추가

## 테스트 방법
1. tools/start_tomcat.bat 실행
2. 사용자 관리 화면 접속
3. 날짜 범위 입력 후 조회 버튼 클릭
4. 결과 확인

## 체크리스트
- [ ] 빌드 정상 확인 (run_Build&deploy.bat)
- [ ] 신규 기능 테스트 완료
- [ ] 기존 기능 회귀 테스트 완료
- [ ] deploy_config.json 경로 수정 여부 확인 (로컬 경로 커밋 금지)
```
