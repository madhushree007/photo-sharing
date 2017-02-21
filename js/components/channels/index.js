

import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Left, Body, Right, Button, Icon } from 'native-base';
import { openDrawer } from '../../actions/drawer';

import styles from './styles';

import TabOne from './tabOne';
import TabTwo from './tabTwo';
import TabThree from './tabThree';

import CustomTabBar from './CustomTabBar';

const headerLogo = require('../../../images/Header-Logo.png');

const {
  popRoute,
  pushRoute,
} = actions;
class Channels extends Component {


  static propTypes = {
    popRoute: React.PropTypes.func,
    pushRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }

  pushRoute(route) {
    this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.popRoute()}>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Image source={headerLogo} style={styles.imageHeader} />
          </Body>
          <Right>
            <Button transparent onPress={this.props.openDrawer} >
              <Icon name="ios-menu" />
            </Button>
          </Right>
        </Header>
        <View style={styles.bgHead}>

          <ScrollableTabView renderTabBar={() => <CustomTabBar someProp={'here'} />}>
            <TabOne tabLabel="Following" />
            <TabTwo tabLabel="Popular" />
            <TabThree tabLabel="Explore" />
          </ScrollableTabView>
        </View>
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

export default connect(mapStateToProps, bindAction)(Channels);
