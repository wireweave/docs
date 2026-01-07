# はじめる

このガイドでは、Wireweaveをセットアップして最初のワイヤーフレームを作成する方法を説明します。

## インストール

### Playgroundを使用する

Wireweaveを試す最も簡単な方法は[Playground](https://playground.wireweave.dev)を使用することです。インストール不要で、すぐにコードを書き始められます！

### NPMパッケージ

プロジェクトにコアライブラリをインストールします：

```bash
npm install @wireweave/core
```

### AIアシスタント用MCPサーバー

Claudeやその他のAIアシスタントでWireweaveを使用するには：

1. [Dashboard](https://dashboard.wireweave.dev)でAPIキーを取得します

2. Claude Desktopの設定に追加します：

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

3. Claudeにワイヤーフレームの作成を依頼しましょう！

## 最初のワイヤーフレーム

シンプルなお問い合わせフォームを作成してみましょう：

```wireframe
page "Contact" {
  navbar {
    logo "Company"
    nav {
      link "Home"
      link "About"
      link "Contact" active
    }
  }

  main {
    heading "Get in Touch"
    text "We'd love to hear from you."

    card {
      form {
        input "Name" text
        input "Email" email
        input "Message" textarea
        button "Send Message" primary
      }
    }
  }

  footer {
    text "2026 Company Inc."
  }
}
```

## 構文を理解する

### ページ

すべてのワイヤーフレームは`page`で始まります：

```wireframe
page "Page Title" {
  // コンテンツがここに入ります
}
```

### コンポーネント

コンポーネントはページ内にネストされます：

```wireframe
page {
  card {
    heading "Title"
    text "Description"
    button "Action"
  }
}
```

### モディファイア

モディファイアを追加してコンポーネントをカスタマイズします：

```wireframe
button "Click Me" primary    // primaryスタイル
button "Cancel" secondary    // secondaryスタイル
card center                  // 中央揃えレイアウト
input "Email" email          // メール入力タイプ
```

## 次のステップ

- [コンポーネントガイド](/ja/guide/components) - 利用可能なコンポーネントを学ぶ
- [レイアウトガイド](/ja/guide/layouts) - レイアウトオプションをマスターする
- [MCPサーバーガイド](/ja/guide/mcp-server) - AI統合をセットアップする
