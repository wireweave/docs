# Components Reference

Complete reference of all Wireweave components with examples.

## Page

The root container for wireframes.

```text
page "Title" theme:light {
  // content
}
```

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| title | string | - | Page title |
| theme | light\|dark | light | Color theme |
| maxWidth | number | - | Maximum width |
| center | boolean | false | Center content |

---

## Card

A contained surface for grouping content.

```text
card "Title" outlined {
  heading "Card Title"
  text "Card content"
}
```

| Modifier | Description |
|----------|-------------|
| outlined | Border instead of shadow |
| flat | No shadow or border |
| elevated | Larger shadow |
| center | Center content |

---

## Button

Interactive button element.

```text
button "Click Me" primary
button "Cancel" secondary
button "Delete" danger
```

| Modifier | Description |
|----------|-------------|
| primary | Primary action style |
| secondary | Secondary style |
| success | Success/green style |
| danger | Danger/red style |
| warning | Warning/yellow style |
| outline | Outline variant |
| ghost | Ghost variant |
| link | Link style |
| disabled | Disabled state |
| fullWidth | Full width |
| size:sm | Small size |
| size:lg | Large size |

---

## Input

Form input field.

```text
input "Email" email
input "Password" password
input "Bio" textarea
```

| Type | Description |
|------|-------------|
| text | Text input (default) |
| email | Email input |
| password | Password input |
| number | Number input |
| date | Date picker |
| textarea | Multi-line text |
| search | Search input |
| tel | Phone number |
| url | URL input |

| Modifier | Description |
|----------|-------------|
| error | Error state |
| disabled | Disabled state |
| readonly | Read-only state |
| fullWidth | Full width |
| placeholder:string | Placeholder text |

---

## Heading

Text heading (h1-h6).

```text
heading "Main Title"
heading "Subtitle" level:2
heading "Section" level:3
```

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| level | 1-6 | 1 | Heading level |

---

## Text

Body text content.

```text
text "Regular text"
text "Muted text" muted
text "Bold text" bold
```

| Modifier | Description |
|----------|-------------|
| bold | Bold weight |
| muted | Muted color |
| small | Small size |
| large | Large size |

---

## Image

Image placeholder.

```text
image "Product Photo"
image "Avatar" size:48
image "Banner" width:800 height:200
```

| Attribute | Type | Description |
|-----------|------|-------------|
| alt | string | Alt text / label |
| width | number | Width in pixels |
| height | number | Height in pixels |
| size | number | Square size |

---

## Table

Data table with rows and columns.

```text
table {
  header {
    column "Name"
    column "Email"
  }
  row {
    cell "John"
    cell "john@example.com"
  }
}
```

---

## List

Ordered or unordered list.

```text
list {
  item "First item"
  item "Second item"
}

list ordered {
  item "Step 1"
  item "Step 2"
}
```

| Modifier | Description |
|----------|-------------|
| ordered | Numbered list |

---

## Navbar

Top navigation bar.

```text
navbar {
  logo "Brand"
  nav {
    link "Home"
    link "Products"
  }
}
```

---

## Sidebar

Side navigation panel.

```text
sidebar width:240 {
  menu {
    item "Dashboard"
    item "Settings"
  }
}
```

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| width | number | 200 | Width in pixels |

---

## Menu

Navigation menu.

```text
menu {
  item "Dashboard"
  item "Settings" active
  item "Logout"
}
```

---

## Alert

Status message display.

```text
alert "Success!" success
alert "Error occurred" error
alert "Warning" warning
alert "Information" info
```

| Modifier | Description |
|----------|-------------|
| success | Green/success style |
| error | Red/error style |
| warning | Yellow/warning style |
| info | Blue/info style |

---

## Badge

Status indicator.

```text
badge "New"
badge "Active" success
badge "3" count
```

| Modifier | Description |
|----------|-------------|
| success | Green badge |
| warning | Yellow badge |
| error | Red badge |
| count | Numeric badge style |

---

## Progress

Progress indicator.

```text
progress 75
progress 50 label:"Loading..."
```

| Attribute | Type | Description |
|-----------|------|-------------|
| value | 0-100 | Progress percentage |
| label | string | Text label |

---

## Checkbox

Checkbox input.

```text
checkbox "Remember me"
checkbox "I agree" checked
```

| Modifier | Description |
|----------|-------------|
| checked | Pre-checked state |
| disabled | Disabled state |

---

## Radio

Radio button input.

```text
radio "Option A"
radio "Option B" selected
```

| Modifier | Description |
|----------|-------------|
| selected | Pre-selected state |
| disabled | Disabled state |

---

## Select

Dropdown select.

```text
select "Country" {
  option "USA"
  option "Canada"
  option "UK"
}
```

---

## Row

Horizontal layout container.

```text
row gap:16 justify:between {
  button "Cancel" secondary
  button "Submit" primary
}
```

| Attribute | Type | Description |
|-----------|------|-------------|
| gap | number | Space between items |
| align | top\|center\|bottom | Vertical alignment |
| justify | start\|center\|end\|between\|around | Horizontal alignment |

---

## Column

Vertical column in a row.

```text
row {
  column width:8 { ... }
  column width:4 { ... }
}
```

| Attribute | Type | Description |
|-----------|------|-------------|
| width | 1-12 | Column width (12-column grid) |

---

## Grid

Grid layout container.

```text
grid columns:3 gap:24 {
  card { ... }
  card { ... }
  card { ... }
}
```

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| columns | number | 2 | Number of columns |
| gap | number | 16 | Space between items |

---

## Stack

Vertical stack layout.

```text
stack gap:16 {
  input "Email" email
  input "Password" password
  button "Login" primary
}
```

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| gap | number | 8 | Space between items |

---

## Divider

Horizontal divider line.

```text
divider
divider "or"
```

| Attribute | Type | Description |
|-----------|------|-------------|
| label | string | Text in center |

---

## Modal

Modal dialog overlay.

```text
modal "Confirm Delete" {
  text "Are you sure you want to delete this item?"
  row justify:end gap:8 {
    button "Cancel" secondary
    button "Delete" danger
  }
}
```

---

## Avatar

User avatar display.

```text
avatar "John Doe"
avatar "JD" size:48
```

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| size | number | 32 | Size in pixels |
