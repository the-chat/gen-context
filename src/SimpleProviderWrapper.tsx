import React from "react"
import {ProviderWrapperProps} from "./types"

const SimpleProviderWrapper = <T,>({
  RealProvider,
  children,
  value,
  ...props
}: ProviderWrapperProps<T>) => (
  <RealProvider {...props} value={value}>
    {children}
  </RealProvider>
)

export {SimpleProviderWrapper}
