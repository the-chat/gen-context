import { ComponentType, FC, PropsWithChildren, Provider } from "react";
declare type Value<T> = {
    value?: T;
};
declare type UseMyContext<T> = <R extends T = T>() => R;
declare type ProviderWrapperProps<T> = PropsWithChildren<Value<T> & {
    RealProvider: Provider<T>;
}>;
declare type ProviderWrapper<T> = ComponentType<ProviderWrapperProps<T>>;
declare type DoneProvider<T> = FC<Value<T>>;
declare const genContext: <T>(ProviderWrapper: ProviderWrapper<T>, defaultValue?: T) => [UseMyContext<T>, DoneProvider<T>];
export type { ProviderWrapperProps };
export default genContext;
