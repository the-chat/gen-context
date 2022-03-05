import React from "react"
import { DA, ProviderWrapperProps } from "./types"

const SimpleProviderWrapper = <V, A extends DA = {}>({
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
