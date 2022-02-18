/// <reference types="react" />
import { ProviderWrapperProps } from "./types";
declare const SimpleProviderWrapper: <T>({ RealProvider, children, value, ...props }: ProviderWrapperProps<T, {}>) => JSX.Element;
export { SimpleProviderWrapper };
