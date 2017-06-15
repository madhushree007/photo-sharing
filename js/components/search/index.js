import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Content, Text, Button, Icon, Item, Input, Left, Body, Right, Footer, FooterTab, } from 'native-base';

import { Grid, Col, Row } from 'react-native-easy-grid';
import Swiper from 'react-native-swiper';
import { openDrawer } from '../../actions/drawer';


import styles from './styles';
import FooterNew from '../footerNew';

const deviceWidth = Dimensions.get('window').width;

class Search extends Component {

  static propTypes = {
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#373737' }}>
          <View style={styles.searchContainer}>
            <Item rounded style={styles.inputGrp}>
                <Icon name="ios-search-outline" style={styles.iconSearch} />
                <Input placeholder="Search" placeholderTextColor="rgba(0,0,0,0.5)" style={styles.input} />
              </Item>
          </View>
          <Right>
            <Button
              transparent
              onPress={() => Actions.login({ type: ActionConst.RESET  })}
            >
              <Text>Cancle</Text>
            </Button>
          </Right>
        </Header>
        <Content showsVerticalScrollIndicator={false}>
           <View>
              <View>
                <Grid>
                  <Row style={styles.channelRow}>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.searchResult()}>
                        <Image source={require('../../../images/NewsIcons/9.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.searchResult()}>
                        <Image source={require('../../../images/NewsIcons/2.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.searchResult()}>
                        <Image source={require('../../../images/NewsIcons/3.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                  </Row>
                  <Row style={styles.channelRow}>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.searchResult()}>
                        <Image source={require('../../../images/NewsIcons/4.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.searchResult()}>
                        <Image source={require('../../../images/NewsIcons/1.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.searchResult()}>
                        <Image source={require('../../../images/NewsIcons/7.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                  </Row>
                  <Row style={styles.channelRow}>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.searchResult()}>
                        <Image source={require('../../../images/NewsIcons/2.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.searchResult()}>
                        <Image source={require('../../../images/NewsIcons/9.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.searchResult()}>
                        <Image source={require('../../../images/NewsIcons/5.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                  </Row>
                  <Row style={styles.channelRow}>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.searchResult()}>
                        <Image source={require('../../../images/NewsIcons/9.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.searchResult()}>
                        <Image source={require('../../../images/NewsIcons/2.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.searchResult()}>
                        <Image source={require('../../../images/NewsIcons/3.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                  </Row>
                  <Row style={styles.channelRow}>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.searchResult()}>
                        <Image source={require('../../../images/NewsIcons/4.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.searchResult()}>
                        <Image source={require('../../../images/NewsIcons/1.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.searchResult()}>
                        <Image source={require('../../../images/NewsIcons/7.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                  </Row>
                  <Row style={styles.channelRow}>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.searchResult()}>
                        <Image source={require('../../../images/NewsIcons/2.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.searchResult()}>
                        <Image source={require('../../../images/NewsIcons/9.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.searchResult()}>
                        <Image source={require('../../../images/NewsIcons/5.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                  </Row>
                </Grid>
              </View>
           </View>
        </Content>

        <FooterNew />
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

export default connect(mapStateToProps, bindAction)(Search);