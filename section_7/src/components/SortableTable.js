import React from 'react'
import {GoChevronUp, GoChevronDown} from 'react-icons/go'

import useSort from '../hooks/useSort'
import Table from './Table'

function SortableTable(props) {
    const { config, data } = props
    const {sortBy, sortOrder, handleClickSort, sortedData} = useSort({data, config})

    function getIcons(label){
        if (sortBy !== label){
            return (
                <div>
                    <GoChevronUp />
                    <GoChevronDown />
                </div>
            )
        }

        if (sortOrder === 'asc') {
            return (
                <div>
                    <GoChevronUp />
                    <GoChevronDown className='invisible'/>
                </div>
            )
        } else if (sortOrder === 'desc'){
            return (
                <div>
                    <GoChevronUp className='invisible'/>
                    <GoChevronDown />
                </div>
            )
        } else {
            return (
                <div>
                    <GoChevronUp />
                    <GoChevronDown />
                </div>
            )
        }
    }

    const updatedConfig = config.map((column) => {
        if (!column.sortValue){
            return column
        }
        return {
            ...column,
            header: () => (
            <th onClick={() => handleClickSort(column.label)} className='flex gap-4 items-center cursor-pointer hover:bg-gray-100'>
                {getIcons(column.label)}
                {column.label}
                </th>
                )
        }
    })


/*
the props already has the config and data arrays, but since we are passing it again,
it will override the previous value with the new one
*/
  return (
    <Table {...props} data={sortedData} config={updatedConfig}/>
  )
}

export default SortableTable