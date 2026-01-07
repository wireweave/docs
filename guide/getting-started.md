# Getting Started

This guide will help you set up Wireweave and create your first wireframe.

## Installation

### Using the Playground

The fastest way to try Wireweave is through the [Playground](https://playground.wireweave.dev). No installation required - just start writing code!

### NPM Package

Install the core library in your project:

```bash
npm install @wireweave/core
```

### MCP Server for AI Assistants

To use Wireweave with Claude or other AI assistants:

1. Get an API key from the [Dashboard](https://dashboard.wireweave.dev)

2. Add to your Claude Desktop config:

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

3. Ask Claude to create wireframes!

## Your First Wireframe

Let's create a simple contact form:

```wire
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

## Understanding the Syntax

### Pages

Every wireframe starts with a `page`:

```wire
page "Page Title" {
  // content goes here
}
```

### Components

Components are nested inside pages:

```wire
page {
  card {
    heading "Title"
    text "Description"
    button "Action"
  }
}
```

### Modifiers

Add modifiers to customize components:

```wire
button "Click Me" primary    // primary style
button "Cancel" secondary    // secondary style
card center                  // centered layout
input "Email" email          // email input type
```

## Next Steps

- [Components Guide](/guide/components) - Learn about available components
- [Layouts Guide](/guide/layouts) - Master layout options
- [MCP Server Guide](/guide/mcp-server) - Set up AI integration
