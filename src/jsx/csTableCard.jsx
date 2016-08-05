import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import TableCardRow from './csTableCardRow.jsx';

class CSTableCard extends Component {
  constructor(props) {
    super();
    const formattedData  = this.cleanTableData(props.tableData);
    const splitTableData = this.splitTableData(formattedData, props.columns);
    this.state = {
      data: splitTableData
    };
    this.toggleTable = this.toggleTable.bind(this);
  }

  cleanTableData(data) {
    let resultArray = [];
    const dataKeys = Object.keys(data);
    for (let i = 0; i < data[dataKeys[0]].length; i++) {
      let tempObject = {};
      dataKeys.forEach( (dataKey) => {
        tempObject[dataKey] = data[dataKey][i];
      });
      resultArray.push(tempObject);
    }
    return resultArray;
  }

  splitTableData(formattedData, columns) {
    let splitData = [];
    for(let i = 0; i < formattedData.length; i = i + columns) {
      let tempArray = [];
      for(let j = 0; j < columns; j++) {
        if (i + j < formattedData.length) {
          tempArray.push(formattedData[i+j]);
        }
      }
      splitData.push(tempArray);
    }
    return splitData;
  }

  toggleTable() {
    let dom = ReactDOM.findDOMNode(this);
    $(dom).children('.cheat_sheet_output_table').slideToggle();
  }

  render() {
    return (
      <div>
        <div className="cheat_sheet_trigger_title" onClick={this.toggleTable}>
          <h4>{ this.props.tableTitle }</h4>
        </div>
      	<div className="cheat_sheet_output_table">
      	  <table className="table">
      	    <tbody>
              {this.state.data.map( (rowArray, currentIndex) => {
                return ( <TableCardRow
                  data={rowArray}
                  key={currentIndex}
                  rowKeys={Object.keys(this.props.tableData)}
                  rowIndex={currentIndex}/> )
              })}
            </tbody>
          </table>
      	  <div className="cheat_sheet_note">
      	    <div>{ this.props.tableFooter }</div>
      	  </div>
        </div>
      </div>
    );
  }
}

CSTableCard.propTypes = {
  tableTitle: PropTypes.string.isRequired,
  tableFooter: PropTypes.string,
  tableData:  PropTypes.object.isRequired,
  columns:    PropTypes.number.isRequired
}

export default CSTableCard;
