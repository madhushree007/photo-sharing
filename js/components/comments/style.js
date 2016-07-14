
'use strict';

var React = require('react-native');
var primary = require('../../themes/variable').brandPrimary;
var { StyleSheet, Dimensions } = React;

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;
module.exports = StyleSheet.create({
    container: {
        width: null,
        height: null,
        flex: 1
    },
    commentHeadbg: {
        backgroundColor: primary,
        padding: 20
    },
    card: {
        backgroundColor: '#fff',
        borderWidth: 0
    },
    cardHeader: {
        backgroundColor: 'transparent',
        borderBottomWidth: 0,
        paddingBottom: 10,
        height: 65
    },
    cardItem: {
        backgroundColor: 'transparent',
        paddingTop: 5,
        paddingLeft: 55
    },
    date: {
        textAlign: 'right',
        fontWeight: '100',
        fontSize: 12,
        marginTop: 5
    },
    iostimeIcon: {
        fontSize: 16,
        paddingLeft: 15,
        marginTop: 8,
        marginRight: -20,
        color: '#666',
    },
    atimeIcon: {
        fontSize: 16,
        paddingLeft: 15,
        marginTop: 2,
        marginRight: -20,
        color: '#666',
    },
    ioslikeIcon: {
        fontSize: 16,
        marginTop: 8,
        marginRight: -20,
        paddingLeft: 2
    },
    alikeIcon: {
        fontSize: 16,
        marginTop: 2,
        marginRight: -20,
        paddingLeft: 2
    },
    ioschannelBtn1: {
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.5)',
    },
    achannelBtn1: {
        borderWidth: 1,
        borderColor: '#ddd',
    },
    input: {
        color: '#222',
    },
    commentBox: {
        backgroundColor: 'transparent',
        marginTop: 60,
    },
});