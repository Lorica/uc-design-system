import React from 'react';
import Range, { RangeProps } from '@usercentric/uc-design-system/lib/components/Range';
import { toNumber } from '../../helpers';
import useFormField, { FieldProps } from '../../hooks/useFormField';

/** `Range` automatically connected to the parent `Form`.  */
export default function FormRange(props: FieldProps<number, RangeProps>) {
  const fieldProps = useFormField(props, {
    initialValue: toNumber(props.value) || (toNumber(props.max) - toNumber(props.min)) / 2,
    parse: toNumber,
  });

  return <Range {...fieldProps} />;
}
