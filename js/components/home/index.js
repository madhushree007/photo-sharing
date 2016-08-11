'use strict';

import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';

import { replaceRoute } from '../../actions/route';
import { openDrawer } from '../../actions/drawer';

import { Container, Header, Content, Text, Button, Icon, Title } from 'native-base';

import theme from '../../themes/base-theme';
import styles from './styles';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    replaceRoute(route) {
        this.props.replaceRoute(route);
    }
    
    componentDidMount() {
        console.log(this.props);    
    }

    render() {
        return (
            <Container theme={theme}>
                <Image source={require('../../../images/BG-signUp.png')} style={styles.container} >
                    <Header>
                        <View style={styles.header} >
                            <View style={styles.rowHeader}>
                                <Button transparent style={styles.btnHeader} onPress={() => this.replaceRoute('login')}>
                                    <Icon name='ios-power' />
                                </Button>
                                
                                <Image source={require('../../../images/Header-Logo.png')} style={styles.imageHeader}>
                                </Image>

                                <Button transparent style={styles.btnHeader} onPress={this.props.openDrawer} >
                                    <Icon name='ios-menu' />
                                </Button>
                            </View>
                        </View>
                    </Header>

                    <Content padder>
                        <Text style={styles.text}>Username: {this.props.username}</Text>
                        <Text style={styles.text}>Password:  {this.props.password}</Text>
                    </Content>
                </Image>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        replaceRoute:(route)=>dispatch(replaceRoute(route))
    }
}

export default connect(null, bindAction)(Home);
