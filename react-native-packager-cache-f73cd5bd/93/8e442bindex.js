Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/timeline/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _nativeBase = require('native-base');

var _reactNativeEasyGrid = require('react-native-easy-grid');

var _drawer = require('../../actions/drawer');

var _headerContent = require('./../headerContent/');

var _headerContent2 = _interopRequireDefault(_headerContent);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Timeline: {
        displayName: 'Timeline'
    }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
    filename: '/Users/madhushree/Sites/projects/React/FlatApp/js/components/timeline/index.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
    };
}

var Timeline = _wrapComponent('Timeline')(function (_Component) {
    _inherits(Timeline, _Component);

    function Timeline() {
        _classCallCheck(this, Timeline);

        return _possibleConstructorReturn(this, (Timeline.__proto__ || Object.getPrototypeOf(Timeline)).apply(this, arguments));
    }

    _createClass(Timeline, [{
        key: 'render',
        value: function render() {
            return _react3.default.createElement(
                _nativeBase.Container,
                { style: _styles2.default.bg, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                    }
                },
                _react3.default.createElement(
                    _reactNative.Image,
                    { source: require('../../../images/glow2.png'), style: _styles2.default.container, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 18
                        }
                    },
                    _react3.default.createElement(_headerContent2.default, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        }
                    }),
                    _react3.default.createElement(
                        _reactNative.View,
                        { style: _styles2.default.overviewHeaderContainer, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 20
                            }
                        },
                        _react3.default.createElement(
                            _nativeBase.Text,
                            { style: _styles2.default.overviewHeader, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 21
                                }
                            },
                            'Thursday'
                        ),
                        _react3.default.createElement(
                            _nativeBase.Text,
                            { note: true, style: _styles2.default.overviewHead, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 22
                                }
                            },
                            'March 09, 2017'
                        )
                    ),
                    _react3.default.createElement(
                        _nativeBase.Content,
                        { showsVerticalScrollIndicator: false, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 25
                            }
                        },
                        _react3.default.createElement(
                            _reactNative.View,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 26
                                }
                            },
                            _react3.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.timelineView, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 27
                                    }
                                },
                                _react3.default.createElement(
                                    _reactNative.View,
                                    { style: _styles2.default.timelineContent, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 28
                                        }
                                    },
                                    _react3.default.createElement(_nativeBase.Text, {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 29
                                        }
                                    })
                                )
                            ),
                            _react3.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.contentContainer, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 33
                                    }
                                },
                                _react3.default.createElement(
                                    _reactNativeEasyGrid.Grid,
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 34
                                        }
                                    },
                                    _react3.default.createElement(
                                        _reactNativeEasyGrid.Col,
                                        { style: { flexDirection: 'row' }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 35
                                            }
                                        },
                                        _react3.default.createElement(_nativeBase.Icon, { name: 'ios-bookmark', style: { color: '#999', marginLeft: 2 }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 36
                                            }
                                        }),
                                        _react3.default.createElement(
                                            _reactNative.View,
                                            { style: { paddingLeft: 27 }, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 37
                                                }
                                            },
                                            _react3.default.createElement(
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
                                    _react3.default.createElement(
                                        _reactNativeEasyGrid.Col,
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 41
                                            }
                                        },
                                        _react3.default.createElement(
                                            _reactNative.View,
                                            { style: _styles2.default.newsTypeView, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 42
                                                }
                                            },
                                            _react3.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _styles2.default.timeIcon, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 43
                                                }
                                            }),
                                            _react3.default.createElement(
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
                            _react3.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.timelineView, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 49
                                    }
                                },
                                _react3.default.createElement(
                                    _reactNative.View,
                                    { style: _styles2.default.timelineContent, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 50
                                        }
                                    },
                                    _react3.default.createElement(
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
                        _react3.default.createElement(
                            _reactNative.View,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 58
                                }
                            },
                            _react3.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.timelineView, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 59
                                    }
                                },
                                _react3.default.createElement(
                                    _reactNative.View,
                                    { style: _styles2.default.timelineContent, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 60
                                        }
                                    },
                                    _react3.default.createElement(_nativeBase.Text, {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 61
                                        }
                                    })
                                )
                            ),
                            _react3.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.contentContainer, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 64
                                    }
                                },
                                _react3.default.createElement(
                                    _reactNativeEasyGrid.Grid,
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 65
                                        }
                                    },
                                    _react3.default.createElement(
                                        _reactNativeEasyGrid.Col,
                                        { style: { flexDirection: 'row' }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 66
                                            }
                                        },
                                        _react3.default.createElement(_nativeBase.Icon, { name: 'ios-chatboxes-outline', style: _styles2.default.timelineIcon, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 67
                                            }
                                        }),
                                        _react3.default.createElement(
                                            _reactNative.View,
                                            { style: { paddingLeft: 18 }, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 68
                                                }
                                            },
                                            _react3.default.createElement(
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
                                    _react3.default.createElement(
                                        _reactNativeEasyGrid.Col,
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 72
                                            }
                                        },
                                        _react3.default.createElement(
                                            _reactNative.View,
                                            { style: _styles2.default.newsTypeView, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 73
                                                }
                                            },
                                            _react3.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _styles2.default.timeIcon, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 74
                                                }
                                            }),
                                            _react3.default.createElement(
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
                            _react3.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.timelineView, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 80
                                    }
                                },
                                _react3.default.createElement(
                                    _reactNative.View,
                                    { style: _styles2.default.timelineContent, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 81
                                        }
                                    },
                                    _react3.default.createElement(
                                        _nativeBase.Text,
                                        { style: _styles2.default.timelineTextHeader, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 82
                                            }
                                        },
                                        'A "giant impact" collision is thought to have been responsible for forming the Moon.'
                                    ),
                                    _react3.default.createElement(
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
                        _react3.default.createElement(
                            _reactNative.View,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 92
                                }
                            },
                            _react3.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.timelineView, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 93
                                    }
                                },
                                _react3.default.createElement(
                                    _reactNative.View,
                                    { style: _styles2.default.timelineContent, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 94
                                        }
                                    },
                                    _react3.default.createElement(_nativeBase.Text, {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 95
                                        }
                                    })
                                )
                            ),
                            _react3.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.contentContainer, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 98
                                    }
                                },
                                _react3.default.createElement(
                                    _reactNativeEasyGrid.Grid,
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 99
                                        }
                                    },
                                    _react3.default.createElement(
                                        _reactNativeEasyGrid.Col,
                                        { style: { flexDirection: 'row' }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 100
                                            }
                                        },
                                        _react3.default.createElement(_nativeBase.Icon, { name: 'ios-done-all', style: _styles2.default.timelineIcon, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 101
                                            }
                                        }),
                                        _react3.default.createElement(
                                            _reactNative.View,
                                            { style: { paddingLeft: 30 }, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 102
                                                }
                                            },
                                            _react3.default.createElement(
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
                                    _react3.default.createElement(
                                        _reactNativeEasyGrid.Col,
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 106
                                            }
                                        },
                                        _react3.default.createElement(
                                            _reactNative.View,
                                            { style: _styles2.default.newsTypeView, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 107
                                                }
                                            },
                                            _react3.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _styles2.default.timeIcon, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 108
                                                }
                                            }),
                                            _react3.default.createElement(
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
                            _react3.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.timelineView, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 114
                                    }
                                },
                                _react3.default.createElement(
                                    _reactNative.View,
                                    { style: _styles2.default.timelineContent, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 115
                                        }
                                    },
                                    _react3.default.createElement(
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
                        _react3.default.createElement(
                            _reactNative.View,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 121
                                }
                            },
                            _react3.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.timelineView, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 122
                                    }
                                },
                                _react3.default.createElement(
                                    _reactNative.View,
                                    { style: _styles2.default.timelineContent, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 123
                                        }
                                    },
                                    _react3.default.createElement(_nativeBase.Text, {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 124
                                        }
                                    })
                                )
                            ),
                            _react3.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.contentContainer, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 127
                                    }
                                },
                                _react3.default.createElement(
                                    _reactNativeEasyGrid.Grid,
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 128
                                        }
                                    },
                                    _react3.default.createElement(
                                        _reactNativeEasyGrid.Col,
                                        { style: { flexDirection: 'row' }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 129
                                            }
                                        },
                                        _react3.default.createElement(_nativeBase.Icon, { name: 'ios-download-outline', style: _styles2.default.timelineIcon, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 130
                                            }
                                        }),
                                        _react3.default.createElement(
                                            _reactNative.View,
                                            { style: { paddingLeft: 25 }, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 131
                                                }
                                            },
                                            _react3.default.createElement(
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
                                    _react3.default.createElement(
                                        _reactNativeEasyGrid.Col,
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 135
                                            }
                                        },
                                        _react3.default.createElement(
                                            _reactNative.View,
                                            { style: _styles2.default.newsTypeView, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 136
                                                }
                                            },
                                            _react3.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _styles2.default.timeIcon, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 137
                                                }
                                            }),
                                            _react3.default.createElement(
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
                            _react3.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.timelineView, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 143
                                    }
                                },
                                _react3.default.createElement(
                                    _reactNative.View,
                                    { style: _styles2.default.timelineContent, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 144
                                        }
                                    },
                                    _react3.default.createElement(
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
                        _react3.default.createElement(
                            _reactNative.View,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 153
                                }
                            },
                            _react3.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.timelineView, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 154
                                    }
                                },
                                _react3.default.createElement(
                                    _reactNative.View,
                                    { style: _styles2.default.timelineContent, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 155
                                        }
                                    },
                                    _react3.default.createElement(_nativeBase.Text, {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 156
                                        }
                                    })
                                )
                            ),
                            _react3.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.contentContainer, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 159
                                    }
                                },
                                _react3.default.createElement(
                                    _reactNativeEasyGrid.Grid,
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 160
                                        }
                                    },
                                    _react3.default.createElement(
                                        _reactNativeEasyGrid.Col,
                                        { style: { flexDirection: 'row' }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 161
                                            }
                                        },
                                        _react3.default.createElement(_nativeBase.Icon, { name: 'ios-thumbs-up-outline', style: _styles2.default.timelineIcon, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 162
                                            }
                                        }),
                                        _react3.default.createElement(
                                            _reactNative.View,
                                            { style: { paddingLeft: 25 }, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 163
                                                }
                                            },
                                            _react3.default.createElement(
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
                                    _react3.default.createElement(
                                        _reactNativeEasyGrid.Col,
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 167
                                            }
                                        },
                                        _react3.default.createElement(
                                            _reactNative.View,
                                            { style: _styles2.default.newsTypeView, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 168
                                                }
                                            },
                                            _react3.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _styles2.default.timeIcon, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 169
                                                }
                                            }),
                                            _react3.default.createElement(
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
                            _react3.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.timelineView, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 175
                                    }
                                },
                                _react3.default.createElement(
                                    _reactNative.View,
                                    { style: _styles2.default.timelineContent, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 176
                                        }
                                    },
                                    _react3.default.createElement(
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
                        _react3.default.createElement(
                            _reactNative.View,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 185
                                }
                            },
                            _react3.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.timelineView, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 186
                                    }
                                },
                                _react3.default.createElement(
                                    _reactNative.View,
                                    { style: _styles2.default.timelineContent, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 187
                                        }
                                    },
                                    _react3.default.createElement(_nativeBase.Text, {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 188
                                        }
                                    })
                                )
                            ),
                            _react3.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.contentContainer, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 191
                                    }
                                },
                                _react3.default.createElement(
                                    _reactNativeEasyGrid.Grid,
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 192
                                        }
                                    },
                                    _react3.default.createElement(
                                        _reactNativeEasyGrid.Col,
                                        { style: { flexDirection: 'row' }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 193
                                            }
                                        },
                                        _react3.default.createElement(_nativeBase.Icon, { name: 'ios-copy-outline', style: _styles2.default.timelineIcon, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 194
                                            }
                                        }),
                                        _react3.default.createElement(
                                            _reactNative.View,
                                            { style: { paddingLeft: 25 }, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 195
                                                }
                                            },
                                            _react3.default.createElement(
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
                                    _react3.default.createElement(
                                        _reactNativeEasyGrid.Col,
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 199
                                            }
                                        },
                                        _react3.default.createElement(
                                            _reactNative.View,
                                            { style: _styles2.default.newsTypeView, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 200
                                                }
                                            },
                                            _react3.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _styles2.default.timeIcon, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 201
                                                }
                                            }),
                                            _react3.default.createElement(
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
                            _react3.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.timelineView, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 207
                                    }
                                },
                                _react3.default.createElement(
                                    _reactNative.View,
                                    { style: _styles2.default.timelineContent, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 208
                                        }
                                    },
                                    _react3.default.createElement(
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
                        _react3.default.createElement(
                            _reactNative.View,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 216
                                }
                            },
                            _react3.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.timelineView, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 217
                                    }
                                },
                                _react3.default.createElement(
                                    _reactNative.View,
                                    { style: _styles2.default.timelineContent, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 218
                                        }
                                    },
                                    _react3.default.createElement(_nativeBase.Text, {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 219
                                        }
                                    })
                                )
                            ),
                            _react3.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.contentContainer, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 222
                                    }
                                },
                                _react3.default.createElement(
                                    _reactNativeEasyGrid.Grid,
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 223
                                        }
                                    },
                                    _react3.default.createElement(
                                        _reactNativeEasyGrid.Col,
                                        { style: { flexDirection: 'row' }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 224
                                            }
                                        },
                                        _react3.default.createElement(_nativeBase.Icon, { name: 'ios-archive-outline', style: _styles2.default.timelineIcon, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 225
                                            }
                                        }),
                                        _react3.default.createElement(
                                            _reactNative.View,
                                            { style: { paddingLeft: 25 }, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 226
                                                }
                                            },
                                            _react3.default.createElement(
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
                                    _react3.default.createElement(
                                        _reactNativeEasyGrid.Col,
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 230
                                            }
                                        },
                                        _react3.default.createElement(
                                            _reactNative.View,
                                            { style: _styles2.default.newsTypeView, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 231
                                                }
                                            },
                                            _react3.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _styles2.default.timeIcon, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 232
                                                }
                                            }),
                                            _react3.default.createElement(
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
                            _react3.default.createElement(
                                _reactNative.View,
                                { style: _styles2.default.timelineView, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 238
                                    }
                                },
                                _react3.default.createElement(
                                    _reactNative.View,
                                    { style: _styles2.default.timelineContent, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 239
                                        }
                                    },
                                    _react3.default.createElement(
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
}(_react2.Component));

function bindAction(dispatch) {
    return {
        openDrawer: function openDrawer() {
            return dispatch((0, _drawer.openDrawer)());
        }
    };
}

exports.default = (0, _reactRedux.connect)(null, bindAction)(Timeline);