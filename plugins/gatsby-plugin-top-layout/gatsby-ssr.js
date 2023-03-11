/* eslint-disable import/prefer-default-export */
import * as React from "react"
import TopLayout from "./TopLayout"
import "../../src/styles/global.css"

// Could also move setHeaders here?

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>
}
