# スタイリング

Wireweaveは、ワイヤーフレームの外観をカスタマイズするための組み込みテーマとスタイリングオプションを提供します。

## テーマ

### ライトテーマ（デフォルト）

```wireframe
page "Light Mode" theme:light {
  // コンテンツ
}
```

ライトテーマの色：
- 背景：白 (#FFFFFF)
- テキスト：濃いグレー (#1F2937)
- Primary：青 (#3B82F6)
- ボーダー：薄いグレー (#E5E7EB)

### ダークテーマ

```wireframe
page "Dark Mode" theme:dark {
  // コンテンツ
}
```

ダークテーマの色：
- 背景：暗い色 (#111827)
- テキスト：薄いグレー (#F9FAFB)
- Primary：青 (#60A5FA)
- ボーダー：グレー (#374151)

## 色

### ボタンの色

```wireframe
button "Primary" primary      // 青
button "Secondary" secondary  // グレー
button "Success" success      // 緑
button "Danger" danger        // 赤
button "Warning" warning      // 黄
```

### アラートの色

```wireframe
alert "Success!" success      // 緑の背景
alert "Error!" error          // 赤の背景
alert "Warning!" warning      // 黄の背景
alert "Info!" info            // 青の背景
```

### バッジの色

```wireframe
badge "Active" success
badge "Pending" warning
badge "Inactive" error
badge "New" info
```

## タイポグラフィ

### 見出しサイズ

```wireframe
heading "H1 Title"            // 32px
heading "H2 Title" level:2    // 24px
heading "H3 Title" level:3    // 20px
heading "H4 Title" level:4    // 16px
```

### テキストスタイル

```wireframe
text "Regular text"
text "Bold text" bold
text "Muted text" muted
text "Small text" small
text "Large text" large
```

## コンポーネントスタイル

### カードスタイル

```wireframe
card {
  // デフォルト - 控えめなシャドウ
}

card outlined {
  // シャドウの代わりにボーダー
}

card flat {
  // シャドウやボーダーなし
}

card elevated {
  // より大きなシャドウ
}
```

### 入力スタイル

```wireframe
input "Default" text
input "Error" text error
input "Disabled" text disabled
input "Readonly" text readonly
```

### ボタンスタイル

```wireframe
button "Solid" primary
button "Outline" primary outline
button "Ghost" primary ghost
button "Link" link
```

## サイズ調整

### コンポーネントサイズ

```wireframe
button "Small" primary size:sm
button "Medium" primary size:md
button "Large" primary size:lg

input "Small" text size:sm
input "Large" text size:lg
```

### 幅オプション

```wireframe
input "Full Width" text fullWidth
button "Full Width" primary fullWidth

card width:400 {
  // 固定幅
}
```

## レンダーオプション

レンダリング時にオプションを指定できます：

### HTMLレンダー

```javascript
renderHtml(source, {
  theme: 'light',       // または 'dark'
  fullDocument: true,   // 完全なHTMLドキュメント
});
```

### SVGレンダー

```javascript
renderSvg(source, {
  width: 1200,
  padding: 24,
  theme: 'light',
});
```

## ベストプラクティス

1. **セマンティックカラーを使用** - カスタムカラーの代わりに `primary`, `success`, `danger` を使用
2. **一貫性を維持** - ワイヤーフレームごとに1つのテーマを維持
3. **レイアウトに集中** - ワイヤーフレームは構造に関するもので、ビジュアルデザインではない
4. **シンプルに保つ** - 過度なスタイリングを避ける；ワイヤーフレームは素早いスケッチであるべき

## 次のステップ

- [MCPサーバーガイド](/ja/guide/mcp-server) - AI統合
- [コンポーネントリファレンス](/ja/reference/components) - コンポーネントの詳細
