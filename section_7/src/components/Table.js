import React, {Fragment} from 'react'

function Table({data, config}) {

  const renderedHeaders = config.map((header, index) => {
    if (header.header) {return <Fragment key={`header-${header.label}`}>{header.header()}</Fragment>}
    return <th key={`header-${header.label}`}>{header.label}</th>
  })

  const renderedRows = data.map((rowData, index) => {
    const renderedCells = config.map((column) => {
      return <td className='p-3' key={column.label}>{column.render(rowData)}</td>
    })

    return (
      <tr className='border-b' key={`fruit-${index}`}>
        {renderedCells}
      </tr>
    )
  })

  return (
    <table className='table-auto border-spacing-2'>

      <thead>
        <tr className='border-b-2'>
          {renderedHeaders}
        </tr>
      </thead>

      <tbody>
        { renderedRows }
      </tbody>

    </table>
  )
}

export default Table