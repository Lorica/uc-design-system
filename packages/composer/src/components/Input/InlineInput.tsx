import React, { useState, useContext } from 'react'
import T from '@lorica/uc-design-system/lib/components/Translate'
import IconCreate from '@lorica/uc-design-system-icons/lib/interface/IconCreate'
import IconCloseAlt from '@lorica/uc-design-system-icons/lib/interface/IconCloseAlt'
import Input from '@lorica/uc-design-system/lib/components/Input'
import {
  Prefix,
  Suffix,
} from '@lorica/uc-design-system/lib/components/FormField'
import Row from '@lorica/uc-design-system/lib/components/Row'
import Text from '@lorica/uc-design-system/lib/components/Text'
import Spacing from '@lorica/uc-design-system/lib/components/Spacing'
import IconButton from '@lorica/uc-design-system/lib/components/IconButton'
import ComposerContext from '../../contexts/ComposerContext'

export type InlineInputProps = {
  label: NonNullable<React.ReactNode>
  name: string
  value?: string
}

export default function InlineInput({ label, name, value }: InlineInputProps) {
  const context = useContext(ComposerContext)
  const [editing, setEditing] = useState(false)

  // Elements
  const textLabel = (
    <Text inline small muted bold>
      {label}
    </Text>
  )
  const editLabel = T.phrase(
    'uc-design-system.composer.labels.editField',
    'Edit %{name} field',
    { name }
  )
  const editButton = (
    <IconButton onClick={() => setEditing(!editing)}>
      {editing ? (
        <IconCloseAlt accessibilityLabel={editLabel} size="1.25em" />
      ) : (
        <IconCreate accessibilityLabel={editLabel} size="1em" />
      )}
    </IconButton>
  )

  if (editing) {
    return (
      <Spacing bottom={0.5}>
        <Input
          small
          hideLabel
          label={label}
          name={name}
          prefix={<Prefix small>{textLabel}</Prefix>}
          suffix={<Suffix small>{editButton}</Suffix>}
          value={value}
          onChange={(nextValue) => {
            context.setData(name, nextValue)
          }}
        />
      </Spacing>
    )
  }

  return (
    <Spacing horizontal={1}>
      <Row middleAlign after={editButton}>
        <Spacing vertical={0.5}>
          <Text small>
            {textLabel} {value}
          </Text>
        </Spacing>
      </Row>
    </Spacing>
  )
}
