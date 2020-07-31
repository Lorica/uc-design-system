# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

### 4.0.1 - 2020-07-31

**Note:** Version bump only for package @usercentric/uc-design-system-layouts





# 4.0.0 - 2020-07-31

#### 🎉 Release

- Update peers to v3. ([1732307](https://github.com/lorica/uc-design-system/commit/1732307))

#### 💥 Breaking

- **[Layouts]** Rework layout structuring. Add LayoutShell and Aside components. (#95) ([ed5c47a](https://github.com/lorica/uc-design-system/commit/ed5c47a)), closes [#95](https://github.com/lorica/uc-design-system/issues/95)
- Add generics to components that may use it. (#317) ([32f7afe](https://github.com/lorica/uc-design-system/commit/32f7afe)), closes [#317](https://github.com/lorica/uc-design-system/issues/317)
- Migrate to Aesthetic v4 (#86) ([1b9b3f6](https://github.com/lorica/uc-design-system/commit/1b9b3f6)), closes [#86](https://github.com/lorica/uc-design-system/issues/86)
- Remove i18n context and make key required. (#309) ([f78d90e](https://github.com/lorica/uc-design-system/commit/f78d90e)), closes [#309](https://github.com/lorica/uc-design-system/issues/309)
- Update peer dependencies to v2. ([536607d](https://github.com/lorica/uc-design-system/commit/536607d))
- Use long canonical names for props and state types. (#310) ([d326e3e](https://github.com/lorica/uc-design-system/commit/d326e3e)), closes [#310](https://github.com/lorica/uc-design-system/issues/310)

#### 🚀 Updates

- Export LayoutShell from the index (#111) ([a5d7839](https://github.com/lorica/uc-design-system/commit/a5d7839)), closes [#111](https://github.com/lorica/uc-design-system/issues/111)
- **[Aside]** Add collapsible tab. (#229) ([163c3a1](https://github.com/lorica/uc-design-system/commit/163c3a1)), closes [#229](https://github.com/lorica/uc-design-system/issues/229)
- Final round of polish before official release (#15) ([1209775](https://github.com/lorica/uc-design-system/commit/1209775)), closes [#15](https://github.com/lorica/uc-design-system/issues/15)
- **[Aside]** Add external expanded support. (#328) ([433fa9e](https://github.com/lorica/uc-design-system/commit/433fa9e)), closes [#328](https://github.com/lorica/uc-design-system/issues/328)
- Migrate some `withStyles` usage to `useStyles`. Add a `styleSheet` prop to all hook components. (#312) ([19f82f4](https://github.com/lorica/uc-design-system/commit/19f82f4)), closes [#312](https://github.com/lorica/uc-design-system/issues/312)
- Migrate some class components to function components. (#319) ([25a969a](https://github.com/lorica/uc-design-system/commit/25a969a)), closes [#319](https://github.com/lorica/uc-design-system/issues/319)
- Migrate to Nimbus. Update to latest TypeScript, Babel, ESLint, and more. (#196) ([fe0962b](https://github.com/lorica/uc-design-system/commit/fe0962b)), closes [#196](https://github.com/lorica/uc-design-system/issues/196)
- Update simple components to use `useStyles` instead of `withStyles`. (#236) ([761a801](https://github.com/lorica/uc-design-system/commit/761a801)), closes [#236](https://github.com/lorica/uc-design-system/issues/236)
- Use `React.memo` under the hood. Remove children/node prop type checks. (#120) ([30881c6](https://github.com/lorica/uc-design-system/commit/30881c6)), closes [#120](https://github.com/lorica/uc-design-system/issues/120)
- **[Layout]** Add `centerAlign` prop to layouts. (#268) ([e356142](https://github.com/lorica/uc-design-system/commit/e356142)), closes [#268](https://github.com/lorica/uc-design-system/issues/268)
- **[Layout]** Add custom `minHeight` support. (#250) ([c246ab6](https://github.com/lorica/uc-design-system/commit/c246ab6)), closes [#250](https://github.com/lorica/uc-design-system/issues/250)
- **[RTL]** Support RTL. Add DirectionProvider, DirectionalIcon, and ExpandableIcon components. (#94) ([153a66f](https://github.com/lorica/uc-design-system/commit/153a66f)), closes [#94](https://github.com/lorica/uc-design-system/issues/94)
- **[withIcon]** Throw dev error if an ally prop is missing. (#84) ([75acae5](https://github.com/lorica/uc-design-system/commit/75acae5)), closes [#84](https://github.com/lorica/uc-design-system/issues/84)

#### 🐞 Fixes

- Remove `elementType` prop type usage. (#124) ([95572bd](https://github.com/lorica/uc-design-system/commit/95572bd)), closes [#124](https://github.com/lorica/uc-design-system/issues/124)
- Remove Babel runtime setup (#65) ([a58ade2](https://github.com/lorica/uc-design-system/commit/a58ade2)), closes [#65](https://github.com/lorica/uc-design-system/issues/65)
- Remove package dev deps and bump root dev deps. (#44) ([4c26b33](https://github.com/lorica/uc-design-system/commit/4c26b33)), closes [#44](https://github.com/lorica/uc-design-system/issues/44)
- **[Aside]** Clean up side-effects. (#330) ([d91a1df](https://github.com/lorica/uc-design-system/commit/d91a1df)), closes [#330](https://github.com/lorica/uc-design-system/issues/330)

#### 📦 Dependencies

- Audit 2019-01-22 (#289) ([7c1033c](https://github.com/lorica/uc-design-system/commit/7c1033c)), closes [#289](https://github.com/lorica/uc-design-system/issues/289)
- Audit 2020-03-24 (#344) ([1db54a9](https://github.com/lorica/uc-design-system/commit/1db54a9)), closes [#344](https://github.com/lorica/uc-design-system/issues/344)
- Remove utility-types. ([8f9d0cc](https://github.com/lorica/uc-design-system/commit/8f9d0cc))
- Update [@types](https://github.com/types) to use star versions. ([96d2804](https://github.com/lorica/uc-design-system/commit/96d2804))
- Update minor and patch versions. ([4afb2ee](https://github.com/lorica/uc-design-system/commit/4afb2ee))
- Update minor and patch versions. ([f2abbb0](https://github.com/lorica/uc-design-system/commit/f2abbb0))
- Update package dependencies to latest. ([1a07250](https://github.com/lorica/uc-design-system/commit/1a07250))
- **[nimbus]** Update to v3. ([177f8d7](https://github.com/lorica/uc-design-system/commit/177f8d7))
- **[react]** Update to v16.13. ([dc7902a](https://github.com/lorica/uc-design-system/commit/dc7902a))
- **[React]** Test against v16.9. ([c3eafd4](https://github.com/lorica/uc-design-system/commit/c3eafd4))
- **[React]** Update to v12. ([002d30c](https://github.com/lorica/uc-design-system/commit/002d30c))
- **[React]** Update to v16.11. ([07b80dc](https://github.com/lorica/uc-design-system/commit/07b80dc))

#### 🛠 Internals

- Fix build based on rebase. ([b8e18fc](https://github.com/lorica/uc-design-system/commit/b8e18fc))
- Fix lint and test failures. ([f2ccc7f](https://github.com/lorica/uc-design-system/commit/f2ccc7f))
- Migrate to Storybook v5.2. (#199) ([5b546fa](https://github.com/lorica/uc-design-system/commit/5b546fa)), closes [#199](https://github.com/lorica/uc-design-system/issues/199)
- Migrate to Yarn from NPM (#122) ([60c62c7](https://github.com/lorica/uc-design-system/commit/60c62c7)), closes [#122](https://github.com/lorica/uc-design-system/issues/122)
- Release 1.0.0-alpha.1 [ci skip] (#13) ([b99688d](https://github.com/lorica/uc-design-system/commit/b99688d)), closes [#13](https://github.com/lorica/uc-design-system/issues/13)
- Release v1.0.0 [ci skip] (#17) ([5b19a9e](https://github.com/lorica/uc-design-system/commit/5b19a9e)), closes [#17](https://github.com/lorica/uc-design-system/issues/17)
- Switch to Storybook from Styleguidist (#19) ([129e5c7](https://github.com/lorica/uc-design-system/commit/129e5c7)), closes [#19](https://github.com/lorica/uc-design-system/issues/19)
- Update dependencies. Rework build. (#10) ([59c8ddb](https://github.com/lorica/uc-design-system/commit/59c8ddb)), closes [#10](https://github.com/lorica/uc-design-system/issues/10)
- Update npmignore files. ([a2eda3f](https://github.com/lorica/uc-design-system/commit/a2eda3f))
- Update Storybook to v5.1 (#93) ([4ee8f83](https://github.com/lorica/uc-design-system/commit/4ee8f83)), closes [#93](https://github.com/lorica/uc-design-system/issues/93)

**Note:** Version bump only for package @usercentric/uc-design-system-layouts





### 3.0.2 - 2020-04-07

**Note:** Version bump only for package @airbnb/lunar-layouts





### 3.0.1 - 2020-03-25

#### 📦 Dependencies

- Audit 2020-03-24 (#344) ([1db54a9](https://github.com/airbnb/lunar/commit/1db54a9)), closes [#344](https://github.com/airbnb/lunar/issues/344)

**Note:** Version bump only for package @airbnb/lunar-layouts





# 3.0.0 - 2020-03-04

#### 🎉 Release

- Update peers to v3. ([1732307](https://github.com/airbnb/lunar/commit/1732307))

#### 💥 Breaking

- Add generics to components that may use it. (#317) ([32f7afe](https://github.com/airbnb/lunar/commit/32f7afe)), closes [#317](https://github.com/airbnb/lunar/issues/317)
- Remove i18n context and make key required. (#309) ([f78d90e](https://github.com/airbnb/lunar/commit/f78d90e)), closes [#309](https://github.com/airbnb/lunar/issues/309)
- Use long canonical names for props and state types. (#310) ([d326e3e](https://github.com/airbnb/lunar/commit/d326e3e)), closes [#310](https://github.com/airbnb/lunar/issues/310)

#### 🚀 Updates

- Migrate some `withStyles` usage to `useStyles`. Add a `styleSheet` prop to all hook components. (#312) ([19f82f4](https://github.com/airbnb/lunar/commit/19f82f4)), closes [#312](https://github.com/airbnb/lunar/issues/312)
- Migrate some class components to function components. (#319) ([25a969a](https://github.com/airbnb/lunar/commit/25a969a)), closes [#319](https://github.com/airbnb/lunar/issues/319)

#### 📦 Dependencies

- **[nimbus]** Update to v3. ([177f8d7](https://github.com/airbnb/lunar/commit/177f8d7))
- **[react]** Update to v16.13. ([dc7902a](https://github.com/airbnb/lunar/commit/dc7902a))

#### 🛠 Internals

- Fix build based on rebase. ([b8e18fc](https://github.com/airbnb/lunar/commit/b8e18fc))

**Note:** Version bump only for package @airbnb/lunar-layouts





### 2.8.1 - 2020-03-03

#### 🐞 Fixes

- **[Aside]** Clean up side-effects. (#330) ([d91a1df](https://github.com/airbnb/lunar/commit/d91a1df)), closes [#330](https://github.com/airbnb/lunar/issues/330)

**Note:** Version bump only for package @airbnb/lunar-layouts





## 2.8.0 - 2020-03-02

#### 🚀 Updates

- **[Aside]** Add external expanded support. (#328) ([433fa9e](https://github.com/airbnb/lunar/commit/433fa9e)), closes [#328](https://github.com/airbnb/lunar/issues/328)

**Note:** Version bump only for package @airbnb/lunar-layouts





### 2.7.3 - 2020-02-07

**Note:** Version bump only for package @airbnb/lunar-layouts





### 2.7.2 - 2020-01-28

#### 📦 Dependencies

- Audit 2019-01-22 (#289) ([7c1033c](https://github.com/airbnb/lunar/commit/7c1033c)), closes [#289](https://github.com/airbnb/lunar/issues/289)

**Note:** Version bump only for package @airbnb/lunar-layouts





### 2.7.1 - 2019-12-19

**Note:** Version bump only for package @airbnb/lunar-layouts





## 2.7.0 - 2019-12-17

#### 🚀 Updates

- **[Layout]** Add `centerAlign` prop to layouts. (#268) ([e356142](https://github.com/airbnb/lunar/commit/e356142)), closes [#268](https://github.com/airbnb/lunar/issues/268)

**Note:** Version bump only for package @airbnb/lunar-layouts





## 2.6.0 - 2019-11-19

#### 🚀 Updates

- **[Layout]** Add custom `minHeight` support. (#250) ([c246ab6](https://github.com/airbnb/lunar/commit/c246ab6)), closes [#250](https://github.com/airbnb/lunar/issues/250)

**Note:** Version bump only for package @airbnb/lunar-layouts





## 2.5.0 - 2019-11-13

#### 🚀 Updates

- Update simple components to use `useStyles` instead of `withStyles`. (#236) ([761a801](https://github.com/airbnb/lunar/tree/master/packages/layouts/commit/761a801)), closes [#236](https://github.com/airbnb/lunar/tree/master/packages/layouts/issues/236)

**Note:** Version bump only for package @airbnb/lunar-layouts





## 2.4.0 - 2019-11-06

#### 🚀 Updates

- **[Aside]** Add collapsible tab. (#229) ([163c3a1](https://github.com/airbnb/lunar/tree/master/packages/layouts/commit/163c3a1)), closes [#229](https://github.com/airbnb/lunar/tree/master/packages/layouts/issues/229)

**Note:** Version bump only for package @airbnb/lunar-layouts





### 2.3.2 - 2019-10-31

#### 📦 Dependencies

- **[React]** Update to v16.11. ([07b80dc](https://github.com/airbnb/lunar/tree/master/packages/layouts/commit/07b80dc))

#### 🛠 Internals

- Fix lint and test failures. ([f2ccc7f](https://github.com/airbnb/lunar/tree/master/packages/layouts/commit/f2ccc7f))

**Note:** Version bump only for package @airbnb/lunar-layouts





### 2.3.1 - 2019-10-10

#### 📦 Dependencies

- Remove utility-types. ([8f9d0cc](https://github.com/airbnb/lunar/tree/master/packages/layouts/commit/8f9d0cc))
- Update [@types](https://github.com/types) to use star versions. ([96d2804](https://github.com/airbnb/lunar/tree/master/packages/layouts/commit/96d2804))
- **[React]** Update to v12. ([002d30c](https://github.com/airbnb/lunar/tree/master/packages/layouts/commit/002d30c))

#### 🛠 Internals

- Migrate to Storybook v5.2. (#199) ([5b546fa](https://github.com/airbnb/lunar/tree/master/packages/layouts/commit/5b546fa)), closes [#199](https://github.com/airbnb/lunar/tree/master/packages/layouts/issues/199)

**Note:** Version bump only for package @airbnb/lunar-layouts





### 2.3.0 - 2019-09-26

**Note:** Version bump only for package @airbnb/lunar-layouts





## 2.3.0-alpha.1 - 2019-09-26

#### 🚀 Updates

- Migrate to Nimbus. Update to latest TypeScript, Babel, ESLint, and more. (#196) ([fe0962b](https://github.com/airbnb/lunar/tree/master/packages/layouts/commit/fe0962b)), closes [#196](https://github.com/airbnb/lunar/tree/master/packages/layouts/issues/196)

**Note:** Version bump only for package @airbnb/lunar-layouts





### 2.2.7 - 2019-09-24

#### 📦 Dependencies

- Update minor and patch versions. ([4afb2ee](https://github.com/airbnb/lunar/tree/master/packages/layouts/commit/4afb2ee))
- **[React]** Test against v16.9. ([c3eafd4](https://github.com/airbnb/lunar/tree/master/packages/layouts/commit/c3eafd4))

**Note:** Version bump only for package @airbnb/lunar-layouts





### 2.2.6 - 2019-08-07

#### 📦 Dependencies

- Update minor and patch versions. ([f2abbb0](https://github.com/airbnb/lunar/tree/master/packages/layouts/commit/f2abbb0))

**Note:** Version bump only for package @airbnb/lunar-layouts





### 2.2.5 - 2019-07-24

**Note:** Version bump only for package @airbnb/lunar-layouts





### 2.2.4 - 2019-07-24

**Note:** Version bump only for package @airbnb/lunar-layouts





### 2.2.3 - 2019-07-17

#### 🐞 Fixes

- Remove `elementType` prop type usage. (#124) ([95572bd](https://github.com/airbnb/lunar/tree/master/packages/layouts/commit/95572bd)), closes [#124](https://github.com/airbnb/lunar/tree/master/packages/layouts/issues/124)

**Note:** Version bump only for package @airbnb/lunar-layouts





### 2.2.2 - 2019-07-16

#### 🛠 Internals

- Migrate to Yarn from NPM (#122) ([60c62c7](https://github.com/airbnb/lunar/tree/master/packages/layouts/commit/60c62c7)), closes [#122](https://github.com/airbnb/lunar/tree/master/packages/layouts/issues/122)

**Note:** Version bump only for package @airbnb/lunar-layouts





### 2.2.1 - 2019-07-16

**Note:** Version bump only for package @airbnb/lunar-layouts





## 2.2.0 - 2019-07-12

#### 🚀 Updates

- Use `React.memo` under the hood. Remove children/node prop type checks. (#120) ([30881c6](https://github.com/airbnb/lunar/tree/master/packages/layouts/commit/30881c6)), closes [#120](https://github.com/airbnb/lunar/tree/master/packages/layouts/issues/120)

**Note:** Version bump only for package @airbnb/lunar-layouts





## 2.1.0 - 2019-07-08

#### 🚀 Updates

- Export LayoutShell from the index (#111) ([a5d7839](https://github.com/airbnb/lunar/tree/master/packages/layouts/commit/a5d7839)), closes [#111](https://github.com/airbnb/lunar/tree/master/packages/layouts/issues/111)

**Note:** Version bump only for package @airbnb/lunar-layouts





### 2.0.1 - 2019-07-08

**Note:** Version bump only for package @airbnb/lunar-layouts





# 2.0.0 - 2019-06-26

#### 💥 Breaking

- Migrate to Aesthetic v4 (#86) ([1b9b3f6](https://github.com/airbnb/lunar/tree/master/packages/layouts/commit/1b9b3f6)), closes [#86](https://github.com/airbnb/lunar/tree/master/packages/layouts/issues/86)
- **[Layouts]** Rework layout structuring. Add LayoutShell and Aside components. (#95) ([ed5c47a](https://github.com/airbnb/lunar/tree/master/packages/layouts/commit/ed5c47a)), closes [#95](https://github.com/airbnb/lunar/tree/master/packages/layouts/issues/95)
- Update peer dependencies to v2. ([536607d](https://github.com/airbnb/lunar/tree/master/packages/layouts/commit/536607d))

#### 🚀 Updates

- **[RTL]** Support RTL. Add DirectionProvider, DirectionalIcon, and ExpandableIcon components. (#94) ([153a66f](https://github.com/airbnb/lunar/tree/master/packages/layouts/commit/153a66f)), closes [#94](https://github.com/airbnb/lunar/tree/master/packages/layouts/issues/94)

#### 📦 Dependencies

- Update package dependencies to latest. ([1a07250](https://github.com/airbnb/lunar/tree/master/packages/layouts/commit/1a07250))

#### 🛠 Internals

- Update npmignore files. ([a2eda3f](https://github.com/airbnb/lunar/tree/master/packages/layouts/commit/a2eda3f))
- Update Storybook to v5.1 (#93) ([4ee8f83](https://github.com/airbnb/lunar/tree/master/packages/layouts/commit/4ee8f83)), closes [#93](https://github.com/airbnb/lunar/tree/master/packages/layouts/issues/93)

**Note:** Version bump only for package @airbnb/lunar-layouts





## 1.1.0 - 2019-06-07

#### 🚀 Updates

- **[withIcon]** Throw dev error if an ally prop is missing. (#84) ([75acae5](https://github.com/airbnb/lunar/commit/75acae5)), closes [#84](https://github.com/airbnb/lunar/issues/84)

**Note:** Version bump only for package @airbnb/lunar-layouts





### 1.0.6 - 2019-05-21

#### 🐞 Fixes

- Remove Babel runtime setup (#65) ([a58ade2](https://github.com/airbnb/lunar/commit/a58ade2)), closes [#65](https://github.com/airbnb/lunar/issues/65)

**Note:** Version bump only for package @airbnb/lunar-layouts





### 1.0.5 - 2019-04-24

#### 🐞 Fixes

- Remove package dev deps and bump root dev deps. (#44) ([4c26b33](https://github.com/airbnb/lunar/commit/4c26b33)), closes [#44](https://github.com/airbnb/lunar/issues/44)

**Note:** Version bump only for package @airbnb/lunar-layouts





### 1.0.4 - 2019-04-24

**Note:** Version bump only for package @airbnb/lunar-layouts





### 1.0.3 - 2019-04-24

**Note:** Version bump only for package @airbnb/lunar-layouts





### 1.0.2 - 2019-04-23

#### 🛠 Internals

- Switch to Storybook from Styleguidist (#19) ([129e5c7](https://github.com/airbnb/lunar/commit/129e5c7)), closes [#19](https://github.com/airbnb/lunar/issues/19)

**Note:** Version bump only for package @airbnb/lunar-layouts





# 1.0.0 - 2019-04-04

#### 🎉 Release

- Official first release!
