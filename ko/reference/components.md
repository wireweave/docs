# Components Reference

Complete reference of all Wireweave components with examples.

## Layout (레이아웃)

페이지 구조를 정의하는 컴포넌트입니다.

### page

페이지 루트 컨테이너. 전체 레이아웃의 시작점입니다.

```wireframe
page "Dashboard" centered {
  // content
}
```

| Attribute | Type | Description |
|-----------|------|-------------|
| title | string | 페이지 제목 |
| viewport | string | 뷰포트 크기 (예: "1440x900") |
| device | string | 디바이스 프리셋 (iphone14, desktop 등) |
| centered | boolean | 콘텐츠 중앙 정렬 |
| p, px, py | number | 패딩 |
| gap | number | 자식 요소 간격 |

---

### header

페이지 헤더 영역. 네비게이션, 로고 등을 배치합니다.

```wireframe
header border {
  row justify=between {
    title "Logo" level=3
    nav { }
  }
}
```

| Attribute | Type | Description |
|-----------|------|-------------|
| border | boolean | 하단 테두리 |
| p, px, py | number | 패딩 |
| gap | number | 자식 요소 간격 |
| justify | string | 주축 정렬 |
| align | string | 교차축 정렬 |

---

### main

메인 콘텐츠 영역.

```wireframe
main {
  // main content
}
```

---

### footer

페이지 푸터 영역.

```wireframe
footer border {
  text "Copyright 2024" muted
}
```

---

### sidebar

사이드바 영역.

```wireframe
sidebar position=left w=240 {
  nav vertical { }
}
```

| Attribute | Type | Description |
|-----------|------|-------------|
| position | left \| right | 사이드바 위치 |
| w | number | 너비 |

---

### section

섹션 영역. 콘텐츠를 논리적으로 그룹화합니다.

```wireframe
section title="Settings" expanded {
  // content
}
```

| Attribute | Type | Description |
|-----------|------|-------------|
| title | string | 섹션 제목 |
| expanded | boolean | 확장 상태 |

---

## Grid (그리드)

플렉스 레이아웃을 위한 컴포넌트입니다.

### row

가로 방향 플렉스 컨테이너.

```wireframe
row gap=4 justify=between align=center {
  button "Cancel" secondary
  button "Submit" primary
}
```

| Attribute | Type | Description |
|-----------|------|-------------|
| gap | number | 자식 요소 간격 |
| justify | start \| center \| end \| between \| around \| evenly | 주축 정렬 |
| align | start \| center \| end \| stretch \| baseline | 교차축 정렬 |
| wrap | boolean | 줄바꿈 허용 |

---

### col

세로 방향 플렉스 컨테이너 또는 그리드 컬럼.

```wireframe
row {
  col span=6 { }
  col span=6 { }
}
```

| Attribute | Type | Description |
|-----------|------|-------------|
| span | 1-12 | 그리드 컬럼 너비 |
| sm, md, lg, xl | number | 반응형 컬럼 너비 |
| order | number | 플렉스 순서 |

---

## Container (컨테이너)

콘텐츠를 그룹화하는 컴포넌트입니다.

### card

카드 컴포넌트. 콘텐츠를 그룹화하여 표시합니다.

```wireframe
card title="Settings" shadow=md border {
  // content
}
```

| Attribute | Type | Description |
|-----------|------|-------------|
| title | string | 카드 제목 |
| shadow | none \| sm \| md \| lg \| xl | 그림자 크기 |
| border | boolean | 테두리 표시 |
| p | number | 패딩 |

---

### modal

모달 다이얼로그. 오버레이 위에 콘텐츠를 표시합니다.

```wireframe
modal "Confirm Delete" {
  text "Are you sure?"
  row justify=end gap=2 {
    button "Cancel" secondary
    button "Delete" danger
  }
}
```

| Attribute | Type | Description |
|-----------|------|-------------|
| title | string | 모달 제목 |
| w, h | number | 너비, 높이 |

---

### drawer

드로어 패널. 화면 가장자리에서 슬라이드되어 나타납니다.

```wireframe
drawer "Menu" position=left {
  nav vertical { }
}
```

| Attribute | Type | Description |
|-----------|------|-------------|
| title | string | 드로어 제목 |
| position | left \| right \| top \| bottom | 위치 |

---

### accordion

아코디언. 접을 수 있는 콘텐츠 패널입니다.

```wireframe
accordion "Advanced Settings" {
  // content
}
```

---

## Text (텍스트)

텍스트 표시를 위한 컴포넌트입니다.

### text

일반 텍스트를 표시합니다.

```wireframe
text "Regular text"
text "Muted description" muted
text "Important" weight=bold size=lg
```

| Attribute | Type | Description |
|-----------|------|-------------|
| size | xs \| sm \| base \| md \| lg \| xl \| 2xl | 텍스트 크기 |
| weight | normal \| medium \| semibold \| bold | 글자 굵기 |
| align | left \| center \| right | 텍스트 정렬 |
| muted | boolean | 흐린 스타일 |

---

### title

제목 요소. h1~h6 헤딩을 표시합니다.

```wireframe
title "Main Title" level=1
title "Subtitle" level=2
title "Section" level=3
```

| Attribute | Type | Description |
|-----------|------|-------------|
| level | 1-6 | 헤딩 레벨 |
| size | string | 텍스트 크기 |
| align | string | 텍스트 정렬 |

---

### link

클릭 가능한 하이퍼링크를 표시합니다.

```wireframe
link "Learn more" href="/docs"
link "GitHub" href="https://github.com" external
```

| Attribute | Type | Description |
|-----------|------|-------------|
| href | string | 링크 URL |
| external | boolean | 외부 링크 (새 탭) |

---

## Input (입력/버튼)

사용자 입력을 받는 컴포넌트입니다.

### input

입력 필드. 텍스트, 이메일, 비밀번호 등을 입력받습니다.

```wireframe
input "Email" type=email placeholder="Enter email"
input "Password" type=password
input "Name" required disabled
```

| Attribute | Type | Description |
|-----------|------|-------------|
| label | string | 라벨 텍스트 |
| type | text \| email \| password \| number \| tel \| url \| search \| date | 입력 타입 |
| placeholder | string | 플레이스홀더 |
| value | string | 기본값 |
| disabled | boolean | 비활성화 |
| required | boolean | 필수 입력 |
| readonly | boolean | 읽기 전용 |
| icon | string | 아이콘 |

---

### textarea

여러 줄 입력 필드.

```wireframe
textarea "Message" placeholder="Enter your message" rows=4
```

| Attribute | Type | Description |
|-----------|------|-------------|
| label | string | 라벨 텍스트 |
| placeholder | string | 플레이스홀더 |
| rows | number | 줄 수 |
| disabled | boolean | 비활성화 |

---

### select

드롭다운 선택.

```wireframe
select "Country" placeholder="Select country"
```

| Attribute | Type | Description |
|-----------|------|-------------|
| label | string | 라벨 텍스트 |
| placeholder | string | 플레이스홀더 |
| disabled | boolean | 비활성화 |

---

### checkbox

체크박스. 참/거짓 값을 선택합니다.

```wireframe
checkbox "Remember me"
checkbox "I agree to terms" checked
```

| Attribute | Type | Description |
|-----------|------|-------------|
| label | string | 라벨 텍스트 |
| checked | boolean | 체크 상태 |
| disabled | boolean | 비활성화 |

---

### radio

라디오 버튼. 그룹 내에서 하나를 선택합니다.

```wireframe
radio "Option A" name="options"
radio "Option B" name="options" checked
```

| Attribute | Type | Description |
|-----------|------|-------------|
| label | string | 라벨 텍스트 |
| name | string | 그룹 이름 |
| checked | boolean | 선택 상태 |
| disabled | boolean | 비활성화 |

---

### switch

토글 스위치. 온/오프 상태를 전환합니다.

```wireframe
switch "Dark mode"
switch "Notifications" checked
```

| Attribute | Type | Description |
|-----------|------|-------------|
| label | string | 라벨 텍스트 |
| checked | boolean | 활성 상태 |
| disabled | boolean | 비활성화 |

---

### slider

슬라이더. 범위 내 값을 선택합니다.

```wireframe
slider "Volume" min=0 max=100 value=50
```

| Attribute | Type | Description |
|-----------|------|-------------|
| label | string | 라벨 텍스트 |
| min | number | 최소값 |
| max | number | 최대값 |
| value | number | 현재값 |
| step | number | 증가 단위 |
| disabled | boolean | 비활성화 |

---

### button

버튼 요소. 클릭 가능한 버튼을 표시합니다.

```wireframe
button "Submit" primary
button "Cancel" secondary
button "Delete" danger outline
button "Loading..." primary loading
```

| Attribute | Type | Description |
|-----------|------|-------------|
| primary | boolean | 기본 강조 스타일 |
| secondary | boolean | 보조 스타일 |
| outline | boolean | 아웃라인 스타일 |
| ghost | boolean | 투명 스타일 |
| danger | boolean | 위험/삭제 스타일 |
| size | xs \| sm \| md \| lg \| xl | 버튼 크기 |
| icon | string | 아이콘 |
| disabled | boolean | 비활성화 |
| loading | boolean | 로딩 상태 |

---

## Display (표시)

시각적 요소를 표시하는 컴포넌트입니다.

### image

이미지를 표시합니다.

```wireframe
image src="/photo.jpg" alt="Photo" w=200 h=150
```

| Attribute | Type | Description |
|-----------|------|-------------|
| src | string | 이미지 소스 URL |
| alt | string | 대체 텍스트 |
| w | number | 너비 |
| h | number | 높이 |

---

### placeholder

이미지나 콘텐츠 자리 표시자입니다.

```wireframe
placeholder "Image" w=300 h=200
```

| Attribute | Type | Description |
|-----------|------|-------------|
| label | string | 라벨 텍스트 |
| w | number | 너비 |
| h | number | 높이 |

---

### avatar

사용자 프로필 이미지를 표시합니다.

```wireframe
avatar "John Doe"
avatar "JD" size=lg src
```

| Attribute | Type | Description |
|-----------|------|-------------|
| name | string | 이름 (이니셜 생성) |
| src | boolean | 이미지 표시 |
| size | xs \| sm \| md \| lg \| xl \| number | 크기 |

---

### badge

상태나 카운트를 작은 라벨로 표시합니다.

```wireframe
badge "New"
badge "Active" variant=success
badge "3" variant=danger pill
```

| Attribute | Type | Description |
|-----------|------|-------------|
| variant | default \| primary \| secondary \| success \| warning \| danger \| info | 스타일 |
| pill | boolean | 둥근 모서리 |
| icon | string | 아이콘 |
| size | xs \| sm \| md \| lg | 크기 |

---

### icon

아이콘을 표시합니다.

```wireframe
icon "home"
icon "settings" size=lg muted
```

| Attribute | Type | Description |
|-----------|------|-------------|
| name | string | 아이콘 이름 |
| size | xs \| sm \| md \| lg \| xl \| number | 크기 |
| muted | boolean | 흐린 스타일 |

---

### divider

구분선 요소. 콘텐츠를 시각적으로 구분합니다.

```wireframe
divider
divider my=4
```

| Attribute | Type | Description |
|-----------|------|-------------|
| m, my, mx | number | 마진 |

---

## Data (데이터)

데이터 표시를 위한 컴포넌트입니다.

### table

테이블 컴포넌트. 데이터를 표 형식으로 표시합니다.

```wireframe
table striped hover bordered {
  // columns and rows
}
```

| Attribute | Type | Description |
|-----------|------|-------------|
| striped | boolean | 줄무늬 스타일 |
| bordered | boolean | 테두리 스타일 |
| hover | boolean | 호버 효과 |

---

### list

리스트 컴포넌트. 항목들을 목록으로 표시합니다.

```wireframe
list {
  // items
}

list ordered {
  // numbered items
}
```

| Attribute | Type | Description |
|-----------|------|-------------|
| ordered | boolean | 순서 있는 목록 |
| none | boolean | 목록 스타일 없음 |
| gap | number | 항목 간격 |

---

## Feedback (피드백)

사용자에게 피드백을 제공하는 컴포넌트입니다.

### alert

알림 요소. 사용자에게 메시지를 표시합니다.

```wireframe
alert "Operation successful" variant=success
alert "Please check your input" variant=warning
alert "An error occurred" variant=danger dismissible
```

| Attribute | Type | Description |
|-----------|------|-------------|
| variant | success \| warning \| danger \| info | 스타일 |
| dismissible | boolean | 닫기 가능 |
| icon | string | 아이콘 |

---

### toast

토스트 알림. 일시적인 메시지를 표시합니다.

```wireframe
toast "Saved!" position=top-right variant=success
```

| Attribute | Type | Description |
|-----------|------|-------------|
| position | top-left \| top-center \| top-right \| bottom-left \| bottom-center \| bottom-right | 위치 |
| variant | success \| warning \| danger \| info | 스타일 |

---

### progress

프로그레스 바. 진행 상태를 표시합니다.

```wireframe
progress value=75
progress value=50 label="Uploading..."
progress indeterminate
```

| Attribute | Type | Description |
|-----------|------|-------------|
| value | number | 진행률 (0-100) |
| max | number | 최대값 |
| label | string | 라벨 텍스트 |
| indeterminate | boolean | 불확정 상태 |

---

### spinner

로딩 스피너. 로딩 상태를 표시합니다.

```wireframe
spinner
spinner size=lg label="Loading..."
```

| Attribute | Type | Description |
|-----------|------|-------------|
| size | xs \| sm \| md \| lg \| xl \| number | 크기 |
| label | string | 라벨 텍스트 |

---

## Overlay (오버레이)

오버레이 UI 컴포넌트입니다.

### tooltip

툴팁 요소. 호버 시 추가 정보를 표시합니다.

```wireframe
tooltip "Click to save" position=top {
  button "Save" primary
}
```

| Attribute | Type | Description |
|-----------|------|-------------|
| content | string | 툴팁 내용 |
| position | top \| right \| bottom \| left | 위치 |

---

### popover

팝오버. 클릭 시 추가 콘텐츠를 표시합니다.

```wireframe
popover title="Options" {
  // content
}
```

| Attribute | Type | Description |
|-----------|------|-------------|
| title | string | 팝오버 제목 |

---

### dropdown

드롭다운 메뉴. 클릭 시 메뉴가 펼쳐집니다.

```wireframe
dropdown {
  // menu items
}
```

---

## Navigation (네비게이션)

네비게이션 컴포넌트입니다.

### nav

네비게이션 영역. 메뉴 항목들을 배치합니다.

```wireframe
nav {
  // nav items
}

nav vertical gap=2 {
  // vertical menu
}
```

| Attribute | Type | Description |
|-----------|------|-------------|
| vertical | boolean | 세로 방향 |
| gap | number | 항목 간격 |

---

### tabs

탭 컴포넌트. 여러 패널을 탭으로 전환합니다.

```wireframe
tabs active=0 {
  // tab panels
}
```

| Attribute | Type | Description |
|-----------|------|-------------|
| active | number | 활성 탭 인덱스 |

---

### breadcrumb

브레드크럼. 현재 위치를 경로로 표시합니다.

```wireframe
breadcrumb {
  // breadcrumb items
}
```
