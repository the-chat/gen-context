import React from "react"
import {ProviderWrapperProps} from "./genContext"

const SimpleProviderWrapper = <T,>({
  RealProvider,
  children,
  value,
}: ProviderWrapperProps<T>) => (
  <RealProvider value={value}>{children}</RealProvider>
)

export {SimpleProviderWrapper}
