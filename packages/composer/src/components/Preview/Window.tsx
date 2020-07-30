import React from 'react'
import useStyles from '@lorica/uc-design-system/lib/hooks/useStyles'
import Button from '@lorica/uc-design-system/lib/components/Button'
import T from '@lorica/uc-design-system/lib/components/Translate'
import Row from '@lorica/uc-design-system/lib/components/Row'
import { previewWindowStyleSheet } from '../../styles'

export type WindowProps = {
  children: NonNullable<React.ReactNode>
  controls?: React.ReactNode
  onConfirm: () => void
}

export default function Window({ children, controls, onConfirm }: WindowProps) {
  const [styles, cx] = useStyles(previewWindowStyleSheet)

  return (
    <>
      <div className={cx(styles.preview)}>{children}</div>

      <footer className={cx(styles.footer)}>
        <Row
          middleAlign
          after={
            <Button small onClick={onConfirm}>
              <T phrase="Send" k="uc-design-system.composer.labels.send" />
            </Button>
          }
        >
          {controls ?? <div />}
        </Row>
      </footer>
    </>
  )
}
