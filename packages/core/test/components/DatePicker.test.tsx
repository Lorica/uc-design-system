import React from 'react'
import DayPicker from 'react-day-picker'
import { shallowWithStyles } from '@lorica/uc-design-systemsign-systemsign-system-test-utils'
import DatePicker from '../../src/components/DatePicker'

describe('<DatePicker />', () => {
  it('renders a DayPicker', () => {
    const wrapper = shallowWithStyles(<DatePicker />, true)

    expect(wrapper.find(DayPicker)).toHaveLength(1)
  })

  it('renders a today button', () => {
    const wrapper = shallowWithStyles(<DatePicker todayButton="Today" />)

    expect(wrapper.find('button[children="Today"]')).toHaveLength(1)
  })

  it('renders a reset button in the navbar element', () => {
    const wrapper = shallowWithStyles(<DatePicker showResetButton />)

    expect(
      wrapper.find('navbarElement').dive().dive().find('button')
    ).toHaveLength(1)
  })
})
