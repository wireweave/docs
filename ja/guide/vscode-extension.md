# VS Code拡張

Wireweave VS Code拡張は、シンタックスハイライト、プレビュー、コード補完機能を提供します。

## インストール

### VS Code Marketplace

1. VS Codeで拡張機能ビューを開く（`Cmd+Shift+X` / `Ctrl+Shift+X`）
2. "Wireweave"を検索
3. Installをクリック

### 手動インストール

```bash
code --install-extension wireweave.wireweave-vscode
```

## 機能

### シンタックスハイライト

`.wire`および`.wireframe`ファイルに対してシンタックスハイライトが自動的に適用されます：

- コンポーネントキーワード
- 文字列と数値
- モディファイアと属性
- コメント

### リアルタイムプレビュー

コードを書きながらリアルタイムでワイヤーフレームをプレビューできます：

1. `.wire`ファイルを開く
2. コマンドパレットを開く（`Cmd+Shift+P` / `Ctrl+Shift+P`）
3. "Wireweave: Open Preview"を選択

または、エディタ右上のプレビューアイコンをクリック

### 自動補完

コンポーネントと属性の自動補完を提供します：

- コンポーネント名（`card`, `button`, `input`など）
- モディファイア（`primary`, `secondary`, `danger`など）
- 属性キー（`width`, `gap`, `justify`など）

### ホバー情報

コンポーネントにマウスを乗せるとドキュメント情報が表示されます：

- コンポーネントの説明
- 利用可能な属性
- サンプルコード

### エラー診断

構文エラーがある場合、リアルタイムで表示されます：

- 赤い下線でエラー位置を表示
- Problemsパネルで全エラーリストを確認
- エラーメッセージで修正方法を案内

## 設定

拡張機能の設定をカスタマイズできます：

```json
{
  "wireweave.theme": "light",
  "wireweave.autoPreview": true,
  "wireweave.previewWidth": 800
}
```

### 利用可能な設定

| 設定 | デフォルト | 説明 |
|------|------------|------|
| `wireweave.theme` | `"light"` | プレビューテーマ（"light"または"dark"） |
| `wireweave.autoPreview` | `true` | ファイルを開く時に自動的にプレビューを開く |
| `wireweave.previewWidth` | `800` | プレビューパネルの幅 |

## キーボードショートカット

| ショートカット | アクション |
|----------------|------------|
| `Cmd+K V` / `Ctrl+K V` | プレビューを開く |
| `Cmd+Shift+V` / `Ctrl+Shift+V` | プレビュートグル |

## Markdown統合

Markdownファイルでwireframeコードブロックを使用できます：

````markdown
```wireframe
page "Example" {
  card {
    button "Click" primary
  }
}
```
````

## トラブルシューティング

### プレビューが表示されない

1. 拡張機能が有効になっているか確認
2. ファイル拡張子が`.wire`または`.wireframe`か確認
3. VS Codeを再起動

### 自動補完が動作しない

1. 言語モードが"Wireframe"か確認（ステータスバーで確認）
2. 拡張機能が最新バージョンか確認

## 次のステップ

- [Markdownプラグイン](/ja/guide/markdown-plugin) - ドキュメントにワイヤーフレームを埋め込む
- [文法リファレンス](/ja/reference/grammar) - 完全なDSL文法
