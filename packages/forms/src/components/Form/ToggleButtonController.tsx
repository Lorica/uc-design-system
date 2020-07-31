import React from 'react'
import ToggleButtonController, {
  ToggleButtonControllerProps,
} from '@usercentric/uc-design-system/lib/components/ToggleButtonController'
import useFormField, { FieldProps } from '../../hooks/useFormField'
import { toString } from '../../helpers'

/** `ToggleButtonController` automatically connected to the parent `Form`.  */
export default function FormToggleButtonController<T extends string = string>(
  props: FieldProps<T, ToggleButtonControllerProps<T>>
) {
  const fieldProps = useFormField(props, {
    initialValue: '' as T,
    parse: toString,
  })

  return <ToggleButtonController<T> {...fieldProps} />
}
