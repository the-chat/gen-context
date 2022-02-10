import {useState} from "react"
import {State} from "@the-chat/types"
import genContext from "./genContext"

const genStateContext = <T,>(defaultValue: T = null) =>
  genContext<State<T>>(({RealProvider, children}) => (
    <RealProvider value={useState(defaultValue)}>{children}</RealProvider>
  ))

export default genStateContext
