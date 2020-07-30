import React from 'react'
import useStyles from '@lorica/uc-design-system/lib/hooks/useStyles'
import { footerTipStyleSheet } from '../../styles'

export type TipProps = {
  children: NonNullable<React.ReactNode>
}

export default function Tip({ children }: TipProps) {
  const [styles, cx] = useStyles(footerTipStyleSheet)

  return <span className={cx(styles.tip)}>{children}</span>
}
