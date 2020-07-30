import React from 'react'
import BaseMenuRow, {
  MenuRowProps,
} from '@lorica/uc-design-system/lib/components/Menu/Row'
import proxyComponent from '@lorica/uc-design-system/lib/utils/proxyComponent'

export default proxyComponent(BaseMenuRow, ({ children }: MenuRowProps) => (
  <BaseMenuRow spacious>{children}</BaseMenuRow>
))
