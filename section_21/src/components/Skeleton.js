import React from 'react'
import classNames from 'classnames'

function Skeleton({ times, customClasses }) {
    const outerClassNames = classNames(
        'relative',
        'overglow-hidden',
        'bg-gray-200',
        'rounded',
        'mb-2.5',
        customClasses
    )

    const innetClassNames = classNames(
        'animate-shimmer',
        'absolute',
        'inset-0',
        '-translate-x-full',
        'bg-gradient-to-r',
        'from-gray-200',
        'via-white',
        'to-gray-200'
    )

    const boxes = Array(times).fill(0).map((_, index) => {
        return (
        <div key={index} className={outerClassNames}>
            <div className={innetClassNames}/>
        </div>
        )
    })

  return (
    <div>{boxes}</div>
  )
}

export default Skeleton