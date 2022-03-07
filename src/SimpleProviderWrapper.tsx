import React from "react"
import { BA, ProviderWrapperProps } from "./types"

const SimpleProviderWrapper = <V, A extends BA = BA>({
  RealProvider,
  children,
  value,
  ...props
}: ProviderWrapperProps<V | undefined, A>) => (
  <RealProvider {...props} value={value}>
    {children}
  </RealProvider>
)

export { SimpleProviderWrapper }
