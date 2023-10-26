import React from 'react'
import classNames from 'classnames'

import useNavigation from '../hooks/useNavigation'


function Link({to, children, className, activeClassName}) {
    const {navigate, currentPath} = useNavigation()

    const classes = classNames(
      'text-blue-500',
      className,
      currentPath === to && activeClassName
      )
  
    function handleClick(event){
      if(event.ctrlKey || event.metaKey){
        return
      }
    event.preventDefault()
    navigate(to)
  }

    return (
    <a className={classes} href={to} onClick={handleClick}>{children}</a>
  )
}

export default Link