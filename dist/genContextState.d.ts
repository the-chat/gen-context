import { State } from "@the-chat/types";
declare const genStateContext: <T>(defaultValue?: T) => [import("./types").UseMyContext<State<T>>, import("./types").DoneProvider<State<T>, {}>];
export { genStateContext };
