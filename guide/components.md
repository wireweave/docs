# Components

Wireweave provides a rich set of semantic UI components for building wireframes.

## Container Components

### Page

The root element of every wireframe:

```text
page "Dashboard" {
  // content
}
```

### Card

A grouped content container:

```text
card {
  heading "Card Title"
  text "Card content"
}

card center {
  // centered content
}

card outlined {
  // with border
}
```

### Section

Semantic content sections:

```text
section {
  heading "Section Title"
  // content
}
```

## Navigation Components

### Navbar

Top navigation bar:

```text
navbar {
  logo "Brand"
  nav {
    link "Home"
    link "Products"
    link "Contact"
  }
}
```

### Sidebar

Side navigation:

```text
sidebar {
  menu {
    item "Dashboard"
    item "Settings"
    item "Profile"
  }
}
```

### Footer

Page footer:

```text
footer {
  text "Copyright 2024"
  links {
    link "Privacy"
    link "Terms"
  }
}
```

## Form Components

### Input

Various input types:

```text
input "Username" text
input "Email" email
input "Password" password
input "Bio" textarea
input "Age" number
input "Birthday" date
```

### Button

Action buttons:

```text
button "Submit" primary
button "Cancel" secondary
button "Delete" danger
button "Learn More" link
```

### Checkbox & Radio

Selection controls:

```text
checkbox "Remember me"
checkbox "Agree to terms" checked

radio "Option A"
radio "Option B" selected
```

### Select

Dropdown selection:

```text
select "Country" {
  option "USA"
  option "Canada"
  option "UK"
}
```

## Display Components

### Heading

Text headings:

```text
heading "Main Title"
heading "Subtitle" level:2
heading "Section" level:3
```

### Text

Body text:

```text
text "Regular paragraph text"
text "Muted description" muted
text "Important note" bold
```

### Image

Image placeholders:

```text
image "Product Photo"
image "Avatar" size:48
image "Banner" width:800 height:200
```

### Table

Data tables:

```text
table {
  header {
    column "Name"
    column "Email"
    column "Role"
  }
  row {
    cell "John Doe"
    cell "john@example.com"
    cell "Admin"
  }
  row {
    cell "Jane Smith"
    cell "jane@example.com"
    cell "User"
  }
}
```

### List

Ordered and unordered lists:

```text
list {
  item "First item"
  item "Second item"
  item "Third item"
}

list ordered {
  item "Step one"
  item "Step two"
  item "Step three"
}
```

## Feedback Components

### Alert

Status messages:

```text
alert "Operation successful" success
alert "Please check your input" warning
alert "An error occurred" error
alert "New update available" info
```

### Badge

Status indicators:

```text
badge "New"
badge "Pending" warning
badge "Active" success
badge "3" count
```

### Progress

Progress indicators:

```text
progress 75
progress 50 label:"Uploading..."
```

## Layout Modifiers

Components support layout modifiers:

```text
card center {
  // horizontally centered
}

card flex {
  // flexbox layout
}

card grid columns:3 {
  // 3-column grid
}
```

## Next Steps

- [Layouts Guide](/guide/layouts) - Learn about layout options
- [Styling Guide](/guide/styling) - Customize appearance
- [Grammar Reference](/reference/grammar) - Complete syntax
