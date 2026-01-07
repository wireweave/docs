# Components Reference

Complete reference of all Wireweave components with examples.

## Layout

Components that define page structure.

### page

Page root container. The starting point for all layouts.

```wireframe
page "Dashboard" centered {
  // content
}
```

| Attribute | Type | Description |
|-----------|------|-------------|
| title | string | Page title |
| viewport | string | Viewport size (e.g., "1440x900") |
| device | string | Device preset (iphone14, desktop, etc.) |
| centered | boolean | Center content |
| p, px, py | number | Padding |
| gap | number | Gap between children |

---

### header

Page header area. Place navigation, logo, etc.

```wireframe
header border {
  row justify=between {
    title "Logo" level=3
    nav { }
  }
}
```

| Attribute | Type | Description |
|-----------|------|-------------|
| border | boolean | Bottom border |
| p, px, py | number | Padding |
| gap | number | Gap between children |
| justify | string | Main axis alignment |
| align | string | Cross axis alignment |

---

### main

Main content area.

```wireframe
main {
  // main content
}
```

---

### footer

Page footer area.

```wireframe
footer border {
  text "Copyright 2024" muted
}
```

---

### sidebar

Sidebar area.

```wireframe
sidebar position=left w=240 {
  nav vertical { }
}
```

| Attribute | Type | Description |
|-----------|------|-------------|
| position | left \| right | Sidebar position |
| w | number | Width |

---

### section

Section area. Groups content logically.

```wireframe
section title="Settings" expanded {
  // content
}
```

| Attribute | Type | Description |
|-----------|------|-------------|
| title | string | Section title |
| expanded | boolean | Expanded state |

---

## Grid

Components for flex layout.

### row

Horizontal flex container.

```wireframe
row gap=4 justify=between align=center {
  button "Cancel" secondary
  button "Submit" primary
}
```

| Attribute | Type | Description |
|-----------|------|-------------|
| gap | number | Gap between children |
| justify | start \| center \| end \| between \| around \| evenly | Main axis alignment |
| align | start \| center \| end \| stretch \| baseline | Cross axis alignment |
| wrap | boolean | Allow wrapping |

---

### col

Vertical flex container or grid column.

```wireframe
row {
  col span=6 { }
  col span=6 { }
}
```

| Attribute | Type | Description |
|-----------|------|-------------|
| span | 1-12 | Grid column width |
| sm, md, lg, xl | number | Responsive column width |
| order | number | Flex order |

---

## Container

Components for grouping content.

### card

Card component. Groups and displays content.

```wireframe
card title="Settings" shadow=md border {
  // content
}
```

| Attribute | Type | Description |
|-----------|------|-------------|
| title | string | Card title |
| shadow | none \| sm \| md \| lg \| xl | Shadow size |
| border | boolean | Show border |
| p | number | Padding |

---

### modal

Modal dialog. Displays content over an overlay.

```wireframe
modal "Confirm Delete" {
  text "Are you sure?"
  row justify=end gap=2 {
    button "Cancel" secondary
    button "Delete" danger
  }
}
```

| Attribute | Type | Description |
|-----------|------|-------------|
| title | string | Modal title |
| w, h | number | Width, height |

---

### drawer

Drawer panel. Slides in from the edge of the screen.

```wireframe
drawer "Menu" position=left {
  nav vertical { }
}
```

| Attribute | Type | Description |
|-----------|------|-------------|
| title | string | Drawer title |
| position | left \| right \| top \| bottom | Position |

---

### accordion

Accordion. Collapsible content panel.

```wireframe
accordion "Advanced Settings" {
  // content
}
```

---

## Text

Components for displaying text.

### text

Displays regular text.

```wireframe
text "Regular text"
text "Muted description" muted
text "Important" weight=bold size=lg
```

| Attribute | Type | Description |
|-----------|------|-------------|
| size | xs \| sm \| base \| md \| lg \| xl \| 2xl | Text size |
| weight | normal \| medium \| semibold \| bold | Font weight |
| align | left \| center \| right | Text alignment |
| muted | boolean | Muted style |

---

### title

Title element. Displays h1~h6 headings.

```wireframe
title "Main Title" level=1
title "Subtitle" level=2
title "Section" level=3
```

| Attribute | Type | Description |
|-----------|------|-------------|
| level | 1-6 | Heading level |
| size | string | Text size |
| align | string | Text alignment |

---

### link

Displays a clickable hyperlink.

```wireframe
link "Learn more" href="/docs"
link "GitHub" href="https://github.com" external
```

| Attribute | Type | Description |
|-----------|------|-------------|
| href | string | Link URL |
| external | boolean | External link (new tab) |

---

## Input

Components for user input.

### input

Input field. Accepts text, email, password, etc.

```wireframe
input "Email" type=email placeholder="Enter email"
input "Password" type=password
input "Name" required disabled
```

| Attribute | Type | Description |
|-----------|------|-------------|
| label | string | Label text |
| type | text \| email \| password \| number \| tel \| url \| search \| date | Input type |
| placeholder | string | Placeholder text |
| value | string | Default value |
| disabled | boolean | Disabled state |
| required | boolean | Required field |
| readonly | boolean | Read-only |
| icon | string | Icon |

---

### textarea

Multi-line input field.

```wireframe
textarea "Message" placeholder="Enter your message" rows=4
```

| Attribute | Type | Description |
|-----------|------|-------------|
| label | string | Label text |
| placeholder | string | Placeholder text |
| rows | number | Number of rows |
| disabled | boolean | Disabled state |

---

### select

Dropdown select.

```wireframe
select "Country" placeholder="Select country"
```

| Attribute | Type | Description |
|-----------|------|-------------|
| label | string | Label text |
| placeholder | string | Placeholder text |
| disabled | boolean | Disabled state |

---

### checkbox

Checkbox. Selects true/false value.

```wireframe
checkbox "Remember me"
checkbox "I agree to terms" checked
```

| Attribute | Type | Description |
|-----------|------|-------------|
| label | string | Label text |
| checked | boolean | Checked state |
| disabled | boolean | Disabled state |

---

### radio

Radio button. Selects one option within a group.

```wireframe
radio "Option A" name="options"
radio "Option B" name="options" checked
```

| Attribute | Type | Description |
|-----------|------|-------------|
| label | string | Label text |
| name | string | Group name |
| checked | boolean | Selected state |
| disabled | boolean | Disabled state |

---

### switch

Toggle switch. Toggles on/off state.

```wireframe
switch "Dark mode"
switch "Notifications" checked
```

| Attribute | Type | Description |
|-----------|------|-------------|
| label | string | Label text |
| checked | boolean | Active state |
| disabled | boolean | Disabled state |

---

### slider

Slider. Selects a value within a range.

```wireframe
slider "Volume" min=0 max=100 value=50
```

| Attribute | Type | Description |
|-----------|------|-------------|
| label | string | Label text |
| min | number | Minimum value |
| max | number | Maximum value |
| value | number | Current value |
| step | number | Step increment |
| disabled | boolean | Disabled state |

---

### button

Button element. Displays a clickable button.

```wireframe
button "Submit" primary
button "Cancel" secondary
button "Delete" danger outline
button "Loading..." primary loading
```

| Attribute | Type | Description |
|-----------|------|-------------|
| primary | boolean | Primary emphasis style |
| secondary | boolean | Secondary style |
| outline | boolean | Outline style |
| ghost | boolean | Ghost/transparent style |
| danger | boolean | Danger/delete style |
| size | xs \| sm \| md \| lg \| xl | Button size |
| icon | string | Icon |
| disabled | boolean | Disabled state |
| loading | boolean | Loading state |

---

## Display

Components for displaying visual elements.

### image

Displays an image.

```wireframe
image src="/photo.jpg" alt="Photo" w=200 h=150
```

| Attribute | Type | Description |
|-----------|------|-------------|
| src | string | Image source URL |
| alt | string | Alt text |
| w | number | Width |
| h | number | Height |

---

### placeholder

Placeholder for images or content.

```wireframe
placeholder "Image" w=300 h=200
```

| Attribute | Type | Description |
|-----------|------|-------------|
| label | string | Label text |
| w | number | Width |
| h | number | Height |

---

### avatar

Displays a user profile image.

```wireframe
avatar "John Doe"
avatar "JD" size=lg src
```

| Attribute | Type | Description |
|-----------|------|-------------|
| name | string | Name (generates initials) |
| src | boolean | Show image |
| size | xs \| sm \| md \| lg \| xl \| number | Size |

---

### badge

Displays status or count as a small label.

```wireframe
badge "New"
badge "Active" variant=success
badge "3" variant=danger pill
```

| Attribute | Type | Description |
|-----------|------|-------------|
| variant | default \| primary \| secondary \| success \| warning \| danger \| info | Style variant |
| pill | boolean | Rounded corners |
| icon | string | Icon |
| size | xs \| sm \| md \| lg | Size |

---

### icon

Displays an icon.

```wireframe
icon "home"
icon "settings" size=lg muted
```

| Attribute | Type | Description |
|-----------|------|-------------|
| name | string | Icon name |
| size | xs \| sm \| md \| lg \| xl \| number | Size |
| muted | boolean | Muted style |

---

### divider

Divider element. Visually separates content.

```wireframe
divider
divider my=4
```

| Attribute | Type | Description |
|-----------|------|-------------|
| m, my, mx | number | Margin |

---

## Data

Components for displaying data.

### table

Table component. Displays data in tabular format.

```wireframe
table striped hover bordered {
  // columns and rows
}
```

| Attribute | Type | Description |
|-----------|------|-------------|
| striped | boolean | Striped rows |
| bordered | boolean | Bordered style |
| hover | boolean | Hover effect |

---

### list

List component. Displays items as a list.

```wireframe
list {
  // items
}

list ordered {
  // numbered items
}
```

| Attribute | Type | Description |
|-----------|------|-------------|
| ordered | boolean | Ordered list |
| none | boolean | No list style |
| gap | number | Item gap |

---

## Feedback

Components for providing feedback to users.

### alert

Alert element. Displays a message to users.

```wireframe
alert "Operation successful" variant=success
alert "Please check your input" variant=warning
alert "An error occurred" variant=danger dismissible
```

| Attribute | Type | Description |
|-----------|------|-------------|
| variant | success \| warning \| danger \| info | Style variant |
| dismissible | boolean | Can be dismissed |
| icon | string | Icon |

---

### toast

Toast notification. Displays a temporary message.

```wireframe
toast "Saved!" position=top-right variant=success
```

| Attribute | Type | Description |
|-----------|------|-------------|
| position | top-left \| top-center \| top-right \| bottom-left \| bottom-center \| bottom-right | Position |
| variant | success \| warning \| danger \| info | Style variant |

---

### progress

Progress bar. Displays progress status.

```wireframe
progress value=75
progress value=50 label="Uploading..."
progress indeterminate
```

| Attribute | Type | Description |
|-----------|------|-------------|
| value | number | Progress value (0-100) |
| max | number | Maximum value |
| label | string | Label text |
| indeterminate | boolean | Indeterminate state |

---

### spinner

Loading spinner. Displays loading state.

```wireframe
spinner
spinner size=lg label="Loading..."
```

| Attribute | Type | Description |
|-----------|------|-------------|
| size | xs \| sm \| md \| lg \| xl \| number | Size |
| label | string | Label text |

---

## Overlay

Overlay UI components.

### tooltip

Tooltip element. Displays additional info on hover.

```wireframe
tooltip "Click to save" position=top {
  button "Save" primary
}
```

| Attribute | Type | Description |
|-----------|------|-------------|
| content | string | Tooltip content |
| position | top \| right \| bottom \| left | Position |

---

### popover

Popover. Displays additional content on click.

```wireframe
popover title="Options" {
  // content
}
```

| Attribute | Type | Description |
|-----------|------|-------------|
| title | string | Popover title |

---

### dropdown

Dropdown menu. Expands menu on click.

```wireframe
dropdown {
  // menu items
}
```

---

## Navigation

Navigation components.

### nav

Navigation area. Places menu items.

```wireframe
nav {
  // nav items
}

nav vertical gap=2 {
  // vertical menu
}
```

| Attribute | Type | Description |
|-----------|------|-------------|
| vertical | boolean | Vertical direction |
| gap | number | Item gap |

---

### tabs

Tab component. Switches between multiple panels.

```wireframe
tabs active=0 {
  // tab panels
}
```

| Attribute | Type | Description |
|-----------|------|-------------|
| active | number | Active tab index |

---

### breadcrumb

Breadcrumb. Displays current location as a path.

```wireframe
breadcrumb {
  // breadcrumb items
}
```
