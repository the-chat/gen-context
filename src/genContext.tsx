import React, {
  ComponentType,
  createContext,
  FC,
  PropsWithChildren,
  Provider,
  useContext,
} from "react"

type Value<T> = {value?: T}

type UseMyContext<T> = <R extends T = T>() => R

type ProviderWrapperProps<T> = PropsWithChildren<
  Value<T> & {RealProvider: Provider<T>}
>
type ProviderWrapper<T> = ComponentType<ProviderWrapperProps<T>>
type DoneProvider<T> = FC<Value<T>>

const genContext = <T,>(
  ProviderWrapper: ProviderWrapper<T>,
  defaultValue: T = null
): [UseMyContext<T>, DoneProvider<T>] => {
  const Context = createContext(defaultValue)

  const useMyContext: UseMyContext<T> = <R extends T = T>() =>
    useContext(Context) as R

  const DoneProvider: DoneProvider<T> = ({children, value = defaultValue}) => (
    <ProviderWrapper value={value} RealProvider={Context.Provider}>
      {children}
    </ProviderWrapper>
  )

  return [useMyContext, DoneProvider]
}

export type {ProviderWrapperProps}
export default genContext
