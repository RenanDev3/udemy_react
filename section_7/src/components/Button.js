import React from 'react'

function Button({
  children,
}) {
  return (
    <button className="m-2 px-3 py-1.5 border border-blue-600 bg-blue-500 w-28 text-white font-bold">{children}</button>
  )
}

export default Button