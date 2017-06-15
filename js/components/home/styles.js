

const React = require('react-native');

const { Dimensions, Platform } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  txtColor: {
    color: '#000',
  },
  photoContent: {
    borderRadius: 5,
    marginLeft: 8,
    marginRight: 5,
  },
  profileImage: {
    flexDirection: 'row',
    width: 60,
  },
  profilePic: {
    height: 40,
    width: 40,
    borderRadius: Platform.OS === 'android' ? 40 : 20,
  },
  locationIcon: {
    fontSize: 14,
    marginLeft: Platform.OS === 'android' ? 15 : 0,
    paddingLeft: Platform.OS === 'android' ? 0 : 20,
    paddingRight: 10,
    marginTop: Platform.OS === 'android' ? -1 : -3,
    color: '#666',
  },
  menuIcon: {
    fontSize: 20,
    marginTop: Platform.OS === 'android' ? -1 : -3,
    color: '#666',
  },
  bigImage: {
    width: deviceWidth - 14,
    height: 240,
  },
  photoText: {
    color: '#aaa',
    fontSize: 13,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  swiperContentBox: {
    borderTopWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    borderTopColor: '#rgba(151, 151, 151, 0.5)',
  },
  swiperIcon: {
    fontSize: 12,
    marginLeft: Platform.OS === 'android' ? 15 : 0,
    paddingLeft: Platform.OS === 'android' ? 0 : 20,
    paddingRight: 6,
    marginTop: 0,
  },
  likeIcon: {
    fontSize: 17,
    paddingRight: 6,
    marginTop: 0,
    color: '#F9063F',
  },
  chatIcon: {
    fontSize: 17,
    paddingRight: 6,
    marginTop: 0,
    color: '#31A6EC',
  },
  sendIcon: {
    fontSize: 17,
    marginLeft: Platform.OS === 'android' ? 15 : 0,
    paddingLeft: Platform.OS === 'android' ? 0 : 20,
    paddingRight: 6,
    marginTop: 0,
    color: '#aaa',
  },
  newsLink: {
    color: '#666',
    fontSize: 14,
    alignSelf: 'flex-start',
  },
  newsContent: {
    flexDirection: 'column',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  newsHeader: {
    color: '#444',
    fontWeight: 'bold',
  },
  
  newsTypeView: {
    borderBottomWidth: 1,
    borderBottomColor: '#666',
    alignSelf: 'flex-end',
  },
  newsTypeText: {
    color: '#666',
    fontSize: 12,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  newsPoster: {
    height: null,
    width: null,
    resizeMode: 'cover',
    flex: 1,
    position: 'relative',
  },
  newsPosterHeader: {
    fontWeight: '900',
  },
  newsPosterLink: {
    opacity: 0.8,
    fontSize: 12,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  newsPosterTypeView: {
    borderBottomWidth: 1,
    borderBottomColor: '#666',
    alignSelf: 'flex-end',
  },
  newsPosterTypeText: {
    opacity: 0.8,
    fontSize: 12,
    fontWeight: 'bold',
    paddingBottom: 5,
  },

  headertimeIcon: {
    fontSize: 20,
    marginLeft: Platform.OS === 'android' ? 15 : 0,
    paddingLeft: Platform.OS === 'android' ? 0 : 20,
    paddingRight: 10,
    marginTop: Platform.OS === 'android' ? -1 : 0,
    color: '#fff',
  },
  slide: {
    flex: 1,
    width: null,
    backgroundColor: 'transparent',
  },
  swiperTextContent: {
    position: 'absolute',
    bottom: -5,
    padding: 20,
  },
  swiperDot: {
    backgroundColor: 'rgba(0,0,0,.8)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 0,
  },
  swiperActiveDot: {
    backgroundColor: '#fff',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 0,
  },

  container: {
    flex: 1,
    width: null,
    height: null,
  },
  logoHeader: {
    width: 20,
    height: 28,
    alignSelf: 'center',
  },
  text: {
    fontSize: 15,
    color: '#000',
    marginBottom: 10,
  },
  header: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: (Platform.OS === 'ios') ? undefined : -30,
  },
  rowHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    paddingTop: Platform.OS === 'android' ? 0 : 0,
  },
  btnHeader: {
  },
  imageHeader: {
    height: 25,
    width: 95,
    resizeMode: 'contain',
  },
};
