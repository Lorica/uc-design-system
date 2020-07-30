# UCDS Layouts

Provides pre-defined page layouts that support top and side navigation bars.

```bash static
yarn add @lorica/uc-design-system-layouts
```

## Usage

This packages provides a handful of components for common page layout scenarios, for example, three
column layouts, two columns layouts, split layouts, so on and so forth.

To use, import the `LayoutShell` and render near the root of the application. Column based layouts
may then be rendered as children of the shell.

```jsx static
import LayoutShell from '@lorica/uc-design-system-layouts'
import ThreeColumnLayout from '@lorica/uc-design-system-layouts/lib/components/ThreeColumnLayout'
;<LayoutShell sideBar={<SideBar />}>
  <ThreeColumnLayout fluid before={<LeftColumn />} after={<RightColumn />}>
    <Content />
  </ThreeColumnLayout>
</LayoutShell>
```
