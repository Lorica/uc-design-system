# UCDS AppShell

A root component that should wrap your entire application.

```bash static
yarn add @usercentric/uc-design-system-app-shell
```

## Usage

The `AppShell` is designed to wrap an entire React application, and as such, should primarily be the
root component in the application tree (excluding HMR and other wrappers/providers). For example:

```jsx static
import React from 'react'
import ReactDOM from 'react-dom'
import AppShell from '@usercentric/uc-design-system-app-shell'
import App from '../local/components/App'

ReactDOM.render(
  <AppShell name="UCDS">
    <App />
  </AppShell>,
  document.getElementById('root')
)
```
