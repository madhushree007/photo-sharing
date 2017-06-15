

const React = require('react-native');

const { Platform, Dimensions } = React;

const deviceWidth = Dimensions.get('window').width;
const primary = require('../../themes/variable').brandPrimary;

export default {
  container: {
    width: null,
    height: null,
    flex: 1,
  },
  headerContainer: {
    marginTop: (Platform.OS === 'android') ? -5 : undefined,
    marginLeft: (Platform.OS === 'android') ? -5 : undefined,
  },
  headerBtns: {
    padding: 10,
    alignSelf: 'center',
  },
  headerIcons: {
    fontSize: 30,
  },
  headerTextIcon: {
    fontSize: 28,
    paddingTop: 10,
    marginTop: Platform.OS === 'android' ? -10 : 0,
  },
  commentHeadbg: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    backgroundColor: '#ddd',
    marginBottom: 10,
    paddingBottom: 20,
  },
  commentHeader: {
    alignSelf: 'center',
    fontWeight: '900',
    fontSize: 20,
    marginTop: 20,
  },
  channelBtn1: {
    borderWidth: 1,
    borderColor: Platform.OS === 'android' ? '#ddd' : 'rgba(255,255,255,0.5)',
  },
  card: {
    backgroundColor: '#fff',
    marginTop: null,
    marginBottom: null,
    marginLeft: null,
    marginRight: null,
  },
  cardHeader: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    paddingBottom: 10,
  },
  cardItem: {
    backgroundColor: 'transparent',
    paddingTop: 5,
    paddingLeft: 50,
  },
  timeIcon: {
    fontSize: 16,
    color: '#666',
    width: null,
  },
  date: {
    fontWeight: '300',
    fontSize: 12,
    color: '#666',
    lineHeight: 16,
    paddingLeft: 5,
    paddingRight: 10,
  },
  likeIcon: {
    fontSize: 16,
    color: '#666',
    width: null,
  },
  commentBox: {
    backgroundColor: '#EEE',
    alignItems: 'center',
    paddingLeft: 10,
  },
  attachIconContainer: {
    padding: 10,
        // paddingTop: 10
  },
  attachIcon: {
    color: '#797979',
    fontSize: 27,
  },
  input: {
    color: '#222',
  },
  arrowForwardIcon: {
    color: primary,
  },
  arrowForwardIconContainer: {
    paddingTop: 5,
  },
  cmtName: {
    fontSize: (deviceWidth < 330) ? 15 : 17,
    color: '#000',
    paddingLeft: 10,
  },
  searchContainer: {
    width: (deviceWidth - 100 ),
    marginTop: 10,
    paddingLeft: 10,
    marginBottom: 10,

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
  tabsNew: {
    backgroundColor: '#000',
    height: 40,
  },
};
