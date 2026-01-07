# 레이아웃

Wireweave는 와이어프레임 콘텐츠를 구성하기 위한 유연한 레이아웃 옵션을 제공합니다.

## 페이지 레이아웃

### 기본 레이아웃

```wireframe
page "Basic" {
  navbar { ... }
  main { ... }
  footer { ... }
}
```

### 사이드바 레이아웃

```wireframe
page "Dashboard" {
  navbar { ... }
  row {
    sidebar { ... }
    main { ... }
  }
  footer { ... }
}
```

### 2단 레이아웃

```wireframe
page "Blog" {
  main {
    row {
      column width:8 { ... }
      column width:4 { ... }
    }
  }
}
```

## 레이아웃 컴포넌트

### Row

가로 방향 배치:

```wireframe
row {
  card { ... }
  card { ... }
  card { ... }
}
```

### Column

너비가 있는 세로 섹션:

```wireframe
row {
  column width:6 {
    // 반 너비
  }
  column width:6 {
    // 반 너비
  }
}
```

### Grid

그리드 기반 레이아웃:

```wireframe
grid columns:3 gap:16 {
  card { ... }
  card { ... }
  card { ... }
  card { ... }
  card { ... }
  card { ... }
}
```

### Stack

세로 방향 쌓기:

```wireframe
stack gap:8 {
  input "Email" email
  input "Password" password
  button "Login" primary
}
```

## 정렬

### 가로 정렬

```wireframe
card left {
  // 왼쪽 정렬 (기본값)
}

card center {
  // 가로 중앙 정렬
}

card right {
  // 오른쪽 정렬
}
```

### 세로 정렬

```wireframe
row align:top {
  // 상단 정렬
}

row align:center {
  // 세로 중앙 정렬
}

row align:bottom {
  // 하단 정렬
}
```

### 배분

```wireframe
row justify:between {
  // 아이템 사이에 공간
}

row justify:around {
  // 아이템 주위에 공간
}

row justify:evenly {
  // 아이템 사이에 균등한 공간
}
```

## 간격

### 패딩

```wireframe
card padding:16 {
  // 16px 패딩
}

card padding:24 {
  // 24px 패딩
}
```

### 갭

```wireframe
row gap:8 {
  // 아이템 사이 8px 갭
}

stack gap:16 {
  // 아이템 사이 16px 갭
}
```

### 마진

```wireframe
section margin:32 {
  // 32px 마진
}
```

## 반응형 힌트

Wireweave는 반응형 힌트를 지원합니다:

```wireframe
grid columns:3 columns-sm:1 {
  // 데스크톱에서 3열, 모바일에서 1열
}

row wrap {
  // 작은 화면에서 아이템이 줄바꿈됩니다
}
```

## 일반적인 패턴

### 카드 그리드

```wireframe
grid columns:3 gap:24 {
  card {
    image "Product 1"
    heading "Product Name"
    text "$99.00"
    button "Add to Cart"
  }
  // 더 많은 카드...
}
```

### 폼 레이아웃

```wireframe
card {
  stack gap:16 {
    heading "Contact Form"
    input "Name" text
    input "Email" email
    input "Message" textarea
    row justify:end {
      button "Cancel" secondary
      button "Submit" primary
    }
  }
}
```

### 대시보드 레이아웃

```wireframe
page "Dashboard" {
  navbar {
    logo "App"
    nav { ... }
  }
  row {
    sidebar width:240 {
      menu { ... }
    }
    main {
      grid columns:4 {
        card { heading "Users" text "1,234" }
        card { heading "Revenue" text "$56,789" }
        card { heading "Orders" text "890" }
        card { heading "Growth" text "+12%" }
      }
    }
  }
}
```

## 다음 단계

- [스타일링 가이드](/ko/guide/styling) - 색상과 테마 커스터마이즈
- [컴포넌트 레퍼런스](/ko/reference/components) - 모든 컴포넌트
