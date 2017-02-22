

import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Platform } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';


import { Container, Header, Content, Text, Left, Right, Body, Button, Icon } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';
import CalendarPicker from 'react-native-calendar-picker';

import { openDrawer } from '../../actions/drawer';
import HeaderContent from './../headerContent/';

import theme from '../../themes/base-theme';
import styles from './styles';

const {
  popRoute,
  pushRoute,
} = actions;


const headerLogo = require('../../../images/Header-Logo.png');

class Calendar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  static propTypes = {
    popRoute: React.PropTypes.func,
    pushRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  onDateChange(date) {
    this.setState({ date });
  }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }

  pushRoute(route) {
    this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
  }

  render() {
    return (
      <Container theme={theme}>
        <Header>
          <Left>
            <Button transparent style={styles.btnHeader} onPress={() => this.popRoute()}>
              <Icon active name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Image source={headerLogo} style={styles.imageHeader} />
          </Body>
          <Right>
            <Button transparent style={styles.btnHeader} onPress={this.props.openDrawer} >
              <Icon active name="menu" />
            </Button>
          </Right>
        </Header>

        <Content showsVerticalScrollIndicator={false}>
          <View style={styles.bg}>
            <CalendarPicker
              selectedDate={this.state.date}
              onDateChange={this.onDateChange.bind(this)}
            />
          </View>

          <View style={{ backgroundColor: '#fff' }}>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.popRoute()}>
              <Image source={require('../../../images/NewsIcons/1.jpg')} style={styles.newsImage} />
              <View style={styles.newsContent}>
                <Text numberOfLines={2} style={styles.newsHeader}>
                                    Lorem Ipsum is simply dummy text of the printing
                                </Text>
                <Grid style={{ marginTop: 25 }}>
                  <Col>
                    <TouchableOpacity>
                      <Text style={styles.newsLink}>CDC</Text>
                    </TouchableOpacity>
                  </Col>
                  <Col>
                    <TouchableOpacity style={styles.newsTypeView}>
                      <Text style={styles.newsTypeText}>ENVIRONMENT</Text>
                    </TouchableOpacity>
                  </Col>
                </Grid>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.popRoute()}>
              <Image source={require('../../../images/NewsIcons/3.jpg')} style={styles.newsImage} />
              <View style={styles.newsContent}>
                <Text numberOfLines={2} style={styles.newsHeader}>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                                </Text>
                <Grid style={{ marginTop: 25 }}>
                  <Col>
                    <TouchableOpacity>
                      <Text style={styles.newsLink}>SPACE.com</Text>
                    </TouchableOpacity>
                  </Col>
                  <Col>
                    <TouchableOpacity style={styles.newsTypeView}>
                      <Text style={styles.newsTypeText}>SCIENCE</Text>
                    </TouchableOpacity>
                  </Col>
                </Grid>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.popRoute()}>
              <Image source={require('../../../images/NewsIcons/4.jpg')} style={styles.newsImage} />
              <View style={styles.newsContent}>
                <Text numberOfLines={2} style={styles.newsHeader}>
                                    It has survived not only five centuries
                                </Text>
                <Grid style={{ marginTop: 25 }}>
                  <Col>
                    <TouchableOpacity>
                      <Text style={styles.newsLink}>SKY.com</Text>
                    </TouchableOpacity>
                  </Col>
                  <Col>
                    <TouchableOpacity style={styles.newsTypeView}>
                      <Text style={styles.newsTypeText}>WORLD</Text>
                    </TouchableOpacity>
                  </Col>
                </Grid>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.popRoute()}>
              <Image source={require('../../../images/NewsIcons/11.jpg')} style={styles.newsImage} />
              <View style={styles.newsContent}>
                <Text numberOfLines={2} style={styles.newsHeader}>
                                    Lorem Ipsum is simply dummy text of the printing
                                </Text>
                <Grid style={{ marginTop: 25 }}>
                  <Col>
                    <TouchableOpacity>
                      <Text style={styles.newsLink}>ESPN</Text>
                    </TouchableOpacity>
                  </Col>
                  <Col>
                    <TouchableOpacity style={styles.newsTypeView}>
                      <Text style={styles.newsTypeText}>SPORTS</Text>
                    </TouchableOpacity>
                  </Col>
                </Grid>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.popRoute()}>
              <Image source={require('../../../images/NewsIcons/13.jpg')} style={styles.newsImage} />
              <View style={styles.newsContent}>
                <Text numberOfLines={2} style={styles.newsHeader}>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                                </Text>
                <Grid style={{ marginTop: 25 }}>
                  <Col>
                    <TouchableOpacity>
                      <Text style={styles.newsLink}>EDU.com</Text>
                    </TouchableOpacity>
                  </Col>
                  <Col>
                    <TouchableOpacity style={styles.newsTypeView}>
                      <Text style={styles.newsTypeText}>EDUCATION</Text>
                    </TouchableOpacity>
                  </Col>
                </Grid>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.popRoute()}>
              <Image source={require('../../../images/NewsIcons/12.jpg')} style={styles.newsImage} />
              <View style={styles.newsContent}>
                <Text numberOfLines={2} style={styles.newsHeader}>
                                    It has survived not only five centuries
                                </Text>
                <Grid style={{ marginTop: 25 }}>
                  <Col>
                    <TouchableOpacity>
                      <Text style={styles.newsLink}>ART.com</Text>
                    </TouchableOpacity>
                  </Col>
                  <Col>
                    <TouchableOpacity style={styles.newsTypeView}>
                      <Text style={styles.newsTypeText}>ART</Text>
                    </TouchableOpacity>
                  </Col>
                </Grid>
              </View>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: key => dispatch(popRoute(key)),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Calendar);
