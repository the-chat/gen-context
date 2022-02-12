import {ProviderWrapperProps} from "./genContext"
import React from "react"

const ProviderWrapperWithValueProp = <T,>({
  children,
  value,
  RealProvider,
}: ProviderWrapperProps<T>) => (
  <RealProvider value={value}>{children}</RealProvider>
)

export {ProviderWrapperWithValueProp}
