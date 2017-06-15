

const React = require('react-native');

const { Platform, Dimensions } = React;

const primary = require('../../themes/variable').brandPrimary;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  containerTop: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  profileUser: {
    alignSelf: 'center',
    fontSize: 16,
    paddingBottom: 5,
  },
  profileUserInfo: {
    alignSelf: 'center',
    fontSize: 12,
    color: '#FFF',
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 35,
  },
  profileInfo: {
    alignSelf: 'center',
    paddingTop: 5,
    paddingBottom: 10,
  },
  profileBtn: {
    alignSelf: 'center',
    backgroundColor: '#FFF',
    height: 24,
    marginTop: 10,
  },
  profileTxt: {
    fontSize: 12,
    color: '#000',
  },
  infoTab: {
    padding: 15,
    alignSelf: 'center',
    width: (deviceWidth - 80),
  },
  infoTabs_header: {
    alignSelf: 'center',
  },
  infoTabs_tabCounts: {
    fontSize: 14,
    alignSelf: 'center',
    paddingBottom: Platform.OS === 'android' ? 3 : 0,
  },
  infoTabs_tabName: {
    fontSize: 12,
    color: '#FFF',
  },
  linkTabs: {
    padding: 15,
    flex: 1,
    width: null,
    height: null,
  },
  linkTabs_header: {
    alignSelf: 'center',
  },
  newsImage: {
    width: 100,
    height: 120,
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
  newsLink: {
    color: '#666',
    fontSize: 12,
    alignSelf: 'flex-start',
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
  channelRow: {
    marginTop: 1,
  },
  channelImg: {
    height: (deviceHeight / 6),
    width: (deviceWidth / 3),
  },
  iconNew: {
    color: '#2D2D31',
    fontSize: 17,
  }
};
