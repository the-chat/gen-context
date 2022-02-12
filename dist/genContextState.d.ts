import React from "react";
import { State } from "@the-chat/types";
declare const genStateContext: <T>(defaultValue?: T) => [<R extends State<T> = State<T>>() => R, React.FunctionComponent<{
    value?: State<T>;
}>];
export { genStateContext };
