# 시작하기

이 가이드는 Wireweave를 설정하고 첫 번째 와이어프레임을 만드는 방법을 안내합니다.

## 설치

### Playground 사용하기

Wireweave를 시작하는 가장 빠른 방법은 [Playground](https://playground.wireweave.org)를 사용하는 것입니다. 설치가 필요 없이 바로 코드를 작성할 수 있습니다!

### NPM 패키지

프로젝트에 코어 라이브러리를 설치합니다:

```bash
npm install @wireweave/core
```

### AI 어시스턴트용 MCP 서버

Claude 또는 다른 AI 어시스턴트와 Wireweave를 사용하려면:

1. [Dashboard](https://dashboard.wireweave.org)에서 API 키를 발급받습니다

2. Claude Desktop 설정에 추가합니다:

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

3. Claude에게 와이어프레임 생성을 요청하세요!

## 첫 번째 와이어프레임

간단한 연락처 폼을 만들어 봅시다:

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
    text "2024 Company Inc."
  }
}
```

## 문법 이해하기

### 페이지

모든 와이어프레임은 `page`로 시작합니다:

```wireframe
page "Page Title" {
  // 콘텐츠가 들어갑니다
}
```

### 컴포넌트

컴포넌트는 페이지 내부에 중첩됩니다:

```wireframe
page {
  card {
    heading "Title"
    text "Description"
    button "Action"
  }
}
```

### 수정자

수정자를 추가하여 컴포넌트를 커스터마이즈합니다:

```wireframe
button "Click Me" primary    // primary 스타일
button "Cancel" secondary    // secondary 스타일
card center                  // 중앙 정렬 레이아웃
input "Email" email          // 이메일 입력 타입
```

## 다음 단계

- [컴포넌트 가이드](/ko/guide/components) - 사용 가능한 컴포넌트 알아보기
- [레이아웃 가이드](/ko/guide/layouts) - 레이아웃 옵션 마스터하기
- [MCP 서버 가이드](/ko/guide/mcp-server) - AI 통합 설정하기
