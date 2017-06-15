Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp2,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-swiper/src/index.js';

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  _component: {}
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-swiper/src/index.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var _Dimensions$get = _reactNative.Dimensions.get('window'),
    width = _Dimensions$get.width,
    height = _Dimensions$get.height;

var styles = {
  container: {
    backgroundColor: 'transparent',
    position: 'relative'
  },

  wrapper: {
    backgroundColor: 'transparent'
  },

  slide: {
    backgroundColor: 'transparent'
  },

  pagination_x: {
    position: 'absolute',
    bottom: 25,
    left: 0,
    right: 0,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },

  pagination_y: {
    position: 'absolute',
    right: 15,
    top: 0,
    bottom: 0,
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },

  title: {
    height: 30,
    justifyContent: 'center',
    position: 'absolute',
    paddingLeft: 10,
    bottom: -30,
    left: 0,
    flexWrap: 'nowrap',
    width: 250,
    backgroundColor: 'transparent'
  },

  buttonWrapper: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  buttonText: {
    fontSize: 50,
    color: '#007aff',
    fontFamily: 'Arial'
  }
};

var _component = _wrapComponent('_component')((_temp2 = _class = function (_Component) {
  _inherits(_class, _Component);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = _this.initState(_this.props, true), _this.autoplayTimer = null, _this.loopJumpTimer = null, _this.loopJump = function () {
      if (!_this.state.loopJump) return;
      var i = _this.state.index + (_this.props.loop ? 1 : 0);
      var scrollView = _this.refs.scrollView;
      _this.loopJumpTimer = setTimeout(function () {
        return scrollView.setPageWithoutAnimation && scrollView.setPageWithoutAnimation(i);
      }, 50);
    }, _this.autoplay = function () {
      if (!Array.isArray(_this.props.children) || !_this.props.autoplay || _this.internals.isScrolling || _this.state.autoplayEnd) return;

      _this.autoplayTimer && clearTimeout(_this.autoplayTimer);
      _this.autoplayTimer = setTimeout(function () {
        if (!_this.props.loop && (_this.props.autoplayDirection ? _this.state.index === _this.state.total - 1 : _this.state.index === 0)) return _this.setState({ autoplayEnd: true });

        _this.scrollBy(_this.props.autoplayDirection ? 1 : -1);
      }, _this.props.autoplayTimeout * 1000);
    }, _this.onScrollBegin = function (e) {
      _this.internals.isScrolling = true;
      _this.props.onScrollBeginDrag && _this.props.onScrollBeginDrag(e, _this.fullState(), _this);
    }, _this.onScrollEnd = function (e) {
      _this.internals.isScrolling = false;

      if (!e.nativeEvent.contentOffset) {
        if (_this.state.dir === 'x') {
          e.nativeEvent.contentOffset = { x: e.nativeEvent.position * _this.state.width };
        } else {
          e.nativeEvent.contentOffset = { y: e.nativeEvent.position * _this.state.height };
        }
      }

      _this.updateIndex(e.nativeEvent.contentOffset, _this.state.dir, function () {
        _this.autoplay();
        _this.loopJump();

        _this.props.onMomentumScrollEnd && _this.props.onMomentumScrollEnd(e, _this.fullState(), _this);
      });
    }, _this.onScrollEndDrag = function (e) {
      var contentOffset = e.nativeEvent.contentOffset;
      var _this$props = _this.props,
          horizontal = _this$props.horizontal,
          children = _this$props.children;
      var index = _this.state.index;
      var offset = _this.internals.offset;

      var previousOffset = horizontal ? offset.x : offset.y;
      var newOffset = horizontal ? contentOffset.x : contentOffset.y;

      if (previousOffset === newOffset && (index === 0 || index === children.length - 1)) {
        _this.internals.isScrolling = false;
      }
    }, _this.updateIndex = function (offset, dir, cb) {
      var state = _this.state;
      var index = state.index;
      var diff = offset[dir] - _this.internals.offset[dir];
      var step = dir === 'x' ? state.width : state.height;
      var loopJump = false;

      if (!diff) return;

      index = parseInt(index + Math.round(diff / step));

      if (_this.props.loop) {
        if (index <= -1) {
          index = state.total - 1;
          offset[dir] = step * state.total;
          loopJump = true;
        } else if (index >= state.total) {
          index = 0;
          offset[dir] = step;
          loopJump = true;
        }
      }

      var newState = {};
      newState.index = index;
      newState.loopJump = loopJump;

      _this.internals.offset = offset;

      if (loopJump) {
        if (offset[dir] === _this.state.offset[dir]) {
          newState.offset = { x: 0, y: 0 };
          newState.offset[dir] = offset[dir] + 1;
          _this.setState(newState, function () {
            _this.setState({ offset: offset }, cb);
          });
        } else {
          newState.offset = offset;
          _this.setState(newState, cb);
        }
      } else {
        _this.setState(newState, cb);
      }
    }, _this.scrollBy = function (index) {
      var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (_this.internals.isScrolling || _this.state.total < 2) return;
      var state = _this.state;
      var diff = (_this.props.loop ? 1 : 0) + index + _this.state.index;
      var x = 0;
      var y = 0;
      if (state.dir === 'x') x = diff * state.width;
      if (state.dir === 'y') y = diff * state.height;

      if (_reactNative.Platform.OS === 'android') {
        _this.refs.scrollView && _this.refs.scrollView[animated ? 'setPage' : 'setPageWithoutAnimation'](diff);
      } else {
        _this.refs.scrollView && _this.refs.scrollView.scrollTo({ x: x, y: y, animated: animated });
      }

      _this.internals.isScrolling = true;
      _this.setState({
        autoplayEnd: false
      });

      if (!animated || _reactNative.Platform.OS === 'android') {
        setImmediate(function () {
          _this.onScrollEnd({
            nativeEvent: {
              position: diff
            }
          });
        });
      }
    }, _this.scrollViewPropOverrides = function () {
      var props = _this.props;
      var overrides = {};

      for (var prop in props) {
        if (typeof props[prop] === 'function' && prop !== 'onMomentumScrollEnd' && prop !== 'renderPagination' && prop !== 'onScrollBeginDrag') {
          (function () {
            var originResponder = props[prop];
            overrides[prop] = function (e) {
              return originResponder(e, _this.fullState(), _this);
            };
          })();
        }
      }

      return overrides;
    }, _this.renderPagination = function () {
      if (_this.state.total <= 1) return null;

      var dots = [];
      var ActiveDot = _this.props.activeDot || _react3.default.createElement(_reactNative.View, { style: [{
          backgroundColor: _this.props.activeDotColor || '#007aff',
          width: 8,
          height: 8,
          borderRadius: 4,
          marginLeft: 3,
          marginRight: 3,
          marginTop: 3,
          marginBottom: 3
        }, _this.props.activeDotStyle], __source: {
          fileName: _jsxFileName,
          lineNumber: 458
        }
      });
      var Dot = _this.props.dot || _react3.default.createElement(_reactNative.View, { style: [{
          backgroundColor: _this.props.dotColor || 'rgba(0,0,0,.2)',
          width: 8,
          height: 8,
          borderRadius: 4,
          marginLeft: 3,
          marginRight: 3,
          marginTop: 3,
          marginBottom: 3
        }, _this.props.dotStyle], __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        }
      });
      for (var i = 0; i < _this.state.total; i++) {
        dots.push(i === _this.state.index ? _react3.default.cloneElement(ActiveDot, { key: i }) : _react3.default.cloneElement(Dot, { key: i }));
      }

      return _react3.default.createElement(
        _reactNative.View,
        { pointerEvents: 'none', style: [styles['pagination_' + _this.state.dir], _this.props.paginationStyle], __source: {
            fileName: _jsxFileName,
            lineNumber: 486
          }
        },
        dots
      );
    }, _this.renderTitle = function () {
      var child = _this.props.children[_this.state.index];
      var title = child && child.props && child.props.title;
      return title ? _react3.default.createElement(
        _reactNative.View,
        { style: styles.title, __source: {
            fileName: _jsxFileName,
            lineNumber: 496
          }
        },
        _this.props.children[_this.state.index].props.title
      ) : null;
    }, _this.renderNextButton = function () {
      var button = null;

      if (_this.props.loop || _this.state.index !== _this.state.total - 1) {
        button = _this.props.nextButton || _react3.default.createElement(
          _reactNative.Text,
          { style: styles.buttonText, __source: {
              fileName: _jsxFileName,
              lineNumber: 507
            }
          },
          '\u203A'
        );
      }

      return _react3.default.createElement(
        _reactNative.TouchableOpacity,
        { onPress: function onPress() {
            return button !== null && _this.scrollBy(1);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 511
          }
        },
        _react3.default.createElement(
          _reactNative.View,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 512
            }
          },
          button
        )
      );
    }, _this.renderPrevButton = function () {
      var button = null;

      if (_this.props.loop || _this.state.index !== 0) {
        button = _this.props.prevButton || _react3.default.createElement(
          _reactNative.Text,
          { style: styles.buttonText, __source: {
              fileName: _jsxFileName,
              lineNumber: 523
            }
          },
          '\u2039'
        );
      }

      return _react3.default.createElement(
        _reactNative.TouchableOpacity,
        { onPress: function onPress() {
            return button !== null && _this.scrollBy(-1);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 527
          }
        },
        _react3.default.createElement(
          _reactNative.View,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 528
            }
          },
          button
        )
      );
    }, _this.renderButtons = function () {
      return _react3.default.createElement(
        _reactNative.View,
        { pointerEvents: 'box-none', style: [styles.buttonWrapper, {
            width: _this.state.width,
            height: _this.state.height
          }, _this.props.buttonWrapperStyle], __source: {
            fileName: _jsxFileName,
            lineNumber: 537
          }
        },
        _this.renderPrevButton(),
        _this.renderNextButton()
      );
    }, _this.renderScrollView = function (pages) {
      if (_reactNative.Platform.OS === 'ios') {
        return _react3.default.createElement(
          _reactNative.ScrollView,
          _extends({ ref: 'scrollView'
          }, _this.props, _this.scrollViewPropOverrides(), {
            contentContainerStyle: [styles.wrapper, _this.props.style],
            contentOffset: _this.state.offset,
            onScrollBeginDrag: _this.onScrollBegin,
            onMomentumScrollEnd: _this.onScrollEnd,
            onScrollEndDrag: _this.onScrollEndDrag, __source: {
              fileName: _jsxFileName,
              lineNumber: 550
            }
          }),
          pages
        );
      }
      return _react3.default.createElement(
        _reactNative.ViewPagerAndroid,
        _extends({ ref: 'scrollView'
        }, _this.props, {
          initialPage: _this.props.loop ? _this.state.index + 1 : _this.state.index,
          onPageSelected: _this.onScrollEnd,
          style: { flex: 1 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 563
          }
        }),
        pages
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var sizeChanged = (nextProps.width || width) !== this.state.width || (nextProps.height || height) !== this.state.height;
      if (!nextProps.autoplay && this.autoplayTimer) clearTimeout(this.autoplayTimer);
      this.setState(this.initState(nextProps, sizeChanged));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.autoplay();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.autoplayTimer && clearTimeout(this.autoplayTimer);
      this.loopJumpTimer && clearTimeout(this.loopJumpTimer);
    }
  }, {
    key: 'initState',
    value: function initState(props, setOffsetInState) {
      var state = this.state || {};

      var initState = {
        autoplayEnd: false,
        loopJump: false
      };

      var newInternals = {
        isScrolling: false
      };

      initState.total = props.children ? props.children.length || 1 : 0;

      if (state.total === initState.total) {
        initState.index = state.index;
      } else {
        setOffsetInState = true;
        initState.index = initState.total > 1 ? Math.min(props.index, initState.total - 1) : 0;
      }

      initState.dir = props.horizontal === false ? 'y' : 'x';
      initState.width = props.width || width;
      initState.height = props.height || height;
      newInternals.offset = {};

      if (initState.total > 1) {
        var setup = initState.index;
        if (props.loop) {
          setup++;
        }
        newInternals.offset[initState.dir] = initState.dir === 'y' ? initState.height * setup : initState.width * setup;
      }

      if (setOffsetInState) {
        initState.offset = newInternals.offset;
      }

      this.internals = newInternals;
      return initState;
    }
  }, {
    key: 'fullState',
    value: function fullState() {
      return _extends({}, this.state, this.internals);
    }
  }, {
    key: 'render',
    value: function render() {
      var state = this.state;
      var props = this.props;
      var children = props.children;
      var index = state.index;
      var total = state.total;
      var loop = props.loop;

      var loopVal = loop ? 1 : 0;

      var pages = [];

      var pageStyle = [{ width: state.width, height: state.height }, styles.slide];
      var pageStyleLoading = {
        width: this.state.width,
        height: this.state.height,
        justifyContent: 'center',
        alignItems: 'center'
      };

      if (total > 1) {
        pages = Object.keys(children);
        if (loop) {
          pages.unshift(total - 1 + '');
          pages.push('0');
        }

        pages = pages.map(function (page, i) {
          if (props.loadMinimal) {
            if (i >= index + loopVal - props.loadMinimalSize && i <= index + loopVal + props.loadMinimalSize) {
              return _react3.default.createElement(
                _reactNative.View,
                { style: pageStyle, key: i, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 611
                  }
                },
                children[page]
              );
            } else {
              return _react3.default.createElement(
                _reactNative.View,
                { style: pageStyleLoading, key: 'loading-' + i, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 614
                  }
                },
                props.loadMinimalLoader ? props.loadMinimalLoader : _react3.default.createElement(_reactNative.ActivityIndicator, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 615
                  }
                })
              );
            }
          } else {
            return _react3.default.createElement(
              _reactNative.View,
              { style: pageStyle, key: i, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 620
                }
              },
              children[page]
            );
          }
        });
      } else {
        pages = _react3.default.createElement(
          _reactNative.View,
          { style: pageStyle, key: 0, __source: {
              fileName: _jsxFileName,
              lineNumber: 624
            }
          },
          children
        );
      }

      return _react3.default.createElement(
        _reactNative.View,
        { style: [styles.container, {
            width: state.width,
            height: state.height
          }], __source: {
            fileName: _jsxFileName,
            lineNumber: 628
          }
        },
        this.renderScrollView(pages),
        props.showsPagination && (props.renderPagination ? this.props.renderPagination(state.index, state.total, this) : this.renderPagination()),
        this.renderTitle(),
        this.props.showsButtons && this.renderButtons()
      );
    }
  }]);

  return _class;
}(_react2.Component), _class.propTypes = {
  horizontal: _react2.PropTypes.bool,
  children: _react2.PropTypes.node.isRequired,
  style: _reactNative.View.propTypes.style,
  pagingEnabled: _react2.PropTypes.bool,
  showsHorizontalScrollIndicator: _react2.PropTypes.bool,
  showsVerticalScrollIndicator: _react2.PropTypes.bool,
  bounces: _react2.PropTypes.bool,
  scrollsToTop: _react2.PropTypes.bool,
  removeClippedSubviews: _react2.PropTypes.bool,
  automaticallyAdjustContentInsets: _react2.PropTypes.bool,
  showsPagination: _react2.PropTypes.bool,
  showsButtons: _react2.PropTypes.bool,
  loadMinimal: _react2.PropTypes.bool,
  loadMinimalSize: _react2.PropTypes.number,
  loadMinimalLoader: _react2.PropTypes.element,
  loop: _react2.PropTypes.bool,
  autoplay: _react2.PropTypes.bool,
  autoplayTimeout: _react2.PropTypes.number,
  autoplayDirection: _react2.PropTypes.bool,
  index: _react2.PropTypes.number,
  renderPagination: _react2.PropTypes.func,
  dotStyle: _react2.PropTypes.object,
  activeDotStyle: _react2.PropTypes.object,
  dotColor: _react2.PropTypes.string,
  activeDotColor: _react2.PropTypes.string
}, _class.defaultProps = {
  horizontal: true,
  pagingEnabled: true,
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
  bounces: false,
  scrollsToTop: false,
  removeClippedSubviews: true,
  automaticallyAdjustContentInsets: false,
  showsPagination: true,
  showsButtons: false,
  loop: true,
  loadMinimal: false,
  loadMinimalSize: 1,
  autoplay: false,
  autoplayTimeout: 2.5,
  autoplayDirection: true,
  index: 0
}, _temp2));

exports.default = _component;