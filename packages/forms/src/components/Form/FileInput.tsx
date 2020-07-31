import React from 'react';
import FileInput, { FileInputProps } from '@usercentric/uc-design-system/lib/components/FileInput';
import useFormField, { FieldProps } from '../../hooks/useFormField';

/** `FileInput` automatically connected to the parent `Form`.  */
export default function FormFileInput(props: FieldProps<File[], FileInputProps>) {
  const fieldProps = useFormField(props, {
    initialValue: [],
    ignoreValue: true,
  });

  return <FileInput {...fieldProps} />;
}
