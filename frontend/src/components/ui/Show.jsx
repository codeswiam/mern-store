import { isValidElement } from "react"

export const Show = (props) => {
  const { when, fallback, children } = props
  let result

  if (!when) {
    result = fallback
  } else {
    result = typeof children === "function" ? children(when) : children
  }

  return isValidElement(result) ? result : <>{result}</>
}
