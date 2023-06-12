import React from "react"
export default function Body(params: { children ?: React.ReactNode}) {

  const { children } = params

  return (
    <div className="mt-16">
      { children }
    </div>
  )
}