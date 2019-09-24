import React, { useContext } from 'react';
import { FormState } from 'final-form';
import { Omit } from 'utility-types';
import BaseFormActions, { Props as BaseProps } from '@airbnb/lunar/lib/components/FormActions';
import FormContext from '../FormContext';

export type Props = Omit<BaseProps, 'disabled' | 'processing'>;

/** `FormActions` automatically connected to the parent `Form`. */
export default function FormActions(props: Props) {
  const context = useContext(FormContext);

  if (context) {
    const { submitting, valid }: FormState<unknown> = context.getState();

    Object.assign(props, {
      disabled: !valid,
      processing: submitting,
    });
  }

  return <BaseFormActions {...props} />;
}
