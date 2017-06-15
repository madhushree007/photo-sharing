import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Content, Text, Button, Icon, Card, Left, Body, Right, Footer, FooterTab, } from 'native-base';

import { Grid, Col, Row } from 'react-native-easy-grid';
import Swiper from 'react-native-swiper';
import { openDrawer } from '../../actions/drawer';


import styles from './styles';

const deviceWidth = Dimensions.get('window').width;

class ProfileNew extends Component {

  static propTypes = {
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#373737' }}>
          <Left>
            <Button
              transparent
              onPress={() => Actions.login({ type: ActionConst.RESET  })}
            >
              <Text>Cancle</Text>
            </Button>
          </Left>
          <Body>
            <Grid>
              <Col style={styles.cameraRollBox}>
                  <Text style={styles.cameraRoll}>Camera Roll  </Text>
                  <Icon active name="arrow-down" />
              </Col>
            </Grid>
          </Body>
          <Right>
            <Button transparent style={styles.btnHeader} onPress={this.props.openDrawer} >
              <Text>Done</Text>
            </Button>
          </Right>
        </Header>
        <Content showsVerticalScrollIndicator={false}>
           <View>
              <View>
                <Image style={styles.newsPoster} source={require('../../../images/NewsIcons/1.jpg')} />
              </View>
              <View>
                <Grid>
                  <Row style={styles.channelRow}>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.channel()}>
                        <Image source={require('../../../images/NewsIcons/9.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.channel()}>
                        <Image source={require('../../../images/NewsIcons/2.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.channel()}>
                        <Image source={require('../../../images/NewsIcons/3.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                  </Row>
                  <Row style={styles.channelRow}>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.channel()}>
                        <Image source={require('../../../images/NewsIcons/9.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.channel()}>
                        <Image source={require('../../../images/NewsIcons/2.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.channel()}>
                        <Image source={require('../../../images/NewsIcons/3.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                  </Row>
                </Grid>
              </View>
           </View>
        </Content>
        <Footer style={{ backgroundColor: 'transparent' }}>
            <FooterTab>
                <Button>
                    <Text>Library</Text>
                </Button>
                <Button>
                    <Text>Photo</Text>
                </Button>
                <Button>
                    <Text>Video</Text>
                </Button>
            </FooterTab>
        </Footer>
      </Container>
    )
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

export default connect(mapStateToProps, bindAction)(ProfileNew);