import { ComponentType, FC, PropsWithChildren, Provider } from "react";
export declare type Value<T> = {
    value?: T;
};
export declare type UseMyContext<T> = <R extends T = T>() => R;
export declare type ProviderWrapperProps<T, A extends object = {}> = PropsWithChildren<Value<T> & {
    RealProvider: Provider<T>;
} & A>;
export declare type ProviderWrapper<T, A extends object = {}> = ComponentType<ProviderWrapperProps<T, A>>;
export declare type DoneProvider<T, A extends object = {}> = FC<Value<T> & A>;
