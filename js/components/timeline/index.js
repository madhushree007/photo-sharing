
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

class Timeline extends Component {

    render() {
        return (
            <Container theme={theme} style={styles.bg} >
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
                        <Text style={styles.overviewHeader}>MONDAY</Text>
                        <Text note  style={styles.overviewHead}>April 6, 2016</Text>
                    </View>

                    <Content style={{backgroundColor: 'transparent'}} >
                        <View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text></Text>
                                </View>
                            </View>
                            <View style={{backgroundColor: '#fff',paddingLeft: 20,paddingRight: 20}}>
                                <Grid>
                                    <Col style={{flexDirection:'row'}}>
                                        <Icon name="ios-bookmark" style={{alignSelf: 'center',color: '#999',marginLeft: 2}} />
                                        <View  style={{paddingLeft: 27}}>
                                            <Text style={styles.timelineContentHeading}>BOOKMARKED</Text>
                                        </View>
                                    </Col>   
                                    <Col>
                                        <View style={styles.newsTypeView}>
                                            <Icon name="ios-time-outline" style={ Platform.OS === 'android' ? styles.atimeIcon : styles.iostimeIcon} />
                                            <Text style={styles.time}>9:34am</Text>
                                        </View>
                                    </Col>
                                </Grid>
                            </View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text style={{color: '#222',fontSize: 14,fontWeight: '700'}}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text></Text>
                                </View>
                            </View>
                            <View style={{backgroundColor: '#fff',paddingLeft: 20,paddingRight: 20}}>
                                <Grid>
                                    <Col style={{flexDirection:'row'}}>
                                        <Icon name="ios-chatboxes-outline" style={styles.timelineIcon} />
                                        <View style={{paddingLeft: 18}}>
                                            <Text style={styles.timelineContentHeading}>COMMENTED</Text>
                                        </View>
                                    </Col>   
                                    <Col>
                                        <View style={styles.newsTypeView}>
                                            <Icon name="ios-time-outline" style={ Platform.OS === 'android' ? styles.atimeIcon : styles.iostimeIcon} />
                                            <Text style={styles.time}>10:05am</Text>
                                        </View>
                                    </Col>
                                </Grid>
                            </View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text style={{color: '#222',fontSize: 14,fontWeight: '700'}}>
                                        It has roots in a piece of classical Latin literature from 45 BC.
                                    </Text>
                                    <Text style={{color: '#aaa',fontSize: 12,fontWeight: '700'}}>
                                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text></Text>
                                </View>
                            </View>
                            <View style={{backgroundColor: '#fff',paddingLeft: 20,paddingRight: 20}}>
                                <Grid>
                                    <Col style={{flexDirection:'row'}}>
                                        <Icon name="ios-done-all" style={styles.timelineIcon} />
                                        <View style={{paddingLeft: 30}}>
                                            <Text style={styles.timelineContentHeading}>FOLLOWED</Text>
                                        </View>
                                    </Col>   
                                    <Col>
                                        <View style={styles.newsTypeView}>
                                            <Icon name="ios-time-outline" style={ Platform.OS === 'android' ? styles.atimeIcon : styles.iostimeIcon} />
                                            <Text style={styles.time}>5:36pm</Text>
                                        </View>
                                    </Col>
                                </Grid>
                            </View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text style={{color: '#222',fontSize: 14,fontWeight: '700'}}>"SPORTS" channel</Text>
                                </View>
                            </View>
                        </View>

                        <View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text></Text>
                                </View>
                            </View>
                            <View style={{backgroundColor: '#fff',paddingLeft: 20,paddingRight: 20}}>
                                <Grid>
                                    <Col style={{flexDirection:'row'}}>
                                        <Icon name="ios-download-outline" style={styles.timelineIcon} />
                                        <View style={{paddingLeft: 25}}>
                                            <Text style={styles.timelineContentHeading}>SHARED</Text>
                                        </View>
                                    </Col>   
                                    <Col>
                                        <View style={styles.newsTypeView}>
                                            <Icon name="ios-time-outline" style={ Platform.OS === 'android' ? styles.atimeIcon : styles.iostimeIcon} />
                                            <Text style={styles.time}>6:00pm</Text>
                                        </View>
                                    </Col>
                                </Grid>
                            </View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text style={{color: '#222',fontSize: 14,fontWeight: '700'}}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </Text>
                                </View>
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

export default connect(null, bindAction)(Timeline);
