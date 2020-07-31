/* eslint-disable react/jsx-handler-names */

import React, { useContext } from 'react'
import useStyles, {
  StyleSheet,
} from '@usercentric/uc-design-system/lib/hooks/useStyles'
import Toast from '@usercentric/uc-design-system/lib/components/Toast'
import { Z_INDEX_TOAST } from '@usercentric/uc-design-system/lib/constants'
import PopToast from './PopToast'
import AppContext from '../AppContext'

export { PopToast }

export const styleSheet: StyleSheet = ({ unit }) => ({
  toasts: {
    position: 'fixed',
    bottom: unit * 1.5,
    left: '50%',
    transform: 'translate(-50%, 0)',
    width: 500,
    // Higher than modals
    zIndex: Z_INDEX_TOAST,
  },
})

export default function Toasts() {
  const context = useContext(AppContext)
  const [styles, cx] = useStyles(styleSheet)

  if (!context || context.toasts.length === 0) {
    return null
  }

  const toasts = [...context.toasts]

  toasts.reverse()

  return (
    <div className={cx(styles.toasts)}>
      {toasts.map((toast) => (
        <Toast
          {...toast.props}
          key={toast.id}
          id={toast.id}
          message={toast.message}
          onRemove={context.removeToast}
        />
      ))}
    </div>
  )
}
