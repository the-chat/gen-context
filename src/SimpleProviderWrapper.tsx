import React from "react"
import { BA, DA, ProviderWrapperProps } from "./types"

const SimpleProviderWrapper = <V, A extends BA = DA>({
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
