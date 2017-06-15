

const React = require('react-native');

const { StyleSheet, Dimensions, Platform } = React;

// const primary = require('../../themes/variable').brandPrimary;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  iosShadow: {
    flex: 1,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 1,
    /*width: (deviceHeight < 500) ? 120 : (deviceWidth / 4) + 12,
    height: (deviceHeight < 500) ? 80 : (deviceHeight / 15),
    marginTop: (deviceWidth < 330) ? (deviceHeight / 10) : (deviceHeight / 50),*/
  },
 /* aShadow: {
    flex: 1,
    resizeMode: 'contain',
    width: (deviceWidth / 3) + 8,
    height: (deviceHeight / 20),
    padding: 20,
    alignSelf: 'center',
    marginTop: (deviceWidth < 330) ? (deviceHeight / 15) : ((deviceHeight / 5) - 60),
  },*/
  inputGrp: {
    flexDirection: 'row',
    marginTop: 20,
  },
  inputGrpFirst: {
    marginTop: 0,
  },
  input: {
    paddingLeft: 10,
    color: '#FFF'
  },
  background: {
    flex: 1,
    width: null,
    height: deviceHeight,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  bgTop: {
    flex: 1,
    width: null,
    height: deviceHeight,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  bg: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 0,
    /*marginTop: (deviceHeight < 500) ? (Platform.OS === 'android' ? 20 : 0) : (Platform.OS === 'android' ? ((deviceHeight / 6) - 45) : ((deviceHeight / 6) - 10)),*/
  },
  btnView: {
    width: deviceWidth / 2,
    alignSelf: 'center',
    paddingBottom: 60,
  },
  loginBtn: {
    marginTop: 10,
    height: 40,
    alignItems: 'center',
  },
  btnCreate: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  btnFacebook: {
    backgroundColor: '#4C66A4',
  },
  btnText: {
    color: '#FFF',
  },
  helpBtns: {
    opacity: 0.9,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF'
  },
  otherLinksContainer: {
    flexDirection: 'row',
  },
  smallText: {
    fontSize: 14,
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  tinyText: {
    fontSize: 12,
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 20,
  }
}
