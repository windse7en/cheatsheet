import React from 'react';

const TableCardColumn = props => (
  <td className={`cheat_sheet_output_cell_${props.columnsIndex + 1}`}>
    <div>{props.text}</div>
  </td>
)

const TableCardRow = props => (
  <tr className={(props.rowIndex % 2 === 0) ? 'success' : ''}>
    {props.data.map( function(item, index) {
      let result = [];
      props.rowKeys.forEach( function(rowKey) {
        result.push(TableCardColumn({key: index, text: item[rowKey], columnsIndex: index}));
      });
      return ( result )
    })}
  </tr>
);

export default TableCardRow;
