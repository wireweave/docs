# Pages

Every Wireweave wireframe starts with a `page` component - the root container for all content.

## Basic Page

```wire
page {
  // content goes here
}
```

## Page Title

Give your page a title:

```wire
page "Login" {
  // content
}
```

The title appears in the wireframe header and can be used for documentation.

## Page Themes

Set the color theme for the entire page:

```wire
page "Dashboard" theme:light {
  // light theme (default)
}

page "Dashboard" theme:dark {
  // dark theme
}
```

## Page Layout

### Full Width

```wire
page fullWidth {
  // content spans full width
}
```

### Centered Content

```wire
page center {
  // content is centered
}
```

### Max Width

```wire
page maxWidth:1200 {
  // content limited to 1200px
}
```

## Common Page Structures

### Landing Page

```wire
page "Home" {
  navbar {
    logo "Brand"
    nav { link "Features" link "Pricing" link "About" }
    button "Sign Up" primary
  }

  section hero center {
    heading "Welcome to Our Product"
    text "The best solution for your needs"
    button "Get Started" primary
  }

  section features {
    grid columns:3 {
      card { heading "Fast" text "Lightning quick performance" }
      card { heading "Simple" text "Easy to use interface" }
      card { heading "Secure" text "Enterprise-grade security" }
    }
  }

  footer {
    text "Copyright 2024"
  }
}
```

### Dashboard

```wire
page "Dashboard" {
  navbar {
    logo "App"
    nav { link "Dashboard" active link "Settings" }
    avatar "User"
  }

  row {
    sidebar width:240 {
      menu {
        item "Overview"
        item "Analytics"
        item "Reports"
        item "Settings"
      }
    }

    main {
      heading "Overview"
      grid columns:4 {
        card { text "Users" heading "1,234" }
        card { text "Revenue" heading "$56,789" }
        card { text "Orders" heading "890" }
        card { text "Growth" heading "+12%" }
      }

      card {
        heading "Recent Activity"
        table { ... }
      }
    }
  }
}
```

### Auth Pages

```wire
page "Login" center {
  card width:400 {
    heading "Welcome Back"
    text "Sign in to your account"

    input "Email" email
    input "Password" password

    row justify:between {
      checkbox "Remember me"
      link "Forgot password?"
    }

    button "Sign In" primary fullWidth

    divider "or"

    button "Continue with Google" secondary fullWidth
  }
}
```

### Settings Page

```wire
page "Settings" {
  navbar { ... }

  row {
    sidebar {
      menu {
        item "Profile"
        item "Account"
        item "Security"
        item "Notifications"
      }
    }

    main {
      heading "Profile Settings"

      card {
        row gap:24 {
          avatar "User" size:80
          stack {
            heading "John Doe" level:3
            text "john@example.com" muted
            button "Change Photo" secondary
          }
        }
      }

      card {
        heading "Personal Information" level:3
        form {
          row gap:16 {
            input "First Name" text
            input "Last Name" text
          }
          input "Email" email
          input "Bio" textarea

          row justify:end {
            button "Cancel" secondary
            button "Save Changes" primary
          }
        }
      }
    }
  }
}
```

## Multiple Pages

For multi-page wireframes, create separate files:

```
wireframes/
  login.wire
  dashboard.wire
  settings.wire
  profile.wire
```

Or use sections to show flow:

```wire
page "User Flow" {
  section "Step 1: Login" {
    card { ... }
  }

  section "Step 2: Dashboard" {
    card { ... }
  }

  section "Step 3: Settings" {
    card { ... }
  }
}
```

## Next Steps

- [Components](/guide/components) - Available UI components
- [Layouts](/guide/layouts) - Layout options
