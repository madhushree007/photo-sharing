'use strict';

var React = require('react-native');

var { StyleSheet, Dimensions, Platform } = React;

var primary = require('../../themes/variable').brandPrimary;
var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null
    },
    iosShadow: {
        flex: 1,
        width: (deviceWidth/4)+12,
        height:  (deviceHeight/100),
        alignSelf: 'center',
        marginTop: (deviceHeight/5) 
    },
    aShadow: {
        flex: 1,
        width:  (deviceWidth/3),
        height: (deviceHeight/20),
        padding: 20,
        alignSelf: 'center',
        marginTop: (deviceHeight/5) - 40
    },
    inputGrp: {
        flexDirection: 'row',
        borderRadius: 25,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20
    },
    iosInputIcon: {
        alignSelf: 'center',
        paddingLeft: 20
    },
    inputIcon: {
        alignSelf: 'center',
        marginLeft: 20
    },
    input: {
        paddingLeft: 15
    },
    background: {
        flex: 1,
        width: null,
        height: deviceHeight,
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    bg: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 70,
        marginTop: Platform.OS === 'android' ? ((deviceHeight/6) - 35) : ((deviceHeight/6) - 10)
    },
    loginBtn: {
        marginTop: 10,
        height: 50
    },
    helpBtns: {
        opacity: 0.7,
        fontSize: 14,
        fontWeight: 'bold'
    },
    otherLinksContainer: {
        flexDirection: 'row',
        marginTop: Platform.OS === 'android' ? 10 : 0
    }
});
