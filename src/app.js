import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import TableCard from './jsx/csTableCard.jsx';

$('.cheat_sheet_trigger_title').click(function () {
  $(this).next('.cheat_sheet_output_table').slideToggle(400);
});

const pattern_modifier = {
  title: 'Pattern Modifier',
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

ReactDOM.render(<TableCard tableData={pattern_modifier}/>, $('#csContainer')[0]);
