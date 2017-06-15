Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/timeline/index.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _nativeBase = require('native-base');

var _reactNativeEasyGrid = require('react-native-easy-grid');

var _drawer = require('../../actions/drawer');

var _headerContent = require('./../headerContent/');

var _headerContent2 = babelHelpers.interopRequireDefault(_headerContent);

var _styles = require('./styles');

var _styles2 = babelHelpers.interopRequireDefault(_styles);

var Timeline = function (_Component) {
    babelHelpers.inherits(Timeline, _Component);

    function Timeline() {
        babelHelpers.classCallCheck(this, Timeline);
        return babelHelpers.possibleConstructorReturn(this, (Timeline.__proto__ || Object.getPrototypeOf(Timeline)).apply(this, arguments));
    }

    babelHelpers.createClass(Timeline, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _nativeBase.Container,
                { style: _styles2.default.bg, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                    }
                },
                _react2.default.createElement(
                    _reactNative.Image,
                    { source: require('../../../images/glow2.png'), style: _styles2.default.container, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 18
                        }
                    },
                    _react2.default.createElement(_headerContent2.default, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        }
                    }),
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: _styles2.default.overviewHeaderContainer, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 20
                            }
                        },
                        _react2.default.createElement(
                            _nativeBase.Text,
                            { style: _styles2.default.overviewHeader, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 21
                                }
                            },
                            'Thursday'
                        ),
                        _react2.default.createElement(
                            _nativeBase.Text,
                            { note: true, style: _styles2.default.overviewHead, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 22
                                }
                            },
                            'March 09, 2017'
                        )
                    ),
                    _react2.default.createElement(
                        _nativeBase.Content,
                        { showsVerticalScrollIndicator: false, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 25
                            }
                        },
                        _react2.default.createElement(
                            _reactNative.View,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 26
                                }
                            },
                            _react2.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.timelineView, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 27
                                    }
                                },
                                _react2.default.createElement(
                                    _reactNative.View,
                                    { style: _styles2.default.timelineContent, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 28
                                        }
                                    },
                                    _react2.default.createElement(_nativeBase.Text, {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 29
                                        }
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.contentContainer, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 33
                                    }
                                },
                                _react2.default.createElement(
                                    _reactNativeEasyGrid.Grid,
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 34
                                        }
                                    },
                                    _react2.default.createElement(
                                        _reactNativeEasyGrid.Col,
                                        { style: { flexDirection: 'row' }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 35
                                            }
                                        },
                                        _react2.default.createElement(_nativeBase.Icon, { name: 'ios-bookmark', style: { color: '#999', marginLeft: 2 }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 36
                                            }
                                        }),
                                        _react2.default.createElement(
                                            _reactNative.View,
                                            { style: { paddingLeft: 27 }, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 37
                                                }
                                            },
                                            _react2.default.createElement(
                                                _nativeBase.Text,
                                                { style: _styles2.default.timelineContentHeading, __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 38
                                                    }
                                                },
                                                'BOOKMARKED'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _reactNativeEasyGrid.Col,
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 41
                                            }
                                        },
                                        _react2.default.createElement(
                                            _reactNative.View,
                                            { style: _styles2.default.newsTypeView, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 42
                                                }
                                            },
                                            _react2.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _styles2.default.timeIcon, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 43
                                                }
                                            }),
                                            _react2.default.createElement(
                                                _nativeBase.Text,
                                                { style: _styles2.default.time, __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 44
                                                    }
                                                },
                                                '09:34am'
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.timelineView, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 49
                                    }
                                },
                                _react2.default.createElement(
                                    _reactNative.View,
                                    { style: _styles2.default.timelineContent, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 50
                                        }
                                    },
                                    _react2.default.createElement(
                                        _nativeBase.Text,
                                        { style: _styles2.default.timelineTextHeader, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 51
                                            }
                                        },
                                        'Earth formed around 4.54 billion years ago by accretion from the solar nebula.'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactNative.View,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 58
                                }
                            },
                            _react2.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.timelineView, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 59
                                    }
                                },
                                _react2.default.createElement(
                                    _reactNative.View,
                                    { style: _styles2.default.timelineContent, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 60
                                        }
                                    },
                                    _react2.default.createElement(_nativeBase.Text, {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 61
                                        }
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.contentContainer, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 64
                                    }
                                },
                                _react2.default.createElement(
                                    _reactNativeEasyGrid.Grid,
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 65
                                        }
                                    },
                                    _react2.default.createElement(
                                        _reactNativeEasyGrid.Col,
                                        { style: { flexDirection: 'row' }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 66
                                            }
                                        },
                                        _react2.default.createElement(_nativeBase.Icon, { name: 'ios-chatboxes-outline', style: _styles2.default.timelineIcon, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 67
                                            }
                                        }),
                                        _react2.default.createElement(
                                            _reactNative.View,
                                            { style: { paddingLeft: 18 }, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 68
                                                }
                                            },
                                            _react2.default.createElement(
                                                _nativeBase.Text,
                                                { style: _styles2.default.timelineContentHeading, __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 69
                                                    }
                                                },
                                                'COMMENTED'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _reactNativeEasyGrid.Col,
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 72
                                            }
                                        },
                                        _react2.default.createElement(
                                            _reactNative.View,
                                            { style: _styles2.default.newsTypeView, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 73
                                                }
                                            },
                                            _react2.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _styles2.default.timeIcon, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 74
                                                }
                                            }),
                                            _react2.default.createElement(
                                                _nativeBase.Text,
                                                { style: _styles2.default.time, __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 75
                                                    }
                                                },
                                                '10:05am'
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.timelineView, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 80
                                    }
                                },
                                _react2.default.createElement(
                                    _reactNative.View,
                                    { style: _styles2.default.timelineContent, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 81
                                        }
                                    },
                                    _react2.default.createElement(
                                        _nativeBase.Text,
                                        { style: _styles2.default.timelineTextHeader, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 82
                                            }
                                        },
                                        'A "giant impact" collision is thought to have been responsible for forming the Moon.'
                                    ),
                                    _react2.default.createElement(
                                        _nativeBase.Text,
                                        { numberOfLines: 2, style: _styles2.default.timelineTextComment, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 85
                                            }
                                        },
                                        '\'The giant-impact hypothesis, sometimes called the Big Splash, or the Theia Impact.\''
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactNative.View,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 92
                                }
                            },
                            _react2.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.timelineView, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 93
                                    }
                                },
                                _react2.default.createElement(
                                    _reactNative.View,
                                    { style: _styles2.default.timelineContent, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 94
                                        }
                                    },
                                    _react2.default.createElement(_nativeBase.Text, {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 95
                                        }
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.contentContainer, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 98
                                    }
                                },
                                _react2.default.createElement(
                                    _reactNativeEasyGrid.Grid,
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 99
                                        }
                                    },
                                    _react2.default.createElement(
                                        _reactNativeEasyGrid.Col,
                                        { style: { flexDirection: 'row' }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 100
                                            }
                                        },
                                        _react2.default.createElement(_nativeBase.Icon, { name: 'ios-done-all', style: _styles2.default.timelineIcon, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 101
                                            }
                                        }),
                                        _react2.default.createElement(
                                            _reactNative.View,
                                            { style: { paddingLeft: 30 }, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 102
                                                }
                                            },
                                            _react2.default.createElement(
                                                _nativeBase.Text,
                                                { style: _styles2.default.timelineContentHeading, __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 103
                                                    }
                                                },
                                                'FOLLOWED'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _reactNativeEasyGrid.Col,
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 106
                                            }
                                        },
                                        _react2.default.createElement(
                                            _reactNative.View,
                                            { style: _styles2.default.newsTypeView, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 107
                                                }
                                            },
                                            _react2.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _styles2.default.timeIcon, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 108
                                                }
                                            }),
                                            _react2.default.createElement(
                                                _nativeBase.Text,
                                                { style: _styles2.default.time, __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 109
                                                    }
                                                },
                                                '05:36pm'
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.timelineView, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 114
                                    }
                                },
                                _react2.default.createElement(
                                    _reactNative.View,
                                    { style: _styles2.default.timelineContent, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 115
                                        }
                                    },
                                    _react2.default.createElement(
                                        _nativeBase.Text,
                                        { style: _styles2.default.timelineTextHeader, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 116
                                            }
                                        },
                                        '\'SPORTS\' channel'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactNative.View,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 121
                                }
                            },
                            _react2.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.timelineView, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 122
                                    }
                                },
                                _react2.default.createElement(
                                    _reactNative.View,
                                    { style: _styles2.default.timelineContent, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 123
                                        }
                                    },
                                    _react2.default.createElement(_nativeBase.Text, {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 124
                                        }
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.contentContainer, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 127
                                    }
                                },
                                _react2.default.createElement(
                                    _reactNativeEasyGrid.Grid,
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 128
                                        }
                                    },
                                    _react2.default.createElement(
                                        _reactNativeEasyGrid.Col,
                                        { style: { flexDirection: 'row' }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 129
                                            }
                                        },
                                        _react2.default.createElement(_nativeBase.Icon, { name: 'ios-download-outline', style: _styles2.default.timelineIcon, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 130
                                            }
                                        }),
                                        _react2.default.createElement(
                                            _reactNative.View,
                                            { style: { paddingLeft: 25 }, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 131
                                                }
                                            },
                                            _react2.default.createElement(
                                                _nativeBase.Text,
                                                { style: _styles2.default.timelineContentHeading, __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 132
                                                    }
                                                },
                                                'SHARED'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _reactNativeEasyGrid.Col,
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 135
                                            }
                                        },
                                        _react2.default.createElement(
                                            _reactNative.View,
                                            { style: _styles2.default.newsTypeView, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 136
                                                }
                                            },
                                            _react2.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _styles2.default.timeIcon, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 137
                                                }
                                            }),
                                            _react2.default.createElement(
                                                _nativeBase.Text,
                                                { style: _styles2.default.time, __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 138
                                                    }
                                                },
                                                '06:00pm'
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.timelineView, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 143
                                    }
                                },
                                _react2.default.createElement(
                                    _reactNative.View,
                                    { style: _styles2.default.timelineContent, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 144
                                        }
                                    },
                                    _react2.default.createElement(
                                        _nativeBase.Text,
                                        { style: _styles2.default.timelineTextHeader, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 145
                                            }
                                        },
                                        'Living forms derived from photosynthesis appeared between 3.2 and 2.4 billion years ago.'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactNative.View,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 153
                                }
                            },
                            _react2.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.timelineView, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 154
                                    }
                                },
                                _react2.default.createElement(
                                    _reactNative.View,
                                    { style: _styles2.default.timelineContent, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 155
                                        }
                                    },
                                    _react2.default.createElement(_nativeBase.Text, {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 156
                                        }
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.contentContainer, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 159
                                    }
                                },
                                _react2.default.createElement(
                                    _reactNativeEasyGrid.Grid,
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 160
                                        }
                                    },
                                    _react2.default.createElement(
                                        _reactNativeEasyGrid.Col,
                                        { style: { flexDirection: 'row' }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 161
                                            }
                                        },
                                        _react2.default.createElement(_nativeBase.Icon, { name: 'ios-thumbs-up-outline', style: _styles2.default.timelineIcon, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 162
                                            }
                                        }),
                                        _react2.default.createElement(
                                            _reactNative.View,
                                            { style: { paddingLeft: 25 }, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 163
                                                }
                                            },
                                            _react2.default.createElement(
                                                _nativeBase.Text,
                                                { style: _styles2.default.timelineContentHeading, __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 164
                                                    }
                                                },
                                                'LIKED'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _reactNativeEasyGrid.Col,
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 167
                                            }
                                        },
                                        _react2.default.createElement(
                                            _reactNative.View,
                                            { style: _styles2.default.newsTypeView, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 168
                                                }
                                            },
                                            _react2.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _styles2.default.timeIcon, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 169
                                                }
                                            }),
                                            _react2.default.createElement(
                                                _nativeBase.Text,
                                                { style: _styles2.default.time, __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 170
                                                    }
                                                },
                                                '09:13pm'
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.timelineView, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 175
                                    }
                                },
                                _react2.default.createElement(
                                    _reactNative.View,
                                    { style: _styles2.default.timelineContent, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 176
                                        }
                                    },
                                    _react2.default.createElement(
                                        _nativeBase.Text,
                                        { style: _styles2.default.timelineTextHeader, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 177
                                            }
                                        },
                                        'Life remained mostly small and microscopic until about 580 million years ago.'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactNative.View,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 185
                                }
                            },
                            _react2.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.timelineView, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 186
                                    }
                                },
                                _react2.default.createElement(
                                    _reactNative.View,
                                    { style: _styles2.default.timelineContent, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 187
                                        }
                                    },
                                    _react2.default.createElement(_nativeBase.Text, {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 188
                                        }
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.contentContainer, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 191
                                    }
                                },
                                _react2.default.createElement(
                                    _reactNativeEasyGrid.Grid,
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 192
                                        }
                                    },
                                    _react2.default.createElement(
                                        _reactNativeEasyGrid.Col,
                                        { style: { flexDirection: 'row' }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 193
                                            }
                                        },
                                        _react2.default.createElement(_nativeBase.Icon, { name: 'ios-copy-outline', style: _styles2.default.timelineIcon, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 194
                                            }
                                        }),
                                        _react2.default.createElement(
                                            _reactNative.View,
                                            { style: { paddingLeft: 25 }, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 195
                                                }
                                            },
                                            _react2.default.createElement(
                                                _nativeBase.Text,
                                                { style: _styles2.default.timelineContentHeading, __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 196
                                                    }
                                                },
                                                'SAVED'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _reactNativeEasyGrid.Col,
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 199
                                            }
                                        },
                                        _react2.default.createElement(
                                            _reactNative.View,
                                            { style: _styles2.default.newsTypeView, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 200
                                                }
                                            },
                                            _react2.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _styles2.default.timeIcon, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 201
                                                }
                                            }),
                                            _react2.default.createElement(
                                                _nativeBase.Text,
                                                { style: _styles2.default.time, __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 202
                                                    }
                                                },
                                                '11:03pm'
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.timelineView, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 207
                                    }
                                },
                                _react2.default.createElement(
                                    _reactNative.View,
                                    { style: _styles2.default.timelineContent, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 208
                                        }
                                    },
                                    _react2.default.createElement(
                                        _nativeBase.Text,
                                        { style: _styles2.default.timelineTextHeader, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 209
                                            }
                                        },
                                        'The history of Earth is divided into four great eons.'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactNative.View,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 216
                                }
                            },
                            _react2.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.timelineView, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 217
                                    }
                                },
                                _react2.default.createElement(
                                    _reactNative.View,
                                    { style: _styles2.default.timelineContent, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 218
                                        }
                                    },
                                    _react2.default.createElement(_nativeBase.Text, {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 219
                                        }
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.contentContainer, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 222
                                    }
                                },
                                _react2.default.createElement(
                                    _reactNativeEasyGrid.Grid,
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 223
                                        }
                                    },
                                    _react2.default.createElement(
                                        _reactNativeEasyGrid.Col,
                                        { style: { flexDirection: 'row' }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 224
                                            }
                                        },
                                        _react2.default.createElement(_nativeBase.Icon, { name: 'ios-archive-outline', style: _styles2.default.timelineIcon, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 225
                                            }
                                        }),
                                        _react2.default.createElement(
                                            _reactNative.View,
                                            { style: { paddingLeft: 25 }, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 226
                                                }
                                            },
                                            _react2.default.createElement(
                                                _nativeBase.Text,
                                                { style: _styles2.default.timelineContentHeading, __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 227
                                                    }
                                                },
                                                'ARCHIVED'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _reactNativeEasyGrid.Col,
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 230
                                            }
                                        },
                                        _react2.default.createElement(
                                            _reactNative.View,
                                            { style: _styles2.default.newsTypeView, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 231
                                                }
                                            },
                                            _react2.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _styles2.default.timeIcon, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 232
                                                }
                                            }),
                                            _react2.default.createElement(
                                                _nativeBase.Text,
                                                { style: _styles2.default.time, __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 233
                                                    }
                                                },
                                                '11:53pm'
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.timelineView, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 238
                                    }
                                },
                                _react2.default.createElement(
                                    _reactNative.View,
                                    { style: _styles2.default.timelineContent, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 239
                                        }
                                    },
                                    _react2.default.createElement(
                                        _nativeBase.Text,
                                        { style: _styles2.default.timelineTextHeader, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 240
                                            }
                                        },
                                        'The Earth and Moon have the same oxygen isotopic signature.'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);
    return Timeline;
}(_react.Component);

function bindAction(dispatch) {
    return {
        openDrawer: function openDrawer() {
            return dispatch((0, _drawer.openDrawer)());
        }
    };
}

exports.default = (0, _reactRedux.connect)(null, bindAction)(Timeline);