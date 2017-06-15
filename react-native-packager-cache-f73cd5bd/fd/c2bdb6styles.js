Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = require('react-native');
var Dimensions = React.Dimensions,
    Platform = React.Platform;


var primary = require('../../themes/variable').brandPrimary;
var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

exports.default = {
  container: {
    flex: 1,
    width: null,
    height: null
  },
  bgHead: {
    backgroundColor: primary,
    flex: 1
  },
  imageHeader: {
    height: 25,
    width: 95,
    resizeMode: 'contain'
  },
  channelBtn1: {
    borderWidth: 1,
    borderColor: Platform.OS === 'android' ? '#ddd' : 'rgba(255,255,255,0.5)'
  },
  na: {},
  channelImg: {
    height: deviceHeight / 4 + 10,
    width: deviceWidth / 2 + 2
  },
  ioschannelImgText: {
    fontSize: 12,
    fontWeight: '900',
    padding: 20,
    paddingLeft: 0,
    paddingBottom: 0,
    marginBottom: 0,
    marginLeft: 20,
    marginTop: deviceHeight / 6 + 10
  },
  achannelImgText: {
    fontSize: 12,
    fontWeight: '900',
    marginLeft: 20,
    marginTop: deviceHeight / 4 - 20
  }
};