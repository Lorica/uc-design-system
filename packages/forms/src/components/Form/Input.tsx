import React from 'react'
import Input, {
  InputProps,
} from '@usercentric/uc-design-system/lib/components/Input'
import { toString } from '../../helpers'
import useFormField, { FieldProps } from '../../hooks/useFormField'

/** `Input` automatically connected to the parent `Form`.  */
export default function FormInput(props: FieldProps<string, InputProps>) {
  const fieldProps = useFormField(props, {
    initialValue: '',
    parse: toString,
  })

  return <Input {...fieldProps} />
}
