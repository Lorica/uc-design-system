import React from 'react'
import Text from '@usercentric/uc-design-system/src/components/Text'
import Spacing from '@usercentric/uc-design-system/src/components/Spacing'
import { getRowColor } from '@usercentric/uc-design-system/src/components/DataTable/helpers'

export default function ColspanRenderer({ row, zebra, theme }) {
  const { rowData, rowIndex } = row
  const { data, metadata } = rowData
  const color = getRowColor(rowData, rowIndex, zebra, theme)
  const colSpanStyle = {
    width: '100%',
    background: color,
    zIndex: 100,
    position: 'absolute',
    height: '100%',
    left: 0,
    top: 0,
    alignItems: 'center',
    display: 'flex',
  }

  return (
    metadata.colSpanKey && (
      <div style={colSpanStyle}>
        <Spacing left={2}>
          <Text>{data[metadata.colSpanKey]}</Text>
        </Spacing>
      </div>
    )
  )
}
