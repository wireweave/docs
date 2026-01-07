# VS Code Extension

The Wireweave VS Code extension provides syntax highlighting, live preview, and code snippets for `.wire` files.

## Installation

### From VS Code Marketplace

1. Open VS Code
2. Go to Extensions (Cmd+Shift+X / Ctrl+Shift+X)
3. Search for "Wireweave"
4. Click Install

### Manual Installation

```bash
code --install-extension wireweave.vscode
```

## Features

### Syntax Highlighting

The extension provides full syntax highlighting for Wireweave DSL:

- Keywords (page, card, button, etc.)
- Strings and values
- Modifiers and attributes
- Comments

### Live Preview

View your wireframe as you type:

1. Open a `.wire` file
2. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows)
3. Run "Wireweave: Open Preview"

The preview updates automatically as you edit.

### Code Snippets

Quick snippets for common patterns:

| Prefix | Description |
|--------|-------------|
| `page` | Basic page structure |
| `card` | Card component |
| `form` | Form with inputs |
| `navbar` | Navigation bar |
| `table` | Table with headers |
| `dashboard` | Dashboard layout |
| `login` | Login form |

Type the prefix and press Tab to expand.

### Formatting

Format your Wireweave code:

- `Cmd+Shift+F` (Mac) / `Ctrl+Shift+F` (Windows)
- Or right-click and select "Format Document"

## Configuration

### Settings

Open VS Code settings and search for "Wireweave":

```json
{
  "wireweave.preview.theme": "light",
  "wireweave.preview.autoRefresh": true,
  "wireweave.preview.refreshDelay": 300,
  "wireweave.format.indentSize": 2
}
```

### Preview Options

| Setting | Default | Description |
|---------|---------|-------------|
| `theme` | `"light"` | Preview theme (light/dark) |
| `autoRefresh` | `true` | Auto-update preview |
| `refreshDelay` | `300` | Delay before refresh (ms) |

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd+Shift+V` | Toggle Preview |
| `Cmd+K V` | Open Preview to Side |
| `Cmd+Shift+F` | Format Document |

## File Association

The extension automatically associates with `.wire` files. To manually set file association:

```json
{
  "files.associations": {
    "*.wire": "wireweave"
  }
}
```

## Commands

Available commands (Cmd+Shift+P):

- **Wireweave: Open Preview** - Open live preview
- **Wireweave: Export to HTML** - Export current file as HTML
- **Wireweave: Export to SVG** - Export current file as SVG
- **Wireweave: Validate** - Check syntax errors

## Troubleshooting

### Preview Not Loading

1. Check for syntax errors in your code
2. Try reloading VS Code (Cmd+Shift+P → "Reload Window")
3. Check the Output panel for errors (View → Output → Wireweave)

### Syntax Highlighting Not Working

1. Verify the file has `.wire` extension
2. Check file association in settings
3. Try reinstalling the extension

## Next Steps

- [Markdown Plugin](/guide/markdown-plugin) - Embed in docs
- [MCP Server](/guide/mcp-server) - AI integration
