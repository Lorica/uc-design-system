import React from 'react'
import { mount } from 'enzyme'
import BaseCheckBoxController from '@usercentric/uc-design-system/lib/components/CheckBoxController'
import CheckBoxController from '../../../src/components/Form/CheckBoxController'
import { toString } from '../../../src/helpers'
import { Context } from '../../../src/types'
import { WrappingFormComponent, createFormContext } from '../../utils'

describe('<CheckBoxController />', () => {
  let context: Context

  beforeEach(() => {
    context = createFormContext()
  })

  type Value = 'foo' | 'bar' | 'baz'

  it('connects to the form', () => {
    const wrapper = mount(
      <CheckBoxController<Value>
        label="Label"
        name="foo"
        defaultValue={['bar']}
        validator={() => { }}
      >
        {(CB) => (
          <div>
            <CB value="foo" label="Foo" />
            <CB value="bar" label="Bar" />
            <CB value="baz" label="Baz" />
          </div>
        )}
      </CheckBoxController>,
      {
        wrappingComponent: WrappingFormComponent,
        wrappingComponentProps: { context },
      }
    )

    expect(context.register).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'foo',
        defaultValue: ['bar'],
        parse: toString,
      }),
      expect.anything()
    )

    expect(wrapper.find(BaseCheckBoxController)).toHaveLength(1)
  })

  it('passes value as an array', () => {
    const wrapper = mount(
      <CheckBoxController<Value>
        label="Label"
        name="foo"
        defaultValue={['bar']}
        validator={() => { }}
      >
        {(CB) => (
          <div>
            <CB value="foo" label="Foo" />
            <CB value="bar" label="Bar" />
            <CB value="baz" label="Baz" />
          </div>
        )}
      </CheckBoxController>,
      {
        wrappingComponent: WrappingFormComponent,
        wrappingComponentProps: { context },
      }
    )

    expect(wrapper.find(BaseCheckBoxController).prop('value')).toEqual(['bar'])
  })
})
