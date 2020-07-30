import React from 'react'
import Image from '.'
import ucDesignSystem from ':storybook/images/lunar-logo.png'

export default {
  title: 'Core/Image',
  parameters: {
    inspectComponents: [Image],
    happo: { delay: 500 },
  },
}

export function defaultStory() {
  return <Image src={ucDesignSystem} alt="Something descriptive" height={600} />
}

defaultStory.story = {
  name: 'Default.',
}

export function backgroundStory() {
  return (
    <Image
      background
      src={ucDesignSystem}
      alt="Something descriptive"
      height={600}
    />
  )
}

backgroundStory.story = {
  name: 'Background.',
}

export function backdropStory() {
  return (
    <Image
      background
      contain
      backdrop
      src={ucDesignSystem}
      alt="Something descriptive"
      height={600}
    />
  )
}

backdropStory.story = {
  name: 'Background with backdrop.',
}

export function backgroundContain() {
  return (
    <Image
      background
      contain
      src={ucDesignSystem}
      alt="Something descriptive"
      height={600}
    />
  )
}

backgroundContain.story = {
  name: 'Background contain.',
}

export function noBackgroundStillContainDefaultBorderRadius() {
  return (
    <Image
      contain
      src={ucDesignSystem}
      alt="Something descriptive"
      height={600}
    />
  )
}

noBackgroundStillContainDefaultBorderRadius.story = {
  name: 'No background, still contain, default border radius.',
}

export function withCustomBorderRadius() {
  return (
    <Image
      contain
      borderRadius={25}
      src={ucDesignSystem}
      alt="Something descriptive"
      height={600}
    />
  )
}

withCustomBorderRadius.story = {
  name: 'With custom border radius.',
}

export function withZeroBorderRadius() {
  return (
    <Image
      contain
      borderRadius={0}
      src={ucDesignSystem}
      alt="Something descriptive"
      height={600}
    />
  )
}

withZeroBorderRadius.story = {
  name: 'With zero border radius.',
}

export function backgroundAlignTop() {
  return (
    <Image
      alignTop
      background
      src={ucDesignSystem}
      alt="Something descriptive"
      height={600}
    />
  )
}

backgroundAlignTop.story = {
  name: 'Background align top.',
}

export function backgroundAlignBottom() {
  return (
    <Image
      alignBottom
      background
      src={ucDesignSystem}
      alt="Something descriptive"
      height={600}
    />
  )
}

backgroundAlignBottom.story = {
  name: 'Background align bottom.',
}
