import React from 'react'
import { shallowWithStyles } from '@usercentric/uc-design-system-test-utils'
import FormInputButton from '../../../src/components/private/FormInputButton'

describe('<FormInputButton />', () => {
  it('renders', () => {
    const wrapper = shallowWithStyles(<FormInputButton>Child</FormInputButton>)

    expect(wrapper.isEmptyRender()).toBe(false)
  })
})
