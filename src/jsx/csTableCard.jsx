import React, { Component, PropTypes } from 'react';
import $ from 'jquery';

class CSTableCard extends Component {
  constructor(props) {
    super();
    this.state = {
      data: props.tableData
    };
  }

  render() {
    return (
      <div className="cheat_sheet_trigger_title">
        <h4>{ this.state.data.title }</h4>
      </div>
    )
  }
}

CSTableCard.propTypes = {
  tableData: PropTypes.object.isRequired
}

export default CSTableCard;
