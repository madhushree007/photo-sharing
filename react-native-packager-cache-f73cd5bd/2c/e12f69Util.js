
'use strict';

module.exports = {
  WEEKDAYS: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  MONTHS: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  MAX_ROWS: 7,
  MAX_COLUMNS: 7,
  getDaysInMonth: function getDaysInMonth(month, year) {
    var lastDayOfMonth = new Date(year, month + 1, 0);
    return lastDayOfMonth.getDate();
  }
};