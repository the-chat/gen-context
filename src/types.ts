import { ComponentType, PropsWithChildren, Provider } from "react"
// TODO?: TYPES WITH VALUE VALUE
// TODO?: CHILDREN: UNDEFINED SHOULD BE NOT ALLOWED

// A - Additional props,BA - base A

export type BA = Record<string, unknown> & {
  [K in "value" | "children"]?: never
}

export type Value<V> = { value?: V }

export type UseMyContext<T> = <R extends T = T>() => R

export type ProviderProps<V, A extends BA = BA> = PropsWithChildren<
  Value<V> & Omit<A, "children">
>

export type ProviderWrapperProps<V, A extends BA = BA> = ProviderProps<V, A> & {
  RealProvider: Provider<V>
}

export type ProviderWrapper<V, A extends BA = BA> = ComponentType<
  ProviderWrapperProps<V, A>
>

export type DoneProvider<V, A extends BA = BA> = ComponentType<
  ProviderProps<V, A>
>
