import { ComponentType, PropsWithChildren, Provider } from "react"

// A - Additional props,BA - base A, DA - default A

export type BA = Omit<Record<string, undefined>, "value">
export type DA = Record<string, never>

export type Value<V> = { value?: V }

export type UseMyContext<T> = <R extends T = T>() => R

type ProviderProps<V, A extends BA = DA> = Value<V> & A

export type ProviderWrapperProps<V, A extends BA = DA> = PropsWithChildren<
  ProviderProps<V, A> & { RealProvider: Provider<V> }
>

export type ProviderWrapper<V, A extends BA = DA> = ComponentType<
  ProviderWrapperProps<V, A>
>

export type DoneProvider<V, A extends BA = DA> = ComponentType<
  ProviderProps<V, A>
>
