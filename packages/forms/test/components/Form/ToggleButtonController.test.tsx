import React from 'react';
import { mount } from 'enzyme';
import BaseToggleButtonController from '@usercentric/uc-design-system/lib/components/ToggleButtonController';
import ToggleButtonController from '../../../src/components/Form/ToggleButtonController';
import { toString } from '../../../src/helpers';
import { Context } from '../../../src/types';
import { WrappingFormComponent, createFormContext } from '../../utils';

describe('<ToggleButtonController />', () => {
  let context: Context;

  beforeEach(() => {
    context = createFormContext();
  });

  type Value = 'foo' | 'bar' | 'baz';

  it('connects to the form', () => {
    const wrapper = mount(
      <ToggleButtonController<Value>
        label="Label"
        name="foo"
        defaultValue="bar"
        validator={() => {}}
      >
        {(ProxyButton) => (
          <div>
            <ProxyButton value="foo">Foo</ProxyButton>
            <ProxyButton value="bar">Bar</ProxyButton>
            <ProxyButton value="baz">Baz</ProxyButton>
          </div>
        )}
      </ToggleButtonController>,
      {
        wrappingComponent: WrappingFormComponent,
        wrappingComponentProps: { context },
      },
    );

    expect(context.register).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'foo',
        defaultValue: 'bar',
        parse: toString,
      }),
      expect.anything(),
    );

    expect(wrapper.find(BaseToggleButtonController)).toHaveLength(1);
  });
});
