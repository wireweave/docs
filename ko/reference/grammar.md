# Grammar Reference

Complete syntax reference for Wireweave DSL.

## Basic Syntax

### Comments

```wireframe
// Single line comment

/* Multi-line
   comment */
```

### Strings

```wireframe
"Double quoted string"
'Single quoted string'
```

### Numbers

```wireframe
100        // Integer
3.14       // Float
```

### Booleans

```wireframe
true
false
```

## Structure

### Page

```wireframe
page [title] [modifiers] {
  [children]
}
```

Examples:
```wireframe
page { }
page "Title" { }
page "Title" centered { }
```

### Components

```wireframe
component_name [label] [modifiers] {
  [children]
}
```

Examples:
```wireframe
card { }
card "Title" { }
card shadow=md border { }
button "Click" primary
```

## Components Reference

### Layout (레이아웃)

페이지 구조를 정의하는 컴포넌트입니다.

| Component | Description | Attributes |
|-----------|-------------|------------|
| `page` | 페이지 루트 컨테이너 | title, viewport, device, centered, p, gap |
| `header` | 페이지 헤더 영역 | p, border, gap, justify, align |
| `main` | 메인 콘텐츠 영역 | p, gap |
| `footer` | 페이지 푸터 영역 | p, border, gap |
| `sidebar` | 사이드바 영역 | position, w, p, gap |
| `section` | 섹션 영역 | title, expanded, p, gap |

```wireframe
page "Dashboard" {
  header { }
  main { }
  footer { }
}
```

### Grid (그리드)

플렉스 레이아웃을 위한 컴포넌트입니다.

| Component | Description | Attributes |
|-----------|-------------|------------|
| `row` | 가로 방향 플렉스 컨테이너 | gap, justify, align, wrap, p, m |
| `col` | 세로 방향 컨테이너/그리드 컬럼 | span, sm, md, lg, xl, order, gap, p, w |

```wireframe
row gap=4 justify=between {
  col span=6 { }
  col span=6 { }
}
```

### Container (컨테이너)

콘텐츠를 그룹화하는 컴포넌트입니다.

| Component | Description | Attributes |
|-----------|-------------|------------|
| `card` | 카드 컴포넌트 | title, p, shadow, border, gap |
| `modal` | 모달 다이얼로그 | title, w, h, p |
| `drawer` | 드로어 패널 | title, position, p |
| `accordion` | 아코디언 패널 | title, p |

```wireframe
card title="Settings" shadow=md {
  // content
}

modal "Confirm" {
  text "Are you sure?"
  button "OK" primary
}
```

### Text (텍스트)

텍스트 표시를 위한 컴포넌트입니다.

| Component | Description | Attributes |
|-----------|-------------|------------|
| `text` | 일반 텍스트 | size, weight, align, muted, m |
| `title` | 제목 (h1~h6) | level, size, align, m |
| `link` | 하이퍼링크 | href, external |

```wireframe
title "Welcome" level=1
text "Description" muted
link "Learn more" href="/docs"
```

### Input (입력/버튼)

사용자 입력을 받는 컴포넌트입니다.

| Component | Description | Attributes |
|-----------|-------------|------------|
| `input` | 입력 필드 | label, type, placeholder, value, disabled, required, icon |
| `textarea` | 여러 줄 입력 | label, placeholder, value, rows, disabled |
| `select` | 드롭다운 선택 | label, placeholder, value, disabled |
| `checkbox` | 체크박스 | label, checked, disabled |
| `radio` | 라디오 버튼 | label, name, checked, disabled |
| `switch` | 토글 스위치 | label, checked, disabled |
| `slider` | 슬라이더 | label, min, max, value, step, disabled |
| `button` | 버튼 | primary, secondary, outline, ghost, danger, size, icon, disabled, loading |

Input types: `text`, `email`, `password`, `number`, `tel`, `url`, `search`, `date`

```wireframe
input "Email" type=email placeholder="Enter email"
textarea "Message" rows=4
select "Country" { }
checkbox "Agree" checked
button "Submit" primary
button "Cancel" outline
```

### Display (표시)

시각적 요소를 표시하는 컴포넌트입니다.

| Component | Description | Attributes |
|-----------|-------------|------------|
| `image` | 이미지 | src, alt, w, h |
| `placeholder` | 플레이스홀더 | label, w, h |
| `avatar` | 아바타 | name, src, size |
| `badge` | 배지 | variant, pill, icon, size |
| `icon` | 아이콘 | name, size, muted |
| `divider` | 구분선 | m, my, mx |

```wireframe
image src="/photo.jpg" w=200
avatar "John" size=lg
badge "New" variant=success pill
icon "home" size=md
divider my=4
```

### Data (데이터)

데이터 표시를 위한 컴포넌트입니다.

| Component | Description | Attributes |
|-----------|-------------|------------|
| `table` | 테이블 | striped, bordered, hover |
| `list` | 리스트 | ordered, none, gap |

```wireframe
table striped hover {
  // columns and rows defined in content
}

list ordered {
  // items
}
```

### Feedback (피드백)

사용자에게 피드백을 제공하는 컴포넌트입니다.

| Component | Description | Attributes |
|-----------|-------------|------------|
| `alert` | 알림 메시지 | variant, dismissible, icon |
| `toast` | 토스트 알림 | position, variant |
| `progress` | 프로그레스 바 | value, max, label, indeterminate |
| `spinner` | 로딩 스피너 | label, size |

Variants: `success`, `warning`, `danger`, `info`

```wireframe
alert "Success!" variant=success
progress value=75 label="Loading..."
spinner size=lg
```

### Overlay (오버레이)

오버레이 UI 컴포넌트입니다.

| Component | Description | Attributes |
|-----------|-------------|------------|
| `tooltip` | 툴팁 | position |
| `popover` | 팝오버 | title |
| `dropdown` | 드롭다운 메뉴 | - |

```wireframe
tooltip "Help text" position=top {
  button "?" outline
}

dropdown {
  // items
}
```

### Navigation (네비게이션)

네비게이션 컴포넌트입니다.

| Component | Description | Attributes |
|-----------|-------------|------------|
| `nav` | 네비게이션 메뉴 | vertical, gap |
| `tabs` | 탭 컴포넌트 | active |
| `breadcrumb` | 브레드크럼 | - |

```wireframe
nav vertical {
  // nav items
}

tabs active=0 {
  // tab panels
}

breadcrumb {
  // breadcrumb items
}
```

## Attribute Syntax

### Key-Value Attributes

```wireframe
component attribute=value
component attribute="string value"
```

Examples:
```wireframe
col span=6
input placeholder="Enter email"
progress value=75
```

### Boolean Attributes

```wireframe
component attribute   // Sets to true
```

Examples:
```wireframe
button primary        // primary=true
input disabled        // disabled=true
checkbox checked      // checked=true
```

## Spacing System

Wireweave uses a spacing token system:

| Token | Value |
|-------|-------|
| 0 | 0px |
| 1 | 4px |
| 2 | 8px |
| 3 | 12px |
| 4 | 16px |
| 5 | 20px |
| 6 | 24px |
| 8 | 32px |
| 10 | 40px |
| 12 | 48px |

```wireframe
card p=4          // padding: 16px
row gap=2         // gap: 8px
text mt=6         // margin-top: 24px
```

## Full Example

```wireframe
page "User Management" centered {
  header border {
    row justify=between align=center {
      title "Admin" level=3
      nav {
        // nav items
      }
      avatar "Admin"
    }
  }

  row {
    sidebar w=200 {
      nav vertical {
        // menu items
      }
    }

    main {
      row justify=between {
        title "Users" level=2
        button "Add User" primary
      }

      card {
        table striped hover {
          // table content
        }
      }

      row justify=center gap=2 {
        button "Previous" secondary
        text "Page 1 of 10"
        button "Next" secondary
      }
    }
  }
}
```
