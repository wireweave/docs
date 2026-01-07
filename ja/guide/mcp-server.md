# MCPサーバー

Wireweave MCPサーバーを使用すると、Claudeやその他のAIアシスタントとWireweaveを統合できます。

## MCPとは？

MCP（Model Context Protocol）は、AIモデルが外部ツールやサービスと対話できるようにするプロトコルです。Wireweave MCPサーバーにより、AIアシスタントは会話を通じてワイヤーフレームを生成できます。

## インストール

### 1. APIキーを取得

[Dashboard](https://dashboard.wireweave.dev)でAPIキーを取得します。

### 2. Claude Desktopの設定

Claude Desktopの設定ファイルにMCPサーバーを追加します：

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`

**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "wireweave": {
      "command": "npx",
      "args": ["@wireweave/mcp-server"],
      "env": {
        "WIREWEAVE_API_KEY": "your-api-key"
      }
    }
  }
}
```

### 3. Claude Desktopを再起動

設定変更後、Claude Desktopを再起動します。

## 使用方法

Claudeにワイヤーフレームの作成を依頼するだけです：

- 「ログインページのワイヤーフレームを作って」
- 「ダッシュボードレイアウトを設計して」
- 「ECサイトの商品一覧ページを見せて」

## 利用可能なツール

MCPサーバーは以下のツールを提供します：

### wireweave_render

ワイヤーフレームをHTMLまたはSVGにレンダリングします。

```
入力：
- source: Wireweave DSLソースコード
- format: "html" または "svg"
- theme: "light" または "dark"

出力：
- レンダリングされたHTML/SVGコード
```

### wireweave_validate

Wireweave DSL構文を検証します。

```
入力：
- source: Wireweave DSLソースコード

出力：
- valid: 有効かどうか
- errors: エラーリスト（ある場合）
```

### wireweave_grammar

DSL文法ドキュメントを取得します。

```
出力：
- 文法の説明
- 利用可能なコンポーネントリスト
- モディファイアリスト
```

## 会話例

**ユーザー**: シンプルなログインページのワイヤーフレームを作って

**Claude**: はい、ログインページのワイヤーフレームを作成します。

```wireframe
page "Login" centered {
  card w=400 p=6 {
    title "Sign In" level=2 align=center
    input "Email" type=email
    input "Password" type=password
    checkbox "Remember me"
    button "Sign In" primary
    divider my=4
    text "Don't have an account?" align=center
    link "Sign Up" align=center
  }
}
```

[ワイヤーフレーム画像をレンダリング]

## トラブルシューティング

### サーバーに接続できない

1. APIキーが正しいか確認
2. Claude Desktopを再起動
3. 設定ファイルのパスを確認

### レンダリングに失敗

1. DSL構文を確認
2. API使用量制限を確認
3. ネットワーク接続状態を確認

## 次のステップ

- [VS Code拡張](/ja/guide/vscode-extension) - エディタ統合
- [APIリファレンス](/ja/reference/api) - API詳細ドキュメント
