
'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Image, View,Platform } from 'react-native';
import ProgressBar from "./../loaders/ProgressBar";
import {openDrawer} from '../../actions/drawer';

import {Container, Header, Content, Text, Button, Icon} from 'native-base';
import { Grid, Col, Row } from "react-native-easy-grid";

import theme from '../../themes/base-theme';
import styles from './styles';

class Overview extends Component {

    render() {
        return (
            <Container theme={theme} style={styles.Bg} >
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                        <Button transparent onPress={this.props.openDrawer}  style={Platform.OS === 'android' ? styles.aheaderIcon : styles.iosheaderIcon}>
                            <Icon name="ios-menu" />
                        </Button>
                    
                        <Image source={require('../../../images/Header-Logo.png')} style={styles.logoHeader} />
                        
                        <Button transparent  style={Platform.OS === 'android' ? styles.aheaderIcon : styles.iosheaderIcon}>
                            <Icon name="ios-search" />
                        </Button>    
                    </Header>
                    <View style={styles.overviewHeaderContainer}>
                        <Text style={styles.overviewHeader}>OVERVIEW</Text>
                        <Text note  style={styles.overviewHead}>What you are reading the most</Text>
                    </View>


                    <Content >
                        <View style={{padding: 20}}>
                            <View style={{paddingBottom: 20}}>
                                <Grid style={Platform.OS === 'android' ? {paddingBottom: 0} : {paddingBottom: 15}}>
                                    <Col>
                                        <Text style={styles.overviewInfoHeader}>FASHION</Text>
                                    </Col>
                                    <Col>
                                        <Text style={styles.overviewInfoPerc}>34%</Text>
                                    </Col>
                                </Grid>
                                <ProgressBar color="#fff" progress={34} />
                            </View>
                            <View style={{paddingBottom: 20}}>
                                <Grid style={Platform.OS === 'android' ? {paddingBottom: 0} : {paddingBottom: 15}}>
                                    <Col>
                                        <Text style={styles.overviewInfoHeader}>ENVIRONMENT</Text>
                                    </Col>
                                    <Col>
                                        <Text style={styles.overviewInfoPerc}>28%</Text>
                                    </Col>
                                </Grid>
                                <ProgressBar color="#fff" progress={28} />
                            </View>
                            <View style={{paddingBottom: 20}}>
                                <Grid style={Platform.OS === 'android' ? {paddingBottom: 0} : {paddingBottom: 15}}>
                                    <Col>
                                        <Text style={styles.overviewInfoHeader}>TECHNOLOGY</Text>
                                    </Col>
                                    <Col>
                                        <Text style={styles.overviewInfoPerc}>12%</Text>
                                    </Col>
                                </Grid>
                                <ProgressBar color="#fff" progress={12} />
                            </View>
                            <View style={{paddingBottom: 20}}>
                                <Grid style={Platform.OS === 'android' ? {paddingBottom: 0} : {paddingBottom: 15}}>
                                    <Col>
                                        <Text style={styles.overviewInfoHeader}>AUTO</Text>
                                    </Col>
                                    <Col>
                                        <Text style={styles.overviewInfoPerc}>10%</Text>
                                    </Col>
                                </Grid>
                                <ProgressBar color="#fff" progress={10} />
                            </View>
                            <View style={{paddingBottom: 20}}>
                                <Grid style={Platform.OS === 'android' ? {paddingBottom: 0} : {paddingBottom: 15}}>
                                    <Col>
                                        <Text style={styles.overviewInfoHeader}>FINANCE</Text>
                                    </Col>
                                    <Col>
                                        <Text style={styles.overviewInfoPerc}>8%</Text>
                                    </Col>
                                </Grid>
                                <ProgressBar color="#fff" progress={8} />
                            </View>
                            <View style={{paddingBottom: 20}}>
                                <Grid style={Platform.OS === 'android' ? {paddingBottom: 0} : {paddingBottom: 15}}>
                                    <Col>
                                        <Text style={styles.overviewInfoHeader}>SCIENCE</Text>
                                    </Col>
                                    <Col>
                                        <Text style={styles.overviewInfoPerc}>5%</Text>
                                    </Col>
                                </Grid>
                                <ProgressBar color="#fff" progress={5} />
                            </View>
                            <View style={{paddingBottom: 20}}>
                                <Grid style={Platform.OS === 'android' ? {paddingBottom: 0} : {paddingBottom: 15}}>
                                    <Col>
                                        <Text style={styles.overviewInfoHeader}>SPORTS</Text>
                                    </Col>
                                    <Col>
                                        <Text style={styles.overviewInfoPerc}>3%</Text>
                                    </Col>
                                </Grid>
                                <ProgressBar color="#fff" progress={3} />
                            </View>
                        </View>
                    </Content>
                </Image>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer())
    }
}

export default connect(null, bindAction)(Overview);
