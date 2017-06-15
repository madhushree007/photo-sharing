

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
  searchContainer: {
    width: (deviceWidth - 100 ),
    marginTop: 10,
    paddingLeft: 10,
    marginBottom: 10,
    height: 20,

  },
  iconSearch: {
    marginLeft: 5,
    fontSize: 20,
    color: '#aaa',
  },
  inputGrp: {
    flexDirection: 'row',
    borderRadius: 25,
    backgroundColor: '#FFF',
    borderWidth: 0,
    borderColor: 'transparent',
  },
  input: {
    color: '#000',
    height: 34,
    fontSize: 16,
  },
  
};
