import React, {useState} from 'react'
import {GoChevronUp, GoChevronDown} from 'react-icons/go'

import Table from './Table'

function SortableTable(props) {
    const [sortOrder, setSortOrder] = useState(null)
    const [sortBy, setSortBy] = useState(null)
    const { config, data } = props

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

    function handleClickSort(label){
        if (sortBy && label !== sortBy){
            setSortBy(label)
            setSortOrder('asc')
            return
        }
        switch(sortOrder){
            case null:
                setSortOrder('asc')
                setSortBy(label)
                break
            case 'asc':
                setSortOrder('desc')
                setSortBy(label)
                break
            case 'desc':
                setSortOrder(null)
                setSortBy(null)
                break
            default:
                setSortOrder(null)
                setSortBy(null)
        }

    }

    let sortedData = data
    if (sortOrder && sortBy){
        const { sortValue } = config.find( column => column.label === sortBy)
        sortedData = [...data].sort((a,b) => {
            const valueA = sortValue(a)
            const valueB = sortValue(b)

            const reverseOrder = sortOrder === 'asc' ? 1 : -1

            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder
            } else {
                return (valueA - valueB) * reverseOrder
            }
        })
    }


/*
the props already has the config and data arrays, but since we are passing it again,
it will override the previous value with the new one
*/
  return (
    <Table {...props} data={sortedData} config={updatedConfig}/>
  )
}

export default SortableTable