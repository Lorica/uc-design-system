# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 4.0.0 - 2020-07-31

#### 🎉 Release

- Update peers to v3. ([1732307](https://github.com/lorica/uc-design-system/commit/1732307))

#### 💥 Breaking

- **[Autocomplete,Multicomplete]** Rename onLoadOptions to onLoadItems. Add disableCache prop. (#91) ([830d4fe](https://github.com/lorica/uc-design-system/commit/830d4fe)), closes [#91](https://github.com/lorica/uc-design-system/issues/91)
- Add generics to components that may use it. (#317) ([32f7afe](https://github.com/lorica/uc-design-system/commit/32f7afe)), closes [#317](https://github.com/lorica/uc-design-system/issues/317)
- Migrate to Aesthetic v4 (#86) ([1b9b3f6](https://github.com/lorica/uc-design-system/commit/1b9b3f6)), closes [#86](https://github.com/lorica/uc-design-system/issues/86)
- Remove i18n context and make key required. (#309) ([f78d90e](https://github.com/lorica/uc-design-system/commit/f78d90e)), closes [#309](https://github.com/lorica/uc-design-system/issues/309)
- Update peer dependencies to v2. ([536607d](https://github.com/lorica/uc-design-system/commit/536607d))
- Use long canonical names for props and state types. (#310) ([d326e3e](https://github.com/lorica/uc-design-system/commit/d326e3e)), closes [#310](https://github.com/lorica/uc-design-system/issues/310)
- **[CheckBox, FormField, RadioButton]** Remove topAlign and default to top alignment. Add middleAlign option. (#320) ([16e7245](https://github.com/lorica/uc-design-system/commit/16e7245)), closes [#320](https://github.com/lorica/uc-design-system/issues/320)

#### 🚀 Updates

- **[FilterMenu]** Use SecondaryLink for reset. (#305) ([64dd038](https://github.com/lorica/uc-design-system/commit/64dd038)), closes [#305](https://github.com/lorica/uc-design-system/issues/305)
- Migrate to Nimbus. Update to latest TypeScript, Babel, ESLint, and more. (#196) ([fe0962b](https://github.com/lorica/uc-design-system/commit/fe0962b)), closes [#196](https://github.com/lorica/uc-design-system/issues/196)
- **[Form]** Add new context methods. Fix previous ref issues. (#4) ([bb729d3](https://github.com/lorica/uc-design-system/commit/bb729d3)), closes [#4](https://github.com/lorica/uc-design-system/issues/4)
- Refine form types and fix date related logic. (#165) ([10b1c18](https://github.com/lorica/uc-design-system/commit/10b1c18)), closes [#165](https://github.com/lorica/uc-design-system/issues/165)
- **[Forms]** Add support for arrays of fields. (#371) ([a4ce4b0](https://github.com/lorica/uc-design-system/commit/a4ce4b0)), closes [#371](https://github.com/lorica/uc-design-system/issues/371)
- Final round of polish before official release (#15) ([1209775](https://github.com/lorica/uc-design-system/commit/1209775)), closes [#15](https://github.com/lorica/uc-design-system/issues/15)
- Migrate some `withStyles` usage to `useStyles`. Add a `styleSheet` prop to all hook components. (#312) ([19f82f4](https://github.com/lorica/uc-design-system/commit/19f82f4)), closes [#312](https://github.com/lorica/uc-design-system/issues/312)
- Migrate some class components to function components. (#319) ([25a969a](https://github.com/lorica/uc-design-system/commit/25a969a)), closes [#319](https://github.com/lorica/uc-design-system/issues/319)
- New focus styles throughout. (#349) ([7ea005b](https://github.com/lorica/uc-design-system/commit/7ea005b)), closes [#349](https://github.com/lorica/uc-design-system/issues/349)
- Refactor form components to use hooks (#233) ([6f7df02](https://github.com/lorica/uc-design-system/commit/6f7df02)), closes [#233](https://github.com/lorica/uc-design-system/issues/233)
- Refine and use explicit value types. Allow null and undefined default values. (#132) ([ecede51](https://github.com/lorica/uc-design-system/commit/ecede51)), closes [#132](https://github.com/lorica/uc-design-system/issues/132)
- Update simple components to use `useStyles` instead of `withStyles`. (#236) ([761a801](https://github.com/lorica/uc-design-system/commit/761a801)), closes [#236](https://github.com/lorica/uc-design-system/issues/236)
- Use `React.memo` under the hood. Remove children/node prop type checks. (#120) ([30881c6](https://github.com/lorica/uc-design-system/commit/30881c6)), closes [#120](https://github.com/lorica/uc-design-system/issues/120)
- **[Range]** Add input range component (#362) ([3996ebf](https://github.com/lorica/uc-design-system/commit/3996ebf)), closes [#362](https://github.com/lorica/uc-design-system/issues/362)
- **[RTL]** Support RTL. Add DirectionProvider, DirectionalIcon, and ExpandableIcon components. (#94) ([153a66f](https://github.com/lorica/uc-design-system/commit/153a66f)), closes [#94](https://github.com/lorica/uc-design-system/issues/94)
- **[Translate]** Add key support. Make params and context optional. (#129) ([6338326](https://github.com/lorica/uc-design-system/commit/6338326)), closes [#129](https://github.com/lorica/uc-design-system/issues/129)

#### 🐞 Fixes

- **[FilterMenu]** Close dropdown after filters are applied. (#290) ([f9719fc](https://github.com/lorica/uc-design-system/commit/f9719fc)), closes [#290](https://github.com/lorica/uc-design-system/issues/290)
- **[FilterMenu]** Fix broken path. (#249) ([6982ac0](https://github.com/lorica/uc-design-system/commit/6982ac0)), closes [#249](https://github.com/lorica/uc-design-system/issues/249)
- **[Form]** Fix `FormContext` not propagating. (#166) ([1a17882](https://github.com/lorica/uc-design-system/commit/1a17882)), closes [#166](https://github.com/lorica/uc-design-system/issues/166)
- **[FormActions]** Fix FormActions error `Cannot add property disabled, object is not extensible`. (#204) ([35c804c](https://github.com/lorica/uc-design-system/commit/35c804c)), closes [#204](https://github.com/lorica/uc-design-system/issues/204)
- Minor changes to support SSR. (#341) ([7810102](https://github.com/lorica/uc-design-system/commit/7810102)), closes [#341](https://github.com/lorica/uc-design-system/issues/341)
- Override defaultValue and onChange prop types. (#142) ([bcf834c](https://github.com/lorica/uc-design-system/commit/bcf834c)), closes [#142](https://github.com/lorica/uc-design-system/issues/142)
- Remove Babel runtime setup (#65) ([a58ade2](https://github.com/lorica/uc-design-system/commit/a58ade2)), closes [#65](https://github.com/lorica/uc-design-system/issues/65)
- Remove package dev deps and bump root dev deps. (#44) ([4c26b33](https://github.com/lorica/uc-design-system/commit/4c26b33)), closes [#44](https://github.com/lorica/uc-design-system/issues/44)
- Rewrite stories to remove `@emotion/core` unintended import. (#210) ([5976e92](https://github.com/lorica/uc-design-system/commit/5976e92)), closes [#210](https://github.com/lorica/uc-design-system/issues/210)
- Update phrase keys and add extraction script. (#303) ([8d5de71](https://github.com/lorica/uc-design-system/commit/8d5de71)), closes [#303](https://github.com/lorica/uc-design-system/issues/303)

#### 📦 Dependencies

- Audit 2019-01-22 (#289) ([7c1033c](https://github.com/lorica/uc-design-system/commit/7c1033c)), closes [#289](https://github.com/lorica/uc-design-system/issues/289)
- Audit 2020-03-24 (#344) ([1db54a9](https://github.com/lorica/uc-design-system/commit/1db54a9)), closes [#344](https://github.com/lorica/uc-design-system/issues/344)
- Remove utility-types. ([8f9d0cc](https://github.com/lorica/uc-design-system/commit/8f9d0cc))
- Update [@types](https://github.com/types) to use star versions. ([96d2804](https://github.com/lorica/uc-design-system/commit/96d2804))
- Update all types packages. ([b2ad9f5](https://github.com/lorica/uc-design-system/commit/b2ad9f5))
- Update dev dependencies to latest. ([8802717](https://github.com/lorica/uc-design-system/commit/8802717))
- Update Interweave and Aesthetic. (#51) ([d36b547](https://github.com/lorica/uc-design-system/commit/d36b547)), closes [#51](https://github.com/lorica/uc-design-system/issues/51)
- **[aesthetic]** Update to latest (for performance gains). ([b3a42d0](https://github.com/lorica/uc-design-system/commit/b3a42d0))
- **[Aesthetic]** Update to latest. Bump Aphrodite. ([a73d9db](https://github.com/lorica/uc-design-system/commit/a73d9db))
- **[final-form]** Update to v4.19. ([97debfb](https://github.com/lorica/uc-design-system/commit/97debfb))
- **[nimbus]** Update to v3. ([177f8d7](https://github.com/lorica/uc-design-system/commit/177f8d7))
- **[react]** Update to v16.13. ([dc7902a](https://github.com/lorica/uc-design-system/commit/dc7902a))
- **[React]** Test against v16.9. ([c3eafd4](https://github.com/lorica/uc-design-system/commit/c3eafd4))
- **[React]** Update to v12. ([002d30c](https://github.com/lorica/uc-design-system/commit/002d30c))
- **[React]** Update to v16.11. ([07b80dc](https://github.com/lorica/uc-design-system/commit/07b80dc))
- Update minor and patch versions. ([4afb2ee](https://github.com/lorica/uc-design-system/commit/4afb2ee))
- Update minor and patch versions. ([f2abbb0](https://github.com/lorica/uc-design-system/commit/f2abbb0))
- Update package dependencies to latest. ([1a07250](https://github.com/lorica/uc-design-system/commit/1a07250))
- Update to latest. ([db08613](https://github.com/lorica/uc-design-system/commit/db08613))

#### 🛠 Internals

- Fix lint and test failures. ([f2ccc7f](https://github.com/lorica/uc-design-system/commit/f2ccc7f))
- Fix some common Happo issues. (#148) ([de0582b](https://github.com/lorica/uc-design-system/commit/de0582b)), closes [#148](https://github.com/lorica/uc-design-system/issues/148)
- Migrate to Storybook v5.2. (#199) ([5b546fa](https://github.com/lorica/uc-design-system/commit/5b546fa)), closes [#199](https://github.com/lorica/uc-design-system/issues/199)
- Migrate to Travis CI. (#239) ([2a62442](https://github.com/lorica/uc-design-system/commit/2a62442)), closes [#239](https://github.com/lorica/uc-design-system/issues/239)
- Migrate to Yarn from NPM (#122) ([60c62c7](https://github.com/lorica/uc-design-system/commit/60c62c7)), closes [#122](https://github.com/lorica/uc-design-system/issues/122)
- Release 1.0.0-alpha.1 [ci skip] (#13) ([b99688d](https://github.com/lorica/uc-design-system/commit/b99688d)), closes [#13](https://github.com/lorica/uc-design-system/issues/13)
- Release v1.0.0 [ci skip] (#17) ([5b19a9e](https://github.com/lorica/uc-design-system/commit/5b19a9e)), closes [#17](https://github.com/lorica/uc-design-system/issues/17)
- Switch to Storybook from Styleguidist (#19) ([129e5c7](https://github.com/lorica/uc-design-system/commit/129e5c7)), closes [#19](https://github.com/lorica/uc-design-system/issues/19)
- Update dependencies. Rework build. (#10) ([59c8ddb](https://github.com/lorica/uc-design-system/commit/59c8ddb)), closes [#10](https://github.com/lorica/uc-design-system/issues/10)
- Update Happo to support light and dark themes. (#259) ([dbb347a](https://github.com/lorica/uc-design-system/commit/dbb347a)), closes [#259](https://github.com/lorica/uc-design-system/issues/259)
- Update npmignore files. ([a2eda3f](https://github.com/lorica/uc-design-system/commit/a2eda3f))
- Update Storybook to v5.1 (#93) ([4ee8f83](https://github.com/lorica/uc-design-system/commit/4ee8f83)), closes [#93](https://github.com/lorica/uc-design-system/issues/93)

**Note:** Version bump only for package @usercentric/uc-design-system-forms





### 3.3.2 - 2020-05-28

**Note:** Version bump only for package @airbnb/lunar-forms





### 3.3.1 - 2020-05-12

**Note:** Version bump only for package @airbnb/lunar-forms





## 3.3.0 - 2020-05-11

#### 🚀 Updates

- **[Forms]** Add support for arrays of fields. (#371) ([a4ce4b0](https://github.com/airbnb/lunar/commit/a4ce4b0)), closes [#371](https://github.com/airbnb/lunar/issues/371)

**Note:** Version bump only for package @airbnb/lunar-forms





## 3.2.0 - 2020-04-30

#### 🚀 Updates

- **[Range]** Add input range component (#362) ([3996ebf](https://github.com/airbnb/lunar/commit/3996ebf)), closes [#362](https://github.com/airbnb/lunar/issues/362)

**Note:** Version bump only for package @airbnb/lunar-forms





## 3.1.0 - 2020-04-07

#### 🚀 Updates

- New focus styles throughout. (#349) ([7ea005b](https://github.com/airbnb/lunar/commit/7ea005b)), closes [#349](https://github.com/airbnb/lunar/issues/349)

#### 📦 Dependencies

- **[aesthetic]** Update to latest (for performance gains). ([b3a42d0](https://github.com/airbnb/lunar/commit/b3a42d0))
- **[final-form]** Update to v4.19. ([97debfb](https://github.com/airbnb/lunar/commit/97debfb))

**Note:** Version bump only for package @airbnb/lunar-forms





### 3.0.2 - 2020-03-25

#### 📦 Dependencies

- Audit 2020-03-24 (#344) ([1db54a9](https://github.com/airbnb/lunar/commit/1db54a9)), closes [#344](https://github.com/airbnb/lunar/issues/344)

**Note:** Version bump only for package @airbnb/lunar-forms





### 3.0.1 - 2020-03-19

#### 🐞 Fixes

- Minor changes to support SSR. (#341) ([7810102](https://github.com/airbnb/lunar/commit/7810102)), closes [#341](https://github.com/airbnb/lunar/issues/341)

**Note:** Version bump only for package @airbnb/lunar-forms





# 3.0.0 - 2020-03-04

#### 🎉 Release

- Update peers to v3. ([1732307](https://github.com/airbnb/lunar/commit/1732307))

#### 💥 Breaking

- **[CheckBox, FormField, RadioButton]** Remove topAlign and default to top alignment. Add middleAlign option. (#320) ([16e7245](https://github.com/airbnb/lunar/commit/16e7245)), closes [#320](https://github.com/airbnb/lunar/issues/320)
- Add generics to components that may use it. (#317) ([32f7afe](https://github.com/airbnb/lunar/commit/32f7afe)), closes [#317](https://github.com/airbnb/lunar/issues/317)
- Remove i18n context and make key required. (#309) ([f78d90e](https://github.com/airbnb/lunar/commit/f78d90e)), closes [#309](https://github.com/airbnb/lunar/issues/309)
- Use long canonical names for props and state types. (#310) ([d326e3e](https://github.com/airbnb/lunar/commit/d326e3e)), closes [#310](https://github.com/airbnb/lunar/issues/310)

#### 🚀 Updates

- Migrate some `withStyles` usage to `useStyles`. Add a `styleSheet` prop to all hook components. (#312) ([19f82f4](https://github.com/airbnb/lunar/commit/19f82f4)), closes [#312](https://github.com/airbnb/lunar/issues/312)
- Migrate some class components to function components. (#319) ([25a969a](https://github.com/airbnb/lunar/commit/25a969a)), closes [#319](https://github.com/airbnb/lunar/issues/319)

#### 📦 Dependencies

- Update to latest. ([db08613](https://github.com/airbnb/lunar/commit/db08613))
- **[nimbus]** Update to v3. ([177f8d7](https://github.com/airbnb/lunar/commit/177f8d7))
- **[react]** Update to v16.13. ([dc7902a](https://github.com/airbnb/lunar/commit/dc7902a))

**Note:** Version bump only for package @airbnb/lunar-forms





### 2.8.1 - 2020-02-07

**Note:** Version bump only for package @airbnb/lunar-forms





## 2.8.0 - 2020-02-07

#### 🚀 Updates

- **[FilterMenu]** Use SecondaryLink for reset. (#305) ([64dd038](https://github.com/airbnb/lunar/commit/64dd038)), closes [#305](https://github.com/airbnb/lunar/issues/305)

**Note:** Version bump only for package @airbnb/lunar-forms





### 2.7.4 - 2020-02-06

#### 🐞 Fixes

- Update phrase keys and add extraction script. (#303) ([8d5de71](https://github.com/airbnb/lunar/commit/8d5de71)), closes [#303](https://github.com/airbnb/lunar/issues/303)

**Note:** Version bump only for package @airbnb/lunar-forms





### 2.7.3 - 2020-01-28

#### 📦 Dependencies

- Audit 2019-01-22 (#289) ([7c1033c](https://github.com/airbnb/lunar/commit/7c1033c)), closes [#289](https://github.com/airbnb/lunar/issues/289)

**Note:** Version bump only for package @airbnb/lunar-forms





### 2.7.2 - 2020-01-27

#### 🐞 Fixes

- **[FilterMenu]** Close dropdown after filters are applied. (#290) ([f9719fc](https://github.com/airbnb/lunar/commit/f9719fc)), closes [#290](https://github.com/airbnb/lunar/issues/290)

**Note:** Version bump only for package @airbnb/lunar-forms





### 2.7.1 - 2019-12-19

#### 🛠 Internals

- Update Happo to support light and dark themes. (#259) ([dbb347a](https://github.com/airbnb/lunar/commit/dbb347a)), closes [#259](https://github.com/airbnb/lunar/issues/259)

**Note:** Version bump only for package @airbnb/lunar-forms





## 2.7.0 - 2019-11-25

#### 🚀 Updates

- Refactor form components to use hooks (#233) ([6f7df02](https://github.com/airbnb/lunar/commit/6f7df02)), closes [#233](https://github.com/airbnb/lunar/issues/233)

**Note:** Version bump only for package @airbnb/lunar-forms





### 2.6.1 - 2019-11-15

#### 🐞 Fixes

- **[FilterMenu]** Fix broken path. (#249) ([6982ac0](https://github.com/airbnb/lunar/commit/6982ac0)), closes [#249](https://github.com/airbnb/lunar/issues/249)

#### 🛠 Internals

- Migrate to Travis CI. (#239) ([2a62442](https://github.com/airbnb/lunar/commit/2a62442)), closes [#239](https://github.com/airbnb/lunar/issues/239)

**Note:** Version bump only for package @airbnb/lunar-forms





## 2.6.0 - 2019-11-13

#### 🚀 Updates

- Update simple components to use `useStyles` instead of `withStyles`. (#236) ([761a801](https://github.com/airbnb/lunar/tree/master/packages/forms/commit/761a801)), closes [#236](https://github.com/airbnb/lunar/tree/master/packages/forms/issues/236)

**Note:** Version bump only for package @airbnb/lunar-forms





### 2.5.3 - 2019-10-31

#### 🐞 Fixes

- Rewrite stories to remove `@emotion/core` unintended import. (#210) ([5976e92](https://github.com/airbnb/lunar/tree/master/packages/forms/commit/5976e92)), closes [#210](https://github.com/airbnb/lunar/tree/master/packages/forms/issues/210)

#### 📦 Dependencies

- **[React]** Update to v16.11. ([07b80dc](https://github.com/airbnb/lunar/tree/master/packages/forms/commit/07b80dc))

#### 🛠 Internals

- Fix lint and test failures. ([f2ccc7f](https://github.com/airbnb/lunar/tree/master/packages/forms/commit/f2ccc7f))

**Note:** Version bump only for package @airbnb/lunar-forms





### 2.5.2 - 2019-10-10

#### 📦 Dependencies

- Remove utility-types. ([8f9d0cc](https://github.com/airbnb/lunar/tree/master/packages/forms/commit/8f9d0cc))
- Update [@types](https://github.com/types) to use star versions. ([96d2804](https://github.com/airbnb/lunar/tree/master/packages/forms/commit/96d2804))
- **[React]** Update to v12. ([002d30c](https://github.com/airbnb/lunar/tree/master/packages/forms/commit/002d30c))

**Note:** Version bump only for package @airbnb/lunar-forms





### 2.5.1 - 2019-10-09

#### 🐞 Fixes

- **[FormActions]** Fix FormActions error `Cannot add property disabled, object is not extensible`. (#204) ([35c804c](https://github.com/airbnb/lunar/tree/master/packages/forms/commit/35c804c)), closes [#204](https://github.com/airbnb/lunar/tree/master/packages/forms/issues/204)

#### 🛠 Internals

- Migrate to Storybook v5.2. (#199) ([5b546fa](https://github.com/airbnb/lunar/tree/master/packages/forms/commit/5b546fa)), closes [#199](https://github.com/airbnb/lunar/tree/master/packages/forms/issues/199)

**Note:** Version bump only for package @airbnb/lunar-forms





### 2.5.0 - 2019-09-26

**Note:** Version bump only for package @airbnb/lunar-forms





## 2.5.0-alpha.1 - 2019-09-26

#### 🚀 Updates

- Migrate to Nimbus. Update to latest TypeScript, Babel, ESLint, and more. (#196) ([fe0962b](https://github.com/airbnb/lunar/tree/master/packages/forms/commit/fe0962b)), closes [#196](https://github.com/airbnb/lunar/tree/master/packages/forms/issues/196)

**Note:** Version bump only for package @airbnb/lunar-forms





### 2.4.2 - 2019-09-24

#### 📦 Dependencies

- Update minor and patch versions. ([4afb2ee](https://github.com/airbnb/lunar/tree/master/packages/forms/commit/4afb2ee))
- **[Aesthetic]** Update to latest. Bump Aphrodite. ([a73d9db](https://github.com/airbnb/lunar/tree/master/packages/forms/commit/a73d9db))
- Update all types packages. ([b2ad9f5](https://github.com/airbnb/lunar/tree/master/packages/forms/commit/b2ad9f5))
- **[React]** Test against v16.9. ([c3eafd4](https://github.com/airbnb/lunar/tree/master/packages/forms/commit/c3eafd4))

**Note:** Version bump only for package @airbnb/lunar-forms





### 2.4.1 - 2019-08-19

#### 🐞 Fixes

- **[Form]** Fix `FormContext` not propagating. (#166) ([1a17882](https://github.com/airbnb/lunar/tree/master/packages/forms/commit/1a17882)), closes [#166](https://github.com/airbnb/lunar/tree/master/packages/forms/issues/166)

**Note:** Version bump only for package @airbnb/lunar-forms





## 2.4.0 - 2019-08-16

#### 🚀 Updates

- Refine form types and fix date related logic. (#165) ([10b1c18](https://github.com/airbnb/lunar/tree/master/packages/forms/commit/10b1c18)), closes [#165](https://github.com/airbnb/lunar/tree/master/packages/forms/issues/165)

**Note:** Version bump only for package @airbnb/lunar-forms





### 2.3.3 - 2019-08-07

#### 📦 Dependencies

- Update minor and patch versions. ([f2abbb0](https://github.com/airbnb/lunar/tree/master/packages/forms/commit/f2abbb0))

**Note:** Version bump only for package @airbnb/lunar-forms





### 2.3.2 - 2019-08-05

#### 🛠 Internals

- Fix some common Happo issues. (#148) ([de0582b](https://github.com/airbnb/lunar/tree/master/packages/forms/commit/de0582b)), closes [#148](https://github.com/airbnb/lunar/tree/master/packages/forms/issues/148)

**Note:** Version bump only for package @airbnb/lunar-forms





### 2.3.1 - 2019-07-25

#### 🐞 Fixes

- Override defaultValue and onChange prop types. (#142) ([bcf834c](https://github.com/airbnb/lunar/tree/master/packages/forms/commit/bcf834c)), closes [#142](https://github.com/airbnb/lunar/tree/master/packages/forms/issues/142)

**Note:** Version bump only for package @airbnb/lunar-forms





## 2.3.0 - 2019-07-24

#### 🚀 Updates

- Refine and use explicit value types. Allow null and undefined default values. (#132) ([ecede51](https://github.com/airbnb/lunar/tree/master/packages/forms/commit/ecede51)), closes [#132](https://github.com/airbnb/lunar/tree/master/packages/forms/issues/132)

**Note:** Version bump only for package @airbnb/lunar-forms





## 2.2.0 - 2019-07-22

#### 🚀 Updates

- **[Translate]** Add key support. Make params and context optional. (#129) ([6338326](https://github.com/airbnb/lunar/tree/master/packages/forms/commit/6338326)), closes [#129](https://github.com/airbnb/lunar/tree/master/packages/forms/issues/129)

**Note:** Version bump only for package @airbnb/lunar-forms





### 2.1.2 - 2019-07-16

#### 🛠 Internals

- Migrate to Yarn from NPM (#122) ([60c62c7](https://github.com/airbnb/lunar/tree/master/packages/forms/commit/60c62c7)), closes [#122](https://github.com/airbnb/lunar/tree/master/packages/forms/issues/122)

**Note:** Version bump only for package @airbnb/lunar-forms





### 2.1.1 - 2019-07-16

**Note:** Version bump only for package @airbnb/lunar-forms





## 2.1.0 - 2019-07-12

#### 🚀 Updates

- Use `React.memo` under the hood. Remove children/node prop type checks. (#120) ([30881c6](https://github.com/airbnb/lunar/tree/master/packages/forms/commit/30881c6)), closes [#120](https://github.com/airbnb/lunar/tree/master/packages/forms/issues/120)

**Note:** Version bump only for package @airbnb/lunar-forms





### 2.0.1 - 2019-07-08

**Note:** Version bump only for package @airbnb/lunar-forms





# 2.0.0 - 2019-06-26

#### 💥 Breaking

- Migrate to Aesthetic v4 (#86) ([1b9b3f6](https://github.com/airbnb/lunar/tree/master/packages/forms/commit/1b9b3f6)), closes [#86](https://github.com/airbnb/lunar/tree/master/packages/forms/issues/86)
- **[Autocomplete,Multicomplete]** Rename onLoadOptions to onLoadItems. Add disableCache prop. (#91) ([830d4fe](https://github.com/airbnb/lunar/tree/master/packages/forms/commit/830d4fe)), closes [#91](https://github.com/airbnb/lunar/tree/master/packages/forms/issues/91)
- Update peer dependencies to v2. ([536607d](https://github.com/airbnb/lunar/tree/master/packages/forms/commit/536607d))

#### 🚀 Updates

- **[RTL]** Support RTL. Add DirectionProvider, DirectionalIcon, and ExpandableIcon components. (#94) ([153a66f](https://github.com/airbnb/lunar/tree/master/packages/forms/commit/153a66f)), closes [#94](https://github.com/airbnb/lunar/tree/master/packages/forms/issues/94)

#### 📦 Dependencies

- Update dev dependencies to latest. ([8802717](https://github.com/airbnb/lunar/tree/master/packages/forms/commit/8802717))
- Update package dependencies to latest. ([1a07250](https://github.com/airbnb/lunar/tree/master/packages/forms/commit/1a07250))

#### 🛠 Internals

- Update npmignore files. ([a2eda3f](https://github.com/airbnb/lunar/tree/master/packages/forms/commit/a2eda3f))
- Update Storybook to v5.1 (#93) ([4ee8f83](https://github.com/airbnb/lunar/tree/master/packages/forms/commit/4ee8f83)), closes [#93](https://github.com/airbnb/lunar/tree/master/packages/forms/issues/93)

**Note:** Version bump only for package @airbnb/lunar-forms





### 1.0.8 - 2019-05-21

#### 🐞 Fixes

- Remove Babel runtime setup (#65) ([a58ade2](https://github.com/airbnb/lunar/commit/a58ade2)), closes [#65](https://github.com/airbnb/lunar/issues/65)

**Note:** Version bump only for package @airbnb/lunar-forms





### 1.0.7 - 2019-05-01

#### 📦 Dependencies

- Update Interweave and Aesthetic. (#51) ([d36b547](https://github.com/airbnb/lunar/commit/d36b547)), closes [#51](https://github.com/airbnb/lunar/issues/51)

**Note:** Version bump only for package @airbnb/lunar-forms





### 1.0.6 - 2019-04-26

**Note:** Version bump only for package @airbnb/lunar-forms





### 1.0.5 - 2019-04-24

#### 🐞 Fixes

- Remove package dev deps and bump root dev deps. (#44) ([4c26b33](https://github.com/airbnb/lunar/commit/4c26b33)), closes [#44](https://github.com/airbnb/lunar/issues/44)

**Note:** Version bump only for package @airbnb/lunar-forms





### 1.0.4 - 2019-04-24

**Note:** Version bump only for package @airbnb/lunar-forms





### 1.0.3 - 2019-04-24

**Note:** Version bump only for package @airbnb/lunar-forms





### 1.0.2 - 2019-04-23

#### 🛠 Internals

- Switch to Storybook from Styleguidist (#19) ([129e5c7](https://github.com/airbnb/lunar/commit/129e5c7)), closes [#19](https://github.com/airbnb/lunar/issues/19)

**Note:** Version bump only for package @airbnb/lunar-forms





# 1.0.0 - 2019-04-04

#### 🎉 Release

- Official first release!
