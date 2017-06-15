
import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Footer, FooterTab, Content, Text, Button, Icon, Card, CardItem, Left, Body, Right } from 'native-base';

import { Grid, Col } from 'react-native-easy-grid';
import Swiper from 'react-native-swiper';
import { openDrawer } from '../../actions/drawer';


import styles from './styles';
import FooterNew from '../footerNew';

const deviceWidth = Dimensions.get('window').width;
const headerLogo = require('../../../images/Header-Logo.png');


class Home extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <Header>
          <Left>
            <Button
              transparent
              style={styles.btnHeader}
              onPress={() => Actions.login({ type: ActionConst.RESET  })}
            >
              <Icon active name="power" />
            </Button>
          </Left>
          <Body>
            <Text>PHOTO APP</Text>
          </Body>
          <Right>
            <Button transparent style={styles.btnHeader} onPress={this.props.openDrawer} >
              <Icon active name="menu" />
            </Button>
          </Right>
        </Header>

        <Content>
          <Card style= {styles.photoContent}>
              <CardItem header>
                <Grid>
                  <Col style={styles.profileImage}>
                    <Image source={require('../../../images/contacts/sanket.png')} style={styles.profilePic} />
                  </Col>
                  <Col>
                    <Text style={styles.txtColor}>sarahannloreth</Text>
                    <Text note style={styles.txtColor2}><Icon name="ios-locate-outline" style={styles.locationIcon} /> Kauai, Hawaii</Text>
                  </Col>
                    <Right>
                      <Icon name="ios-apps-outline" style={styles.menuIcon} />
                    </Right>
                </Grid>
              </CardItem>
              <Image source={require('../../../images/NewsIcons/4.jpg')} style={styles.bigImage} />
              <Text style={styles.photoText}>"Hope begins in the dark, the stubborn hope that you just show up and try to do the right thing, the date…"</Text>
              <Grid style={styles.swiperContentBox}>
                  <Col style={{ flexDirection: 'row' }}>
                    <Icon name="ios-heart" style={styles.likeIcon} />
                    <Text style={styles.newsLink}>121 likes</Text>
                  </Col>
                  <Col style={{ flexDirection: 'row' }}>
                    <Icon name="ios-chatbubbles" style={styles.chatIcon } />
                    <Text style={styles.newsLink}>10 comments</Text>
                  </Col>
                  <Col style={{ flexDirection: 'row' }}>
                    <Icon name="ios-send" style={styles.sendIcon } />
                    <Text style={styles.newsLink}>send to</Text>
                  </Col>
                </Grid>
          </Card> 

          <Card style= {styles.photoContent}>
              <CardItem header>
                <Grid>
                  <Col style={styles.profileImage}>
                    <Image source={require('../../../images/contacts/varun.png')} style={styles.profilePic} />
                  </Col>
                  <Col>
                    <Text style={styles.txtColor}>isetups</Text>
                  </Col>
                    <Right>
                      <Icon name="ios-apps-outline" style={styles.menuIcon} />
                    </Right>
                </Grid>
              </CardItem>
              <Image source={require('../../../images/NewsIcons/2.jpg')} style={styles.bigImage} />
              <Text style={styles.photoText}>"Hope begins in the dark, the stubborn hope that you just show up and try to do the right thing, the date…"</Text>
              <Grid style={styles.swiperContentBox}>
                  <Col style={{ flexDirection: 'row' }}>
                    <Icon name="ios-heart" style={styles.likeIcon} />
                    <Text style={styles.newsLink}>121 likes</Text>
                  </Col>
                  <Col style={{ flexDirection: 'row' }}>
                    <Icon name="ios-chatbubbles" style={styles.chatIcon } />
                    <Text style={styles.newsLink}>10 comments</Text>
                  </Col>
                  <Col style={{ flexDirection: 'row' }}>
                    <Icon name="ios-send" style={styles.sendIcon } />
                    <Text style={styles.newsLink}>send to</Text>
                  </Col>
                </Grid>
          </Card> 

        </Content>

        <FooterNew />
           
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Home);
