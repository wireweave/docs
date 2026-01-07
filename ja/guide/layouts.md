# レイアウト

Wireweaveは、ワイヤーフレームコンテンツを整理するための柔軟なレイアウトオプションを提供します。

## ページレイアウト

### 基本レイアウト

```wireframe
page "Basic" {
  navbar { ... }
  main { ... }
  footer { ... }
}
```

### サイドバーレイアウト

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

### 2カラムレイアウト

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

## レイアウトコンポーネント

### Row

水平方向の配置：

```wireframe
row {
  card { ... }
  card { ... }
  card { ... }
}
```

### Column

幅を持つ垂直セクション：

```wireframe
row {
  column width:6 {
    // 半分の幅
  }
  column width:6 {
    // 半分の幅
  }
}
```

### Grid

グリッドベースのレイアウト：

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

垂直方向のスタック：

```wireframe
stack gap:8 {
  input "Email" email
  input "Password" password
  button "Login" primary
}
```

## 配置

### 水平配置

```wireframe
card left {
  // 左揃え（デフォルト）
}

card center {
  // 水平中央揃え
}

card right {
  // 右揃え
}
```

### 垂直配置

```wireframe
row align:top {
  // 上揃え
}

row align:center {
  // 垂直中央揃え
}

row align:bottom {
  // 下揃え
}
```

### 分配

```wireframe
row justify:between {
  // アイテム間にスペース
}

row justify:around {
  // アイテム周囲にスペース
}

row justify:evenly {
  // アイテム間に均等なスペース
}
```

## 間隔

### パディング

```wireframe
card padding:16 {
  // 16pxパディング
}

card padding:24 {
  // 24pxパディング
}
```

### ギャップ

```wireframe
row gap:8 {
  // アイテム間8pxギャップ
}

stack gap:16 {
  // アイテム間16pxギャップ
}
```

### マージン

```wireframe
section margin:32 {
  // 32pxマージン
}
```

## レスポンシブヒント

Wireweaveはレスポンシブヒントをサポートしています：

```wireframe
grid columns:3 columns-sm:1 {
  // デスクトップで3カラム、モバイルで1カラム
}

row wrap {
  // 小さい画面でアイテムが折り返されます
}
```

## 一般的なパターン

### カードグリッド

```wireframe
grid columns:3 gap:24 {
  card {
    image "Product 1"
    heading "Product Name"
    text "$99.00"
    button "Add to Cart"
  }
  // その他のカード...
}
```

### フォームレイアウト

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

### ダッシュボードレイアウト

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

## 次のステップ

- [スタイリングガイド](/ja/guide/styling) - 色とテーマのカスタマイズ
- [コンポーネントリファレンス](/ja/reference/components) - すべてのコンポーネント
