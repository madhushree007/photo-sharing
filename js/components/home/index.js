
'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Image, View, TouchableOpacity,Platform } from 'react-native';
import Swiper from 'react-native-swiper';
import {pushNewRoute} from '../../actions/route';
import {openDrawer} from '../../actions/drawer';

import {Container, Header, Content, Text, Button, Icon, Card} from 'native-base';
import { Grid, Col, Row } from "react-native-easy-grid";

import theme from '../../themes/base-theme';
import styles from './styles';

const renderPagination = (index, total, context) => {
    return (
        <View style={{ position: 'absolute', bottom: -25, right: 10 }}>
            <Text>
                <Text style={{ color: '#007aff', fontSize: 20 }}>{index + 1}</Text>
                /{total}
            </Text>
        </View>
    )
}

class Home extends Component {

    pushNewRoute(route) {
         this.props.pushNewRoute(route);
    }

    render() {
        return (
            <Container theme={theme} style={{backgroundColor: '#fff'}}>
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                        <Button transparent onPress={this.props.openDrawer} style={Platform.OS === 'android' ? styles.aheaderIcon : styles.iosheaderIcon} >
                            <Icon name="ios-menu" />
                        </Button>
                        
                        <Image source={require('../../../images/Header-Logo.png')} style={styles.logoHeader} />
                        
                        <Button transparent style={Platform.OS === 'android' ? styles.aheaderIcon : styles.iosheaderIcon}>
                            <Icon name="ios-search" />
                        </Button>    
                    </Header>

                    <Content>
                        <View>
                            <View>
                                <Swiper height={330} loop={true} 
                                    dot={<View style={{backgroundColor:'rgba(0,0,0,.8)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 0,}} />} 
                                    activeDot={<View style={{backgroundColor: '#fff', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 0,}} 
                                    showsButtons={true} />}  >

                                    <TouchableOpacity  onPress={() => this.pushNewRoute('story')} style={styles.slide}  title={<View style={styles.swiperTextContent} >
                                            <Text numberOfLines={2} style={styles.newsPosterHeader}>
                                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                                            </Text>
                                            <Grid style={{paddingTop: 20,paddingBottom: 20}}>
                                                <Col style={{flexDirection:'row'}}>
                                                    <TouchableOpacity>
                                                        <Text style={styles.newsPosterLink}>SPACE.com</Text>
                                                    </TouchableOpacity>
                                                    <Icon name="ios-time-outline" style={{fontSize: 20,paddingLeft: 20,paddingRight: 10,marginTop: 5}} />
                                                    <Text style={styles.newsPosterLink}>20m ago</Text>
                                                </Col>
                                                <Col>
                                                    <TouchableOpacity style={styles.newsPosterTypeView}>
                                                        <Text style={styles.newsPosterTypeText}>SCIENCE</Text>
                                                    </TouchableOpacity>
                                                </Col>
                                            </Grid>
                                        </View>}>
                                        <Image style={styles.newsPoster} source={require('../../../images/NewsIcons/1.jpg')} />
                                    </TouchableOpacity>

                                    <TouchableOpacity  onPress={() => this.pushNewRoute('story')} style={styles.slide}  title={<View  style={styles.swiperTextContent}>
                                            <Text numberOfLines={2} style={styles.newsPosterHeader}>
                                                Lorem Ipsum is simply dummy text of the printing
                                            </Text>
                                            <Grid style={{paddingTop: 20,paddingBottom: 20}}>
                                                <Col style={{flexDirection:'row'}}>
                                                    <TouchableOpacity>
                                                        <Text style={styles.newsPosterLink}>CDC</Text>
                                                    </TouchableOpacity>
                                                    <Icon name="ios-time-outline" style={{fontSize: 20,paddingLeft: 20,paddingRight: 10,marginTop: 5}} />
                                                    <Text style={styles.newsPosterLink}>2hr ago</Text>
                                                </Col>
                                                <Col>
                                                    <TouchableOpacity style={styles.newsPosterTypeView}>
                                                        <Text style={styles.newsPosterTypeText}>ENVIRONMENT</Text>
                                                    </TouchableOpacity>
                                                </Col>
                                            </Grid>
                                        </View>}>
                                        <Image style={styles.newsPoster} source={require('../../../images/NewsIcons/3.jpg')} />
                                    </TouchableOpacity>

                                    <TouchableOpacity  onPress={() => this.pushNewRoute('story')} style={styles.slide}  title={<View  style={styles.swiperTextContent}>
                                            <Text numberOfLines={2} style={styles.newsPosterHeader}>
                                                Lorem Ipsum is simply dummy text of the printing
                                            </Text>
                                            <Grid style={{paddingTop: 20,paddingBottom: 20}}>
                                                <Col style={{flexDirection:'row'}}>
                                                    <TouchableOpacity>
                                                        <Text style={styles.newsPosterLink}>SKY.com</Text>
                                                    </TouchableOpacity>
                                                    <Icon name="ios-time-outline" style={{fontSize: 20,paddingLeft: 20,paddingRight: 10,marginTop: 5}} />
                                                    <Text style={styles.newsPosterLink}>1day ago</Text>
                                                </Col>
                                                <Col>
                                                    <TouchableOpacity style={styles.newsPosterTypeView}>
                                                        <Text style={styles.newsPosterTypeText}>WORLD</Text>
                                                    </TouchableOpacity>
                                                </Col>
                                            </Grid>
                                        </View>}>
                                        <Image style={styles.newsPoster} source={require('../../../images/NewsIcons/4.jpg')} />
                                    </TouchableOpacity>
                                </Swiper>
                            </View>
                        </View>

                        <Card style={{backgroundColor: '#fff'}}>
                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.pushNewRoute('story')}>
                                <View style={styles.newsContent}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>
                                        Lorem Ipsum is simply dummy text of the printing
                                    </Text>
                                    <Grid style={{paddingTop: 20,paddingBottom: 20}}>
                                        <Col style={{flexDirection:'row'}}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>CDC</Text>
                                            </TouchableOpacity>
                                            <Icon name="ios-time-outline" style={ Platform.OS === 'android' ? styles.atimeIcon : styles.iostimeIcon} />
                                            <Text style={styles.newsLink}>1h ago</Text>
                                        </Col>
                                        <Col>
                                            <TouchableOpacity style={styles.newsTypeView}>
                                                <Text style={styles.newsTypeText}>ENVIRONMENT</Text>
                                            </TouchableOpacity>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.pushNewRoute('story')}>
                                <View style={styles.newsContent}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>
                                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                                    </Text>
                                    <Grid style={{paddingTop: 20,paddingBottom: 20}}>
                                        <Col style={{flexDirection:'row'}}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>SPACE.com</Text>
                                            </TouchableOpacity>
                                            <Icon name="ios-time-outline" style={ Platform.OS === 'android' ? styles.atimeIcon : styles.iostimeIcon} />
                                            <Text style={styles.newsLink}>5h ago</Text>
                                        </Col>
                                        <Col>
                                            <TouchableOpacity style={styles.newsTypeView}>
                                                <Text style={styles.newsTypeText}>SCIENCE</Text>
                                            </TouchableOpacity>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.pushNewRoute('story')}>
                                <View style={styles.newsContent}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>
                                        It has survived not only five centuries
                                    </Text>
                                    <Grid style={{paddingTop: 20,paddingBottom: 20}}>
                                        <Col style={{flexDirection:'row'}}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>SKY.com</Text>
                                            </TouchableOpacity>
                                            <Icon name="ios-time-outline" style={ Platform.OS === 'android' ? styles.atimeIcon : styles.iostimeIcon} />
                                            <Text style={styles.newsLink}>2days ago</Text>
                                        </Col>
                                        <Col>
                                            <TouchableOpacity style={styles.newsTypeView}>
                                                <Text style={styles.newsTypeText}>WORLD</Text>
                                            </TouchableOpacity>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>
                        </Card>
                    </Content>
                </Image>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        pushNewRoute:(route)=>dispatch(pushNewRoute(route))
    }
}

export default connect(null, bindAction)(Home);