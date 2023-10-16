import React from 'react'
import classnames from 'classnames'
import {twMerge} from 'tailwind-merge'


function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {

  const styleClasses = twMerge(classnames(rest.className, "flex items-center w-28 m-2 px-3 py-1.5 border font-bold", {
    'border-blue-600 bg-blue-500 text-white': primary,
    'border-black bg-black text-white': secondary,
    'border-green-600 bg-green-500 text-white': success,
    'border-yellow-600 bg-yellow-500 text-white': warning,
    'border-red-600 bg-red-500 text-white': danger,
    'rounded-full': rounded,
    'border-4 bg-white': outline,
    'text-blue-500': outline && primary,
    'text-black': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-500': outline && warning,
    'text-red-500': outline && danger,
  }) )
  
  return (
    <button className={styleClasses} {...rest}>{children}</button>
  )
}

export default Button