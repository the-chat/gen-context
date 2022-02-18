import React, {createContext, useContext} from "react"
import {SimpleProviderWrapper} from "."
import {DoneProvider, ProviderWrapper, UseMyContext} from "./types"

const genContext = <T, A extends object = {}>(
  /** Component that should return provider (RealProvider) and children */
  ProviderWrapper: ProviderWrapper<T, A> = SimpleProviderWrapper,
  /** Default value for context and DoneProvider value */
  defaultValue: T = null
): [UseMyContext<T>, DoneProvider<T, A>] => {
  const Context = createContext(defaultValue)

  const useMyContext: UseMyContext<T> = <R extends T = T>() =>
    useContext(Context) as R

  /** Component that user uses as Provider */
  const DoneProvider: DoneProvider<T, A> = ({
    children,
    value = defaultValue,
    ...props
  }) => (
    <ProviderWrapper
      {...(props as A)}
      value={value}
      RealProvider={Context.Provider}
    >
      {children}
    </ProviderWrapper>
  )

  return [useMyContext, DoneProvider]
}

export default genContext
