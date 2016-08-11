'use strict';

import React, { Component} from 'react';
import { Image, Platform } from 'react-native';
import { connect } from 'react-redux';

import { closeDrawer } from '../../actions/drawer';
import { replaceOrPushRoute, resetRoute } from '../../actions/route';

import { Container, Content, Text, Icon, List, ListItem } from 'native-base';

import styles from './style';

class SideBar extends Component {

	navigateTo(route) {
        this.props.closeDrawer();
        this.props.replaceOrPushRoute(route);
    }
    resetRoute(route) {
        this.props.closeDrawer();
        this.props.resetRoute(route);
    }
    
    render(){
        return (
        	<Container>
                <Image source={require('../../../images/BG-signUp.png')} style={styles.background} >
                    <Content style={Platform.OS === 'android' ? styles.adrawerContent : styles.drawerContent}>
                        <List  foregroundColor={'white'} >
                            <ListItem 
                                button iconLeft
                                onPress={() => this.navigateTo('home')} 
                                style={Platform.OS === 'android' ? styles.alinks : styles.links} 
                            >
                                <Icon name='ios-grid-outline' />
                                <Text style={styles.linkText} >HOME</Text>
                            </ListItem>
                            
                            <ListItem 
                                button iconLeft 
                                onPress={() => this.navigateTo('blankPage')} 
                                style={Platform.OS === 'android' ? styles.alinks : styles.links}
                            >
                                <Icon name='ios-keypad-outline' />
                                <Text style={styles.linkText}>BLANK PAGE</Text>
                            </ListItem>
                        </List>
                    </Content>
                </Image>
            </Container>
        );
    }
}

function bindAction(dispatch) {
    return {
        closeDrawer: ()=>dispatch(closeDrawer()),
        replaceOrPushRoute:(route)=>dispatch(replaceOrPushRoute(route))
    }
}

export default connect(null, bindAction)(SideBar);
