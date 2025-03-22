"use client"

import { useEffect, useState } from "react"
import { Show } from "./Show"

export const ClientOnly = (props) => {
  const { children, fallback } = props
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <Show when={hasMounted} fallback={fallback}>
      {children}
    </Show>
  )
}
