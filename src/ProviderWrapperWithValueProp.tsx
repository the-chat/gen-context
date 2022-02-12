import {ProviderWrapperProps} from "./genContext"

const ProviderWrapperWithValueProp = <T,>({
  children,
  value,
  RealProvider,
}: ProviderWrapperProps<T>) => (
  <RealProvider value={value}>{children}</RealProvider>
)

export {ProviderWrapperWithValueProp}
