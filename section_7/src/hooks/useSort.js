import {useState} from 'react'

function useSort({data, config}) {
    const [sortOrder, setSortOrder] = useState(null)
    const [sortBy, setSortBy] = useState(null)

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


    return {
        sortBy,
        sortOrder,
        handleClickSort,
        sortedData
    }

}

export default useSort