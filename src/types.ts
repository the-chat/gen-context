import { ComponentType, FC, PropsWithChildren, Provider } from "react"

// A - Additional props, DA - default A

export type DA = Omit<{ [key: string]: unknown }, "value">

export type Value<V> = { value?: V }

export type UseMyContext<T> = <R extends T = T>() => R

type ProviderProps<V, A extends DA = {}> = Value<V> & A

export type ProviderWrapperProps<V, A extends DA = {}> = PropsWithChildren<
  ProviderProps<V, A> & { RealProvider: Provider<V> }
>

export type ProviderWrapper<V, A extends DA = {}> = ComponentType<
  ProviderWrapperProps<V, A>
>

export type DoneProvider<V, A extends DA = {}> = ComponentType<
  ProviderProps<V, A>
>
