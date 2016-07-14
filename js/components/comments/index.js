
'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { DeviceEventEmitter, Dimensions,Image, View, TouchableOpacity,Platform } from 'react-native';
import {popRoute} from '../../actions/route';

import {Container, Header, Content, Text, Input, Button, Icon, Card, CardItem, Thumbnail } from 'native-base';
import { Grid, Col, Row } from "react-native-easy-grid";

import theme from '../../themes/base-theme';
import styles from './style';
var primary = require('../../themes/variable').brandPrimary;

class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleHeight: Dimensions.get('window').height,
            offset: {
                x:0,
                y:0
            }
        };
        this.constructor.childContextTypes = {
            theme: React.PropTypes.object,
        }
    }
   
    // componentWillMount () {
    //     DeviceEventEmitter.addListener('keyboardWillShow', this.keyboardWillShow.bind(this))
    //     DeviceEventEmitter.addListener('keyboardWillHide', this.keyboardWillHide.bind(this))
    // }

    // keyboardWillShow (e) {
    //     let newSize = Dimensions.get('window').height - e.endCoordinates.height
    //     this.setState({offset :{y: 80}});
    // }

    // keyboardWillHide (e) {
    //     this.setState({offset :{y: 0}});
    // }
   
    popRoute() {
        this.props.popRoute();
    }
    
    render() {
        return (
            <Container theme={theme}>
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                  <Grid style={{flexDirection: 'row',marginTop: 10}}>
                    <Col style={{padding: 10}}>
                      <Button transparent onPress={() => this.popRoute()}>
                        <Icon name="ios-arrow-back" style={{paddingTop: 10}} />
                      </Button>
                    </Col>
                    <Col style={{padding: 10}}>
                      <Button transparent  onPress={() => this.replaceRoute('comments')}>
                        <Icon name="ios-chatboxes-outline" style={{paddingTop: 10}} />
                      </Button>
                    </Col>
                    <Col style={{padding: 10}}>
                      <Button transparent>
                        <Text style={{fontSize: 28,paddingTop: 10}}>Aa</Text>
                      </Button>
                    </Col>
                    <Col style={{padding: 10}} >
                      <Button transparent>
                        <Icon name="ios-bookmarks-outline" style={{paddingTop: 10}} />
                      </Button>
                    </Col>
                    <Col style={{padding: 10}}>
                      <Button transparent>
                        <Icon name="ios-download-outline" style={{paddingTop: 10}} />
                      </Button>
                    </Col>
                  </Grid>
                </Header>

                    <Content>
                        <View style={styles.commentHeadbg}>
                            <Text style={{alignSelf: 'center',fontWeight: '900',fontSize: 20,paddingBottom: 20}}>23 COMMENTS</Text>
                            <Grid>
                                <Col>
                                    <Button rounded primary block  style={Platform.OS === 'android' ? styles.achannelBtn1 : styles.ioschannelBtn1}   textStyle={Platform.OS === 'android' ? {fontSize: 12,fontWeight: '900',textAlign: 'center'} : {fontSize: 12,fontWeight: '900',marginTop: -5}}>
                                        Best
                                    </Button>
                                </Col>
                                <Col>
                                    <Button transparent block  textStyle={{fontSize: 12,fontWeight: '900',textAlign: 'center'}}>
                                        Newest
                                    </Button>
                                </Col>
                                <Col>
                                    <Button transparent block  textStyle={{fontSize: 12,fontWeight: '900',textAlign: 'center'}}>
                                        Oldest
                                    </Button>
                                </Col>
                            </Grid>
                        </View>
                        <Card foregroundColor="#222" style={styles.card}>
                            <CardItem style={styles.cardHeader}  header>
                                <Thumbnail source={require('../../../images/contacts/sanket.png')} />
                                <Text>Kumar Sanket</Text>
                                <Icon name="ios-time-outline"  style={ Platform.OS === 'android' ? styles.atimeIcon : styles.iostimeIcon} />
                                <Text style={styles.date}>May 24, 11 AM</Text>
                                <Icon name="ios-heart-outline" style={ Platform.OS === 'android' ? styles.alikeIcon : styles.ioslikeIcon} />
                                <Text style={styles.date}>12</Text>
                            </CardItem>

                            <CardItem style={styles.cardItem} >
                                <Text>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. 
                                </Text>
                            </CardItem>
                        </Card>

                        <Card foregroundColor="#222" style={styles.card}>
                            <CardItem style={styles.cardHeader}  header>
                                <Thumbnail source={require('../../../images/contacts/pratik.png')} />
                                <Text>Kumar Pratik</Text>
                                <Icon name="ios-time-outline" style={ Platform.OS === 'android' ? styles.atimeIcon : styles.iostimeIcon} />
                                <Text style={styles.date}>May 24, 11 AM</Text>
                                <Icon name="ios-heart-outline" style={ Platform.OS === 'android' ? styles.alikeIcon : styles.ioslikeIcon} />
                                <Text style={styles.date}>12</Text>
                            </CardItem>
                            <CardItem style={styles.cardItem} >
                                <Text>
                                    It is a long established fact that a reader will be distracted by the readable content.
                                </Text>
                            </CardItem>
                        </Card>
                        
                        <Card foregroundColor="#222" style={styles.card}>
                            <CardItem style={styles.cardHeader}  header>
                                <Thumbnail source={require('../../../images/contacts/megha.png')} />
                                <Text>Kumari Megha</Text>
                                <Icon name="ios-time-outline" style={ Platform.OS === 'android' ? styles.atimeIcon : styles.iostimeIcon} />
                                <Text style={styles.date}>Apr 02, 7 PM</Text>
                                <Icon name="ios-heart-outline" style={ Platform.OS === 'android' ? styles.alikeIcon : styles.ioslikeIcon} />
                                <Text style={styles.date}>8</Text>
                            </CardItem>
                            <CardItem style={styles.cardItem} >
                                <Text>
                                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                                </Text>
                            </CardItem>
                        </Card>
                    
                        <Card foregroundColor="#222" style={styles.card}>
                            <CardItem style={styles.cardHeader}  header>
                                <Thumbnail source={require('../../../images/contacts/saurav.png')} />
                                <Text>Saurav Sahu</Text>
                                <Icon name="ios-time-outline" style={ Platform.OS === 'android' ? styles.atimeIcon : styles.iostimeIcon} />
                                <Text style={styles.date}>Feb 17, 4:30 PM</Text>
                                <Icon name="ios-heart-outline" style={ Platform.OS === 'android' ? styles.alikeIcon : styles.ioslikeIcon} />
                                <Text style={styles.date}>5</Text>
                            </CardItem>
                            <CardItem style={styles.cardItem} >
                                <Text>
                                    There are many variations of passages of Lorem Ipsum available.
                                </Text>
                            </CardItem>
                        </Card>
                    </Content>

                    <View style={{backgroundColor: '#fff',flexDirection: 'row',height: 55}}>
                        <View style={{padding: 20,paddingTop: 10}}>
                            <Icon name="ios-attach" style={{color: '#797979', fontSize: 27}} />
                        </View>
                        <Input placeholder="Write something..." placeholderTextColor="#797979" style={styles.input}/>
                        <TouchableOpacity style={{paddingRight: 20,paddingTop: 5}}>
                            <Icon name="ios-arrow-forward"  style={{alignSelf: 'flex-end',color: primary}} />
                        </TouchableOpacity>
                    </View>
                </Image>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        popRoute: () => dispatch(popRoute())
    }
}

export default connect(null, bindAction)(Comments);