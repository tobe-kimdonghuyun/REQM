# TOON 빠른 테스트 샘플

## 0) 준비
```bash
mkdir toon-quick-test
cd toon-quick-test
npm init -y
npm i @toon-format/toon
```

## 1) 파일 넣기
이 폴더에 아래 3개 파일을 복사:
- sample.toon
- sample.json
- test-toon.mjs

## 2) 실행
```bash
node test-toon.mjs
```

## 3) 기대 결과
- encode된 TOON 출력
- decode된 JSON 출력
- roundTripEqual: true
