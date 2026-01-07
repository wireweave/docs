# Grammar Reference

Complete syntax reference for Wireweave DSL.

## Basic Syntax

### Comments

```wire
// Single line comment

/* Multi-line
   comment */
```

### Strings

```wire
"Double quoted string"
'Single quoted string'
```

### Numbers

```wire
100        // Integer
3.14       // Float
```

### Booleans

```wire
true
false
```

## Structure

### Page

```
page [title] [modifiers] {
  [children]
}
```

Examples:
```wire
page { }
page "Title" { }
page "Title" theme:dark { }
```

### Components

```
component_name [label] [modifiers] {
  [children]
}
```

Examples:
```wire
card { }
card "Title" { }
card center outlined { }
button "Click" primary
```

## Modifiers

### Style Modifiers

```wire
primary     // Primary color
secondary   // Secondary color
success     // Success/green
danger      // Danger/red
warning     // Warning/yellow

outlined    // Border style
ghost       // Transparent background
link        // Link style
```

### Size Modifiers

```wire
size:sm     // Small
size:md     // Medium (default)
size:lg     // Large

width:400   // Fixed width
height:300  // Fixed height
fullWidth   // Full width
```

### Layout Modifiers

```wire
center      // Centered
left        // Left aligned
right       // Right aligned

flex        // Flexbox layout
grid        // Grid layout
stack       // Stack layout

gap:16      // Gap between children
padding:24  // Internal padding
margin:16   // External margin
```

### State Modifiers

```wire
active      // Active state
disabled    // Disabled state
checked     // Checked (checkbox/radio)
selected    // Selected option
error       // Error state
```

## Components Reference

### Container Components

```
page [title] [theme:light|dark]
card [title] [center|outlined|flat|elevated]
section [title]
main
aside
header
footer
```

### Navigation Components

```
navbar
nav
menu
sidebar [width:number]
link [label] [active]
logo [label]
```

### Form Components

```
form
input [label] [type] [error|disabled|readonly]
button [label] [primary|secondary|danger|success]
checkbox [label] [checked]
radio [label] [selected]
select [label] { option [label] }
textarea [label] [rows:number]
```

Input types:
- `text` (default)
- `email`
- `password`
- `number`
- `date`
- `tel`
- `url`
- `search`
- `textarea`

### Display Components

```
heading [text] [level:1-6]
text [content] [bold|muted|small|large]
image [alt] [width:number] [height:number]
avatar [name] [size:number]
icon [name]
badge [label] [success|warning|error|info]
```

### Data Components

```
table {
  header { column [label] }
  row { cell [content] }
}

list [ordered] {
  item [content]
}
```

### Feedback Components

```
alert [message] [success|warning|error|info]
toast [message] [type]
progress [value:0-100] [label:string]
spinner [size:number]
```

### Layout Components

```
row [gap:number] [align:top|center|bottom] [justify:start|center|end|between|around]
column [width:1-12]
grid [columns:number] [gap:number]
stack [gap:number]
divider [label]
spacer [size:number]
```

### Overlay Components

```
modal [title] {
  [content]
  [footer]
}

dropdown [trigger] {
  [items]
}

tooltip [content]
```

## Attribute Syntax

### Key-Value Attributes

```wire
component attribute:value
component attribute:"string value"
```

Examples:
```wire
grid columns:3
input placeholder:"Enter email"
progress value:75
```

### Boolean Attributes

```wire
component attribute   // Sets to true
```

Examples:
```wire
button primary        // primary=true
input disabled        // disabled=true
```

## Full Example

```wire
page "User Management" theme:light {
  navbar {
    logo "Admin"
    nav {
      link "Dashboard"
      link "Users" active
      link "Settings"
    }
    avatar "Admin"
  }

  row {
    sidebar width:200 {
      menu {
        item "All Users"
        item "Active"
        item "Pending"
        item "Archived"
      }
    }

    main {
      row justify:between {
        heading "Users"
        button "Add User" primary
      }

      card {
        table {
          header {
            column "Name"
            column "Email"
            column "Role"
            column "Status"
            column "Actions"
          }
          row {
            cell "John Doe"
            cell "john@example.com"
            cell "Admin"
            cell { badge "Active" success }
            cell { button "Edit" link }
          }
          row {
            cell "Jane Smith"
            cell "jane@example.com"
            cell "User"
            cell { badge "Pending" warning }
            cell { button "Edit" link }
          }
        }
      }

      row justify:center {
        button "Previous" secondary
        text "Page 1 of 10"
        button "Next" secondary
      }
    }
  }
}
```
