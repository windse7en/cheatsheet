import React from 'react';
import $ from 'jquery';

$('.cheat_sheet_trigger_title').click(function () {
  $(this).next('.cheat_sheet_output_table').slideToggle(400);
});
