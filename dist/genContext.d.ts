import { DoneProvider, ProviderWrapper, UseMyContext } from "./types";
declare const genContext: <T, A extends object = {}>(ProviderWrapper?: ProviderWrapper<T, A>, defaultValue?: T) => [UseMyContext<T>, DoneProvider<T, A>];
export default genContext;
