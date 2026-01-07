# コンポーネントリファレンス

すべてのWireweaveコンポーネントの完全なリファレンスと例です。

## Layout

ページ構造を定義するコンポーネントです。

### page

ページルートコンテナ。すべてのレイアウトの出発点です。

```wireframe
page "Dashboard" centered {
  // コンテンツ
}
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| title | string | ページタイトル |
| viewport | string | ビューポートサイズ（例："1440x900"） |
| device | string | デバイスプリセット（iphone14、desktopなど） |
| centered | boolean | コンテンツを中央揃え |
| p, px, py | number | パディング |
| gap | number | 子要素の間隔 |

---

### header

ページヘッダー領域。ナビゲーション、ロゴなどを配置します。

```wireframe
header border {
  row justify=between {
    title "Logo" level=3
    nav { }
  }
}
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| border | boolean | 下部ボーダー |
| p, px, py | number | パディング |
| gap | number | 子要素の間隔 |
| justify | string | 主軸の揃え |
| align | string | 交差軸の揃え |

---

### main

メインコンテンツ領域。

```wireframe
main {
  // メインコンテンツ
}
```

---

### footer

ページフッター領域。

```wireframe
footer border {
  text "Copyright 2026" muted
}
```

---

### sidebar

サイドバー領域。

```wireframe
sidebar position=left w=240 {
  nav vertical { }
}
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| position | left \| right | サイドバーの位置 |
| w | number | 幅 |

---

### section

セクション領域。コンテンツを論理的にグループ化します。

```wireframe
section title="Settings" expanded {
  // コンテンツ
}
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| title | string | セクションタイトル |
| expanded | boolean | 展開状態 |

---

## Grid

フレックスレイアウト用のコンポーネントです。

### row

水平方向のフレックスコンテナ。

```wireframe
row gap=4 justify=between align=center {
  button "Cancel" secondary
  button "Submit" primary
}
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| gap | number | 子要素の間隔 |
| justify | start \| center \| end \| between \| around \| evenly | 主軸の揃え |
| align | start \| center \| end \| stretch \| baseline | 交差軸の揃え |
| wrap | boolean | 折り返しを許可 |

---

### col

垂直方向のフレックスコンテナまたはグリッドカラム。

```wireframe
row {
  col span=6 { }
  col span=6 { }
}
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| span | 1-12 | グリッドカラム幅 |
| sm, md, lg, xl | number | レスポンシブカラム幅 |
| order | number | フレックス順序 |

---

## Container

コンテンツをグループ化するコンポーネントです。

### card

カードコンポーネント。コンテンツをグループ化して表示します。

```wireframe
card title="Settings" shadow=md border {
  // コンテンツ
}
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| title | string | カードタイトル |
| shadow | none \| sm \| md \| lg \| xl | シャドウサイズ |
| border | boolean | ボーダー表示 |
| p | number | パディング |

---

### modal

モーダルダイアログ。オーバーレイ上にコンテンツを表示します。

```wireframe
modal "Confirm Delete" {
  text "Are you sure?"
  row justify=end gap=2 {
    button "Cancel" secondary
    button "Delete" danger
  }
}
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| title | string | モーダルタイトル |
| w, h | number | 幅、高さ |

---

### drawer

ドロワーパネル。画面端からスライドします。

```wireframe
drawer "Menu" position=left {
  nav vertical { }
}
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| title | string | ドロワータイトル |
| position | left \| right \| top \| bottom | 位置 |

---

### accordion

アコーディオン。折りたたみ可能なコンテンツパネルです。

```wireframe
accordion "Advanced Settings" {
  // コンテンツ
}
```

---

## Text

テキストを表示するコンポーネントです。

### text

通常のテキストを表示します。

```wireframe
text "Regular text"
text "Muted description" muted
text "Important" weight=bold size=lg
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| size | xs \| sm \| base \| md \| lg \| xl \| 2xl | テキストサイズ |
| weight | normal \| medium \| semibold \| bold | フォントウェイト |
| align | left \| center \| right | テキスト揃え |
| muted | boolean | ミュートスタイル |

---

### title

タイトル要素。h1〜h6見出しを表示します。

```wireframe
title "Main Title" level=1
title "Subtitle" level=2
title "Section" level=3
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| level | 1-6 | 見出しレベル |
| size | string | テキストサイズ |
| align | string | テキスト揃え |

---

### link

クリック可能なハイパーリンクを表示します。

```wireframe
link "Learn more" href="/docs"
link "GitHub" href="https://github.com" external
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| href | string | リンクURL |
| external | boolean | 外部リンク（新しいタブ） |

---

## Input

ユーザー入力を受け取るコンポーネントです。

### input

入力フィールド。テキスト、メール、パスワードなどを入力します。

```wireframe
input "Email" type=email placeholder="Enter email"
input "Password" type=password
input "Name" required disabled
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| label | string | ラベルテキスト |
| type | text \| email \| password \| number \| tel \| url \| search \| date | 入力タイプ |
| placeholder | string | プレースホルダー |
| value | string | デフォルト値 |
| disabled | boolean | 無効状態 |
| required | boolean | 必須入力 |
| readonly | boolean | 読み取り専用 |
| icon | string | アイコン |

---

### textarea

複数行入力フィールド。

```wireframe
textarea "Message" placeholder="Enter your message" rows=4
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| label | string | ラベルテキスト |
| placeholder | string | プレースホルダー |
| rows | number | 行数 |
| disabled | boolean | 無効状態 |

---

### select

ドロップダウン選択。

```wireframe
select "Country" placeholder="Select country"
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| label | string | ラベルテキスト |
| placeholder | string | プレースホルダー |
| disabled | boolean | 無効状態 |

---

### checkbox

チェックボックス。真偽値を選択します。

```wireframe
checkbox "Remember me"
checkbox "I agree to terms" checked
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| label | string | ラベルテキスト |
| checked | boolean | チェック状態 |
| disabled | boolean | 無効状態 |

---

### radio

ラジオボタン。グループ内で1つを選択します。

```wireframe
radio "Option A" name="options"
radio "Option B" name="options" checked
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| label | string | ラベルテキスト |
| name | string | グループ名 |
| checked | boolean | 選択状態 |
| disabled | boolean | 無効状態 |

---

### switch

トグルスイッチ。オン/オフ状態を切り替えます。

```wireframe
switch "Dark mode"
switch "Notifications" checked
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| label | string | ラベルテキスト |
| checked | boolean | アクティブ状態 |
| disabled | boolean | 無効状態 |

---

### slider

スライダー。範囲内の値を選択します。

```wireframe
slider "Volume" min=0 max=100 value=50
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| label | string | ラベルテキスト |
| min | number | 最小値 |
| max | number | 最大値 |
| value | number | 現在値 |
| step | number | ステップ増分 |
| disabled | boolean | 無効状態 |

---

### button

ボタン要素。クリック可能なボタンを表示します。

```wireframe
button "Submit" primary
button "Cancel" secondary
button "Delete" danger outline
button "Loading..." primary loading
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| primary | boolean | プライマリ強調スタイル |
| secondary | boolean | セカンダリスタイル |
| outline | boolean | アウトラインスタイル |
| ghost | boolean | ゴースト/透明スタイル |
| danger | boolean | 危険/削除スタイル |
| size | xs \| sm \| md \| lg \| xl | ボタンサイズ |
| icon | string | アイコン |
| disabled | boolean | 無効状態 |
| loading | boolean | ローディング状態 |

---

## Display

ビジュアル要素を表示するコンポーネントです。

### image

画像を表示します。

```wireframe
image src="/photo.jpg" alt="Photo" w=200 h=150
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| src | string | 画像ソースURL |
| alt | string | 代替テキスト |
| w | number | 幅 |
| h | number | 高さ |

---

### placeholder

画像やコンテンツのプレースホルダーです。

```wireframe
placeholder "Image" w=300 h=200
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| label | string | ラベルテキスト |
| w | number | 幅 |
| h | number | 高さ |

---

### avatar

ユーザープロフィール画像を表示します。

```wireframe
avatar "John Doe"
avatar "JD" size=lg src
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| name | string | 名前（イニシャル生成） |
| src | boolean | 画像表示 |
| size | xs \| sm \| md \| lg \| xl \| number | サイズ |

---

### badge

ステータスやカウントを小さなラベルで表示します。

```wireframe
badge "New"
badge "Active" variant=success
badge "3" variant=danger pill
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| variant | default \| primary \| secondary \| success \| warning \| danger \| info | スタイルバリアント |
| pill | boolean | 丸みのある角 |
| icon | string | アイコン |
| size | xs \| sm \| md \| lg | サイズ |

---

### icon

アイコンを表示します。

```wireframe
icon "home"
icon "settings" size=lg muted
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| name | string | アイコン名 |
| size | xs \| sm \| md \| lg \| xl \| number | サイズ |
| muted | boolean | ミュートスタイル |

---

### divider

区切り線要素。コンテンツを視覚的に分離します。

```wireframe
divider
divider my=4
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| m, my, mx | number | マージン |

---

## Data

データを表示するコンポーネントです。

### table

テーブルコンポーネント。データを表形式で表示します。

```wireframe
table striped hover bordered {
  // カラムと行
}
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| striped | boolean | ストライプ行 |
| bordered | boolean | ボーダースタイル |
| hover | boolean | ホバー効果 |

---

### list

リストコンポーネント。項目をリストとして表示します。

```wireframe
list {
  // 項目
}

list ordered {
  // 番号付き項目
}
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| ordered | boolean | 順序付きリスト |
| none | boolean | リストスタイルなし |
| gap | number | 項目の間隔 |

---

## Feedback

ユーザーにフィードバックを提供するコンポーネントです。

### alert

アラート要素。ユーザーにメッセージを表示します。

```wireframe
alert "Operation successful" variant=success
alert "Please check your input" variant=warning
alert "An error occurred" variant=danger dismissible
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| variant | success \| warning \| danger \| info | スタイルバリアント |
| dismissible | boolean | 閉じることができる |
| icon | string | アイコン |

---

### toast

トースト通知。一時的なメッセージを表示します。

```wireframe
toast "Saved!" position=top-right variant=success
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| position | top-left \| top-center \| top-right \| bottom-left \| bottom-center \| bottom-right | 位置 |
| variant | success \| warning \| danger \| info | スタイルバリアント |

---

### progress

プログレスバー。進行状況を表示します。

```wireframe
progress value=75
progress value=50 label="Uploading..."
progress indeterminate
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| value | number | 進行値（0-100） |
| max | number | 最大値 |
| label | string | ラベルテキスト |
| indeterminate | boolean | 不確定状態 |

---

### spinner

ローディングスピナー。ローディング状態を表示します。

```wireframe
spinner
spinner size=lg label="Loading..."
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| size | xs \| sm \| md \| lg \| xl \| number | サイズ |
| label | string | ラベルテキスト |

---

## Overlay

オーバーレイUIコンポーネントです。

### tooltip

ツールチップ要素。ホバー時に追加情報を表示します。

```wireframe
tooltip "Click to save" position=top {
  button "Save" primary
}
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| content | string | ツールチップ内容 |
| position | top \| right \| bottom \| left | 位置 |

---

### popover

ポップオーバー。クリック時に追加コンテンツを表示します。

```wireframe
popover title="Options" {
  // コンテンツ
}
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| title | string | ポップオーバータイトル |

---

### dropdown

ドロップダウンメニュー。クリック時にメニューが展開します。

```wireframe
dropdown {
  // メニュー項目
}
```

---

## Navigation

ナビゲーションコンポーネントです。

### nav

ナビゲーション領域。メニュー項目を配置します。

```wireframe
nav {
  // ナビゲーション項目
}

nav vertical gap=2 {
  // 垂直メニュー
}
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| vertical | boolean | 垂直方向 |
| gap | number | 項目の間隔 |

---

### tabs

タブコンポーネント。複数のパネルをタブで切り替えます。

```wireframe
tabs active=0 {
  // タブパネル
}
```

| 属性 | タイプ | 説明 |
|------|--------|------|
| active | number | アクティブタブインデックス |

---

### breadcrumb

パンくずリスト。現在の位置をパスとして表示します。

```wireframe
breadcrumb {
  // パンくず項目
}
```
