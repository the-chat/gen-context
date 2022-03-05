import React, { createContext, useContext } from "react"
import { SimpleProviderWrapper } from "./SimpleProviderWrapper"
import { DoneProvider, BA, DA, ProviderWrapper, UseMyContext } from "./types"

const genContext = <V, A extends BA = DA>(
  /** Component that should return provider (RealProvider) and children */
  ProviderWrapper: ProviderWrapper<V | undefined, A> = SimpleProviderWrapper,
  /** Default value for context and DoneProvider value */
  defaultValue?: V
): [UseMyContext<V>, DoneProvider<V, A>] => {
  const Context = createContext(defaultValue)

  const useMyContext: UseMyContext<V> = <R extends V = V>() =>
    useContext(Context) as R

  /** Component that user uses as Provider */
  const DoneProvider: DoneProvider<V, A> = ({
    children,
    value = defaultValue,
    ...props
  }) => (
    <ProviderWrapper
      {...(props as A)}
      {...(value && { value })}
      RealProvider={Context.Provider}
    >
      {children}
    </ProviderWrapper>
  )

  return [useMyContext, DoneProvider]
}

export default genContext
