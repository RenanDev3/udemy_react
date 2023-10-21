import React from 'react'

import Link from './Link'

function SideBar() {
    const links = [
        {label: 'Home', path: '/', className:'mb-3'},
        {label: 'DropDown', path: '/dropdown', className:'mb-3'},
        {label: 'Accordion', path: '/accordion', className:'mb-3'},
        {label: 'Button', path: '/button'},
    ]
  return (
    <div className='sticky top-0 overflow-y-scroll flex flex-col items-start'>
        { links.map((link, index) => {
            return <Link
            key={index}
            to={link.path}
            className={link.className}
            activeClassName="font-bold border-l-4 border-blue-500 pl-2"            
            >{link.label}</Link>
        }) }
    </div>
  )
}

export default SideBar