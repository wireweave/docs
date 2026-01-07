# VS Code 확장

Wireweave VS Code 확장은 구문 강조, 미리보기 및 코드 자동 완성 기능을 제공합니다.

## 설치

### VS Code Marketplace

1. VS Code에서 Extensions 뷰 열기 (`Cmd+Shift+X` / `Ctrl+Shift+X`)
2. "Wireweave" 검색
3. Install 클릭

### 수동 설치

```bash
code --install-extension wireweave.wireweave-vscode
```

## 기능

### 구문 강조

`.wire` 및 `.wireframe` 파일에 대해 구문 강조가 자동으로 적용됩니다:

- 컴포넌트 키워드
- 문자열과 숫자
- 수정자와 속성
- 주석

### 실시간 미리보기

코드를 작성하면서 실시간으로 와이어프레임을 미리볼 수 있습니다:

1. `.wire` 파일 열기
2. 명령 팔레트 열기 (`Cmd+Shift+P` / `Ctrl+Shift+P`)
3. "Wireweave: Open Preview" 선택

또는 에디터 우측 상단의 미리보기 아이콘 클릭

### 자동 완성

컴포넌트와 속성에 대한 자동 완성을 제공합니다:

- 컴포넌트 이름 (`card`, `button`, `input` 등)
- 수정자 (`primary`, `secondary`, `danger` 등)
- 속성 키 (`width`, `gap`, `justify` 등)

### 호버 정보

컴포넌트 위에 마우스를 올리면 문서 정보가 표시됩니다:

- 컴포넌트 설명
- 사용 가능한 속성
- 예제 코드

### 오류 진단

문법 오류가 있으면 실시간으로 표시됩니다:

- 빨간 밑줄로 오류 위치 표시
- Problems 패널에서 전체 오류 목록 확인
- 오류 메시지에서 수정 방법 안내

## 설정

확장 설정을 커스터마이즈할 수 있습니다:

```json
{
  "wireweave.theme": "light",
  "wireweave.autoPreview": true,
  "wireweave.previewWidth": 800
}
```

### 사용 가능한 설정

| 설정 | 기본값 | 설명 |
|------|--------|------|
| `wireweave.theme` | `"light"` | 미리보기 테마 ("light" 또는 "dark") |
| `wireweave.autoPreview` | `true` | 파일 열 때 자동으로 미리보기 열기 |
| `wireweave.previewWidth` | `800` | 미리보기 패널 너비 |

## 키보드 단축키

| 단축키 | 동작 |
|--------|------|
| `Cmd+K V` / `Ctrl+K V` | 미리보기 열기 |
| `Cmd+Shift+V` / `Ctrl+Shift+V` | 미리보기 토글 |

## 마크다운 통합

마크다운 파일에서 wireframe 코드 블록을 사용할 수 있습니다:

````markdown
```wireframe
page "Example" {
  card {
    button "Click" primary
  }
}
```
````

## 문제 해결

### 미리보기가 표시되지 않음

1. 확장이 활성화되어 있는지 확인
2. 파일 확장자가 `.wire` 또는 `.wireframe`인지 확인
3. VS Code 재시작

### 자동 완성이 작동하지 않음

1. 언어 모드가 "Wireframe"인지 확인 (상태 표시줄에서 확인)
2. 확장이 최신 버전인지 확인

## 다음 단계

- [마크다운 플러그인](/ko/guide/markdown-plugin) - 문서에 와이어프레임 삽입
- [문법 레퍼런스](/ko/reference/grammar) - 전체 DSL 문법
