'use strict';

var React = require('react-native');

var { StyleSheet } = React;

var primary = require('../../themes/variable').brandPrimary;

module.exports = StyleSheet.create({
    links: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        borderBottomWidth: 0,
        borderBottomColor: 'transparent'
    },
    alinks: {
        paddingTop: 8,
        paddingBottom: 8,
        borderBottomColor: 'transparent'
    },
    linkText: {
        paddingLeft: 20
    },
    logoutContainer: {
        padding: 30
    },
    logoutbtn: {
        paddingTop: 30,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: 'rgba(236, 236, 236, 0.82)'
    },
    background: {
        flex: 1,
        width: null,
        height:null,
        backgroundColor: primary
    },
    drawerContent: {
        paddingTop: 30
    },
    adrawerContent: {
        paddingTop: 20
    },
    aProfilePic: {
        height: 40,
        width: 40,
        borderRadius: 40
    },
    iosProfilePic: {
        height: 40,
        width: 40,
        borderRadius: 20
    }
});
