import {ComponentType, FC, PropsWithChildren, Provider} from "react"

export type Value<T> = {value?: T}

export type UseMyContext<T> = <R extends T = T>() => R

export type ProviderWrapperProps<T, A extends object = {}> = PropsWithChildren<
  Value<T> & {RealProvider: Provider<T>} & A
>

export type ProviderWrapper<T, A extends object = {}> = ComponentType<
  ProviderWrapperProps<T, A>
>

export type DoneProvider<T, A extends object = {}> = FC<Value<T> & A>
