# Layouts

Wireweave provides flexible layout options for organizing your wireframe content.

## Page Layouts

### Basic Layout

```wireframe
page "Basic" {
  navbar { ... }
  main { ... }
  footer { ... }
}
```

### Sidebar Layout

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

### Two Column Layout

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

## Layout Components

### Row

Horizontal arrangement:

```wireframe
row {
  card { ... }
  card { ... }
  card { ... }
}
```

### Column

Vertical sections with width:

```wireframe
row {
  column width:6 {
    // half width
  }
  column width:6 {
    // half width
  }
}
```

### Grid

Grid-based layout:

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

Vertical stacking:

```wireframe
stack gap:8 {
  input "Email" email
  input "Password" password
  button "Login" primary
}
```

## Alignment

### Horizontal Alignment

```wireframe
card left {
  // left aligned (default)
}

card center {
  // horizontally centered
}

card right {
  // right aligned
}
```

### Vertical Alignment

```wireframe
row align:top {
  // top aligned
}

row align:center {
  // vertically centered
}

row align:bottom {
  // bottom aligned
}
```

### Distribution

```wireframe
row justify:between {
  // space between items
}

row justify:around {
  // space around items
}

row justify:evenly {
  // equal space between items
}
```

## Spacing

### Padding

```wireframe
card padding:16 {
  // 16px padding
}

card padding:24 {
  // 24px padding
}
```

### Gap

```wireframe
row gap:8 {
  // 8px gap between items
}

stack gap:16 {
  // 16px gap between items
}
```

### Margin

```wireframe
section margin:32 {
  // 32px margin
}
```

## Responsive Hints

Wireweave supports responsive hints:

```wireframe
grid columns:3 columns-sm:1 {
  // 3 columns on desktop, 1 on mobile
}

row wrap {
  // items wrap on smaller screens
}
```

## Common Patterns

### Card Grid

```wireframe
grid columns:3 gap:24 {
  card {
    image "Product 1"
    heading "Product Name"
    text "$99.00"
    button "Add to Cart"
  }
  // more cards...
}
```

### Form Layout

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

### Dashboard Layout

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

## Next Steps

- [Styling Guide](/guide/styling) - Customize colors and themes
- [Components Reference](/reference/components) - All components
