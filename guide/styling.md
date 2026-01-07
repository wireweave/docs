# Styling

Wireweave provides built-in themes and styling options for customizing wireframe appearance.

## Themes

### Light Theme (Default)

```wire
page "Light Mode" theme:light {
  // content
}
```

Light theme uses:
- Background: White (#FFFFFF)
- Text: Dark gray (#1F2937)
- Primary: Blue (#3B82F6)
- Borders: Light gray (#E5E7EB)

### Dark Theme

```wire
page "Dark Mode" theme:dark {
  // content
}
```

Dark theme uses:
- Background: Dark (#111827)
- Text: Light gray (#F9FAFB)
- Primary: Blue (#60A5FA)
- Borders: Gray (#374151)

## Colors

### Button Colors

```wire
button "Primary" primary      // Blue
button "Secondary" secondary  // Gray
button "Success" success      // Green
button "Danger" danger        // Red
button "Warning" warning      // Yellow
```

### Alert Colors

```wire
alert "Success!" success      // Green background
alert "Error!" error          // Red background
alert "Warning!" warning      // Yellow background
alert "Info!" info            // Blue background
```

### Badge Colors

```wire
badge "Active" success
badge "Pending" warning
badge "Inactive" error
badge "New" info
```

## Typography

### Heading Sizes

```wire
heading "H1 Title"            // 32px
heading "H2 Title" level:2    // 24px
heading "H3 Title" level:3    // 20px
heading "H4 Title" level:4    // 16px
```

### Text Styles

```wire
text "Regular text"
text "Bold text" bold
text "Muted text" muted
text "Small text" small
text "Large text" large
```

## Component Styles

### Card Styles

```wire
card {
  // default with subtle shadow
}

card outlined {
  // border instead of shadow
}

card flat {
  // no shadow or border
}

card elevated {
  // larger shadow
}
```

### Input Styles

```wire
input "Default" text
input "Error" text error
input "Disabled" text disabled
input "Readonly" text readonly
```

### Button Styles

```wire
button "Solid" primary
button "Outline" primary outline
button "Ghost" primary ghost
button "Link" link
```

## Sizing

### Component Sizes

```wire
button "Small" primary size:sm
button "Medium" primary size:md
button "Large" primary size:lg

input "Small" text size:sm
input "Large" text size:lg
```

### Width Options

```wire
input "Full Width" text fullWidth
button "Full Width" primary fullWidth

card width:400 {
  // fixed width
}
```

## Render Options

When rendering, you can specify options:

### HTML Render

```javascript
renderHtml(source, {
  theme: 'light',       // or 'dark'
  fullDocument: true,   // complete HTML document
});
```

### SVG Render

```javascript
renderSvg(source, {
  width: 1200,
  padding: 24,
  theme: 'light',
});
```

## Best Practices

1. **Use semantic colors** - Use `primary`, `success`, `danger` instead of custom colors
2. **Maintain consistency** - Stick to one theme per wireframe
3. **Focus on layout** - Wireframes are about structure, not visual design
4. **Keep it simple** - Avoid over-styling; wireframes should be quick sketches

## Next Steps

- [MCP Server Guide](/guide/mcp-server) - AI integration
- [Reference: Components](/reference/components) - Component details
