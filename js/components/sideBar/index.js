

import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Text, Icon, List, ListItem } from 'native-base';

import { closeDrawer } from '../../actions/drawer';
import { replaceOrPushRoute } from '../../actions/route';


import styles from './style';

const singUp = require('../../../images/BG-signUp.png');

class SideBar extends Component {

  static propTypes = {
    closeDrawer: React.PropTypes.func,
    replaceOrPushRoute: React.PropTypes.func,
    resetRoute: React.PropTypes.func,
  }

  navigateTo(route) {
    this.props.closeDrawer();
    this.props.replaceOrPushRoute(route);
  }

  resetRoute(route) {
    this.props.closeDrawer();
    this.props.resetRoute(route);
  }

  render() {
    return (
      <Container>
        <Image source={singUp} style={styles.background} >
          <Content style={styles.drawerContent}>
            <List foregroundColor={'white'} >
              <ListItem
                button iconLeft
                onPress={() => this.navigateTo('home')}
                style={styles.links}
              >
                <Icon name="ios-grid-outline" />
                <Text style={styles.linkText} >HOME</Text>
              </ListItem>

              <ListItem
                button iconLeft
                onPress={() => this.navigateTo('blankPage')}
                style={styles.links}
              >
                <Icon name="ios-keypad-outline" />
                <Text style={styles.linkText}>BLANK PAGE</Text>
              </ListItem>
            </List>
          </Content>
        </Image>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
    replaceOrPushRoute: route => dispatch(replaceOrPushRoute(route)),
  };
}

export default connect(null, bindAction)(SideBar);
