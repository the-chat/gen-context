import React, { useState } from "react"
import { State } from "@the-chat/types"
import genContext from "./genContext"

const genStateContext = <V,>(defaultValue?: V) =>
  genContext<State<V | undefined>>(({ RealProvider, children }) => (
    <RealProvider value={useState(defaultValue)}>{children}</RealProvider>
  ))

export { genStateContext }
