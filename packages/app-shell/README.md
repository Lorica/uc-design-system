# Lunar AppShell

A root component that should wrap your entire application.

```bash static
yarn add @lorica/uc-design-system-app-shell
```

## Usage

The `AppShell` is designed to wrap an entire React application, and as such, should primarily be the
root component in the application tree (excluding HMR and other wrappers/providers). For example:

```jsx static
import React from 'react'
import ReactDOM from 'react-dom'
import AppShell from '@lorica/uc-design-system-app-shell'
import App from '../local/components/App'

ReactDOM.render(
  <AppShell name="Lunar">
    <App />
  </AppShell>,
  document.getElementById('root')
)
```
