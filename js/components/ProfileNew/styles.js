

const React = require('react-native');

const { Dimensions, Platform } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  cameraRollBox: {
    flexDirection: 'row',
    paddingTop: 10
  },
  cameraRoll: {
    paddingTop: 5
  },
  channelRow: {
    marginTop: 1,
  },
  channelImg: {
    height: (deviceHeight / 6),
    width: (deviceWidth / 3),
  },
  newsPoster: {
    height: (deviceHeight / 2) + 6,
    width: deviceWidth + 10,
    resizeMode: 'cover',
    flex: 1,
    position: 'relative',
    backgroundColor: '#FFF'
  },
  
};
