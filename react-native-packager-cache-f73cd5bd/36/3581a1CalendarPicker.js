
'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/packages/react-native-calendar-picker/CalendarPicker.js';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  _component: {},
  _component2: {},
  _component3: {},
  _component4: {},
  _component5: {}
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/js/packages/react-native-calendar-picker/CalendarPicker.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var React = require('react');

var _require = require('react-native'),
    StyleSheet = _require.StyleSheet,
    View = _require.View,
    Text = _require.Text,
    TouchableOpacity = _require.TouchableOpacity;

var _require2 = require('./Util'),
    WEEKDAYS = _require2.WEEKDAYS,
    MONTHS = _require2.MONTHS,
    MAX_ROWS = _require2.MAX_ROWS,
    MAX_COLUMNS = _require2.MAX_COLUMNS,
    getDaysInMonth = _require2.getDaysInMonth;

var styles = require('./Styles');

var Day = _wrapComponent('_component')(React.createClass({
  displayName: 'Day',

  propTypes: {
    onDayChange: React.PropTypes.func,
    selected: React.PropTypes.bool,
    day: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]).isRequired
  },
  getDefaultProps: function getDefaultProps() {
    return {
      onDayChange: function onDayChange() {}
    };
  },
  render: function render() {
    var _this = this;

    if (this.props.selected) {
      return React.createElement(
        View,
        { style: styles.dayWrapper, __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        },
        React.createElement(
          View,
          { style: styles.dayButtonSelected, __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          },
          React.createElement(
            TouchableOpacity,
            {
              style: styles.dayButton,
              onPress: function onPress() {
                return _this.props.onDayChange(_this.props.day);
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              }
            },
            React.createElement(
              Text,
              { style: styles.selectedDayLabel, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 47
                }
              },
              this.props.day
            )
          )
        )
      );
    } else {
      return React.createElement(
        View,
        { style: styles.dayWrapper, __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        },
        React.createElement(
          TouchableOpacity,
          {
            style: styles.dayButton,
            onPress: function onPress() {
              return _this.props.onDayChange(_this.props.day);
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            }
          },
          React.createElement(
            Text,
            { style: styles.dayLabel, __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              }
            },
            this.props.day
          )
        )
      );
    }
  }
}));

var Days = _wrapComponent('_component2')(React.createClass({
  displayName: 'Days',

  propTypes: {
    date: React.PropTypes.instanceOf(Date).isRequired,
    month: React.PropTypes.number.isRequired,
    year: React.PropTypes.number.isRequired,
    onDayChange: React.PropTypes.func.isRequired
  },
  getInitialState: function getInitialState() {
    return {
      selectedStates: []
    };
  },
  componentDidMount: function componentDidMount() {
    this.updateSelectedStates(this.props.date.getDate());
  },
  updateSelectedStates: function updateSelectedStates(day) {
    var selectedStates = [],
        daysInMonth = getDaysInMonth(this.props.month, this.props.year),
        i;

    for (i = 1; i <= daysInMonth; i++) {
      if (i === day) {
        selectedStates.push(true);
      } else {
        selectedStates.push(false);
      }
    }

    this.setState({
      selectedStates: selectedStates
    });
  },
  onPressDay: function onPressDay(day) {
    this.updateSelectedStates(day);
    this.props.onDayChange({ day: day });
  },
  getCalendarDays: function getCalendarDays() {
    var columns,
        matrix = [],
        i,
        j,
        month = this.props.month,
        year = this.props.year,
        currentDay = 0,
        thisMonthFirstDay = new Date(year, month, 1),
        slotsAccumulator = 0;

    for (i = 0; i < MAX_ROWS; i++) {
      columns = [];

      for (j = 0; j < MAX_COLUMNS; j++) {
        if (slotsAccumulator >= thisMonthFirstDay.getDay()) {
          if (currentDay < getDaysInMonth(month, year)) {
            columns.push(React.createElement(Day, {
              key: j,
              day: currentDay + 1,
              selected: this.state.selectedStates[currentDay],
              date: this.props.date,
              onDayChange: this.onPressDay, __source: {
                fileName: _jsxFileName,
                lineNumber: 132
              }
            }));
            currentDay++;
          }
        } else {
          columns.push(React.createElement(Day, { key: j, day: '', __source: {
              fileName: _jsxFileName,
              lineNumber: 141
            }
          }));
        }

        slotsAccumulator++;
      }
      matrix[i] = [];
      matrix[i].push(React.createElement(
        View,
        { style: styles.weekRow, __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          }
        },
        columns
      ));
    }

    return matrix;
  },
  render: function render() {
    return React.createElement(
      View,
      { style: styles.daysWrapper, __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      },
      this.getCalendarDays()
    );
  }
}));

var WeekDaysLabels = _wrapComponent('_component3')(React.createClass({
  displayName: 'WeekDaysLabels',
  render: function render() {
    return React.createElement(
      View,
      { style: styles.dayLabelsWrapper, __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      },
      WEEKDAYS.map(function (day, key) {
        return React.createElement(
          Text,
          { key: key, style: styles.dayLabels, __source: {
              fileName: _jsxFileName,
              lineNumber: 163
            }
          },
          day
        );
      })
    );
  }
}));

var HeaderControls = _wrapComponent('_component4')(React.createClass({
  displayName: 'HeaderControls',

  propTypes: {
    month: React.PropTypes.number.isRequired,
    getNextYear: React.PropTypes.func.isRequired,
    getPrevYear: React.PropTypes.func.isRequired,
    onMonthChange: React.PropTypes.func.isRequired
  },
  getInitialState: function getInitialState() {
    return {
      selectedMonth: this.props.month
    };
  },
  getNext: function getNext() {
    var next = this.state.selectedMonth + 1;
    if (next > 11) {
      this.setState({ selectedMonth: 0 });
      this.props.getNextYear();
    } else {
      this.setState({ selectedMonth: next });
    }

    this.props.onMonthChange(this.state.selectedMonth);
  },
  getPrevious: function getPrevious() {
    var prev = this.state.selectedMonth - 1;
    if (prev < 0) {
      this.setState({ selectedMonth: 11 });
      this.props.getPrevYear();
    } else {
      this.setState({ selectedMonth: prev });
    }

    this.props.onMonthChange(this.state.selectedMonth);
  },
  render: function render() {
    return React.createElement(
      View,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      },
      React.createElement(
        View,
        { style: { alignItems: 'center' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          }
        },
        React.createElement(
          Text,
          { style: { alignItems: 'center', textAlign: 'center', fontWeight: '900', padding: 10, color: 'rgba(255,255,255,0.5)' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 214
            }
          },
          this.props.year
        )
      ),
      React.createElement(
        View,
        { style: styles.headerWrapper, __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          }
        },
        React.createElement(
          View,
          { style: styles.monthSelector, __source: {
              fileName: _jsxFileName,
              lineNumber: 217
            }
          },
          React.createElement(
            TouchableOpacity,
            { onPress: this.getPrevious, __source: {
                fileName: _jsxFileName,
                lineNumber: 218
              }
            },
            React.createElement(
              Text,
              { style: styles.prev, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 219
                }
              },
              'Previous'
            )
          )
        ),
        React.createElement(
          View,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 222
            }
          },
          React.createElement(
            Text,
            { style: styles.monthLabel, __source: {
                fileName: _jsxFileName,
                lineNumber: 223
              }
            },
            MONTHS[this.state.selectedMonth]
          )
        ),
        React.createElement(
          View,
          { style: styles.monthSelector, __source: {
              fileName: _jsxFileName,
              lineNumber: 227
            }
          },
          React.createElement(
            TouchableOpacity,
            { onPress: this.getNext, __source: {
                fileName: _jsxFileName,
                lineNumber: 228
              }
            },
            React.createElement(
              Text,
              { style: styles.next, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 229
                }
              },
              'Next'
            )
          )
        )
      )
    );
  }
}));

var CalendarPicker = _wrapComponent('_component5')(React.createClass({
  displayName: 'CalendarPicker',

  propTypes: {
    selectedDate: React.PropTypes.instanceOf(Date).isRequired,
    onDateChange: React.PropTypes.func
  },
  getDefaultProps: function getDefaultProps() {
    return {
      onDateChange: function onDateChange() {}
    };
  },
  getInitialState: function getInitialState() {
    return {
      date: this.props.selectedDate,
      day: this.props.selectedDate.getDate(),
      month: this.props.selectedDate.getMonth(),
      year: this.props.selectedDate.getFullYear(),
      selectedDay: []
    };
  },
  onDayChange: function onDayChange(day) {
    this.setState({ day: day.day });
    this.onDateChange();
  },
  onMonthChange: function onMonthChange(month) {
    this.setState({ month: month });
    this.onDateChange();
  },
  getNextYear: function getNextYear() {
    this.setState({ year: this.state.year + 1 });
    this.onDateChange();
  },
  getPrevYear: function getPrevYear() {
    this.setState({ year: this.state.year - 1 });
    this.onDateChange();
  },
  onDateChange: function onDateChange() {
    var _state = this.state,
        day = _state.day,
        month = _state.month,
        year = _state.year,
        date = new Date(year, month, day);


    this.setState({ date: date });
    this.props.onDateChange(date);
  },
  render: function render() {
    return React.createElement(
      View,
      { style: styles.calendar, __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        }
      },
      React.createElement(HeaderControls, {
        year: this.state.year,
        month: this.state.month,
        onMonthChange: this.onMonthChange,
        getNextYear: this.getNextYear,
        getPrevYear: this.getPrevYear, __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        }
      }),
      React.createElement(WeekDaysLabels, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        }
      }),
      React.createElement(Days, {
        month: this.state.month,
        year: this.state.year,
        date: this.state.date,
        onDayChange: this.onDayChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        }
      })
    );
  }
}));

module.exports = CalendarPicker;