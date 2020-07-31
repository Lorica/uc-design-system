# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 4.0.0 - 2020-07-31

#### 🎉 Release

- Update peers to v3. ([1732307](https://github.com/lorica/uc-design-system/commit/1732307))

#### 💥 Breaking

- Add generics to components that may use it. (#317) ([32f7afe](https://github.com/lorica/uc-design-system/commit/32f7afe)), closes [#317](https://github.com/lorica/uc-design-system/issues/317)
- Migrate to Aesthetic v4 (#86) ([1b9b3f6](https://github.com/lorica/uc-design-system/commit/1b9b3f6)), closes [#86](https://github.com/lorica/uc-design-system/issues/86)
- Remove i18n context and make key required. (#309) ([f78d90e](https://github.com/lorica/uc-design-system/commit/f78d90e)), closes [#309](https://github.com/lorica/uc-design-system/issues/309)
- **[BorderedList]** Combine BorderedList into new List component. (#96) ([36eb02c](https://github.com/lorica/uc-design-system/commit/36eb02c)), closes [#96](https://github.com/lorica/uc-design-system/issues/96)
- Rename onRef prop to wrappedRef. (#1) ([4656165](https://github.com/lorica/uc-design-system/commit/4656165)), closes [#1](https://github.com/lorica/uc-design-system/issues/1)
- **[Autocomplete,Multicomplete]** Rename onLoadOptions to onLoadItems. Add disableCache prop. (#91) ([830d4fe](https://github.com/lorica/uc-design-system/commit/830d4fe)), closes [#91](https://github.com/lorica/uc-design-system/issues/91)
- **[CardContent]** Consolidate before/after props. Remove afterImageSrc, beforeImageSrc, small, and large props. Generalize other props. (#318) ([988ba64](https://github.com/lorica/uc-design-system/commit/988ba64)), closes [#318](https://github.com/lorica/uc-design-system/issues/318)
- **[CheckBox, FormField, RadioButton]** Remove topAlign and default to top alignment. Add middleAlign option. (#320) ([16e7245](https://github.com/lorica/uc-design-system/commit/16e7245)), closes [#320](https://github.com/lorica/uc-design-system/issues/320)
- **[Chip]** Add beforeIcon and afterIcon props. Remove icon prop. (#67) ([3d883ff](https://github.com/lorica/uc-design-system/commit/3d883ff)), closes [#67](https://github.com/lorica/uc-design-system/issues/67)
- **[DataTable]** Remove edit mode, header buttons, and selectable state. (#326) ([1227364](https://github.com/lorica/uc-design-system/commit/1227364)), closes [#326](https://github.com/lorica/uc-design-system/issues/326) [#306](https://github.com/lorica/uc-design-system/issues/306) [#313](https://github.com/lorica/uc-design-system/issues/313) [#314](https://github.com/lorica/uc-design-system/issues/314) [#316](https://github.com/lorica/uc-design-system/issues/316) [#322](https://github.com/lorica/uc-design-system/issues/322)
- **[DatePickerInput]** Rework onChange to pass a Date object (#2) ([cb6d466](https://github.com/lorica/uc-design-system/commit/cb6d466)), closes [#2](https://github.com/lorica/uc-design-system/issues/2)
- **[Layouts]** Rework layout structuring. Add LayoutShell and Aside components. (#95) ([ed5c47a](https://github.com/lorica/uc-design-system/commit/ed5c47a)), closes [#95](https://github.com/lorica/uc-design-system/issues/95)
- Replace form fields `compact` with `small` and `large`. (#311) ([841258d](https://github.com/lorica/uc-design-system/commit/841258d)), closes [#311](https://github.com/lorica/uc-design-system/issues/311)
- Update peer dependencies to v2. ([536607d](https://github.com/lorica/uc-design-system/commit/536607d))
- Use long canonical names for props and state types. (#310) ([d326e3e](https://github.com/lorica/uc-design-system/commit/d326e3e)), closes [#310](https://github.com/lorica/uc-design-system/issues/310)
- **[Tabs]** Rework active state. Add small, beforeIcon, and afterIcon props. (#92) ([44c7aa9](https://github.com/lorica/uc-design-system/commit/44c7aa9)), closes [#92](https://github.com/lorica/uc-design-system/issues/92)

#### 🚀 Updates

- **[Accordion]** Add `onChange` and `onToggle` props. (#277) ([a9370ee](https://github.com/lorica/uc-design-system/commit/a9370ee)), closes [#277](https://github.com/lorica/uc-design-system/issues/277)
- **[Accordion]** Enable multiple items to be open at once. (#254) ([f8bc136](https://github.com/lorica/uc-design-system/commit/f8bc136)), closes [#254](https://github.com/lorica/uc-design-system/issues/254)
- **[AccordionItem]** Add `noSpacing` support. (#189) ([a46dc81](https://github.com/lorica/uc-design-system/commit/a46dc81)), closes [#189](https://github.com/lorica/uc-design-system/issues/189)
- **[AccordionItem]** Change title to node instead of string (#114) ([09c0aac](https://github.com/lorica/uc-design-system/commit/09c0aac)), closes [#114](https://github.com/lorica/uc-design-system/issues/114)
- **[AdaptiveGrid]** Add new AdaptiveGrid (#88) ([f47bc07](https://github.com/lorica/uc-design-system/commit/f47bc07)), closes [#88](https://github.com/lorica/uc-design-system/issues/88)
- **[AppLoader]** Add errorTitle prop (#60) ([e9a3b66](https://github.com/lorica/uc-design-system/commit/e9a3b66)), closes [#60](https://github.com/lorica/uc-design-system/issues/60)
- **[AppShell]** Add breadcrumbs support to AppContext (#115) ([1e19e41](https://github.com/lorica/uc-design-system/commit/1e19e41)), closes [#115](https://github.com/lorica/uc-design-system/issues/115)
- **[Autocomplete]** Add `loadItemsOnFocus` functionality (#85) ([a706fbb](https://github.com/lorica/uc-design-system/commit/a706fbb)), closes [#85](https://github.com/lorica/uc-design-system/issues/85)
- **[Autocomplete, Multicomplete]** Add `selectUnknownOnEnter` prop. (#280) ([cd556d3](https://github.com/lorica/uc-design-system/commit/cd556d3)), closes [#280](https://github.com/lorica/uc-design-system/issues/280)
- **[BorderedList]** Add BorderedList component. (#38) ([3cfc4ea](https://github.com/lorica/uc-design-system/commit/3cfc4ea)), closes [#38](https://github.com/lorica/uc-design-system/issues/38)
- **[ButtonGroup]** Add `endAlign` support. (#242) ([4723c32](https://github.com/lorica/uc-design-system/commit/4723c32)), closes [#242](https://github.com/lorica/uc-design-system/issues/242)
- **[ButtonGroup]** Add `stretched` button prop. (#256) ([53bb0dc](https://github.com/lorica/uc-design-system/commit/53bb0dc)), closes [#256](https://github.com/lorica/uc-design-system/issues/256)
- **[ButtonOrLink]** Rework rel prop logic (#41) ([aa6b686](https://github.com/lorica/uc-design-system/commit/aa6b686)), closes [#41](https://github.com/lorica/uc-design-system/issues/41)
- **[Card]** Add overflow prop for overflow visible. (#116) ([3da4af7](https://github.com/lorica/uc-design-system/commit/3da4af7)), closes [#116](https://github.com/lorica/uc-design-system/issues/116)
- **[CardContent]** Add maxHeight prop. (#7) ([f109320](https://github.com/lorica/uc-design-system/commit/f109320)), closes [#7](https://github.com/lorica/uc-design-system/issues/7)
- **[CardContent]** Make before/after images clickable. (#255) ([b20239e](https://github.com/lorica/uc-design-system/commit/b20239e)), closes [#255](https://github.com/lorica/uc-design-system/issues/255)
- **[Chip]** Add new compact and active props (#66) ([aefd828](https://github.com/lorica/uc-design-system/commit/aefd828)), closes [#66](https://github.com/lorica/uc-design-system/issues/66)
- **[Copy]** Add invertTooltip prop (#380) ([d2ea8da](https://github.com/lorica/uc-design-system/commit/d2ea8da)), closes [#380](https://github.com/lorica/uc-design-system/issues/380)
- **[Copy, Chip, Breadcrumb, MenuItem]** Add data-tracking-name (#163) ([aad998a](https://github.com/lorica/uc-design-system/commit/aad998a)), closes [#163](https://github.com/lorica/uc-design-system/issues/163)
- **[Copy, MenuItem]** Allow id to pass through to Link for tracking (#153) ([7dd44d1](https://github.com/lorica/uc-design-system/commit/7dd44d1)), closes [#153](https://github.com/lorica/uc-design-system/issues/153)
- **[DataTable]** Add `autoHeight` prop. (#144) ([5238278](https://github.com/lorica/uc-design-system/commit/5238278)), closes [#144](https://github.com/lorica/uc-design-system/issues/144)
- **[DataTable]** Add `dynamicRowHeight` prop (#173) ([a6b8d55](https://github.com/lorica/uc-design-system/commit/a6b8d55)), closes [#173](https://github.com/lorica/uc-design-system/issues/173)
- **[DataTable]** Add `selectedRowsFirst` prop. (#128) ([6721666](https://github.com/lorica/uc-design-system/commit/6721666)), closes [#128](https://github.com/lorica/uc-design-system/issues/128)
- **[DataTable]** Add `sortByValue` accessor + `sortByCacheKey` (#226) ([8568bcd](https://github.com/lorica/uc-design-system/commit/8568bcd)), closes [#226](https://github.com/lorica/uc-design-system/issues/226)
- **[DataTable]** Add data type support to row renderers. Render rows/cells as JSX. (#154) ([8c881cd](https://github.com/lorica/uc-design-system/commit/8c881cd)), closes [#154](https://github.com/lorica/uc-design-system/issues/154)
- **[DataTable]** Add new dynamic data table (#36) ([85b9ab2](https://github.com/lorica/uc-design-system/commit/85b9ab2)), closes [#36](https://github.com/lorica/uc-design-system/issues/36)
- **[DataTable]** add prop for callback on row selection (#127) ([8415d3a](https://github.com/lorica/uc-design-system/commit/8415d3a)), closes [#127](https://github.com/lorica/uc-design-system/issues/127)
- **[DataTable]** Add showAllRows and propagateRef props (#57) ([567316e](https://github.com/lorica/uc-design-system/commit/567316e)), closes [#57](https://github.com/lorica/uc-design-system/issues/57)
- **[DataTable]** Add xLarge row size. Fix forceUpdate logic (#367) ([ebab32b](https://github.com/lorica/uc-design-system/commit/ebab32b)), closes [#367](https://github.com/lorica/uc-design-system/issues/367)
- **[DataTable]** Column header casing (#68) ([f959bd4](https://github.com/lorica/uc-design-system/commit/f959bd4)), closes [#68](https://github.com/lorica/uc-design-system/issues/68)
- **[DataTable]** Enable Filtering and Fix Rerender Bugs (#73) ([fd77068](https://github.com/lorica/uc-design-system/commit/fd77068)), closes [#73](https://github.com/lorica/uc-design-system/issues/73)
- **[DataTable]** Expose `overscanRowCount` prop (#262) ([b82a769](https://github.com/lorica/uc-design-system/commit/b82a769)), closes [#262](https://github.com/lorica/uc-design-system/issues/262)
- **[DataTable]** Improve `CellMeasurerCache` invalidation (#215) ([807586e](https://github.com/lorica/uc-design-system/commit/807586e)), closes [#215](https://github.com/lorica/uc-design-system/issues/215)
- **[DataTable]** Only render top border when there's a header. (#159) ([e8879f9](https://github.com/lorica/uc-design-system/commit/e8879f9)), closes [#159](https://github.com/lorica/uc-design-system/issues/159)
- **[DataTable]** Robust fix for flexbox container bug. (#172) ([e5e8d98](https://github.com/lorica/uc-design-system/commit/e5e8d98)), closes [#172](https://github.com/lorica/uc-design-system/issues/172)
- **[DataTable]** Sort null and undefined last. (#156) ([7d8496a](https://github.com/lorica/uc-design-system/commit/7d8496a)), closes [#156](https://github.com/lorica/uc-design-system/issues/156)
- **[DateTime, DateTimeRange, DateTimeSelect, Price, PriceComparison, PriceGroup]** Add empty fallback if an invalid value is provided. (#366) ([a37c2cc](https://github.com/lorica/uc-design-system/commit/a37c2cc)), closes [#366](https://github.com/lorica/uc-design-system/issues/366)
- **[Divider]** Add short prop (#131) ([1f45ee9](https://github.com/lorica/uc-design-system/commit/1f45ee9)), closes [#131](https://github.com/lorica/uc-design-system/issues/131)
- **[ErrorMessage]** Add trace ID link (#361) ([29e6fad](https://github.com/lorica/uc-design-system/commit/29e6fad)), closes [#361](https://github.com/lorica/uc-design-system/issues/361)
- **[ErrorMessage,ErrorBoundary]** Show error info and error/trace IDs (#363) ([bf0965a](https://github.com/lorica/uc-design-system/commit/bf0965a)), closes [#363](https://github.com/lorica/uc-design-system/issues/363)
- **[Form]** Add new context methods. Fix previous ref issues. (#4) ([bb729d3](https://github.com/lorica/uc-design-system/commit/bb729d3)), closes [#4](https://github.com/lorica/uc-design-system/issues/4)
- **[FormActions]** Add `block` option to buttons. (#298) ([28317db](https://github.com/lorica/uc-design-system/commit/28317db)), closes [#298](https://github.com/lorica/uc-design-system/issues/298)
- **[FormActions]** Add danger prop (#29) ([e90ea43](https://github.com/lorica/uc-design-system/commit/e90ea43)), closes [#29](https://github.com/lorica/uc-design-system/issues/29)
- **[FormField]** Support small and large sizes. (#243) ([a461198](https://github.com/lorica/uc-design-system/commit/a461198)), closes [#243](https://github.com/lorica/uc-design-system/issues/243)
- **[Grid]** Add horizontal alignment props. Fix offset % definition. (#35) ([7a81dd6](https://github.com/lorica/uc-design-system/commit/7a81dd6)), closes [#35](https://github.com/lorica/uc-design-system/issues/35)
- **[HierarchyPicker]** Add new picker component (#50) ([029dbe4](https://github.com/lorica/uc-design-system/commit/029dbe4)), closes [#50](https://github.com/lorica/uc-design-system/issues/50)
- **[HierarchyPicker]** Pass the current item object to `onItemPicked`. (#279) ([bb5ddc3](https://github.com/lorica/uc-design-system/commit/bb5ddc3)), closes [#279](https://github.com/lorica/uc-design-system/issues/279)
- **[Image]** Add `backdrop` prop (#265) ([265d553](https://github.com/lorica/uc-design-system/commit/265d553)), closes [#265](https://github.com/lorica/uc-design-system/issues/265)
- **[Image]** Add Image Component (#157) ([0abdb21](https://github.com/lorica/uc-design-system/commit/0abdb21)), closes [#157](https://github.com/lorica/uc-design-system/issues/157)
- **[ImageViewer]** Add new ImageViewer component with zoom, drag, and rotate features (#123) ([bb9bea2](https://github.com/lorica/uc-design-system/commit/bb9bea2)), closes [#123](https://github.com/lorica/uc-design-system/issues/123)
- **[Lightbox]** Add Lightbox component (#183) ([c717697](https://github.com/lorica/uc-design-system/commit/c717697)), closes [#183](https://github.com/lorica/uc-design-system/issues/183)
- **[Link]** Add `micro` sizing. (#253) ([7b60e73](https://github.com/lorica/uc-design-system/commit/7b60e73)), closes [#253](https://github.com/lorica/uc-design-system/issues/253)
- **[Link]** Add `textProps` prop. (#324) ([d375de1](https://github.com/lorica/uc-design-system/commit/d375de1)), closes [#324](https://github.com/lorica/uc-design-system/issues/324)
- **[List]** Add `gutter` prop for space between list items. (#198) ([0c7914c](https://github.com/lorica/uc-design-system/commit/0c7914c)), closes [#198](https://github.com/lorica/uc-design-system/issues/198)
- **[List]** Add `middleAlign` support for `horizontal`. (#244) ([1b58963](https://github.com/lorica/uc-design-system/commit/1b58963)), closes [#244](https://github.com/lorica/uc-design-system/issues/244)
- **[List]** Add reversed prop to visually reverse the list items. (#374) ([4c2a87e](https://github.com/lorica/uc-design-system/commit/4c2a87e)), closes [#374](https://github.com/lorica/uc-design-system/issues/374)
- **[Loadable]** Fix layout thrashing and improve performance. (#281) ([b8490af](https://github.com/lorica/uc-design-system/commit/b8490af)), closes [#281](https://github.com/lorica/uc-design-system/issues/281)
- **[MenuToggle]** Add `disabled` support. (#188) ([26b3ff2](https://github.com/lorica/uc-design-system/commit/26b3ff2)), closes [#188](https://github.com/lorica/uc-design-system/issues/188)
- **[MenuToggle]** Add muted menu option. (#230) ([c6675d1](https://github.com/lorica/uc-design-system/commit/c6675d1)), closes [#230](https://github.com/lorica/uc-design-system/issues/230)
- **[MenuToggle]** Add prop for custom trigger element. (#304) ([9f3ea04](https://github.com/lorica/uc-design-system/commit/9f3ea04)), closes [#304](https://github.com/lorica/uc-design-system/issues/304)
- **[MessageItem]** Add disable title translation prop. (#49) ([f5b8fff](https://github.com/lorica/uc-design-system/commit/f5b8fff)), closes [#49](https://github.com/lorica/uc-design-system/issues/49)
- **[MessageItem]** Wrap long titles. (#202) ([549e8a1](https://github.com/lorica/uc-design-system/commit/549e8a1)), closes [#202](https://github.com/lorica/uc-design-system/issues/202)
- **[Modal]** Add `persistOnOutsideClick` prop. (#276) ([f8f8ff3](https://github.com/lorica/uc-design-system/commit/f8f8ff3)), closes [#276](https://github.com/lorica/uc-design-system/issues/276)
- **[Modal]** Add `topBar` and `topBarCentered` support. (#359) ([243c289](https://github.com/lorica/uc-design-system/commit/243c289)), closes [#359](https://github.com/lorica/uc-design-system/issues/359)
- **[Modal]** Add z-index to close button. (#130) ([16b7945](https://github.com/lorica/uc-design-system/commit/16b7945)), closes [#130](https://github.com/lorica/uc-design-system/issues/130)
- **[Modal]** Update padding, widths, scrollable content, and layout. (#108) ([aa1d17b](https://github.com/lorica/uc-design-system/commit/aa1d17b)), closes [#108](https://github.com/lorica/uc-design-system/issues/108)
- **[Multicomplete]** Add `renderChip` option. (#293) ([60206cb](https://github.com/lorica/uc-design-system/commit/60206cb)), closes [#293](https://github.com/lorica/uc-design-system/issues/293)
- **[NotchedBox]** Update default background color to `color.accent.bg`. (#213) ([e094e8a](https://github.com/lorica/uc-design-system/commit/e094e8a)), closes [#213](https://github.com/lorica/uc-design-system/issues/213)
- **[Overlay]** Add `enableMouseInteraction` prop (#391) ([26e905d](https://github.com/lorica/uc-design-system/commit/26e905d)), closes [#391](https://github.com/lorica/uc-design-system/issues/391)
- **[Pagination]** Add arrow startAlign, centerAlign, and endAlign properties (#79) ([a0ac6dd](https://github.com/lorica/uc-design-system/commit/a0ac6dd)), closes [#79](https://github.com/lorica/uc-design-system/issues/79)
- **[Pagination]** Add pageLabel prop (#78) ([0184ad5](https://github.com/lorica/uc-design-system/commit/0184ad5)), closes [#78](https://github.com/lorica/uc-design-system/issues/78)
- **[Price, PriceComparison, PriceGroup]** Handle invalid currency values. (#369) ([161cf92](https://github.com/lorica/uc-design-system/commit/161cf92)), closes [#369](https://github.com/lorica/uc-design-system/issues/369)
- **[ProfilePhoto]** Add `fallbackImageSrc` to render if an image is broken. (#169) ([9bb8c41](https://github.com/lorica/uc-design-system/commit/9bb8c41)), closes [#169](https://github.com/lorica/uc-design-system/issues/169)
- **[ProgressBar]** Add status color options. (#314) ([6b80a13](https://github.com/lorica/uc-design-system/commit/6b80a13)), closes [#314](https://github.com/lorica/uc-design-system/issues/314)
- **[Proofreader]** Add `isRuleHighlighted` and `isRuleSecondary` props. Add `SecondaryMark` component. (#82) ([b8e5e3b](https://github.com/lorica/uc-design-system/commit/b8e5e3b)), closes [#82](https://github.com/lorica/uc-design-system/issues/82)
- **[Proofreader]** Add background styling for important prop (#71) ([33e846f](https://github.com/lorica/uc-design-system/commit/33e846f)), closes [#71](https://github.com/lorica/uc-design-system/issues/71)
- **[Proofreader]** Add max height prop for locale menu. (#339) ([c55461b](https://github.com/lorica/uc-design-system/commit/c55461b)), closes [#339](https://github.com/lorica/uc-design-system/issues/339)
- **[Proofreader]** Handle delete replacement (#83) ([1994212](https://github.com/lorica/uc-design-system/commit/1994212)), closes [#83](https://github.com/lorica/uc-design-system/issues/83)
- **[Proofreader]** Standardize code between packages. (#286) ([4c99bb0](https://github.com/lorica/uc-design-system/commit/4c99bb0)), closes [#286](https://github.com/lorica/uc-design-system/issues/286)
- **[RadioButton, CheckBox]** Add `compact` support to `button` option. Full width children. (#176) ([6d43cab](https://github.com/lorica/uc-design-system/commit/6d43cab)), closes [#176](https://github.com/lorica/uc-design-system/issues/176)
- **[Range]** Add input range component (#362) ([3996ebf](https://github.com/lorica/uc-design-system/commit/3996ebf)), closes [#362](https://github.com/lorica/uc-design-system/issues/362)
- **[ResponsiveImage]** Add contain prop (#77) ([ae4ff43](https://github.com/lorica/uc-design-system/commit/ae4ff43)), closes [#77](https://github.com/lorica/uc-design-system/issues/77)
- **[RotateControls, ZoomControls]** Add icon size prop (#381) ([79d0866](https://github.com/lorica/uc-design-system/commit/79d0866)), closes [#381](https://github.com/lorica/uc-design-system/issues/381)
- **[Row]** Add inline prop. (#137) ([5e14045](https://github.com/lorica/uc-design-system/commit/5e14045)), closes [#137](https://github.com/lorica/uc-design-system/issues/137)
- **[Row]** Reduce padding for inline and compact. (#299) ([d808c9a](https://github.com/lorica/uc-design-system/commit/d808c9a)), closes [#299](https://github.com/lorica/uc-design-system/issues/299)
- **[Row, CardContent]** Add `minHeight` support. Add `small` image option. Rework CardContent before/after images and increase default size. (#201) ([cb5cfcf](https://github.com/lorica/uc-design-system/commit/cb5cfcf)), closes [#201](https://github.com/lorica/uc-design-system/issues/201)
- **[RTL]** Support RTL. Add DirectionProvider, DirectionalIcon, and ExpandableIcon components. (#94) ([153a66f](https://github.com/lorica/uc-design-system/commit/153a66f)), closes [#94](https://github.com/lorica/uc-design-system/issues/94)
- **[Sheet]** Add header bar (#20) ([138f690](https://github.com/lorica/uc-design-system/commit/138f690)), closes [#20](https://github.com/lorica/uc-design-system/issues/20)
- **[SortCarets]** Clean up styles. Add tests and story. (#160) ([6c95300](https://github.com/lorica/uc-design-system/commit/6c95300)), closes [#160](https://github.com/lorica/uc-design-system/issues/160)
- **[StatusLabel]** add compact style ([01f1287](https://github.com/lorica/uc-design-system/commit/01f1287))
- **[Tab]** Set background color for tab button to clear (#251) ([aeeca6a](https://github.com/lorica/uc-design-system/commit/aeeca6a)), closes [#251](https://github.com/lorica/uc-design-system/issues/251)
- **[Tab]** Set background color to clear (#247) ([f19dd84](https://github.com/lorica/uc-design-system/commit/f19dd84)), closes [#247](https://github.com/lorica/uc-design-system/issues/247)
- **[Table]** Add `noWrap` prop. (#224) ([9e815b9](https://github.com/lorica/uc-design-system/commit/9e815b9)), closes [#224](https://github.com/lorica/uc-design-system/issues/224)
- **[Table]** Rework borders and headers. (#246) ([e93c0f4](https://github.com/lorica/uc-design-system/commit/e93c0f4)), closes [#246](https://github.com/lorica/uc-design-system/issues/246)
- **[Tabs]** Add `secondary` prop and styles. (#205) ([827e048](https://github.com/lorica/uc-design-system/commit/827e048)), closes [#205](https://github.com/lorica/uc-design-system/issues/205)
- **[Tabs]** Add onPushState prop (#335) ([409b4c7](https://github.com/lorica/uc-design-system/commit/409b4c7)), closes [#335](https://github.com/lorica/uc-design-system/issues/335)
- **[Text]** Add startAlign prop (#54) ([7c46ba6](https://github.com/lorica/uc-design-system/commit/7c46ba6)), closes [#54](https://github.com/lorica/uc-design-system/issues/54)
- **[Timeline]** Add Timeline component (#322) ([dd30a0c](https://github.com/lorica/uc-design-system/commit/dd30a0c)), closes [#322](https://github.com/lorica/uc-design-system/issues/322)
- **[Title]** Add primary color option. (#61) ([dbb8b87](https://github.com/lorica/uc-design-system/commit/dbb8b87)), closes [#61](https://github.com/lorica/uc-design-system/issues/61)
- **[Toast]** Add cross tab closes for toasts ([5215bb0](https://github.com/lorica/uc-design-system/commit/5215bb0))
- **[tooltip]** Make inverted text readable in dark mode (#386) ([c218858](https://github.com/lorica/uc-design-system/commit/c218858)), closes [#386](https://github.com/lorica/uc-design-system/issues/386)
- **[tooltip]** Set font color for inverted tooltip (#388) ([0c57553](https://github.com/lorica/uc-design-system/commit/0c57553)), closes [#388](https://github.com/lorica/uc-design-system/issues/388)
- **[Tooltip]** Add  prop. (#337) ([95cddae](https://github.com/lorica/uc-design-system/commit/95cddae)), closes [#337](https://github.com/lorica/uc-design-system/issues/337)
- **[Tooltip]** Add `horizontalAlign` and `verticalAlign` props. (#333) ([e87b79d](https://github.com/lorica/uc-design-system/commit/e87b79d)), closes [#333](https://github.com/lorica/uc-design-system/issues/333)
- **[Tooltip]** Add `onClose`  prop (#355) ([3eab555](https://github.com/lorica/uc-design-system/commit/3eab555)), closes [#355](https://github.com/lorica/uc-design-system/issues/355)
- **[Tooltip]** Add `popover` prop (#382) ([19f4364](https://github.com/lorica/uc-design-system/commit/19f4364)), closes [#382](https://github.com/lorica/uc-design-system/issues/382)
- **[Tooltip]** Add optional accessibilityLabel for perf (#357) ([106ce23](https://github.com/lorica/uc-design-system/commit/106ce23)), closes [#357](https://github.com/lorica/uc-design-system/issues/357)
- **[Tooltip]** Reduce offscreen pattern layer size and render a11y content in Portal (#261) ([77642a3](https://github.com/lorica/uc-design-system/commit/77642a3)), closes [#261](https://github.com/lorica/uc-design-system/issues/261)
- **[Tooltip]** Remove notched box and invert styles. (#323) ([dd29828](https://github.com/lorica/uc-design-system/commit/dd29828)), closes [#323](https://github.com/lorica/uc-design-system/issues/323)
- Migrate to Nimbus. Update to latest TypeScript, Babel, ESLint, and more. (#196) ([fe0962b](https://github.com/lorica/uc-design-system/commit/fe0962b)), closes [#196](https://github.com/lorica/uc-design-system/issues/196)
- **[Tooltip]** Render Popover's popup in Overlay component (#392) ([e7812ce](https://github.com/lorica/uc-design-system/commit/e7812ce)), closes [#392](https://github.com/lorica/uc-design-system/issues/392)
- Add `Term` and `TermList` components. (#297) ([5f8cbf5](https://github.com/lorica/uc-design-system/commit/5f8cbf5)), closes [#297](https://github.com/lorica/uc-design-system/issues/297)
- Final round of polish before official release (#15) ([1209775](https://github.com/lorica/uc-design-system/commit/1209775)), closes [#15](https://github.com/lorica/uc-design-system/issues/15)
- Migrate some `withStyles` usage to `useStyles`. Add a `styleSheet` prop to all hook components. (#312) ([19f82f4](https://github.com/lorica/uc-design-system/commit/19f82f4)), closes [#312](https://github.com/lorica/uc-design-system/issues/312)
- Migrate some class components to function components. (#319) ([25a969a](https://github.com/lorica/uc-design-system/commit/25a969a)), closes [#319](https://github.com/lorica/uc-design-system/issues/319)
- **[Translate]** Add key support. Make params and context optional. (#129) ([6338326](https://github.com/lorica/uc-design-system/commit/6338326)), closes [#129](https://github.com/lorica/uc-design-system/issues/129)
- New focus styles throughout. (#349) ([7ea005b](https://github.com/lorica/uc-design-system/commit/7ea005b)), closes [#349](https://github.com/lorica/uc-design-system/issues/349)
- **[TrackingBoundary]** data attribute on tracking-boundary tags (#103) ([8a09b65](https://github.com/lorica/uc-design-system/commit/8a09b65)), closes [#103](https://github.com/lorica/uc-design-system/issues/103)
- Refactor form components to use hooks (#233) ([6f7df02](https://github.com/lorica/uc-design-system/commit/6f7df02)), closes [#233](https://github.com/lorica/uc-design-system/issues/233)
- Refine and use explicit value types. Allow null and undefined default values. (#132) ([ecede51](https://github.com/lorica/uc-design-system/commit/ecede51)), closes [#132](https://github.com/lorica/uc-design-system/issues/132)
- Refine form types and fix date related logic. (#165) ([10b1c18](https://github.com/lorica/uc-design-system/commit/10b1c18)), closes [#165](https://github.com/lorica/uc-design-system/issues/165)
- **[withIcon]** Add new icon props to flip horizontally and/or vertically. (#72) ([84bda27](https://github.com/lorica/uc-design-system/commit/84bda27)), closes [#72](https://github.com/lorica/uc-design-system/issues/72)
- **[withIcon]** Throw dev error if an ally prop is missing. (#84) ([75acae5](https://github.com/lorica/uc-design-system/commit/75acae5)), closes [#84](https://github.com/lorica/uc-design-system/issues/84)
- Update dark mode! (#260) ([6996767](https://github.com/lorica/uc-design-system/commit/6996767)), closes [#260](https://github.com/lorica/uc-design-system/issues/260)
- Update simple components to use `useStyles` instead of `withStyles`. (#236) ([761a801](https://github.com/lorica/uc-design-system/commit/761a801)), closes [#236](https://github.com/lorica/uc-design-system/issues/236)
- Upgrade to Aesthetic v5. (#269) ([57e84e5](https://github.com/lorica/uc-design-system/commit/57e84e5)), closes [#269](https://github.com/lorica/uc-design-system/issues/269)
- Use `React.memo` under the hood. Remove children/node prop type checks. (#120) ([30881c6](https://github.com/lorica/uc-design-system/commit/30881c6)), closes [#120](https://github.com/lorica/uc-design-system/issues/120)

#### 🐞 Fixes

- Add ExpandableIcon to icon name list. ([15bc361](https://github.com/lorica/uc-design-system/commit/15bc361))
- Fix `css` attribute being resolved in form props. ([0eb0c02](https://github.com/lorica/uc-design-system/commit/0eb0c02))
- Fix `Interweave` causing test flakiness (#228) ([f163bee](https://github.com/lorica/uc-design-system/commit/f163bee)), closes [#228](https://github.com/lorica/uc-design-system/issues/228)
- Fix proofreader crashing by memoizing form input. (#264) ([4272bb4](https://github.com/lorica/uc-design-system/commit/4272bb4)), closes [#264](https://github.com/lorica/uc-design-system/issues/264)
- Handful of fixes based on v3 migration. (#332) ([e378004](https://github.com/lorica/uc-design-system/commit/e378004)), closes [#332](https://github.com/lorica/uc-design-system/issues/332)
- Lazy-load `BroadcastChannel`. (#343) ([b57374a](https://github.com/lorica/uc-design-system/commit/b57374a)), closes [#343](https://github.com/lorica/uc-design-system/issues/343)
- Migrate to Aesthetic v4 official (#110) ([19e73dd](https://github.com/lorica/uc-design-system/commit/19e73dd)), closes [#110](https://github.com/lorica/uc-design-system/issues/110)
- Minor changes to support SSR. (#341) ([7810102](https://github.com/lorica/uc-design-system/commit/7810102)), closes [#341](https://github.com/lorica/uc-design-system/issues/341)
- Remove Babel runtime setup (#65) ([a58ade2](https://github.com/lorica/uc-design-system/commit/a58ade2)), closes [#65](https://github.com/lorica/uc-design-system/issues/65)
- Remove package dev deps and bump root dev deps. (#44) ([4c26b33](https://github.com/lorica/uc-design-system/commit/4c26b33)), closes [#44](https://github.com/lorica/uc-design-system/issues/44)
- Rewrite stories to remove `@emotion/core` unintended import. (#210) ([5976e92](https://github.com/lorica/uc-design-system/commit/5976e92)), closes [#210](https://github.com/lorica/uc-design-system/issues/210)
- Stop propagation for composer and autocomplete. (#292) ([9804d5c](https://github.com/lorica/uc-design-system/commit/9804d5c)), closes [#292](https://github.com/lorica/uc-design-system/issues/292)
- Update phrase keys and add extraction script. (#303) ([8d5de71](https://github.com/lorica/uc-design-system/commit/8d5de71)), closes [#303](https://github.com/lorica/uc-design-system/issues/303)
- **[Dropdown]** Omit styles from props before passing into cx (#216) ([c905a25](https://github.com/lorica/uc-design-system/commit/c905a25)), closes [#216](https://github.com/lorica/uc-design-system/issues/216)
- Update to latest Luxon types. (#12) ([6280e1e](https://github.com/lorica/uc-design-system/commit/6280e1e)), closes [#12](https://github.com/lorica/uc-design-system/issues/12)
- **[AdaptiveGrid]** Hide/filter out empty grid items. (#238) ([82c5d23](https://github.com/lorica/uc-design-system/commit/82c5d23)), closes [#238](https://github.com/lorica/uc-design-system/issues/238)
- **[Alert]** Add word-break support for titles. (#223) ([52c1218](https://github.com/lorica/uc-design-system/commit/52c1218)), closes [#223](https://github.com/lorica/uc-design-system/issues/223)
- **[Autocomplete]** prefix and suffix style (#390) ([51af827](https://github.com/lorica/uc-design-system/commit/51af827)), closes [#390](https://github.com/lorica/uc-design-system/issues/390)
- **[BaseRadioButton]** Fix radio button focus state (#100) ([e415402](https://github.com/lorica/uc-design-system/commit/e415402)), closes [#100](https://github.com/lorica/uc-design-system/issues/100)
- **[Cell]** Make children optional. (#164) ([55b2a94](https://github.com/lorica/uc-design-system/commit/55b2a94)), closes [#164](https://github.com/lorica/uc-design-system/issues/164)
- **[crosstab]** Create one channel per instance (#356) ([46ccb18](https://github.com/lorica/uc-design-system/commit/46ccb18)), closes [#356](https://github.com/lorica/uc-design-system/issues/356)
- **[DataTable]** Add back 100% width cell style. (#211) ([da3b8ec](https://github.com/lorica/uc-design-system/commit/da3b8ec)), closes [#211](https://github.com/lorica/uc-design-system/issues/211)
- **[DataTable]** add back propagateRef prop (#212) ([fb18eb6](https://github.com/lorica/uc-design-system/commit/fb18eb6)), closes [#212](https://github.com/lorica/uc-design-system/issues/212)
- **[DataTable]** Add spacing to prevent clipping checkbox focus. (#186) ([ed2b890](https://github.com/lorica/uc-design-system/commit/ed2b890)), closes [#186](https://github.com/lorica/uc-design-system/issues/186)
- **[DataTable]** Clear CellMeasureCache on sort change (#231) ([3333362](https://github.com/lorica/uc-design-system/commit/3333362)), closes [#231](https://github.com/lorica/uc-design-system/issues/231)
- **[DataTable]** Correct sorting in ascending/descending order (#98) ([c1d6154](https://github.com/lorica/uc-design-system/commit/c1d6154)), closes [#98](https://github.com/lorica/uc-design-system/issues/98)
- **[DataTable]** Don't cast undefined to a string (#365) ([e09dac8](https://github.com/lorica/uc-design-system/commit/e09dac8)), closes [#365](https://github.com/lorica/uc-design-system/issues/365)
- **[DataTable]** Enable rightAlign functionality in columnMetadata. (#221) ([62a1a30](https://github.com/lorica/uc-design-system/commit/62a1a30)), closes [#221](https://github.com/lorica/uc-design-system/issues/221)
- **[DataTable]** rowHeight xLarge => xlarge (#368) ([078a64a](https://github.com/lorica/uc-design-system/commit/078a64a)), closes [#368](https://github.com/lorica/uc-design-system/issues/368)
- **[DataTable]** Subtract header height from `autoHeight` only when a header exists. ([8440761](https://github.com/lorica/uc-design-system/commit/8440761))
- **[Dropdown]** Remove prop type restrictions. (#180) ([08edeb0](https://github.com/lorica/uc-design-system/commit/08edeb0)), closes [#180](https://github.com/lorica/uc-design-system/issues/180)
- **[FilterMenu]** Close dropdown after filters are applied. (#290) ([f9719fc](https://github.com/lorica/uc-design-system/commit/f9719fc)), closes [#290](https://github.com/lorica/uc-design-system/issues/290)
- **[FormField]** fix CSS typo (#175) ([2c90107](https://github.com/lorica/uc-design-system/commit/2c90107)), closes [#175](https://github.com/lorica/uc-design-system/issues/175)
- **[GradientScroller]** Initially hide gradient end. (#342) ([d3c5bf7](https://github.com/lorica/uc-design-system/commit/d3c5bf7)), closes [#342](https://github.com/lorica/uc-design-system/issues/342)
- **[HierarchyPicker]** Scale weights to equal 1 (#354) ([299dd9a](https://github.com/lorica/uc-design-system/commit/299dd9a)), closes [#354](https://github.com/lorica/uc-design-system/issues/354)
- **[ImageViewer]** Fix icon path from src to lib. (#162) ([6e567bd](https://github.com/lorica/uc-design-system/commit/6e567bd)), closes [#162](https://github.com/lorica/uc-design-system/issues/162)
- **[Loader]** remove redundant spacing (#370) ([700b338](https://github.com/lorica/uc-design-system/commit/700b338)), closes [#370](https://github.com/lorica/uc-design-system/issues/370)
- **[MessageItem]** Consistent title alignment when it is a button or not. (#184) ([b1c31a3](https://github.com/lorica/uc-design-system/commit/b1c31a3)), closes [#184](https://github.com/lorica/uc-design-system/issues/184)
- **[MessageItem]** Fix wrapping when author is loading. (#225) ([2e304bd](https://github.com/lorica/uc-design-system/commit/2e304bd)), closes [#225](https://github.com/lorica/uc-design-system/issues/225)
- **[Modal]** Add padding to right of header to prevent close overlapping with long titles. (#150) ([8ab3450](https://github.com/lorica/uc-design-system/commit/8ab3450)), closes [#150](https://github.com/lorica/uc-design-system/issues/150)
- **[Overlay]** Prevent Overlay from rendering at 0, 0 (#287) ([bdc65d2](https://github.com/lorica/uc-design-system/commit/bdc65d2)), closes [#287](https://github.com/lorica/uc-design-system/issues/287)
- **[Pagination]** Fix page count if label is empty (#89) ([a3a1f55](https://github.com/lorica/uc-design-system/commit/a3a1f55)), closes [#89](https://github.com/lorica/uc-design-system/issues/89)
- **[Proofreader]** Default prop value to empty string (#288) ([3ae7f86](https://github.com/lorica/uc-design-system/commit/3ae7f86)), closes [#288](https://github.com/lorica/uc-design-system/issues/288)
- **[Proofreader]** Pull spurious, proofread-specific props from being passed to TextArea (#151) ([82211a5](https://github.com/lorica/uc-design-system/commit/82211a5)), closes [#151](https://github.com/lorica/uc-design-system/issues/151)
- **[Proofreader]** Reduce calls in componentDidUpdate. (#119) ([1c50f86](https://github.com/lorica/uc-design-system/commit/1c50f86)), closes [#119](https://github.com/lorica/uc-design-system/issues/119)
- **[Proofreader, Portal]** Fix misc js errors. (#271) ([a57f24b](https://github.com/lorica/uc-design-system/commit/a57f24b)), closes [#271](https://github.com/lorica/uc-design-system/issues/271)
- **[RadioButton]** Center align radio with first line when `topAlign` is applied. (#182) ([9e60c2e](https://github.com/lorica/uc-design-system/commit/9e60c2e)), closes [#182](https://github.com/lorica/uc-design-system/issues/182)
- **[Rating]** Update height to be independent of line height. (#146) ([882f651](https://github.com/lorica/uc-design-system/commit/882f651)), closes [#146](https://github.com/lorica/uc-design-system/issues/146)
- **[removeFocusOnMouseUp]** Remove focus from currentTarget. (#53) ([dd7d8ef](https://github.com/lorica/uc-design-system/commit/dd7d8ef)), closes [#53](https://github.com/lorica/uc-design-system/issues/53)
- **[StatusLabel]** Add transparent border for height consistency. (#101) ([b1d2e02](https://github.com/lorica/uc-design-system/commit/b1d2e02)), closes [#101](https://github.com/lorica/uc-design-system/issues/101)
- **[Tabs]** Listen for `popstate` on window instead of document.  (#200) ([3b3f4fe](https://github.com/lorica/uc-design-system/commit/3b3f4fe)), closes [#200](https://github.com/lorica/uc-design-system/issues/200)
- **[Tabs]** Persist active tab when back button is used. (#190) ([c3ff68f](https://github.com/lorica/uc-design-system/commit/c3ff68f)), closes [#190](https://github.com/lorica/uc-design-system/issues/190)
- **[Term]** Fix `large` prop conflicting with `small` default. Update stories. (#358) ([5816442](https://github.com/lorica/uc-design-system/commit/5816442)), closes [#358](https://github.com/lorica/uc-design-system/issues/358)
- **[TextArea]** Wrap reflow in requestAnimationFrame (#272) ([5fed96e](https://github.com/lorica/uc-design-system/commit/5fed96e)), closes [#272](https://github.com/lorica/uc-design-system/issues/272)
- **[TextArea, Proofreader]** Fix double link render. ([1a67704](https://github.com/lorica/uc-design-system/commit/1a67704))
- **[Timeline]** Correctly import IconRecord and export Timeline/Item (#327) ([d2ba453](https://github.com/lorica/uc-design-system/commit/d2ba453)), closes [#327](https://github.com/lorica/uc-design-system/issues/327)
- **[ToggleButtonController]** Fix compact to render small buttons. (#106) ([43d1408](https://github.com/lorica/uc-design-system/commit/43d1408)), closes [#106](https://github.com/lorica/uc-design-system/issues/106)
- **[Tooltip]** Don't set text alignment of Tooltip content (#316) ([fc18a4d](https://github.com/lorica/uc-design-system/commit/fc18a4d)), closes [#316](https://github.com/lorica/uc-design-system/issues/316)
- **[Tooltip]** Fix cannot read property getBoundingClientRect of null. (#133) ([196582b](https://github.com/lorica/uc-design-system/commit/196582b)), closes [#133](https://github.com/lorica/uc-design-system/issues/133)
- **[Tooltip]** Prevent tooltip from rendering at 0, 0 (#274) ([bc7e6cb](https://github.com/lorica/uc-design-system/commit/bc7e6cb)), closes [#274](https://github.com/lorica/uc-design-system/issues/274)
- **[Tooltip, Overlay]** Fix reflows on cDM, cDU, and render (#270) ([f7fa749](https://github.com/lorica/uc-design-system/commit/f7fa749)), closes [#270](https://github.com/lorica/uc-design-system/issues/270)
- **[TrackingBoundary]** Update element to a `div`. (#346) ([400891d](https://github.com/lorica/uc-design-system/commit/400891d)), closes [#346](https://github.com/lorica/uc-design-system/issues/346)

#### ⚙️ Types

- **[DataTable]** Update Renderer data shape to allow generics. (#203) ([01da59c](https://github.com/lorica/uc-design-system/commit/01da59c)), closes [#203](https://github.com/lorica/uc-design-system/issues/203)
- Export from index. (#340) ([7d85a18](https://github.com/lorica/uc-design-system/commit/7d85a18)), closes [#340](https://github.com/lorica/uc-design-system/issues/340)

#### 🎨 Styles

- **[Accordion, AccordionItem]** Remove accordion background color. (#218) ([8ec932f](https://github.com/lorica/uc-design-system/commit/8ec932f)), closes [#218](https://github.com/lorica/uc-design-system/issues/218)
- **[Button]** Adjust minimum widths. (#118) ([6563f5a](https://github.com/lorica/uc-design-system/commit/6563f5a)), closes [#118](https://github.com/lorica/uc-design-system/issues/118)
- **[Button,Input,Autocomplete,Menu]** Normalize and standardize spacing (#113) ([9151b3e](https://github.com/lorica/uc-design-system/commit/9151b3e)), closes [#113](https://github.com/lorica/uc-design-system/issues/113)
- **[CheckBox]** Add focus state (#99) ([5568178](https://github.com/lorica/uc-design-system/commit/5568178)), closes [#99](https://github.com/lorica/uc-design-system/issues/99)
- **[DataTable]** Adjust expanded row spacing. (#219) ([0279439](https://github.com/lorica/uc-design-system/commit/0279439)), closes [#219](https://github.com/lorica/uc-design-system/issues/219)
- **[EmojiPicker]** Tighten up header spacing (#181) ([ff7b4ad](https://github.com/lorica/uc-design-system/commit/ff7b4ad)), closes [#181](https://github.com/lorica/uc-design-system/issues/181)
- **[ImageViewer]** Move flexbox from outer to inner div. (#185) ([c3d2579](https://github.com/lorica/uc-design-system/commit/c3d2579)), closes [#185](https://github.com/lorica/uc-design-system/issues/185)
- Override native agent font styles. (#161) ([5b4d892](https://github.com/lorica/uc-design-system/commit/5b4d892)), closes [#161](https://github.com/lorica/uc-design-system/issues/161)
- **[Input, Button, MenuItem]** Match padding to design specs (#22) ([6b110db](https://github.com/lorica/uc-design-system/commit/6b110db)), closes [#22](https://github.com/lorica/uc-design-system/issues/22)
- Bold, bold, bolder! (#283) ([13f0ecd](https://github.com/lorica/uc-design-system/commit/13f0ecd)), closes [#283](https://github.com/lorica/uc-design-system/issues/283)
- Migrate globals and styles from O2  (#74) ([2568a52](https://github.com/lorica/uc-design-system/commit/2568a52)), closes [#74](https://github.com/lorica/uc-design-system/issues/74)
- Minor polish to dark mode. (#266) ([a00805e](https://github.com/lorica/uc-design-system/commit/a00805e)), closes [#266](https://github.com/lorica/uc-design-system/issues/266)
- Update dark mode danger colors. (#285) ([d512487](https://github.com/lorica/uc-design-system/commit/d512487)), closes [#285](https://github.com/lorica/uc-design-system/issues/285)
- Update shadows to new style. (#329) ([a619e0a](https://github.com/lorica/uc-design-system/commit/a619e0a)), closes [#329](https://github.com/lorica/uc-design-system/issues/329)
- **[Modal]** Increase modal body height when scrollable is set. (#141) ([41b46fd](https://github.com/lorica/uc-design-system/commit/41b46fd)), closes [#141](https://github.com/lorica/uc-design-system/issues/141)
- **[Text]** Update line-height. (#147) ([4aa313c](https://github.com/lorica/uc-design-system/commit/4aa313c)), closes [#147](https://github.com/lorica/uc-design-system/issues/147)
- **[Text,StatusLabel]** Update base font styles. (#140) ([462dc3c](https://github.com/lorica/uc-design-system/commit/462dc3c)), closes [#140](https://github.com/lorica/uc-design-system/issues/140)

#### 📘 Docs

- **[AccordionItem]** Comment update. (#192) ([a6b639f](https://github.com/lorica/uc-design-system/commit/a6b639f)), closes [#192](https://github.com/lorica/uc-design-system/issues/192)
- **[Chip]** Add `active` story example. (#177) ([400a17f](https://github.com/lorica/uc-design-system/commit/400a17f)), closes [#177](https://github.com/lorica/uc-design-system/issues/177)
- **[DataTable]** update type descriptions (recovered) (#69) ([16a425e](https://github.com/lorica/uc-design-system/commit/16a425e)), closes [#69](https://github.com/lorica/uc-design-system/issues/69)
- **[DateTimeSelect]** Disable happo for non-deterministic story (#393) ([90080f3](https://github.com/lorica/uc-design-system/commit/90080f3)), closes [#393](https://github.com/lorica/uc-design-system/issues/393)
- **[StatusLabel]** add compact style variants ([5769118](https://github.com/lorica/uc-design-system/commit/5769118))
- **[StatusLabel]** add compact style variants ([5ab5d64](https://github.com/lorica/uc-design-system/commit/5ab5d64))

#### 📦 Dependencies

- Audit 2019-01-22 (#289) ([7c1033c](https://github.com/lorica/uc-design-system/commit/7c1033c)), closes [#289](https://github.com/lorica/uc-design-system/issues/289)
- Audit 2020-03-24 (#344) ([1db54a9](https://github.com/lorica/uc-design-system/commit/1db54a9)), closes [#344](https://github.com/lorica/uc-design-system/issues/344)
- Remove utility-types. ([8f9d0cc](https://github.com/lorica/uc-design-system/commit/8f9d0cc))
- Update [@types](https://github.com/types) to use star versions. ([96d2804](https://github.com/lorica/uc-design-system/commit/96d2804))
- Update all types packages. ([b2ad9f5](https://github.com/lorica/uc-design-system/commit/b2ad9f5))
- Update dev dependencies to latest. ([8802717](https://github.com/lorica/uc-design-system/commit/8802717))
- **[React]** Update to v12. ([002d30c](https://github.com/lorica/uc-design-system/commit/002d30c))
- Update Interweave and Aesthetic. (#51) ([d36b547](https://github.com/lorica/uc-design-system/commit/d36b547)), closes [#51](https://github.com/lorica/uc-design-system/issues/51)
- **[aesthetic]** Update to latest (for performance gains). ([b3a42d0](https://github.com/lorica/uc-design-system/commit/b3a42d0))
- **[Aesthetic]** Update to latest. Bump Aphrodite. ([a73d9db](https://github.com/lorica/uc-design-system/commit/a73d9db))
- **[ESLint]** Update plugins and fix some rule violations. ([694e540](https://github.com/lorica/uc-design-system/commit/694e540))
- **[Interweave]** Update to v11.2. ([0f6cef0](https://github.com/lorica/uc-design-system/commit/0f6cef0))
- **[Interweave,Emojibase]** Update to latest major version. ([f3846b7](https://github.com/lorica/uc-design-system/commit/f3846b7))
- Update minor and patch versions. ([cf27d74](https://github.com/lorica/uc-design-system/commit/cf27d74))
- **[luxon]** Update to v1.23. ([14306f4](https://github.com/lorica/uc-design-system/commit/14306f4))
- Update Interweave to fix emoji and rendering issues. (#58) ([1e4ec0c](https://github.com/lorica/uc-design-system/commit/1e4ec0c)), closes [#58](https://github.com/lorica/uc-design-system/issues/58)
- Update minor and patch versions. ([f2abbb0](https://github.com/lorica/uc-design-system/commit/f2abbb0))
- Update minor and patch versions. ([4afb2ee](https://github.com/lorica/uc-design-system/commit/4afb2ee))
- Update package dependencies to latest. ([1a07250](https://github.com/lorica/uc-design-system/commit/1a07250))
- Update to latest. ([db08613](https://github.com/lorica/uc-design-system/commit/db08613))
- **[Luxon]** Update to v1.19. ([bab042d](https://github.com/lorica/uc-design-system/commit/bab042d))
- **[nimbus]** Update to v3. ([177f8d7](https://github.com/lorica/uc-design-system/commit/177f8d7))
- **[react]** Update to v16.13. ([dc7902a](https://github.com/lorica/uc-design-system/commit/dc7902a))
- **[React]** Test against v16.9. ([c3eafd4](https://github.com/lorica/uc-design-system/commit/c3eafd4))
- **[React]** Update to v16.11. ([07b80dc](https://github.com/lorica/uc-design-system/commit/07b80dc))

#### 📋 Misc

- **[AccordionItem]** Add test condition in order to bump release version (#191) ([1662057](https://github.com/lorica/uc-design-system/commit/1662057)), closes [#191](https://github.com/lorica/uc-design-system/issues/191)
- Audit 2019-10-29 ([0e3e3da](https://github.com/lorica/uc-design-system/commit/0e3e3da))

#### 🛠 Internals

- Add changelog to storybook. Fix link issues. (#47) ([5af9e54](https://github.com/lorica/uc-design-system/commit/5af9e54)), closes [#47](https://github.com/lorica/uc-design-system/issues/47)
- Fix build based on rebase. ([b8e18fc](https://github.com/lorica/uc-design-system/commit/b8e18fc))
- Fix lint and test failures. ([f2ccc7f](https://github.com/lorica/uc-design-system/commit/f2ccc7f))
- Fix some common Happo issues. (#148) ([de0582b](https://github.com/lorica/uc-design-system/commit/de0582b)), closes [#148](https://github.com/lorica/uc-design-system/issues/148)
- Integrate `TestAesthetic` for easier class name testing (#117) ([8aa1019](https://github.com/lorica/uc-design-system/commit/8aa1019)), closes [#117](https://github.com/lorica/uc-design-system/issues/117)
- Integrate Happo for visual diffs (#139) ([c556d1a](https://github.com/lorica/uc-design-system/commit/c556d1a)), closes [#139](https://github.com/lorica/uc-design-system/issues/139)
- Integrate rut. ([1ca54a6](https://github.com/lorica/uc-design-system/commit/1ca54a6))
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

**Note:** Version bump only for package @lorica/uc-design-system





### 3.23.1 - 2020-07-28

#### 📘 Docs

- **[DateTimeSelect]** Disable happo for non-deterministic story (#393) ([90080f3](https://github.com/airbnb/lunar/commit/90080f3)), closes [#393](https://github.com/airbnb/lunar/issues/393)

**Note:** Version bump only for package @airbnb/lunar





## 3.23.0 - 2020-07-24

#### 🚀 Updates

- **[Tooltip]** Render Popover's popup in Overlay component (#392) ([e7812ce](https://github.com/airbnb/lunar/commit/e7812ce)), closes [#392](https://github.com/airbnb/lunar/issues/392)

**Note:** Version bump only for package @airbnb/lunar





## 3.22.0 - 2020-07-23

#### 🚀 Updates

- **[Overlay]** Add `enableMouseInteraction` prop (#391) ([26e905d](https://github.com/airbnb/lunar/commit/26e905d)), closes [#391](https://github.com/airbnb/lunar/issues/391)

**Note:** Version bump only for package @airbnb/lunar





### 3.21.1 - 2020-07-22

#### 🐞 Fixes

- **[Autocomplete]** prefix and suffix style (#390) ([51af827](https://github.com/airbnb/lunar/commit/51af827)), closes [#390](https://github.com/airbnb/lunar/issues/390)

**Note:** Version bump only for package @airbnb/lunar





## 3.21.0 - 2020-07-02

#### 🚀 Updates

- **[tooltip]** Set font color for inverted tooltip (#388) ([0c57553](https://github.com/airbnb/lunar/commit/0c57553)), closes [#388](https://github.com/airbnb/lunar/issues/388)

**Note:** Version bump only for package @airbnb/lunar





## 3.20.0 - 2020-07-02

#### 🚀 Updates

- **[tooltip]** Make inverted text readable in dark mode (#386) ([c218858](https://github.com/airbnb/lunar/commit/c218858)), closes [#386](https://github.com/airbnb/lunar/issues/386)

**Note:** Version bump only for package @airbnb/lunar





## 3.19.0 - 2020-07-01

#### 🚀 Updates

- **[RotateControls, ZoomControls]** Add icon size prop (#381) ([79d0866](https://github.com/airbnb/lunar/commit/79d0866)), closes [#381](https://github.com/airbnb/lunar/issues/381)

**Note:** Version bump only for package @airbnb/lunar





## 3.18.0 - 2020-06-30

#### 🚀 Updates

- **[Tooltip]** Add `popover` prop (#382) ([19f4364](https://github.com/airbnb/lunar/commit/19f4364)), closes [#382](https://github.com/airbnb/lunar/issues/382)

**Note:** Version bump only for package @airbnb/lunar





## 3.17.0 - 2020-06-04

#### 🚀 Updates

- **[Copy]** Add invertTooltip prop (#380) ([d2ea8da](https://github.com/airbnb/lunar/commit/d2ea8da)), closes [#380](https://github.com/airbnb/lunar/issues/380)

**Note:** Version bump only for package @airbnb/lunar





## 3.16.0 - 2020-05-22

#### 🚀 Updates

- **[List]** Add reversed prop to visually reverse the list items. (#374) ([4c2a87e](https://github.com/airbnb/lunar/commit/4c2a87e)), closes [#374](https://github.com/airbnb/lunar/issues/374)

**Note:** Version bump only for package @airbnb/lunar





### 3.15.1 - 2020-05-11

#### 🐞 Fixes

- **[Loader]** remove redundant spacing (#370) ([700b338](https://github.com/airbnb/lunar/commit/700b338)), closes [#370](https://github.com/airbnb/lunar/issues/370)

**Note:** Version bump only for package @airbnb/lunar





## 3.15.0 - 2020-05-05

#### 🚀 Updates

- **[Price, PriceComparison, PriceGroup]** Handle invalid currency values. (#369) ([161cf92](https://github.com/airbnb/lunar/commit/161cf92)), closes [#369](https://github.com/airbnb/lunar/issues/369)

**Note:** Version bump only for package @airbnb/lunar





### 3.14.1 - 2020-05-01

#### 🐞 Fixes

- **[DataTable]** rowHeight xLarge => xlarge (#368) ([078a64a](https://github.com/airbnb/lunar/commit/078a64a)), closes [#368](https://github.com/airbnb/lunar/issues/368)

**Note:** Version bump only for package @airbnb/lunar





## 3.14.0 - 2020-05-01

#### 🚀 Updates

- **[DataTable]** Add xLarge row size. Fix forceUpdate logic (#367) ([ebab32b](https://github.com/airbnb/lunar/commit/ebab32b)), closes [#367](https://github.com/airbnb/lunar/issues/367)

**Note:** Version bump only for package @airbnb/lunar





## 3.13.0 - 2020-04-30

#### 🚀 Updates

- **[DateTime, DateTimeRange, DateTimeSelect, Price, PriceComparison, PriceGroup]** Add empty fallback if an invalid value is provided. (#366) ([a37c2cc](https://github.com/airbnb/lunar/commit/a37c2cc)), closes [#366](https://github.com/airbnb/lunar/issues/366)

**Note:** Version bump only for package @airbnb/lunar





### 3.12.1 - 2020-04-30

#### 🐞 Fixes

- **[DataTable]** Don't cast undefined to a string (#365) ([e09dac8](https://github.com/airbnb/lunar/commit/e09dac8)), closes [#365](https://github.com/airbnb/lunar/issues/365)

**Note:** Version bump only for package @airbnb/lunar





## 3.12.0 - 2020-04-30

#### 🚀 Updates

- **[Range]** Add input range component (#362) ([3996ebf](https://github.com/airbnb/lunar/commit/3996ebf)), closes [#362](https://github.com/airbnb/lunar/issues/362)

**Note:** Version bump only for package @airbnb/lunar





## 3.11.0 - 2020-04-24

#### 🚀 Updates

- **[ErrorMessage,ErrorBoundary]** Show error info and error/trace IDs (#363) ([bf0965a](https://github.com/airbnb/lunar/commit/bf0965a)), closes [#363](https://github.com/airbnb/lunar/issues/363)

**Note:** Version bump only for package @airbnb/lunar





## 3.10.0 - 2020-04-22

#### 🚀 Updates

- **[ErrorMessage]** Add trace ID link (#361) ([29e6fad](https://github.com/airbnb/lunar/commit/29e6fad)), closes [#361](https://github.com/airbnb/lunar/issues/361)

**Note:** Version bump only for package @airbnb/lunar





## 3.9.0 - 2020-04-21

#### 🚀 Updates

- **[Modal]** Add `topBar` and `topBarCentered` support. (#359) ([243c289](https://github.com/airbnb/lunar/commit/243c289)), closes [#359](https://github.com/airbnb/lunar/issues/359)

**Note:** Version bump only for package @airbnb/lunar





## 3.8.0 - 2020-04-20

#### 🚀 Updates

- **[Tooltip]** Add `onClose`  prop (#355) ([3eab555](https://github.com/airbnb/lunar/commit/3eab555)), closes [#355](https://github.com/airbnb/lunar/issues/355)

#### 🐞 Fixes

- **[Term]** Fix `large` prop conflicting with `small` default. Update stories. (#358) ([5816442](https://github.com/airbnb/lunar/commit/5816442)), closes [#358](https://github.com/airbnb/lunar/issues/358)

**Note:** Version bump only for package @airbnb/lunar





## 3.7.0 - 2020-04-20

#### 🚀 Updates

- **[Tooltip]** Add optional accessibilityLabel for perf (#357) ([106ce23](https://github.com/airbnb/lunar/commit/106ce23)), closes [#357](https://github.com/airbnb/lunar/issues/357)

**Note:** Version bump only for package @airbnb/lunar





### 3.6.3 - 2020-04-15

#### 🐞 Fixes

- **[crosstab]** Create one channel per instance (#356) ([46ccb18](https://github.com/airbnb/lunar/commit/46ccb18)), closes [#356](https://github.com/airbnb/lunar/issues/356)

**Note:** Version bump only for package @airbnb/lunar





### 3.6.2 - 2020-04-09

#### 🐞 Fixes

- **[HierarchyPicker]** Scale weights to equal 1 (#354) ([299dd9a](https://github.com/airbnb/lunar/commit/299dd9a)), closes [#354](https://github.com/airbnb/lunar/issues/354)

**Note:** Version bump only for package @airbnb/lunar





### 3.6.1 - 2020-04-07

#### 📦 Dependencies

- **[aesthetic]** Update to latest (for performance gains). ([b3a42d0](https://github.com/airbnb/lunar/commit/b3a42d0))
- **[luxon]** Update to v1.23. ([14306f4](https://github.com/airbnb/lunar/commit/14306f4))

**Note:** Version bump only for package @airbnb/lunar





## 3.6.0 - 2020-03-30

#### 🚀 Updates

- **[MenuToggle]** Add prop for custom trigger element. (#304) ([9f3ea04](https://github.com/airbnb/lunar/commit/9f3ea04)), closes [#304](https://github.com/airbnb/lunar/issues/304)

**Note:** Version bump only for package @airbnb/lunar





## 3.5.0 - 2020-03-30

#### 🚀 Updates

- New focus styles throughout. (#349) ([7ea005b](https://github.com/airbnb/lunar/commit/7ea005b)), closes [#349](https://github.com/airbnb/lunar/issues/349)

**Note:** Version bump only for package @airbnb/lunar





### 3.4.6 - 2020-03-25

#### 🐞 Fixes

- **[TrackingBoundary]** Update element to a `div`. (#346) ([400891d](https://github.com/airbnb/lunar/commit/400891d)), closes [#346](https://github.com/airbnb/lunar/issues/346)

**Note:** Version bump only for package @airbnb/lunar





### 3.4.5 - 2020-03-25

#### 📦 Dependencies

- Audit 2020-03-24 (#344) ([1db54a9](https://github.com/airbnb/lunar/commit/1db54a9)), closes [#344](https://github.com/airbnb/lunar/issues/344)

**Note:** Version bump only for package @airbnb/lunar





### 3.4.4 - 2020-03-24

#### 🐞 Fixes

- **[GradientScroller]** Initially hide gradient end. (#342) ([d3c5bf7](https://github.com/airbnb/lunar/commit/d3c5bf7)), closes [#342](https://github.com/airbnb/lunar/issues/342)

**Note:** Version bump only for package @airbnb/lunar





### 3.4.3 - 2020-03-20

#### 🐞 Fixes

- Lazy-load `BroadcastChannel`. (#343) ([b57374a](https://github.com/airbnb/lunar/commit/b57374a)), closes [#343](https://github.com/airbnb/lunar/issues/343)

**Note:** Version bump only for package @airbnb/lunar





### 3.4.2 - 2020-03-19

#### 🐞 Fixes

- Minor changes to support SSR. (#341) ([7810102](https://github.com/airbnb/lunar/commit/7810102)), closes [#341](https://github.com/airbnb/lunar/issues/341)

**Note:** Version bump only for package @airbnb/lunar





### 3.4.1 - 2020-03-18

#### ⚙️ Types

- Export from index. (#340) ([7d85a18](https://github.com/airbnb/lunar/commit/7d85a18)), closes [#340](https://github.com/airbnb/lunar/issues/340)

**Note:** Version bump only for package @airbnb/lunar





## 3.4.0 - 2020-03-17

#### 🚀 Updates

- **[Proofreader]** Add max height prop for locale menu. (#339) ([c55461b](https://github.com/airbnb/lunar/commit/c55461b)), closes [#339](https://github.com/airbnb/lunar/issues/339)

**Note:** Version bump only for package @airbnb/lunar





### 3.3.1 - 2020-03-13

#### 🐞 Fixes

- **[TextArea, Proofreader]** Fix double link render. ([1a67704](https://github.com/airbnb/lunar/commit/1a67704))

**Note:** Version bump only for package @airbnb/lunar





## 3.3.0 - 2020-03-13

#### 🚀 Updates

- **[Tooltip]** Add  prop. (#337) ([95cddae](https://github.com/airbnb/lunar/commit/95cddae)), closes [#337](https://github.com/airbnb/lunar/issues/337)

**Note:** Version bump only for package @airbnb/lunar





## 3.2.0 - 2020-03-10

#### 🚀 Updates

- **[Row]** Reduce padding for inline and compact. (#299) ([d808c9a](https://github.com/airbnb/lunar/commit/d808c9a)), closes [#299](https://github.com/airbnb/lunar/issues/299)
- **[Tooltip]** Add `horizontalAlign` and `verticalAlign` props. (#333) ([e87b79d](https://github.com/airbnb/lunar/commit/e87b79d)), closes [#333](https://github.com/airbnb/lunar/issues/333)

**Note:** Version bump only for package @airbnb/lunar





### 3.1.1 - 2020-03-09

**Note:** Version bump only for package @airbnb/lunar





## 3.1.0 - 2020-03-09

#### 🚀 Updates

- **[Tabs]** Add onPushState prop (#335) ([409b4c7](https://github.com/airbnb/lunar/commit/409b4c7)), closes [#335](https://github.com/airbnb/lunar/issues/335)

**Note:** Version bump only for package @airbnb/lunar





### 3.0.1 - 2020-03-06

#### 🐞 Fixes

- Handful of fixes based on v3 migration. (#332) ([e378004](https://github.com/airbnb/lunar/commit/e378004)), closes [#332](https://github.com/airbnb/lunar/issues/332)

**Note:** Version bump only for package @airbnb/lunar





# 3.0.0 - 2020-03-04

#### 🎉 Release

- Update peers to v3. ([1732307](https://github.com/airbnb/lunar/commit/1732307))

#### 💥 Breaking

- **[CardContent]** Consolidate before/after props. Remove afterImageSrc, beforeImageSrc, small, and large props. Generalize other props. (#318) ([988ba64](https://github.com/airbnb/lunar/commit/988ba64)), closes [#318](https://github.com/airbnb/lunar/issues/318)
- **[CheckBox, FormField, RadioButton]** Remove topAlign and default to top alignment. Add middleAlign option. (#320) ([16e7245](https://github.com/airbnb/lunar/commit/16e7245)), closes [#320](https://github.com/airbnb/lunar/issues/320)
- **[DataTable]** Remove edit mode, header buttons, and selectable state. (#326) ([1227364](https://github.com/airbnb/lunar/commit/1227364)), closes [#326](https://github.com/airbnb/lunar/issues/326) [#306](https://github.com/airbnb/lunar/issues/306) [#313](https://github.com/airbnb/lunar/issues/313) [#314](https://github.com/airbnb/lunar/issues/314) [#316](https://github.com/airbnb/lunar/issues/316) [#322](https://github.com/airbnb/lunar/issues/322)
- Add generics to components that may use it. (#317) ([32f7afe](https://github.com/airbnb/lunar/commit/32f7afe)), closes [#317](https://github.com/airbnb/lunar/issues/317)
- Remove i18n context and make key required. (#309) ([f78d90e](https://github.com/airbnb/lunar/commit/f78d90e)), closes [#309](https://github.com/airbnb/lunar/issues/309)
- Replace form fields `compact` with `small` and `large`. (#311) ([841258d](https://github.com/airbnb/lunar/commit/841258d)), closes [#311](https://github.com/airbnb/lunar/issues/311)
- Use long canonical names for props and state types. (#310) ([d326e3e](https://github.com/airbnb/lunar/commit/d326e3e)), closes [#310](https://github.com/airbnb/lunar/issues/310)

#### 🚀 Updates

- Add `Term` and `TermList` components. (#297) ([5f8cbf5](https://github.com/airbnb/lunar/commit/5f8cbf5)), closes [#297](https://github.com/airbnb/lunar/issues/297)
- **[Link]** Add `textProps` prop. (#324) ([d375de1](https://github.com/airbnb/lunar/commit/d375de1)), closes [#324](https://github.com/airbnb/lunar/issues/324)
- **[Tooltip]** Remove notched box and invert styles. (#323) ([dd29828](https://github.com/airbnb/lunar/commit/dd29828)), closes [#323](https://github.com/airbnb/lunar/issues/323)
- Migrate some `withStyles` usage to `useStyles`. Add a `styleSheet` prop to all hook components. (#312) ([19f82f4](https://github.com/airbnb/lunar/commit/19f82f4)), closes [#312](https://github.com/airbnb/lunar/issues/312)
- Migrate some class components to function components. (#319) ([25a969a](https://github.com/airbnb/lunar/commit/25a969a)), closes [#319](https://github.com/airbnb/lunar/issues/319)

#### 🎨 Styles

- Update shadows to new style. (#329) ([a619e0a](https://github.com/airbnb/lunar/commit/a619e0a)), closes [#329](https://github.com/airbnb/lunar/issues/329)

#### 📦 Dependencies

- Update to latest. ([db08613](https://github.com/airbnb/lunar/commit/db08613))
- **[nimbus]** Update to v3. ([177f8d7](https://github.com/airbnb/lunar/commit/177f8d7))
- **[react]** Update to v16.13. ([dc7902a](https://github.com/airbnb/lunar/commit/dc7902a))

#### 🛠 Internals

- Fix build based on rebase. ([b8e18fc](https://github.com/airbnb/lunar/commit/b8e18fc))

**Note:** Version bump only for package @airbnb/lunar





### 2.64.2 - 2020-03-03

**Note:** Version bump only for package @airbnb/lunar





### 2.64.1 - 2020-02-27

#### 🐞 Fixes

- **[Timeline]** Correctly import IconRecord and export Timeline/Item (#327) ([d2ba453](https://github.com/airbnb/lunar/commit/d2ba453)), closes [#327](https://github.com/airbnb/lunar/issues/327)

**Note:** Version bump only for package @airbnb/lunar





## 2.64.0 - 2020-02-21

#### 🚀 Updates

- **[Timeline]** Add Timeline component (#322) ([dd30a0c](https://github.com/airbnb/lunar/commit/dd30a0c)), closes [#322](https://github.com/airbnb/lunar/issues/322)

**Note:** Version bump only for package @airbnb/lunar





### 2.63.1 - 2020-02-14

#### 🐞 Fixes

- **[Tooltip]** Don't set text alignment of Tooltip content (#316) ([fc18a4d](https://github.com/airbnb/lunar/commit/fc18a4d)), closes [#316](https://github.com/airbnb/lunar/issues/316)

**Note:** Version bump only for package @airbnb/lunar





## 2.63.0 - 2020-02-14

#### 🚀 Updates

- **[ProgressBar]** Add status color options. (#314) ([6b80a13](https://github.com/airbnb/lunar/commit/6b80a13)), closes [#314](https://github.com/airbnb/lunar/issues/314)

**Note:** Version bump only for package @airbnb/lunar





### 2.62.2 - 2020-02-07

#### 📦 Dependencies

- Update minor and patch versions. ([cf27d74](https://github.com/airbnb/lunar/commit/cf27d74))

**Note:** Version bump only for package @airbnb/lunar





### 2.62.1 - 2020-02-06

#### 🐞 Fixes

- Update phrase keys and add extraction script. (#303) ([8d5de71](https://github.com/airbnb/lunar/commit/8d5de71)), closes [#303](https://github.com/airbnb/lunar/issues/303)

**Note:** Version bump only for package @airbnb/lunar





## 2.62.0 - 2020-02-04

#### 🚀 Updates

- **[FormActions]** Add `block` option to buttons. (#298) ([28317db](https://github.com/airbnb/lunar/commit/28317db)), closes [#298](https://github.com/airbnb/lunar/issues/298)

**Note:** Version bump only for package @airbnb/lunar





## 2.61.0 - 2020-01-31

#### 🚀 Updates

- **[Multicomplete]** Add `renderChip` option. (#293) ([60206cb](https://github.com/airbnb/lunar/commit/60206cb)), closes [#293](https://github.com/airbnb/lunar/issues/293)

**Note:** Version bump only for package @airbnb/lunar





### 2.60.1 - 2020-01-30

#### 🐞 Fixes

- Stop propagation for composer and autocomplete. (#292) ([9804d5c](https://github.com/airbnb/lunar/commit/9804d5c)), closes [#292](https://github.com/airbnb/lunar/issues/292)

**Note:** Version bump only for package @airbnb/lunar





## 2.60.0 - 2020-01-29

#### 🚀 Updates

- **[Proofreader]** Standardize code between packages. (#286) ([4c99bb0](https://github.com/airbnb/lunar/commit/4c99bb0)), closes [#286](https://github.com/airbnb/lunar/issues/286)

**Note:** Version bump only for package @airbnb/lunar





### 2.59.4 - 2020-01-28

#### 📦 Dependencies

- Audit 2019-01-22 (#289) ([7c1033c](https://github.com/airbnb/lunar/commit/7c1033c)), closes [#289](https://github.com/airbnb/lunar/issues/289)

**Note:** Version bump only for package @airbnb/lunar





### 2.59.3 - 2020-01-27

#### 🐞 Fixes

- **[FilterMenu]** Close dropdown after filters are applied. (#290) ([f9719fc](https://github.com/airbnb/lunar/commit/f9719fc)), closes [#290](https://github.com/airbnb/lunar/issues/290)

**Note:** Version bump only for package @airbnb/lunar





### 2.59.2 - 2020-01-23

#### 🐞 Fixes

- **[Proofreader]** Default prop value to empty string (#288) ([3ae7f86](https://github.com/airbnb/lunar/commit/3ae7f86)), closes [#288](https://github.com/airbnb/lunar/issues/288)

**Note:** Version bump only for package @airbnb/lunar





### 2.59.1 - 2020-01-22

#### 🐞 Fixes

- **[Overlay]** Prevent Overlay from rendering at 0, 0 (#287) ([bdc65d2](https://github.com/airbnb/lunar/commit/bdc65d2)), closes [#287](https://github.com/airbnb/lunar/issues/287)

**Note:** Version bump only for package @airbnb/lunar





## 2.59.0 - 2020-01-21

#### 🚀 Updates

- **[Image]** Add `backdrop` prop (#265) ([265d553](https://github.com/airbnb/lunar/commit/265d553)), closes [#265](https://github.com/airbnb/lunar/issues/265)

#### 🎨 Styles

- Update dark mode danger colors. (#285) ([d512487](https://github.com/airbnb/lunar/commit/d512487)), closes [#285](https://github.com/airbnb/lunar/issues/285)

**Note:** Version bump only for package @airbnb/lunar





### 2.58.1 - 2020-01-21

#### 🎨 Styles

- Bold, bold, bolder! (#283) ([13f0ecd](https://github.com/airbnb/lunar/commit/13f0ecd)), closes [#283](https://github.com/airbnb/lunar/issues/283)

**Note:** Version bump only for package @airbnb/lunar





## 2.58.0 - 2020-01-13

#### 🚀 Updates

- **[Loadable]** Fix layout thrashing and improve performance. (#281) ([b8490af](https://github.com/airbnb/lunar/commit/b8490af)), closes [#281](https://github.com/airbnb/lunar/issues/281)

**Note:** Version bump only for package @airbnb/lunar





## 2.57.0 - 2020-01-09

#### 🚀 Updates

- **[Autocomplete, Multicomplete]** Add `selectUnknownOnEnter` prop. (#280) ([cd556d3](https://github.com/airbnb/lunar/commit/cd556d3)), closes [#280](https://github.com/airbnb/lunar/issues/280)

**Note:** Version bump only for package @airbnb/lunar





## 2.56.0 - 2020-01-08

#### 🚀 Updates

- **[HierarchyPicker]** Pass the current item object to `onItemPicked`. (#279) ([bb5ddc3](https://github.com/airbnb/lunar/commit/bb5ddc3)), closes [#279](https://github.com/airbnb/lunar/issues/279)

**Note:** Version bump only for package @airbnb/lunar





## 2.55.0 - 2020-01-08

#### 🚀 Updates

- **[Accordion]** Add `onChange` and `onToggle` props. (#277) ([a9370ee](https://github.com/airbnb/lunar/commit/a9370ee)), closes [#277](https://github.com/airbnb/lunar/issues/277)

**Note:** Version bump only for package @airbnb/lunar





## 2.54.0 - 2020-01-08

#### 🚀 Updates

- **[Modal]** Add `persistOnOutsideClick` prop. (#276) ([f8f8ff3](https://github.com/airbnb/lunar/commit/f8f8ff3)), closes [#276](https://github.com/airbnb/lunar/issues/276)

#### 🐞 Fixes

- **[Tooltip]** Prevent tooltip from rendering at 0, 0 (#274) ([bc7e6cb](https://github.com/airbnb/lunar/commit/bc7e6cb)), closes [#274](https://github.com/airbnb/lunar/issues/274)

**Note:** Version bump only for package @airbnb/lunar





### 2.53.3 - 2020-01-06

#### 🐞 Fixes

- **[TextArea]** Wrap reflow in requestAnimationFrame (#272) ([5fed96e](https://github.com/airbnb/lunar/commit/5fed96e)), closes [#272](https://github.com/airbnb/lunar/issues/272)

**Note:** Version bump only for package @airbnb/lunar





### 2.53.2 - 2020-01-04

#### 🐞 Fixes

- **[Proofreader, Portal]** Fix misc js errors. (#271) ([a57f24b](https://github.com/airbnb/lunar/commit/a57f24b)), closes [#271](https://github.com/airbnb/lunar/issues/271)

**Note:** Version bump only for package @airbnb/lunar





### 2.53.1 - 2020-01-02

#### 🐞 Fixes

- **[Tooltip, Overlay]** Fix reflows on cDM, cDU, and render (#270) ([f7fa749](https://github.com/airbnb/lunar/commit/f7fa749)), closes [#270](https://github.com/airbnb/lunar/issues/270)

**Note:** Version bump only for package @airbnb/lunar





## 2.53.0 - 2019-12-19

#### 🚀 Updates

- Upgrade to Aesthetic v5. (#269) ([57e84e5](https://github.com/airbnb/lunar/commit/57e84e5)), closes [#269](https://github.com/airbnb/lunar/issues/269)

**Note:** Version bump only for package @airbnb/lunar





### 2.52.2 - 2019-12-16

#### 🎨 Styles

- Minor polish to dark mode. (#266) ([a00805e](https://github.com/airbnb/lunar/commit/a00805e)), closes [#266](https://github.com/airbnb/lunar/issues/266)

**Note:** Version bump only for package @airbnb/lunar





### 2.52.1 - 2019-12-13

#### 🐞 Fixes

- Fix proofreader crashing by memoizing form input. (#264) ([4272bb4](https://github.com/airbnb/lunar/commit/4272bb4)), closes [#264](https://github.com/airbnb/lunar/issues/264)

**Note:** Version bump only for package @airbnb/lunar





## 2.52.0 - 2019-12-12

#### 🚀 Updates

- Update dark mode! (#260) ([6996767](https://github.com/airbnb/lunar/commit/6996767)), closes [#260](https://github.com/airbnb/lunar/issues/260)

**Note:** Version bump only for package @airbnb/lunar





## 2.51.0 - 2019-12-09

#### 🚀 Updates

- **[Tooltip]** Reduce offscreen pattern layer size and render a11y content in Portal (#261) ([77642a3](https://github.com/airbnb/lunar/commit/77642a3)), closes [#261](https://github.com/airbnb/lunar/issues/261)

**Note:** Version bump only for package @airbnb/lunar





## 2.50.0 - 2019-12-07

#### 🚀 Updates

- **[DataTable]** Expose `overscanRowCount` prop (#262) ([b82a769](https://github.com/airbnb/lunar/commit/b82a769)), closes [#262](https://github.com/airbnb/lunar/issues/262)

**Note:** Version bump only for package @airbnb/lunar





### 2.49.1 - 2019-12-04

#### 🛠 Internals

- Update Happo to support light and dark themes. (#259) ([dbb347a](https://github.com/airbnb/lunar/commit/dbb347a)), closes [#259](https://github.com/airbnb/lunar/issues/259)

**Note:** Version bump only for package @airbnb/lunar





## 2.49.0 - 2019-11-25

#### 🚀 Updates

- Refactor form components to use hooks (#233) ([6f7df02](https://github.com/airbnb/lunar/commit/6f7df02)), closes [#233](https://github.com/airbnb/lunar/issues/233)

**Note:** Version bump only for package @airbnb/lunar





## 2.48.0 - 2019-11-22

#### 🚀 Updates

- **[ButtonGroup]** Add `stretched` button prop. (#256) ([53bb0dc](https://github.com/airbnb/lunar/commit/53bb0dc)), closes [#256](https://github.com/airbnb/lunar/issues/256)

**Note:** Version bump only for package @airbnb/lunar





## 2.47.0 - 2019-11-21

#### 🚀 Updates

- **[CardContent]** Make before/after images clickable. (#255) ([b20239e](https://github.com/airbnb/lunar/commit/b20239e)), closes [#255](https://github.com/airbnb/lunar/issues/255)

**Note:** Version bump only for package @airbnb/lunar





## 2.46.0 - 2019-11-21

#### 🚀 Updates

- **[Accordion]** Enable multiple items to be open at once. (#254) ([f8bc136](https://github.com/airbnb/lunar/commit/f8bc136)), closes [#254](https://github.com/airbnb/lunar/issues/254)

**Note:** Version bump only for package @airbnb/lunar





## 2.45.0 - 2019-11-20

#### 🚀 Updates

- **[Link]** Add `micro` sizing. (#253) ([7b60e73](https://github.com/airbnb/lunar/commit/7b60e73)), closes [#253](https://github.com/airbnb/lunar/issues/253)

**Note:** Version bump only for package @airbnb/lunar





## 2.44.0 - 2019-11-18

#### 🚀 Updates

- **[Tab]** Set background color for tab button to clear (#251) ([aeeca6a](https://github.com/airbnb/lunar/commit/aeeca6a)), closes [#251](https://github.com/airbnb/lunar/issues/251)

**Note:** Version bump only for package @airbnb/lunar





## 2.43.0 - 2019-11-15

#### 🚀 Updates

- **[List]** Add `middleAlign` support for `horizontal`. (#244) ([1b58963](https://github.com/airbnb/lunar/commit/1b58963)), closes [#244](https://github.com/airbnb/lunar/issues/244)
- **[Tab]** Set background color to clear (#247) ([f19dd84](https://github.com/airbnb/lunar/commit/f19dd84)), closes [#247](https://github.com/airbnb/lunar/issues/247)
- **[Table]** Rework borders and headers. (#246) ([e93c0f4](https://github.com/airbnb/lunar/commit/e93c0f4)), closes [#246](https://github.com/airbnb/lunar/issues/246)

**Note:** Version bump only for package @airbnb/lunar





## 2.42.0 - 2019-11-14

#### 🚀 Updates

- **[ButtonGroup]** Add `endAlign` support. (#242) ([4723c32](https://github.com/airbnb/lunar/commit/4723c32)), closes [#242](https://github.com/airbnb/lunar/issues/242)
- **[FormField]** Support small and large sizes. (#243) ([a461198](https://github.com/airbnb/lunar/commit/a461198)), closes [#243](https://github.com/airbnb/lunar/issues/243)

#### 🛠 Internals

- Migrate to Travis CI. (#239) ([2a62442](https://github.com/airbnb/lunar/commit/2a62442)), closes [#239](https://github.com/airbnb/lunar/issues/239)

**Note:** Version bump only for package @airbnb/lunar





## 2.41.0 - 2019-11-13

#### 🚀 Updates

- Update simple components to use `useStyles` instead of `withStyles`. (#236) ([761a801](https://github.com/airbnb/lunar/tree/master/packages/core/commit/761a801)), closes [#236](https://github.com/airbnb/lunar/tree/master/packages/core/issues/236)

**Note:** Version bump only for package @airbnb/lunar





### 2.40.2 - 2019-11-11

#### 🐞 Fixes

- **[AdaptiveGrid]** Hide/filter out empty grid items. (#238) ([82c5d23](https://github.com/airbnb/lunar/tree/master/packages/core/commit/82c5d23)), closes [#238](https://github.com/airbnb/lunar/tree/master/packages/core/issues/238)

**Note:** Version bump only for package @airbnb/lunar





### 2.40.1 - 2019-11-06

#### 🐞 Fixes

- **[DataTable]** Clear CellMeasureCache on sort change (#231) ([3333362](https://github.com/airbnb/lunar/tree/master/packages/core/commit/3333362)), closes [#231](https://github.com/airbnb/lunar/tree/master/packages/core/issues/231)

**Note:** Version bump only for package @airbnb/lunar





## 2.40.0 - 2019-11-05

#### 🚀 Updates

- **[MenuToggle]** Add muted menu option. (#230) ([c6675d1](https://github.com/airbnb/lunar/tree/master/packages/core/commit/c6675d1)), closes [#230](https://github.com/airbnb/lunar/tree/master/packages/core/issues/230)

**Note:** Version bump only for package @airbnb/lunar





## 2.39.0 - 2019-11-04

#### 🚀 Updates

- **[Table]** Add `noWrap` prop. (#224) ([9e815b9](https://github.com/airbnb/lunar/tree/master/packages/core/commit/9e815b9)), closes [#224](https://github.com/airbnb/lunar/tree/master/packages/core/issues/224)

**Note:** Version bump only for package @airbnb/lunar





### 2.38.2 - 2019-11-04

#### 🐞 Fixes

- Fix `Interweave` causing test flakiness (#228) ([f163bee](https://github.com/airbnb/lunar/tree/master/packages/core/commit/f163bee)), closes [#228](https://github.com/airbnb/lunar/tree/master/packages/core/issues/228)

**Note:** Version bump only for package @airbnb/lunar





### 2.38.1 - 2019-10-31

#### 📋 Misc

- Audit 2019-10-29 ([0e3e3da](https://github.com/airbnb/lunar/tree/master/packages/core/commit/0e3e3da))

#### 📦 Dependencies

- **[Interweave,Emojibase]** Update to latest major version. ([f3846b7](https://github.com/airbnb/lunar/tree/master/packages/core/commit/f3846b7))
- **[React]** Update to v16.11. ([07b80dc](https://github.com/airbnb/lunar/tree/master/packages/core/commit/07b80dc))

#### 🛠 Internals

- Fix lint and test failures. ([f2ccc7f](https://github.com/airbnb/lunar/tree/master/packages/core/commit/f2ccc7f))
- Integrate rut. ([1ca54a6](https://github.com/airbnb/lunar/tree/master/packages/core/commit/1ca54a6))

**Note:** Version bump only for package @airbnb/lunar





## 2.38.0 - 2019-10-30

#### 🚀 Updates

- **[DataTable]** Add `sortByValue` accessor + `sortByCacheKey` (#226) ([8568bcd](https://github.com/airbnb/lunar/tree/master/packages/core/commit/8568bcd)), closes [#226](https://github.com/airbnb/lunar/tree/master/packages/core/issues/226)

**Note:** Version bump only for package @airbnb/lunar





### 2.37.6 - 2019-10-29

#### 🐞 Fixes

- **[MessageItem]** Fix wrapping when author is loading. (#225) ([2e304bd](https://github.com/airbnb/lunar/tree/master/packages/core/commit/2e304bd)), closes [#225](https://github.com/airbnb/lunar/tree/master/packages/core/issues/225)

**Note:** Version bump only for package @airbnb/lunar





### 2.37.5 - 2019-10-28

#### 🐞 Fixes

- **[Alert]** Add word-break support for titles. (#223) ([52c1218](https://github.com/airbnb/lunar/tree/master/packages/core/commit/52c1218)), closes [#223](https://github.com/airbnb/lunar/tree/master/packages/core/issues/223)

**Note:** Version bump only for package @airbnb/lunar





### 2.37.4 - 2019-10-24

#### 🐞 Fixes

- **[DataTable]** Enable rightAlign functionality in columnMetadata. (#221) ([62a1a30](https://github.com/airbnb/lunar/tree/master/packages/core/commit/62a1a30)), closes [#221](https://github.com/airbnb/lunar/tree/master/packages/core/issues/221)

**Note:** Version bump only for package @airbnb/lunar





### 2.37.3 - 2019-10-23

#### 🎨 Styles

- **[Accordion, AccordionItem]** Remove accordion background color. (#218) ([8ec932f](https://github.com/airbnb/lunar/tree/master/packages/core/commit/8ec932f)), closes [#218](https://github.com/airbnb/lunar/tree/master/packages/core/issues/218)

**Note:** Version bump only for package @airbnb/lunar





### 2.37.2 - 2019-10-23

#### 🎨 Styles

- **[DataTable]** Adjust expanded row spacing. (#219) ([0279439](https://github.com/airbnb/lunar/tree/master/packages/core/commit/0279439)), closes [#219](https://github.com/airbnb/lunar/tree/master/packages/core/issues/219)

**Note:** Version bump only for package @airbnb/lunar





### 2.37.1 - 2019-10-23

#### 🐞 Fixes

- **[Dropdown]** Omit styles from props before passing into cx (#216) ([c905a25](https://github.com/airbnb/lunar/tree/master/packages/core/commit/c905a25)), closes [#216](https://github.com/airbnb/lunar/tree/master/packages/core/issues/216)

**Note:** Version bump only for package @airbnb/lunar





## 2.37.0 - 2019-10-16

#### 🚀 Updates

- **[DataTable]** Improve `CellMeasurerCache` invalidation (#215) ([807586e](https://github.com/airbnb/lunar/tree/master/packages/core/commit/807586e)), closes [#215](https://github.com/airbnb/lunar/tree/master/packages/core/issues/215)

**Note:** Version bump only for package @airbnb/lunar





## 2.36.0 - 2019-10-11

#### 🚀 Updates

- **[NotchedBox]** Update default background color to `color.accent.bg`. (#213) ([e094e8a](https://github.com/airbnb/lunar/tree/master/packages/core/commit/e094e8a)), closes [#213](https://github.com/airbnb/lunar/tree/master/packages/core/issues/213)

**Note:** Version bump only for package @airbnb/lunar





### 2.35.2 - 2019-10-11

#### 🐞 Fixes

- **[DataTable]** add back propagateRef prop (#212) ([fb18eb6](https://github.com/airbnb/lunar/tree/master/packages/core/commit/fb18eb6)), closes [#212](https://github.com/airbnb/lunar/tree/master/packages/core/issues/212)
- Rewrite stories to remove `@emotion/core` unintended import. (#210) ([5976e92](https://github.com/airbnb/lunar/tree/master/packages/core/commit/5976e92)), closes [#210](https://github.com/airbnb/lunar/tree/master/packages/core/issues/210)

**Note:** Version bump only for package @airbnb/lunar





### 2.35.1 - 2019-10-11

#### 🐞 Fixes

- **[DataTable]** Add back 100% width cell style. (#211) ([da3b8ec](https://github.com/airbnb/lunar/tree/master/packages/core/commit/da3b8ec)), closes [#211](https://github.com/airbnb/lunar/tree/master/packages/core/issues/211)

**Note:** Version bump only for package @airbnb/lunar





## 2.35.0 - 2019-10-10

#### 🚀 Updates

- **[DataTable]** Add `dynamicRowHeight` prop (#173) ([a6b8d55](https://github.com/airbnb/lunar/tree/master/packages/core/commit/a6b8d55)), closes [#173](https://github.com/airbnb/lunar/tree/master/packages/core/issues/173)

**Note:** Version bump only for package @airbnb/lunar





## 2.34.0 - 2019-10-10

#### 🚀 Updates

- **[Tabs]** Add `secondary` prop and styles. (#205) ([827e048](https://github.com/airbnb/lunar/tree/master/packages/core/commit/827e048)), closes [#205](https://github.com/airbnb/lunar/tree/master/packages/core/issues/205)

**Note:** Version bump only for package @airbnb/lunar





### 2.33.1 - 2019-10-10

#### 🐞 Fixes

- Fix `css` attribute being resolved in form props. ([0eb0c02](https://github.com/airbnb/lunar/tree/master/packages/core/commit/0eb0c02))

#### 📦 Dependencies

- Remove utility-types. ([8f9d0cc](https://github.com/airbnb/lunar/tree/master/packages/core/commit/8f9d0cc))
- Update [@types](https://github.com/types) to use star versions. ([96d2804](https://github.com/airbnb/lunar/tree/master/packages/core/commit/96d2804))
- **[React]** Update to v12. ([002d30c](https://github.com/airbnb/lunar/tree/master/packages/core/commit/002d30c))

**Note:** Version bump only for package @airbnb/lunar





## 2.33.0 - 2019-10-08

#### 🚀 Updates

- **[Lightbox]** Add Lightbox component (#183) ([c717697](https://github.com/airbnb/lunar/tree/master/packages/core/commit/c717697)), closes [#183](https://github.com/airbnb/lunar/tree/master/packages/core/issues/183)

**Note:** Version bump only for package @airbnb/lunar





### 2.32.1 - 2019-10-02

#### ⚙️ Types

- **[DataTable]** Update Renderer data shape to allow generics. (#203) ([01da59c](https://github.com/airbnb/lunar/tree/master/packages/core/commit/01da59c)), closes [#203](https://github.com/airbnb/lunar/tree/master/packages/core/issues/203)

**Note:** Version bump only for package @airbnb/lunar





## 2.32.0 - 2019-10-01

#### 🚀 Updates

- **[MessageItem]** Wrap long titles. (#202) ([549e8a1](https://github.com/airbnb/lunar/tree/master/packages/core/commit/549e8a1)), closes [#202](https://github.com/airbnb/lunar/tree/master/packages/core/issues/202)

**Note:** Version bump only for package @airbnb/lunar





### 2.31.1 - 2019-09-30

#### 🐞 Fixes

- **[Tabs]** Listen for `popstate` on window instead of document.  (#200) ([3b3f4fe](https://github.com/airbnb/lunar/tree/master/packages/core/commit/3b3f4fe)), closes [#200](https://github.com/airbnb/lunar/tree/master/packages/core/issues/200)

#### 🛠 Internals

- Migrate to Storybook v5.2. (#199) ([5b546fa](https://github.com/airbnb/lunar/tree/master/packages/core/commit/5b546fa)), closes [#199](https://github.com/airbnb/lunar/tree/master/packages/core/issues/199)

**Note:** Version bump only for package @airbnb/lunar





## 2.31.0 - 2019-09-30

#### 🚀 Updates

- **[Row, CardContent]** Add `minHeight` support. Add `small` image option. Rework CardContent before/after images and increase default size. (#201) ([cb5cfcf](https://github.com/airbnb/lunar/tree/master/packages/core/commit/cb5cfcf)), closes [#201](https://github.com/airbnb/lunar/tree/master/packages/core/issues/201)

**Note:** Version bump only for package @airbnb/lunar





### 2.30.0 - 2019-09-26

**Note:** Version bump only for package @airbnb/lunar





## 2.30.0-alpha.1 - 2019-09-26

#### 🚀 Updates

- **[List]** Add `gutter` prop for space between list items. (#198) ([0c7914c](https://github.com/airbnb/lunar/tree/master/packages/core/commit/0c7914c)), closes [#198](https://github.com/airbnb/lunar/tree/master/packages/core/issues/198)
- Migrate to Nimbus. Update to latest TypeScript, Babel, ESLint, and more. (#196) ([fe0962b](https://github.com/airbnb/lunar/tree/master/packages/core/commit/fe0962b)), closes [#196](https://github.com/airbnb/lunar/tree/master/packages/core/issues/196)

**Note:** Version bump only for package @airbnb/lunar





### 2.29.3 - 2019-09-24

#### 🐞 Fixes

- **[Tabs]** Persist active tab when back button is used. (#190) ([c3ff68f](https://github.com/airbnb/lunar/tree/master/packages/core/commit/c3ff68f)), closes [#190](https://github.com/airbnb/lunar/tree/master/packages/core/issues/190)

**Note:** Version bump only for package @airbnb/lunar





### 2.29.2 - 2019-09-24

#### 📦 Dependencies

- Update minor and patch versions. ([4afb2ee](https://github.com/airbnb/lunar/tree/master/packages/core/commit/4afb2ee))
- **[Aesthetic]** Update to latest. Bump Aphrodite. ([a73d9db](https://github.com/airbnb/lunar/tree/master/packages/core/commit/a73d9db))
- **[Interweave]** Update to v11.2. ([0f6cef0](https://github.com/airbnb/lunar/tree/master/packages/core/commit/0f6cef0))
- **[Luxon]** Update to v1.19. ([bab042d](https://github.com/airbnb/lunar/tree/master/packages/core/commit/bab042d))
- Update all types packages. ([b2ad9f5](https://github.com/airbnb/lunar/tree/master/packages/core/commit/b2ad9f5))
- **[React]** Test against v16.9. ([c3eafd4](https://github.com/airbnb/lunar/tree/master/packages/core/commit/c3eafd4))

**Note:** Version bump only for package @airbnb/lunar





### 2.29.1 - 2019-09-20

#### 📘 Docs

- **[AccordionItem]** Comment update. (#192) ([a6b639f](https://github.com/airbnb/lunar/tree/master/packages/core/commit/a6b639f)), closes [#192](https://github.com/airbnb/lunar/tree/master/packages/core/issues/192)

#### 📋 Misc

- **[AccordionItem]** Add test condition in order to bump release version (#191) ([1662057](https://github.com/airbnb/lunar/tree/master/packages/core/commit/1662057)), closes [#191](https://github.com/airbnb/lunar/tree/master/packages/core/issues/191)

**Note:** Version bump only for package @airbnb/lunar





## 2.29.0 - 2019-09-19

#### 🚀 Updates

- **[AccordionItem]** Add `noSpacing` support. (#189) ([a46dc81](https://github.com/airbnb/lunar/tree/master/packages/core/commit/a46dc81)), closes [#189](https://github.com/airbnb/lunar/tree/master/packages/core/issues/189)

#### 🐞 Fixes

- **[DataTable]** Add spacing to prevent clipping checkbox focus. (#186) ([ed2b890](https://github.com/airbnb/lunar/tree/master/packages/core/commit/ed2b890)), closes [#186](https://github.com/airbnb/lunar/tree/master/packages/core/issues/186)

**Note:** Version bump only for package @airbnb/lunar





## 2.28.0 - 2019-09-18

#### 🚀 Updates

- **[MenuToggle]** Add `disabled` support. (#188) ([26b3ff2](https://github.com/airbnb/lunar/tree/master/packages/core/commit/26b3ff2)), closes [#188](https://github.com/airbnb/lunar/tree/master/packages/core/issues/188)

**Note:** Version bump only for package @airbnb/lunar





### 2.27.4 - 2019-09-18

#### 🎨 Styles

- **[ImageViewer]** Move flexbox from outer to inner div. (#185) ([c3d2579](https://github.com/airbnb/lunar/tree/master/packages/core/commit/c3d2579)), closes [#185](https://github.com/airbnb/lunar/tree/master/packages/core/issues/185)

**Note:** Version bump only for package @airbnb/lunar





### 2.27.3 - 2019-09-16

#### 🐞 Fixes

- **[MessageItem]** Consistent title alignment when it is a button or not. (#184) ([b1c31a3](https://github.com/airbnb/lunar/tree/master/packages/core/commit/b1c31a3)), closes [#184](https://github.com/airbnb/lunar/tree/master/packages/core/issues/184)

**Note:** Version bump only for package @airbnb/lunar





### 2.27.2 - 2019-09-12

#### 🐞 Fixes

- **[RadioButton]** Center align radio with first line when `topAlign` is applied. (#182) ([9e60c2e](https://github.com/airbnb/lunar/tree/master/packages/core/commit/9e60c2e)), closes [#182](https://github.com/airbnb/lunar/tree/master/packages/core/issues/182)

**Note:** Version bump only for package @airbnb/lunar





### 2.27.1 - 2019-09-11

#### 🎨 Styles

- **[EmojiPicker]** Tighten up header spacing (#181) ([ff7b4ad](https://github.com/airbnb/lunar/tree/master/packages/core/commit/ff7b4ad)), closes [#181](https://github.com/airbnb/lunar/tree/master/packages/core/issues/181)

**Note:** Version bump only for package @airbnb/lunar





## 2.27.0 - 2019-09-11

#### 🚀 Updates

- **[RadioButton, CheckBox]** Add `compact` support to `button` option. Full width children. (#176) ([6d43cab](https://github.com/airbnb/lunar/tree/master/packages/core/commit/6d43cab)), closes [#176](https://github.com/airbnb/lunar/tree/master/packages/core/issues/176)

#### 🐞 Fixes

- **[Dropdown]** Remove prop type restrictions. (#180) ([08edeb0](https://github.com/airbnb/lunar/tree/master/packages/core/commit/08edeb0)), closes [#180](https://github.com/airbnb/lunar/tree/master/packages/core/issues/180)
- **[FormField]** fix CSS typo (#175) ([2c90107](https://github.com/airbnb/lunar/tree/master/packages/core/commit/2c90107)), closes [#175](https://github.com/airbnb/lunar/tree/master/packages/core/issues/175)

#### 📘 Docs

- **[Chip]** Add `active` story example. (#177) ([400a17f](https://github.com/airbnb/lunar/tree/master/packages/core/commit/400a17f)), closes [#177](https://github.com/airbnb/lunar/tree/master/packages/core/issues/177)

**Note:** Version bump only for package @airbnb/lunar





### 2.26.1 - 2019-08-28

#### 🐞 Fixes

- **[DataTable]** Subtract header height from `autoHeight` only when a header exists. ([8440761](https://github.com/airbnb/lunar/tree/master/packages/core/commit/8440761))

**Note:** Version bump only for package @airbnb/lunar





## 2.26.0 - 2019-08-28

#### 🚀 Updates

- **[DataTable]** Robust fix for flexbox container bug. (#172) ([e5e8d98](https://github.com/airbnb/lunar/tree/master/packages/core/commit/e5e8d98)), closes [#172](https://github.com/airbnb/lunar/tree/master/packages/core/issues/172)

**Note:** Version bump only for package @airbnb/lunar





## 2.25.0 - 2019-08-26

#### 🚀 Updates

- **[Image]** Add Image Component (#157) ([0abdb21](https://github.com/airbnb/lunar/tree/master/packages/core/commit/0abdb21)), closes [#157](https://github.com/airbnb/lunar/tree/master/packages/core/issues/157)

**Note:** Version bump only for package @airbnb/lunar





## 2.24.0 - 2019-08-26

#### 🚀 Updates

- **[DataTable]** Add `autoHeight` prop. (#144) ([5238278](https://github.com/airbnb/lunar/tree/master/packages/core/commit/5238278)), closes [#144](https://github.com/airbnb/lunar/tree/master/packages/core/issues/144)

**Note:** Version bump only for package @airbnb/lunar





## 2.23.0 - 2019-08-26

#### 🚀 Updates

- **[ProfilePhoto]** Add `fallbackImageSrc` to render if an image is broken. (#169) ([9bb8c41](https://github.com/airbnb/lunar/tree/master/packages/core/commit/9bb8c41)), closes [#169](https://github.com/airbnb/lunar/tree/master/packages/core/issues/169)

**Note:** Version bump only for package @airbnb/lunar





## 2.22.0 - 2019-08-20

#### 🚀 Updates

- **[DataTable]** Add `selectedRowsFirst` prop. (#128) ([6721666](https://github.com/airbnb/lunar/tree/master/packages/core/commit/6721666)), closes [#128](https://github.com/airbnb/lunar/tree/master/packages/core/issues/128)

**Note:** Version bump only for package @airbnb/lunar





## 2.21.0 - 2019-08-20

#### 🚀 Updates

- **[DataTable]** add prop for callback on row selection (#127) ([8415d3a](https://github.com/airbnb/lunar/tree/master/packages/core/commit/8415d3a)), closes [#127](https://github.com/airbnb/lunar/tree/master/packages/core/issues/127)
- **[DataTable]** Only render top border when there's a header. (#159) ([e8879f9](https://github.com/airbnb/lunar/tree/master/packages/core/commit/e8879f9)), closes [#159](https://github.com/airbnb/lunar/tree/master/packages/core/issues/159)
- **[DataTable]** Sort null and undefined last. (#156) ([7d8496a](https://github.com/airbnb/lunar/tree/master/packages/core/commit/7d8496a)), closes [#156](https://github.com/airbnb/lunar/tree/master/packages/core/issues/156)

**Note:** Version bump only for package @airbnb/lunar





## 2.20.0 - 2019-08-19

#### 🚀 Updates

- **[Copy, Chip, Breadcrumb, MenuItem]** Add data-tracking-name (#163) ([aad998a](https://github.com/airbnb/lunar/tree/master/packages/core/commit/aad998a)), closes [#163](https://github.com/airbnb/lunar/tree/master/packages/core/issues/163)

**Note:** Version bump only for package @airbnb/lunar





## 2.19.0 - 2019-08-16

#### 🚀 Updates

- Refine form types and fix date related logic. (#165) ([10b1c18](https://github.com/airbnb/lunar/tree/master/packages/core/commit/10b1c18)), closes [#165](https://github.com/airbnb/lunar/tree/master/packages/core/issues/165)

**Note:** Version bump only for package @airbnb/lunar





### 2.18.1 - 2019-08-15

#### 🐞 Fixes

- **[Cell]** Make children optional. (#164) ([55b2a94](https://github.com/airbnb/lunar/tree/master/packages/core/commit/55b2a94)), closes [#164](https://github.com/airbnb/lunar/tree/master/packages/core/issues/164)

**Note:** Version bump only for package @airbnb/lunar





## 2.18.0 - 2019-08-14

#### 🚀 Updates

- **[SortCarets]** Clean up styles. Add tests and story. (#160) ([6c95300](https://github.com/airbnb/lunar/tree/master/packages/core/commit/6c95300)), closes [#160](https://github.com/airbnb/lunar/tree/master/packages/core/issues/160)

#### 🐞 Fixes

- **[ImageViewer]** Fix icon path from src to lib. (#162) ([6e567bd](https://github.com/airbnb/lunar/tree/master/packages/core/commit/6e567bd)), closes [#162](https://github.com/airbnb/lunar/tree/master/packages/core/issues/162)

#### 🎨 Styles

- Override native agent font styles. (#161) ([5b4d892](https://github.com/airbnb/lunar/tree/master/packages/core/commit/5b4d892)), closes [#161](https://github.com/airbnb/lunar/tree/master/packages/core/issues/161)

**Note:** Version bump only for package @airbnb/lunar





## 2.17.0 - 2019-08-13

#### 🚀 Updates

- **[DataTable]** Add data type support to row renderers. Render rows/cells as JSX. (#154) ([8c881cd](https://github.com/airbnb/lunar/tree/master/packages/core/commit/8c881cd)), closes [#154](https://github.com/airbnb/lunar/tree/master/packages/core/issues/154)

**Note:** Version bump only for package @airbnb/lunar





## 2.16.0 - 2019-08-12

#### 🚀 Updates

- **[Copy, MenuItem]** Allow id to pass through to Link for tracking (#153) ([7dd44d1](https://github.com/airbnb/lunar/tree/master/packages/core/commit/7dd44d1)), closes [#153](https://github.com/airbnb/lunar/tree/master/packages/core/issues/153)

**Note:** Version bump only for package @airbnb/lunar





### 2.15.6 - 2019-08-08

#### 🐞 Fixes

- **[Modal]** Add padding to right of header to prevent close overlapping with long titles. (#150) ([8ab3450](https://github.com/airbnb/lunar/tree/master/packages/core/commit/8ab3450)), closes [#150](https://github.com/airbnb/lunar/tree/master/packages/core/issues/150)

**Note:** Version bump only for package @airbnb/lunar





### 2.15.5 - 2019-08-07

#### 📦 Dependencies

- **[ESLint]** Update plugins and fix some rule violations. ([694e540](https://github.com/airbnb/lunar/tree/master/packages/core/commit/694e540))
- Update minor and patch versions. ([f2abbb0](https://github.com/airbnb/lunar/tree/master/packages/core/commit/f2abbb0))

**Note:** Version bump only for package @airbnb/lunar





### 2.15.4 - 2019-08-06

#### 🐞 Fixes

- **[Proofreader]** Pull spurious, proofread-specific props from being passed to TextArea (#151) ([82211a5](https://github.com/airbnb/lunar/tree/master/packages/core/commit/82211a5)), closes [#151](https://github.com/airbnb/lunar/tree/master/packages/core/issues/151)

**Note:** Version bump only for package @airbnb/lunar





### 2.15.3 - 2019-08-06

#### 🐞 Fixes

- **[Rating]** Update height to be independent of line height. (#146) ([882f651](https://github.com/airbnb/lunar/tree/master/packages/core/commit/882f651)), closes [#146](https://github.com/airbnb/lunar/tree/master/packages/core/issues/146)

**Note:** Version bump only for package @airbnb/lunar





### 2.15.2 - 2019-08-05

#### 🛠 Internals

- Fix some common Happo issues. (#148) ([de0582b](https://github.com/airbnb/lunar/tree/master/packages/core/commit/de0582b)), closes [#148](https://github.com/airbnb/lunar/tree/master/packages/core/issues/148)

**Note:** Version bump only for package @airbnb/lunar





### 2.15.1 - 2019-08-05

#### 🎨 Styles

- **[Text]** Update line-height. (#147) ([4aa313c](https://github.com/airbnb/lunar/tree/master/packages/core/commit/4aa313c)), closes [#147](https://github.com/airbnb/lunar/tree/master/packages/core/issues/147)

**Note:** Version bump only for package @airbnb/lunar





## 2.15.0 - 2019-08-05

#### 🚀 Updates

- **[Proofreader]** Add `isRuleHighlighted` and `isRuleSecondary` props. Add `SecondaryMark` component. (#82) ([b8e5e3b](https://github.com/airbnb/lunar/tree/master/packages/core/commit/b8e5e3b)), closes [#82](https://github.com/airbnb/lunar/tree/master/packages/core/issues/82)

**Note:** Version bump only for package @airbnb/lunar





### 2.14.1 - 2019-08-02

#### 🛠 Internals

- Integrate Happo for visual diffs (#139) ([c556d1a](https://github.com/airbnb/lunar/tree/master/packages/core/commit/c556d1a)), closes [#139](https://github.com/airbnb/lunar/tree/master/packages/core/issues/139)

**Note:** Version bump only for package @airbnb/lunar





## 2.14.0 - 2019-08-01

#### 🚀 Updates

- **[Row]** Add inline prop. (#137) ([5e14045](https://github.com/airbnb/lunar/tree/master/packages/core/commit/5e14045)), closes [#137](https://github.com/airbnb/lunar/tree/master/packages/core/issues/137)

**Note:** Version bump only for package @airbnb/lunar





### 2.13.4 - 2019-07-29

#### 🎨 Styles

- **[Modal]** Increase modal body height when scrollable is set. (#141) ([41b46fd](https://github.com/airbnb/lunar/tree/master/packages/core/commit/41b46fd)), closes [#141](https://github.com/airbnb/lunar/tree/master/packages/core/issues/141)

**Note:** Version bump only for package @airbnb/lunar





### 2.13.3 - 2019-07-26

#### 🎨 Styles

- **[Text,StatusLabel]** Update base font styles. (#140) ([462dc3c](https://github.com/airbnb/lunar/tree/master/packages/core/commit/462dc3c)), closes [#140](https://github.com/airbnb/lunar/tree/master/packages/core/issues/140)

**Note:** Version bump only for package @airbnb/lunar





### 2.13.2 - 2019-07-26

#### 🎨 Styles

- **[Button]** Adjust minimum widths. (#118) ([6563f5a](https://github.com/airbnb/lunar/tree/master/packages/core/commit/6563f5a)), closes [#118](https://github.com/airbnb/lunar/tree/master/packages/core/issues/118)

**Note:** Version bump only for package @airbnb/lunar





### 2.13.1 - 2019-07-25

#### 🎨 Styles

- **[Button,Input,Autocomplete,Menu]** Normalize and standardize spacing (#113) ([9151b3e](https://github.com/airbnb/lunar/tree/master/packages/core/commit/9151b3e)), closes [#113](https://github.com/airbnb/lunar/tree/master/packages/core/issues/113)

**Note:** Version bump only for package @airbnb/lunar





## 2.13.0 - 2019-07-24

#### 🚀 Updates

- Refine and use explicit value types. Allow null and undefined default values. (#132) ([ecede51](https://github.com/airbnb/lunar/tree/master/packages/core/commit/ecede51)), closes [#132](https://github.com/airbnb/lunar/tree/master/packages/core/issues/132)

**Note:** Version bump only for package @airbnb/lunar





### 2.12.1 - 2019-07-24

#### 🐞 Fixes

- **[Tooltip]** Fix cannot read property getBoundingClientRect of null. (#133) ([196582b](https://github.com/airbnb/lunar/tree/master/packages/core/commit/196582b)), closes [#133](https://github.com/airbnb/lunar/tree/master/packages/core/issues/133)

**Note:** Version bump only for package @airbnb/lunar





## 2.12.0 - 2019-07-23

#### 🚀 Updates

- **[Divider]** Add short prop (#131) ([1f45ee9](https://github.com/airbnb/lunar/tree/master/packages/core/commit/1f45ee9)), closes [#131](https://github.com/airbnb/lunar/tree/master/packages/core/issues/131)

**Note:** Version bump only for package @airbnb/lunar





## 2.11.0 - 2019-07-23

#### 🚀 Updates

- **[ImageViewer]** Add new ImageViewer component with zoom, drag, and rotate features (#123) ([bb9bea2](https://github.com/airbnb/lunar/tree/master/packages/core/commit/bb9bea2)), closes [#123](https://github.com/airbnb/lunar/tree/master/packages/core/issues/123)

**Note:** Version bump only for package @airbnb/lunar





## 2.10.0 - 2019-07-22

#### 🚀 Updates

- **[Modal]** Add z-index to close button. (#130) ([16b7945](https://github.com/airbnb/lunar/tree/master/packages/core/commit/16b7945)), closes [#130](https://github.com/airbnb/lunar/tree/master/packages/core/issues/130)

**Note:** Version bump only for package @airbnb/lunar





## 2.9.0 - 2019-07-22

#### 🚀 Updates

- **[Translate]** Add key support. Make params and context optional. (#129) ([6338326](https://github.com/airbnb/lunar/tree/master/packages/core/commit/6338326)), closes [#129](https://github.com/airbnb/lunar/tree/master/packages/core/issues/129)

**Note:** Version bump only for package @airbnb/lunar





### 2.8.2 - 2019-07-16

#### 🛠 Internals

- Migrate to Yarn from NPM (#122) ([60c62c7](https://github.com/airbnb/lunar/tree/master/packages/core/commit/60c62c7)), closes [#122](https://github.com/airbnb/lunar/tree/master/packages/core/issues/122)

**Note:** Version bump only for package @airbnb/lunar





### 2.8.1 - 2019-07-16

#### 🛠 Internals

- Integrate `TestAesthetic` for easier class name testing (#117) ([8aa1019](https://github.com/airbnb/lunar/tree/master/packages/core/commit/8aa1019)), closes [#117](https://github.com/airbnb/lunar/tree/master/packages/core/issues/117)

**Note:** Version bump only for package @airbnb/lunar





## 2.8.0 - 2019-07-12

#### 🚀 Updates

- Use `React.memo` under the hood. Remove children/node prop type checks. (#120) ([30881c6](https://github.com/airbnb/lunar/tree/master/packages/core/commit/30881c6)), closes [#120](https://github.com/airbnb/lunar/tree/master/packages/core/issues/120)

**Note:** Version bump only for package @airbnb/lunar





## 2.7.0 - 2019-07-11

#### 🚀 Updates

- **[Card]** Add overflow prop for overflow visible. (#116) ([3da4af7](https://github.com/airbnb/lunar/tree/master/packages/core/commit/3da4af7)), closes [#116](https://github.com/airbnb/lunar/tree/master/packages/core/issues/116)

**Note:** Version bump only for package @airbnb/lunar





### 2.6.1 - 2019-07-11

#### 🐞 Fixes

- **[Proofreader]** Reduce calls in componentDidUpdate. (#119) ([1c50f86](https://github.com/airbnb/lunar/tree/master/packages/core/commit/1c50f86)), closes [#119](https://github.com/airbnb/lunar/tree/master/packages/core/issues/119)

**Note:** Version bump only for package @airbnb/lunar





## 2.6.0 - 2019-07-11

#### 🚀 Updates

- **[AppShell]** Add breadcrumbs support to AppContext (#115) ([1e19e41](https://github.com/airbnb/lunar/tree/master/packages/core/commit/1e19e41)), closes [#115](https://github.com/airbnb/lunar/tree/master/packages/core/issues/115)

**Note:** Version bump only for package @airbnb/lunar





## 2.5.0 - 2019-07-10

#### 🚀 Updates

- **[AccordionItem]** Change title to node instead of string (#114) ([09c0aac](https://github.com/airbnb/lunar/tree/master/packages/core/commit/09c0aac)), closes [#114](https://github.com/airbnb/lunar/tree/master/packages/core/issues/114)

**Note:** Version bump only for package @airbnb/lunar





## 2.4.0 - 2019-07-08

#### 🚀 Updates

- **[AdaptiveGrid]** Add new AdaptiveGrid (#88) ([f47bc07](https://github.com/airbnb/lunar/tree/master/packages/core/commit/f47bc07)), closes [#88](https://github.com/airbnb/lunar/tree/master/packages/core/issues/88)

**Note:** Version bump only for package @airbnb/lunar





### 2.3.1 - 2019-07-08

#### 🐞 Fixes

- Migrate to Aesthetic v4 official (#110) ([19e73dd](https://github.com/airbnb/lunar/tree/master/packages/core/commit/19e73dd)), closes [#110](https://github.com/airbnb/lunar/tree/master/packages/core/issues/110)

**Note:** Version bump only for package @airbnb/lunar





## 2.3.0 - 2019-07-01

#### 🚀 Updates

- **[Modal]** Update padding, widths, scrollable content, and layout. (#108) ([aa1d17b](https://github.com/airbnb/lunar/tree/master/packages/core/commit/aa1d17b)), closes [#108](https://github.com/airbnb/lunar/tree/master/packages/core/issues/108)

**Note:** Version bump only for package @airbnb/lunar





## 2.2.0 - 2019-06-28

#### 🚀 Updates

- **[Proofreader]** Handle delete replacement (#83) ([1994212](https://github.com/airbnb/lunar/tree/master/packages/core/commit/1994212)), closes [#83](https://github.com/airbnb/lunar/tree/master/packages/core/issues/83)

**Note:** Version bump only for package @airbnb/lunar





### 2.1.3 - 2019-06-27

#### 🎨 Styles

- **[CheckBox]** Add focus state (#99) ([5568178](https://github.com/airbnb/lunar/tree/master/packages/core/commit/5568178)), closes [#99](https://github.com/airbnb/lunar/tree/master/packages/core/issues/99)

**Note:** Version bump only for package @airbnb/lunar





### 2.1.2 - 2019-06-27

#### 🐞 Fixes

- **[BaseRadioButton]** Fix radio button focus state (#100) ([e415402](https://github.com/airbnb/lunar/tree/master/packages/core/commit/e415402)), closes [#100](https://github.com/airbnb/lunar/tree/master/packages/core/issues/100)

**Note:** Version bump only for package @airbnb/lunar





### 2.1.1 - 2019-06-27

#### 🐞 Fixes

- **[ToggleButtonController]** Fix compact to render small buttons. (#106) ([43d1408](https://github.com/airbnb/lunar/tree/master/packages/core/commit/43d1408)), closes [#106](https://github.com/airbnb/lunar/tree/master/packages/core/issues/106)

**Note:** Version bump only for package @airbnb/lunar





## 2.1.0 - 2019-06-26

#### 🚀 Updates

- **[TrackingBoundary]** data attribute on tracking-boundary tags (#103) ([8a09b65](https://github.com/airbnb/lunar/tree/master/packages/core/commit/8a09b65)), closes [#103](https://github.com/airbnb/lunar/tree/master/packages/core/issues/103)

**Note:** Version bump only for package @airbnb/lunar





# 2.0.0 - 2019-06-26

#### 💥 Breaking

- Migrate to Aesthetic v4 (#86) ([1b9b3f6](https://github.com/airbnb/lunar/tree/master/packages/core/commit/1b9b3f6)), closes [#86](https://github.com/airbnb/lunar/tree/master/packages/core/issues/86)
- **[Autocomplete,Multicomplete]** Rename onLoadOptions to onLoadItems. Add disableCache prop. (#91) ([830d4fe](https://github.com/airbnb/lunar/tree/master/packages/core/commit/830d4fe)), closes [#91](https://github.com/airbnb/lunar/tree/master/packages/core/issues/91)
- **[BorderedList]** Combine BorderedList into new List component. (#96) ([36eb02c](https://github.com/airbnb/lunar/tree/master/packages/core/commit/36eb02c)), closes [#96](https://github.com/airbnb/lunar/tree/master/packages/core/issues/96)
- **[Chip]** Add beforeIcon and afterIcon props. Remove icon prop. (#67) ([3d883ff](https://github.com/airbnb/lunar/tree/master/packages/core/commit/3d883ff)), closes [#67](https://github.com/airbnb/lunar/tree/master/packages/core/issues/67)
- **[Layouts]** Rework layout structuring. Add LayoutShell and Aside components. (#95) ([ed5c47a](https://github.com/airbnb/lunar/tree/master/packages/core/commit/ed5c47a)), closes [#95](https://github.com/airbnb/lunar/tree/master/packages/core/issues/95)
- **[Tabs]** Rework active state. Add small, beforeIcon, and afterIcon props. (#92) ([44c7aa9](https://github.com/airbnb/lunar/tree/master/packages/core/commit/44c7aa9)), closes [#92](https://github.com/airbnb/lunar/tree/master/packages/core/issues/92)
- Update peer dependencies to v2. ([536607d](https://github.com/airbnb/lunar/tree/master/packages/core/commit/536607d))

#### 🚀 Updates

- **[RTL]** Support RTL. Add DirectionProvider, DirectionalIcon, and ExpandableIcon components. (#94) ([153a66f](https://github.com/airbnb/lunar/tree/master/packages/core/commit/153a66f)), closes [#94](https://github.com/airbnb/lunar/tree/master/packages/core/issues/94)

#### 🐞 Fixes

- **[DataTable]** Correct sorting in ascending/descending order (#98) ([c1d6154](https://github.com/airbnb/lunar/tree/master/packages/core/commit/c1d6154)), closes [#98](https://github.com/airbnb/lunar/tree/master/packages/core/issues/98)
- **[StatusLabel]** Add transparent border for height consistency. (#101) ([b1d2e02](https://github.com/airbnb/lunar/tree/master/packages/core/commit/b1d2e02)), closes [#101](https://github.com/airbnb/lunar/tree/master/packages/core/issues/101)
- Add ExpandableIcon to icon name list. ([15bc361](https://github.com/airbnb/lunar/tree/master/packages/core/commit/15bc361))

#### 📦 Dependencies

- Update dev dependencies to latest. ([8802717](https://github.com/airbnb/lunar/tree/master/packages/core/commit/8802717))
- Update package dependencies to latest. ([1a07250](https://github.com/airbnb/lunar/tree/master/packages/core/commit/1a07250))

#### 🛠 Internals

- Update npmignore files. ([a2eda3f](https://github.com/airbnb/lunar/tree/master/packages/core/commit/a2eda3f))
- Update Storybook to v5.1 (#93) ([4ee8f83](https://github.com/airbnb/lunar/tree/master/packages/core/commit/4ee8f83)), closes [#93](https://github.com/airbnb/lunar/tree/master/packages/core/issues/93)

**Note:** Version bump only for package @airbnb/lunar





## 1.20.0 - 2019-06-12

#### 🚀 Updates

- **[Autocomplete]** Add `loadItemsOnFocus` functionality (#85) ([a706fbb](https://github.com/airbnb/lunar/commit/a706fbb)), closes [#85](https://github.com/airbnb/lunar/issues/85)

**Note:** Version bump only for package @airbnb/lunar





### 1.19.1 - 2019-06-11

#### 🐞 Fixes

- **[Pagination]** Fix page count if label is empty (#89) ([a3a1f55](https://github.com/airbnb/lunar/commit/a3a1f55)), closes [#89](https://github.com/airbnb/lunar/issues/89)

**Note:** Version bump only for package @airbnb/lunar





## 1.19.0 - 2019-06-11

#### 🚀 Updates

- **[Pagination]** Add arrow startAlign, centerAlign, and endAlign properties (#79) ([a0ac6dd](https://github.com/airbnb/lunar/commit/a0ac6dd)), closes [#79](https://github.com/airbnb/lunar/issues/79)

**Note:** Version bump only for package @airbnb/lunar





## 1.18.0 - 2019-06-07

#### 🚀 Updates

- **[withIcon]** Throw dev error if an ally prop is missing. (#84) ([75acae5](https://github.com/airbnb/lunar/commit/75acae5)), closes [#84](https://github.com/airbnb/lunar/issues/84)

**Note:** Version bump only for package @airbnb/lunar





## 1.17.0 - 2019-06-07

#### 🚀 Updates

- **[Pagination]** Add pageLabel prop (#78) ([0184ad5](https://github.com/airbnb/lunar/commit/0184ad5)), closes [#78](https://github.com/airbnb/lunar/issues/78)

**Note:** Version bump only for package @airbnb/lunar





## 1.16.0 - 2019-06-05

#### 🚀 Updates

- **[AppLoader]** Add errorTitle prop (#60) ([e9a3b66](https://github.com/airbnb/lunar/commit/e9a3b66)), closes [#60](https://github.com/airbnb/lunar/issues/60)

**Note:** Version bump only for package @airbnb/lunar





## 1.15.0 - 2019-06-05

#### 🚀 Updates

- **[ResponsiveImage]** Add contain prop (#77) ([ae4ff43](https://github.com/airbnb/lunar/commit/ae4ff43)), closes [#77](https://github.com/airbnb/lunar/issues/77)

**Note:** Version bump only for package @airbnb/lunar





## 1.14.0 - 2019-06-04

#### 🚀 Updates

- **[Proofreader]** Add background styling for important prop (#71) ([33e846f](https://github.com/airbnb/lunar/commit/33e846f)), closes [#71](https://github.com/airbnb/lunar/issues/71)

**Note:** Version bump only for package @airbnb/lunar





## 1.13.0 - 2019-06-04

#### 🚀 Updates

- **[DataTable]** Enable Filtering and Fix Rerender Bugs (#73) ([fd77068](https://github.com/airbnb/lunar/commit/fd77068)), closes [#73](https://github.com/airbnb/lunar/issues/73)

**Note:** Version bump only for package @airbnb/lunar





### 1.12.1 - 2019-05-31

#### 🎨 Styles

- Migrate globals and styles from O2  (#74) ([2568a52](https://github.com/airbnb/lunar/commit/2568a52)), closes [#74](https://github.com/airbnb/lunar/issues/74)

**Note:** Version bump only for package @airbnb/lunar





## 1.12.0 - 2019-05-31

#### 🚀 Updates

- **[withIcon]** Add new icon props to flip horizontally and/or vertically. (#72) ([84bda27](https://github.com/airbnb/lunar/commit/84bda27)), closes [#72](https://github.com/airbnb/lunar/issues/72)

**Note:** Version bump only for package @airbnb/lunar





## 1.11.0 - 2019-05-24

#### 🚀 Updates

- **[DataTable]** Column header casing (#68) ([f959bd4](https://github.com/airbnb/lunar/commit/f959bd4)), closes [#68](https://github.com/airbnb/lunar/issues/68)

**Note:** Version bump only for package @airbnb/lunar





### 1.10.1 - 2019-05-24

#### 📘 Docs

- **[DataTable]** update type descriptions (recovered) (#69) ([16a425e](https://github.com/airbnb/lunar/commit/16a425e)), closes [#69](https://github.com/airbnb/lunar/issues/69)

**Note:** Version bump only for package @airbnb/lunar





## 1.10.0 - 2019-05-23

#### 🚀 Updates

- **[Chip]** Add new compact and active props (#66) ([aefd828](https://github.com/airbnb/lunar/commit/aefd828)), closes [#66](https://github.com/airbnb/lunar/issues/66)

**Note:** Version bump only for package @airbnb/lunar





### 1.9.1 - 2019-05-21

#### 🐞 Fixes

- Remove Babel runtime setup (#65) ([a58ade2](https://github.com/airbnb/lunar/commit/a58ade2)), closes [#65](https://github.com/airbnb/lunar/issues/65)

**Note:** Version bump only for package @airbnb/lunar





## 1.9.0 - 2019-05-16

#### 🚀 Updates

- **[Title]** Add primary color option. (#61) ([dbb8b87](https://github.com/airbnb/lunar/commit/dbb8b87)), closes [#61](https://github.com/airbnb/lunar/issues/61)

**Note:** Version bump only for package @airbnb/lunar





### 1.8.1 - 2019-05-10

#### 📦 Dependencies

- Update Interweave to fix emoji and rendering issues. (#58) ([1e4ec0c](https://github.com/airbnb/lunar/commit/1e4ec0c)), closes [#58](https://github.com/airbnb/lunar/issues/58)

**Note:** Version bump only for package @airbnb/lunar





## 1.8.0 - 2019-05-08

#### 🚀 Updates

- **[DataTable]** Add showAllRows and propagateRef props (#57) ([567316e](https://github.com/airbnb/lunar/commit/567316e)), closes [#57](https://github.com/airbnb/lunar/issues/57)

**Note:** Version bump only for package @airbnb/lunar





## 1.7.0 - 2019-05-07

#### 🚀 Updates

- **[DataTable]** Add new dynamic data table (#36) ([85b9ab2](https://github.com/airbnb/lunar/commit/85b9ab2)), closes [#36](https://github.com/airbnb/lunar/issues/36)

**Note:** Version bump only for package @airbnb/lunar





## 1.6.0 - 2019-05-03

#### 🚀 Updates

- **[Sheet]** Add header bar (#20) ([138f690](https://github.com/airbnb/lunar/commit/138f690)), closes [#20](https://github.com/airbnb/lunar/issues/20)

**Note:** Version bump only for package @airbnb/lunar





## 1.5.0 - 2019-05-01

#### 🚀 Updates

- **[Text]** Add startAlign prop (#54) ([7c46ba6](https://github.com/airbnb/lunar/commit/7c46ba6)), closes [#54](https://github.com/airbnb/lunar/issues/54)

**Note:** Version bump only for package @airbnb/lunar





### 1.4.2 - 2019-05-01

#### 📦 Dependencies

- Update Interweave and Aesthetic. (#51) ([d36b547](https://github.com/airbnb/lunar/commit/d36b547)), closes [#51](https://github.com/airbnb/lunar/issues/51)

**Note:** Version bump only for package @airbnb/lunar





### 1.4.1 - 2019-05-01

#### 🐞 Fixes

- **[removeFocusOnMouseUp]** Remove focus from currentTarget. (#53) ([dd7d8ef](https://github.com/airbnb/lunar/commit/dd7d8ef)), closes [#53](https://github.com/airbnb/lunar/issues/53)

**Note:** Version bump only for package @airbnb/lunar





## 1.4.0 - 2019-04-29

#### 🚀 Updates

- **[MessageItem]** Add disable title translation prop. (#49) ([f5b8fff](https://github.com/airbnb/lunar/commit/f5b8fff)), closes [#49](https://github.com/airbnb/lunar/issues/49)

**Note:** Version bump only for package @airbnb/lunar





## 1.3.0 - 2019-04-26

#### 🚀 Updates

- **[HierarchyPicker]** Add new picker component (#50) ([029dbe4](https://github.com/airbnb/lunar/commit/029dbe4)), closes [#50](https://github.com/airbnb/lunar/issues/50)

**Note:** Version bump only for package @airbnb/lunar





### 1.2.1 - 2019-04-26

#### 🛠 Internals

- Add changelog to storybook. Fix link issues. (#47) ([5af9e54](https://github.com/airbnb/lunar/commit/5af9e54)), closes [#47](https://github.com/airbnb/lunar/issues/47)

**Note:** Version bump only for package @airbnb/lunar





## 1.2.0 - 2019-04-24

#### 🚀 Updates

- **[ButtonOrLink]** Rework rel prop logic (#41) ([aa6b686](https://github.com/airbnb/lunar/commit/aa6b686)), closes [#41](https://github.com/airbnb/lunar/issues/41)

**Note:** Version bump only for package @airbnb/lunar





## 1.1.5 - 2019-04-24

#### 🚀 Updates

- **[BorderedList]** Add BorderedList component. (#38) ([3cfc4ea](https://github.com/airbnb/lunar/commit/3cfc4ea)), closes [#38](https://github.com/airbnb/lunar/issues/38)

**Note:** Version bump only for package @airbnb/lunar





### 1.1.4 - 2019-04-24

#### 🐞 Fixes

- Remove package dev deps and bump root dev deps. (#44) ([4c26b33](https://github.com/airbnb/lunar/commit/4c26b33)), closes [#44](https://github.com/airbnb/lunar/issues/44)

**Note:** Version bump only for package @airbnb/lunar





### 1.1.3 - 2019-04-24

#### 🎨 Styles

- **[Input, Button, MenuItem]** Match padding to design specs (#22) ([6b110db](https://github.com/airbnb/lunar/commit/6b110db)), closes [#22](https://github.com/airbnb/lunar/issues/22)

**Note:** Version bump only for package @airbnb/lunar





## 1.1.2 - 2019-04-24

#### 🚀 Updates

- **[Grid]** Add horizontal alignment props. Fix offset % definition. (#35) ([7a81dd6](https://github.com/airbnb/lunar/commit/7a81dd6)), closes [#35](https://github.com/airbnb/lunar/issues/35)

**Note:** Version bump only for package @airbnb/lunar





### 1.1.1 - 2019-04-23

#### 🛠 Internals

- Switch to Storybook from Styleguidist (#19) ([129e5c7](https://github.com/airbnb/lunar/commit/129e5c7)), closes [#19](https://github.com/airbnb/lunar/issues/19)

**Note:** Version bump only for package @airbnb/lunar





# 1.0.0 - 2019-04-04

#### 🎉 Release

- Official first release!
