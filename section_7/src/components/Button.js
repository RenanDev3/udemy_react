import React from 'react'
import PropTypes from 'prop-types'

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded
}) {
  return (
    <button>{children}</button>
  )
}

Button.propTypes = {
  checkVariationValue: ({
    primary,
    secondary,
    success,
    warning,
    danger,
    }) => {
   const count = Number(!!primary)
   + Number(!!secondary) 
   + Number(!!success)
   + Number(!!warning)
   + Number(!!danger)

   if (count > 1){
    return new Error("You should select one of the following options: primary, secondary, success, warning or danger. Can't choose two or more at once.")
   } else if (count < 1) {
    return new Error("You should select one of the following options: primary, secondary, success, warning or danger.")
   }
  },
  children: PropTypes.any,
  primary: PropTypes.bool,
  secondar: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool
}

export default Button