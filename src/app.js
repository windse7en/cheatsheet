import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import TableCard from './jsx/csTableCard.jsx';

const pattern_modifier = {
  data: [
    "g",
    "i *",
    "m *",
    "s *",
    "x *",
    "e *",
    "U *"
  ],
  descriptions: [
    "Global match",
    "Case-i­nse­nsitive",
    "Multiple lines",
    "Treat string as single line",
    "Allow comments and whitespace in pattern",
    "Evaluate replac­ement",
    "Ungreedy pattern"
  ]
};

ReactDOM.render(<TableCard
  columns={1} 
  tableFooter='* PCRE modifier'
  tableTitle='Pattern Modifier'
  tableData={pattern_modifier}
  />, $('#csContainer')[0]);
